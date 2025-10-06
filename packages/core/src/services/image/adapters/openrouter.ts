import { AbstractImageProviderAdapter } from './abstract-adapter'
import type {
  ImageProvider,
  ImageModel,
  ImageRequest,
  ImageResult,
  ImageModelConfig,
  ImageParameterDefinition
} from '../types'

export class OpenRouterImageAdapter extends AbstractImageProviderAdapter {
  protected normalizeBaseUrl(base: string): string {
    const trimmed = base.replace(/\/$/, '')
    if (/\/api\/v1$/.test(trimmed)) return trimmed
    if (/\/api$/.test(trimmed)) return `${trimmed}/v1`
    return `${trimmed}/api/v1`
  }
  getProvider(): ImageProvider {
    return {
      id: 'openrouter',
      name: 'OpenRouter',
      description: 'OpenRouter 图像生成服务',
      requiresApiKey: true,
      defaultBaseURL: 'https://openrouter.ai/api/v1',
      supportsDynamicModels: false,
      connectionSchema: {
        required: ['apiKey'],
        optional: ['baseURL'],
        fieldTypes: {
          apiKey: 'string',
          baseURL: 'string'
        }
      }
    }
  }

  getModels(): ImageModel[] {
    return [
      {
        id: 'google/gemini-2.5-flash-image-preview',
        name: 'Gemini 2.5 Flash Image Preview',
        description: 'Google Gemini 2.5 Flash 图像预览版，支持文生图、图生图和多图输入',
        providerId: 'openrouter',
        capabilities: {
          text2image: true,
          image2image: true,
          multiImage: true
        },
        parameterDefinitions: [],  // OpenRouter 不需要用户配置参数
        defaultParameterValues: {}  // 无需用户参数
      }
    ]
  }

  protected getTestImageRequest(testType: 'text2image' | 'image2image'): Omit<ImageRequest, 'configId'> {
    if (testType === 'text2image') {
      return {
        prompt: 'a simple red flower',
        count: 1
      }
    }

    if (testType === 'image2image') {
      return {
        prompt: 'make this image more colorful',
        inputImage: {
          b64: AbstractImageProviderAdapter.TEST_IMAGE_BASE64.split(',')[1], // 去除data URL前缀
          mimeType: 'image/png'
        },
        count: 1
      }
    }

    throw new Error(`Unsupported test type: ${testType}`)
  }

  protected getParameterDefinitions(_modelId: string): readonly ImageParameterDefinition[] {
    // OpenRouter 不暴露用户级参数，modalities在API调用时自动设置
    return []
  }

  protected getDefaultParameterValues(_modelId: string): Record<string, unknown> {
    // OpenRouter 不需要用户级参数配置
    return {}
  }

  protected async doGenerate(request: ImageRequest, config: ImageModelConfig): Promise<ImageResult> {
    // 构建 OpenRouter Chat API 请求
    const messages: any[] = [
      {
        role: 'user',
        content: request.prompt
      }
    ]

    // 如果有输入图像，添加到消息中
    if (request.inputImage) {
      const imageContent = request.inputImage.b64
        ? `data:${request.inputImage.mimeType || 'image/png'};base64,${request.inputImage.b64}`
        : request.inputImage.url

      messages[0].content = [
        { type: 'text', text: request.prompt },
        { type: 'image_url', image_url: { url: imageContent } }
      ]
    }

    const payload = {
      model: config.modelId,
      messages,
      // modalities 是OpenRouter内部参数，固定设置
      modalities: ['image', 'text']
      // 不合并用户参数覆盖，因为OpenRouter图像生成不需要额外配置
    }

    const response = await this.apiCall(config, '/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.connectionConfig?.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    // 解析响应
    const choice = response.choices?.[0]
    if (!choice) {
      throw new Error('No response choice received from OpenRouter')
    }

    const message = choice.message
    const images = message.images || []

    // 转换图像格式
    const resultImages = images.map((img: any) => {
      const dataUrl = img.image_url?.url
      if (!dataUrl || !dataUrl.startsWith('data:')) {
        throw new Error('Invalid image URL format received from OpenRouter')
      }

      // 解析 data URL: data:image/png;base64,iVBORw0KGgo...
      const [header, base64Data] = dataUrl.split(',')
      const mimeMatch = header.match(/data:([^;]+)/)
      const mimeType = mimeMatch?.[1] || 'image/png'

      return {
        b64: base64Data,
        mimeType,
        url: dataUrl // 保留原始 data URL
      }
    })

    return {
      images: resultImages,
      text: message.content || undefined,
      metadata: {
        providerId: 'openrouter',
        modelId: config.modelId,
        configId: config.id,
        finishReason: choice.finish_reason,
        usage: response.usage
      }
    }
  }

  private async apiCall(config: ImageModelConfig, endpoint: string, options: any) {
    const url = this.resolveEndpointUrl(config, endpoint)
    const response = await fetch(url, options)

    if (!response.ok) {
      // 直接穿透错误，不做特殊处理
      const errorText = await response.text()
      throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}${errorText ? ': ' + errorText : ''}`)
    }

    return await response.json()
  }
}
