// 纯Naive UI样式导入 - 移除theme.css依赖
import './styles/index.css'
import './styles/scrollbar.css'
import './styles/common.css'
// 已移除: import './styles/theme.css' - 完全使用Naive UI主题系统

// 导出插件
export { installI18n, installI18nOnly, initializeI18nWithStorage, setI18nServices, i18n } from './plugins/i18n'

// 导出Naive UI配置
export { 
  currentNaiveTheme as naiveTheme,
  currentThemeOverrides as themeOverrides, 
  currentThemeId, 
  currentThemeConfig,
  naiveThemeConfigs,
  switchTheme,
  initializeNaiveTheme
} from './config/naive-theme'

// 导出主题相关 Composables
export { useNaiveTheme } from './composables/useNaiveTheme'

/**
 * 组件导出
 * 注意：所有组件导出时都添加了UI后缀，以便与其他库的组件区分
 * 例如：Toast.vue 导出为 ToastUI
 */
// Components
export { default as ToastUI } from './components/Toast.vue'
export { default as ModelManagerUI } from './components/ModelManager.vue'
export { default as PromptPanelUI } from './components/PromptPanel.vue'
export { default as OutputDisplay } from './components/OutputDisplay.vue'
export { default as TemplateManagerUI } from './components/TemplateManager.vue'
export { default as TemplateSelectUI } from './components/TemplateSelect.vue'
export { default as ModelSelectUI } from './components/ModelSelect.vue'
export { default as SelectWithConfig } from './components/SelectWithConfig.vue'
export { default as HistoryDrawerUI } from './components/HistoryDrawer.vue'
export { default as InputPanelUI } from './components/InputPanel.vue'
export { default as MainLayoutUI } from './components/MainLayout.vue'
export { default as ContentCardUI } from './components/ContentCard.vue'
export { default as ActionButtonUI } from './components/ActionButton.vue'
export { default as ThemeToggleUI } from './components/ThemeToggleUI.vue'
// TestPanel.vue - 已替换为TestAreaPanel
export { default as ModalUI } from './components/Modal.vue'
export { default as PanelUI } from './components/Panel.vue'

export { default as BasicTestMode } from './components/BasicTestMode.vue'
export { default as VariableManagerModal } from './components/VariableManagerModal.vue'
export { default as VariableEditor } from './components/VariableEditor.vue'
export { default as VariableImporter } from './components/VariableImporter.vue'
export { default as ConversationManager } from './components/ConversationManager.vue'
export { default as ContextEditor } from './components/ContextEditor.vue'
export { default as TestAreaPanel } from './components/TestAreaPanel.vue'
export { default as TestInputSection } from './components/TestInputSection.vue'
export { default as TestControlBar } from './components/TestControlBar.vue'
export { default as TestResultSection } from './components/TestResultSection.vue'
export { default as LanguageSwitchDropdown } from './components/LanguageSwitchDropdown.vue'
export { default as BuiltinTemplateLanguageSwitchUi } from './components/BuiltinTemplateLanguageSwitch.vue'
export { default as DataManagerUI } from './components/DataManager.vue'
export { default as OptimizationModeSelectorUI } from './components/OptimizationModeSelector.vue'
export { default as FunctionModeSelector } from './components/FunctionModeSelector.vue'
export { default as TextDiffUI } from './components/TextDiff.vue'
export { default as OutputDisplayFullscreen } from './components/OutputDisplayFullscreen.vue'
export { default as OutputDisplayCore } from './components/OutputDisplayCore.vue'
export { default as UpdaterIcon } from './components/UpdaterIcon.vue'
export { default as UpdaterModal } from './components/UpdaterModal.vue'
export { default as FullscreenDialog } from './components/FullscreenDialog.vue'
export { default as InputWithSelect } from './components/InputWithSelect.vue'
export { default as MarkdownRenderer } from './components/MarkdownRenderer.vue'
export { default as ToolCallDisplay } from './components/ToolCallDisplay.vue'

// 导出 Naive UI 组件 (解决组件解析问题)
export { 
  NFlex,
  NButton,
  NCard,
  NInput,
  NSelect,
  NModal,
  NSpace,
  NTag,
  NText,
  NGrid,
  NGridItem,
  NIcon,
  NImage,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NMessageProvider,
  NButtonGroup,
  NDropdown,
  NDivider,
  NDataTable,
  NForm,
  NFormItem,
  NRadioGroup,
  NRadioButton,
  NScrollbar,
  NEmpty,
  NBadge,
  useMessage
} from 'naive-ui'

// 导出指令
export { clickOutside } from './directives/clickOutside'

// 导出 composables
export * from './composables'

// 从core重新导出需要的内容, 仅保留工厂函数、代理类和必要的工具/类型
export {
    StorageFactory,
    DexieStorageProvider,
    ModelManager,
    createModelManager,
    ElectronModelManagerProxy,
    TemplateManager,
    createTemplateManager,
    ElectronTemplateManagerProxy,
    createTemplateLanguageService,
    ElectronTemplateLanguageServiceProxy,
    HistoryManager,
    createHistoryManager,
    ElectronHistoryManagerProxy,
    DataManager,
    createDataManager,
    ElectronDataManagerProxy,
    createLLMService,
    ElectronLLMProxy,
    createPromptService,
    ElectronPromptServiceProxy,
    createPreferenceService,
    ElectronPreferenceServiceProxy,
    createCompareService,
    createContextRepo,
    ElectronContextRepoProxy,
    isRunningInElectron,
    waitForElectronApi,
} from '@prompt-optimizer/core'

// 导出类型
export type {
    OptimizationMode,
    OptimizationRequest,
    ConversationMessage,
    CustomConversationRequest,
    IModelManager,
    ITemplateManager,
    IHistoryManager,
    ILLMService,
    IPromptService,
    IPreferenceService,
    ICompareService,
    ContextRepo,
    ContextPackage,
    ContextBundle,
    Template
} from '@prompt-optimizer/core'

// 导出新增的类型和服务
export * from './types'
export * from './services'

// 导出快速模板管理器
export { quickTemplateManager } from './data/quickTemplates'

// 导出图像模式组件与核心图像服务（转发 core 能力）
export { default as ImageWorkspace } from './components/image-mode/ImageWorkspace.vue'
export { ImageModelManager, createImageModelManager, ImageService, createImageService } from '@prompt-optimizer/core'

// 导出数据转换工具和类型
export { DataTransformer, OptionAccessors } from './utils/data-transformer'
export type { SelectOption, ModelSelectOption, TemplateSelectOption } from './types/select-options'
