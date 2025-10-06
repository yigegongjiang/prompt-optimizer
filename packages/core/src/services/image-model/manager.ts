import {
  IImageModelManager,
  ImageModelConfig,
  IImageAdapterRegistry
} from '../image/types'
import { IStorageProvider } from '../storage/types'
import { StorageAdapter } from '../storage/adapter'
import { CORE_SERVICE_KEYS } from '../../constants/storage-keys'
import { ImportExportError } from '../../interfaces/import-export'
import { getDefaultImageModels } from './defaults'

/**
 * 图像模型管理器：专注于配置管理，遵循新的三层架构
 * 负责ImageModelConfig的CRUD操作和组合查询
 */
export class ImageModelManager implements IImageModelManager {
  private readonly storageKey = CORE_SERVICE_KEYS.IMAGE_MODELS
  private readonly storage: IStorageProvider
  private readonly registry: IImageAdapterRegistry
  private initPromise: Promise<void> | null = null

  constructor(storageProvider: IStorageProvider, registry: IImageAdapterRegistry) {
    this.storage = new StorageAdapter(storageProvider)
    this.registry = registry
  }

  // === 初始化（写入默认配置） ===
  public async ensureInitialized(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.init()
    }
    return this.initPromise
  }

  public async isInitialized(): Promise<boolean> {
    const raw = await this.storage.getItem(this.storageKey)
    return !!raw
  }

  private async init(): Promise<void> {
    try {
      const raw = await this.storage.getItem(this.storageKey)
      if (!raw) {
        // 没有任何配置，直接写入默认项
        const defaults = getDefaultImageModels(this.registry)
        await this.storage.setItem(this.storageKey, JSON.stringify(defaults))
        return
      }

      // 已有配置：补齐缺失的默认项（不覆盖用户已有）
      let data: Record<string, ImageModelConfig>
      try {
        data = JSON.parse(raw) || {}
      } catch {
        data = {}
      }
      // 轻量迁移：为旧数据补齐缺失的 id（仅填充 id，不推导 provider/model）
      // 说明：旧数据仅存在于开发阶段，不再做字段补齐（如 providerId/modelId/provider/model）。
      // 目的仅为让 UI 能识别并删除这些条目，避免因缺少 id 无法操作。
      let changed = false
      for (const [key, cfg] of Object.entries(data)) {
        if (cfg && typeof cfg === 'object' && !(cfg as any).id) {
          ;(cfg as any).id = key
          changed = true
        }
      }
      const defaults = getDefaultImageModels(this.registry)
      // 合并默认项
      for (const [key, cfg] of Object.entries(defaults)) {
        if (!data[key]) {
          data[key] = cfg
          changed = true
        }
      }

      if (changed) {
        await this.storage.setItem(this.storageKey, JSON.stringify(data))
      }
    } catch (e) {
      // 初始化失败时，尽量写入默认项，避免空列表
      try {
        const defaults = getDefaultImageModels(this.registry)
        await this.storage.setItem(this.storageKey, JSON.stringify(defaults))
      } catch {}
    }
  }

  // === 配置 CRUD 操作 ===

  async addConfig(config: ImageModelConfig): Promise<void> {
    // 确保配置是自包含的
    const completeConfig = this.ensureSelfContained(config)
    this.validateConfig(completeConfig)

    await this.storage.updateData<Record<string, ImageModelConfig>>(
      this.storageKey,
      (current) => {
        const data = current || {}
        if (data[completeConfig.id]) {
          throw new Error(`Configuration with id '${completeConfig.id}' already exists`)
        }
        return { ...data, [completeConfig.id]: { ...completeConfig } }
      }
    )
  }

  async updateConfig(id: string, updates: Partial<ImageModelConfig>): Promise<void> {
    await this.storage.updateData<Record<string, ImageModelConfig>>(
      this.storageKey,
      (current) => {
        const data = current || {}
        if (!data[id]) {
          throw new Error(`Configuration with id '${id}' does not exist`)
        }

        const updated: ImageModelConfig = {
          ...data[id],
          ...updates,
          id: data[id].id // 保护id不被更新
        }

        // 确保更新后的配置是自包含的
        const completeConfig = this.ensureSelfContained(updated)
        this.validateConfig(completeConfig)
        return { ...data, [id]: completeConfig }
      }
    )
  }

  async deleteConfig(id: string): Promise<void> {
    await this.storage.updateData<Record<string, ImageModelConfig>>(
      this.storageKey,
      (current) => {
        const data = current || {}

        // 强制删除：无论配置是否存在都尝试删除
        // 这确保损坏的配置也能被清理
        if (!data[id]) {
          console.warn(`[ImageModelManager] Config ${id} not found in storage, but proceeding anyway`)
          // 仍然返回原数据，因为确实没什么可删的
          return data
        }

        // 配置存在，正常删除
        const { [id]: removed, ...rest } = data
        console.log(`[ImageModelManager] Successfully deleted config: ${id}`)
        return rest
      }
    )
  }

  async getConfig(id: string): Promise<ImageModelConfig | null> {
    const raw = await this.storage.getItem(this.storageKey)
    const data: Record<string, ImageModelConfig> = raw ? JSON.parse(raw) : {}
    const cfg = data[id]
    if (!cfg) return null

    // 轻量迁移兜底：返回前补齐缺失的 id，避免 UI 无法删除
    if (!(cfg as any).id) {
      ;(cfg as any).id = id
    }

    // 尝试修复损坏的配置，确保能够正常读取和删除
    try {
      return this.ensureSelfContained(cfg)
    } catch (error) {
      // 即使修复失败，也返回配置（已在ensureSelfContained中标记为disabled）
      console.warn(`[ImageModelManager] Failed to fully repair config ${id}, but returning for deletion:`, error)
      return cfg
    }
  }

  async getAllConfigs(): Promise<ImageModelConfig[]> {
    const raw = await this.storage.getItem(this.storageKey)
    const data: Record<string, ImageModelConfig> = raw ? JSON.parse(raw) : {}

    // 轻量迁移兜底：为缺失 id 的旧记录补齐 id，并尝试修复损坏的配置
    return Object.entries(data).map(([key, cfg]) => {
      if (!cfg || typeof cfg !== 'object') {
        return null
      }

      // 始终使用存储键作为公开的 id，保持删除等操作一致
      ;(cfg as any).id = key

      // 尝试修复配置，如果失败则返回占位配置（标记为disabled）
      try {
        return this.ensureSelfContained(cfg)
      } catch (error) {
        console.warn(`[ImageModelManager] Failed to repair config ${key}, returning placeholder:`, error)
        // 返回最小占位配置，确保能在UI中显示和删除
        return {
          ...cfg,
          id: key,
          enabled: false
        } as ImageModelConfig
      }
    }).filter((cfg): cfg is ImageModelConfig => cfg !== null)
  }

  async getEnabledConfigs(): Promise<ImageModelConfig[]> {
    const all = await this.getAllConfigs()
    return all.filter(config => config.enabled)
  }

  // === 导入导出 ===

  async exportData(): Promise<ImageModelConfig[]> {
    try {
      return await this.getAllConfigs()
    } catch (error) {
      throw new ImportExportError(
        'Failed to export image model configurations',
        await this.getDataType(),
        error as Error
      )
    }
  }

  async importData(data: any): Promise<void> {
    if (!Array.isArray(data)) {
      throw new ImportExportError(
        'Invalid data format: expected array of ImageModelConfig',
        await this.getDataType()
      )
    }

    const configs = data as ImageModelConfig[]
    const failed: { config: ImageModelConfig, error: Error }[] = []

    for (const config of configs) {
      try {
        this.validateConfig(config)

        // 检查是否已存在
        const existing = await this.getConfig(config.id)
        if (existing) {
          // 更新现有配置
          await this.updateConfig(config.id, config)
        } else {
          // 添加新配置
          await this.addConfig(config)
        }
      } catch (error) {
        failed.push({ config, error: error as Error })
      }
    }

    if (failed.length > 0) {
      console.warn(`[ImageModelManager] Failed to import ${failed.length} configurations`)
      // 可以选择抛出异常或者只记录警告
    }
  }

  async getDataType(): Promise<string> {
    return 'image-model-configs'
  }

  async validateData(data: any): Promise<boolean> {
    if (!Array.isArray(data)) {
      return false
    }

    return data.every(item => {
      try {
        this.validateConfig(item)
        return true
      } catch {
        return false
      }
    })
  }

  // === 私有辅助方法 ===

  // 确保配置是自包含的（包含完整的provider和model信息）
  private ensureSelfContained(config: ImageModelConfig): ImageModelConfig {
    // 如果已经有完整的自包含字段，直接返回
    if (config.provider && config.model) {
      return config
    }

    try {
      // 获取provider和model信息
      const adapter = this.registry.getAdapter(config.providerId)
      const provider = adapter.getProvider()

      // 尝试从静态模型列表获取模型信息
      let model = this.registry.getStaticModels(config.providerId).find(m => m.id === config.modelId)

      // 如果静态模型不存在，使用buildDefaultModel构建
      if (!model) {
        model = adapter.buildDefaultModel(config.modelId)
      }

      // 返回自包含配置
      return {
        ...config,
        provider,
        model
      }
    } catch (error) {
      // 对于无法修复的旧配置，创建占位数据并禁用，允许用户查看和删除
      console.warn(`[ImageModelManager] Cannot repair legacy config ${config.id}, marking as disabled:`, error)
      return {
        ...config,
        enabled: false,
        provider: {
          id: config.providerId || 'unknown',
          name: `Unknown Provider (${config.providerId || 'unknown'})`,
          description: '此配置损坏，无法修复',
          requiresApiKey: false,
          supportsDynamicModels: false,
          defaultBaseURL: '',
          connectionSchema: { required: [], optional: [], fieldTypes: {} }
        },
        model: {
          id: config.modelId || 'unknown',
          name: `Unknown Model (${config.modelId || 'unknown'})`,
          description: '此配置损坏，请删除后重新创建',
          providerId: config.providerId || 'unknown',
          capabilities: {
            text2image: false,
            image2image: false,
            multiImage: false
          },
          parameterDefinitions: [],
          defaultParameterValues: {}
        }
      } as ImageModelConfig
    }
  }

  private validateConfig(config: ImageModelConfig): void {
    const errors: string[] = []

    // 验证必需字段
    if (!config.id || typeof config.id !== 'string') {
      errors.push('Missing or invalid id')
    }
    if (!config.name || typeof config.name !== 'string') {
      errors.push('Missing or invalid name')
    }
    if (!config.providerId || typeof config.providerId !== 'string') {
      errors.push('Missing or invalid providerId')
    }
    if (!config.modelId || typeof config.modelId !== 'string') {
      errors.push('Missing or invalid modelId')
    }
    if (typeof config.enabled !== 'boolean') {
      errors.push('Missing or invalid enabled flag')
    }

    // 验证自包含数据字段
    if (!config.provider || typeof config.provider !== 'object') {
      errors.push('Missing or invalid provider data')
    }
    if (!config.model || typeof config.model !== 'object') {
      errors.push('Missing or invalid model data')
    }

    // 验证连接配置（如果存在）
    if (config.connectionConfig !== undefined) {
      if (typeof config.connectionConfig !== 'object' || config.connectionConfig === null) {
        errors.push('connectionConfig must be an object')
      }
    }

    // 验证参数覆盖（如果存在）
    if (config.paramOverrides !== undefined) {
      if (typeof config.paramOverrides !== 'object' || config.paramOverrides === null) {
        errors.push('paramOverrides must be an object')
      }
    }

    // 验证提供商是否存在
    try {
      this.registry.getAdapter(config.providerId)
    } catch {
      errors.push(`Unknown provider: ${config.providerId}`)
    }

    // 模型存在性由各自来源保证：
    // - 动态模型：API实时获取，理论上必然存在
    // - 静态模型：代码预置，由开发者维护
    // - 自定义模型：用户自行负责
    // 因此不需要在此验证模型是否存在

    if (errors.length > 0) {
      throw new Error(`Invalid configuration: ${errors.join(', ')}`)
    }
  }
}

export function createImageModelManager(
  storageProvider: IStorageProvider,
  registry: IImageAdapterRegistry
): ImageModelManager {
  return new ImageModelManager(storageProvider, registry)
}
