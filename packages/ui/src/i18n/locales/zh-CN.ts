﻿export default {
  common: {
    loading: '加载中...',
    save: '保存',
    cancel: '取消',
    confirm: '确认',
    delete: '删除',
    edit: '编辑',
    create: '创建',
    update: '更新',
    search: '搜索',
    settings: '设置',
    language: '语言',
    templates: '功能提示词',
    history: '历史记录',
    close: '关闭',
    test: '测试',
    enable: '启用',
    disable: '禁用',
    enabled: '已启用',
    disabled: '已禁用',
    add: '添加',
    remove: '移除',
    title: '标题',
    description: '描述',
    lastModified: '最后修改',
    noDescription: '暂无描述',
    builtin: '内置',
    custom: '自定义',
    currentTemplate: '当前提示词',
    use: '使用',
    expand: '展开',
    collapse: '收起',
    hide: '隐藏',
    clear: '清空',
    createdAt: '创建于',
    version: 'V{version}',
    actions: '操作',
    optimize: '优化',
    iterate: '迭代',
    system: '系统',
    user: '用户',
    copySuccess: '复制成功',
    copyFailed: '复制失败',
    appName: '提示词优化器',
    selectFile: '选择文件',
    exporting: '导出中...',
    importing: '导入中...',
    number: '数字',
    integer: '整数',
    optional: '可选',
    copy: '复制',
    content: '内容',
    focus: '聚焦',
    noContent: '暂无内容',
    clickToEdit: '点击编辑',
    generating: '生成中...',
    generatingReasoning: '思考中...',
    copyContent: '复制内容',
    copyAll: '复制全部',
    expandReasoning: '展开思考过程',
    collapseReasoning: '收起思考过程',
    success: '成功',
    error: '错误',
    warning: '警告',
    info: '信息',
    deleteConfirmation: '你确定要删除吗？',
    editingDisabledDuringStream: '内容生成期间无法编辑',
    markdown: '渲染',
    text: '文本',
    switchToTextView: '切换到纯文本视图',
    switchToMarkdownView: '切换到Markdown渲染视图',
    copied: '已复制',
    render: '渲染',
    source: '原文',
    reasoning: '思考过程',
    compare: '对比',
    moveUp: '上移',
    moveDown: '下移',
    preview: '预览',
    import: '导入',
    export: '导出',
    next: '下一步'
  },
  actions: {
    copy: '复制',
    fullscreen: '全屏'
  },
  nav: {
    home: '首页',
    dashboard: '仪表盘',
    promptOptimizer: '提示词优化器',
    modelManager: '模型管理',
    history: '历史记录',
    templates: '功能提示词',
    dataManager: '数据管理',
    advancedMode: '高级模式',
    variableManager: '变量管理',
    basicMode: '基础',
    contextMode: '上下文',
    imageMode: '图像',
  },
  promptOptimizer: {
    title: '提示词优化器',
    inputPlaceholder: '请输入需要优化的prompt...',
    optimize: '开始优化 →',
    history: '历史记录',
    save: '保存提示词',
    share: '分享',
    export: '导出',
    originalPrompt: '原始提示词',
    optimizeModel: '优化模型',
    templateLabel: '优化提示词',
    originalPromptPlaceholder: '请输入需要优化的原始提示词...',

    // 新增：优化模式相关
    optimizationMode: '优化模式',
    systemPrompt: '系统提示词优化',
    userPrompt: '用户提示词优化',
    systemPromptInput: '系统提示词',
    userPromptInput: '用户提示词',
    systemPromptPlaceholder: '请输入需要优化的系统提示词...',
    userPromptPlaceholder: '请输入需要优化的用户提示词...',
    systemPromptHelp: '系统提示词优化模式：优化用于定义AI助手角色、行为和回应风格的系统提示词',
    userPromptHelp: '用户提示词优化模式：优化用户与AI交互时使用的提示词，提高交互效果和准确性',
    contextManagement: '上下文管理',
    optimizationContext: '优化上下文',
    conversationContext: '会话上下文',
    contextHelp: '在高级模式下，您可以添加会话上下文来帮助AI更好地理解优化需求',
    contextTitle: '优化上下文',
    contextDescription: '为优化提供会话背景，帮助AI更好地理解优化目标'
  },
  variables: {
    title: '变量管理',
    count: '变量：{count}',
    missing: '缺失：{count}',
    total: '共 {count} 个变量',
    predefined: '预定义变量',
    custom: '自定义变量',
    predefinedBadge: '内置',
    customBadge: '自定义',
    predefinedDescriptions: {
      originalPrompt: '当前原始提示词内容',
      lastOptimizedPrompt: '最后一次优化的提示词结果',
      iterateInput: '迭代优化的输入内容',
      currentPrompt: '当前使用的提示词（优化后或原始）',
      userQuestion: '用户问题或输入',
      conversationContext: '当前会话上下文信息',
      toolsContext: '可用工具信息（由系统自动注入）'
    },
    readonly: '只读',
    emptyValue: '(空)',
    noCustomVariables: '暂无自定义变量',
    addFirstVariable: '在下方添加您的第一个自定义变量',
    addNew: '添加新变量',
    name: '变量名',
    value: '变量值',
    namePlaceholder: '例如：userName, productType',
    valuePlaceholder: '请输入变量值',
    add: '添加',
    edit: '编辑',
    delete: '删除',
    export: '导出',
    import: '导入',
    exportTitle: '导出变量',
    importTitle: '导入变量',
    copyData: '复制数据',
    importPlaceholder: '请粘贴JSON格式的变量数据',
    errors: {
      invalidName: '变量名必须以字母开头，只能包含字母、数字和下划线',
      predefinedName: '不能使用预定义变量名',
      duplicateName: '变量名已存在',
      valueTooLong: '变量值过长（最大10,000字符）',
      importFailed: '导入变量失败'
    },
    management: {
      title: '变量管理',
      addVariable: '添加变量',
      import: '导入',
      export: '导出',
      variableName: '变量名',
      value: '值',
      description: '描述',
      sourceLabel: '来源',
      preview: '预览',
      deleteConfirm: '确定要删除变量 "{name}" 吗？',
      totalCount: '共 {count} 个变量',
      noVariables: '暂无变量',
      exportTitle: '导出变量',
      exportFormat: '导出格式',
      exportInfo: '导出信息',
      exportPreview: '导出预览',
      variables: '变量',
      download: '下载',
      source: {
        predefined: '预定义',
        custom: '自定义'
      }
    },
    editor: {
      addTitle: '添加变量',
      editTitle: '编辑变量',
      variableName: '变量名',
      variableNamePlaceholder: '例如：userName',
      variableNameHelp: '只能包含字母、数字和下划线，且必须以字母或下划线开头',
      variableValue: '变量值',
      variableValuePlaceholder: '输入变量的值...',
      variableValueHelp: '支持多行文本，最多5000个字符',
      preview: '预览',
      usage: '使用方式',
      resolvedValue: '解析后的值',
      errors: {
        nameRequired: '变量名不能为空',
        nameInvalid: '变量名格式不正确',
        namePredefined: '不能与预定义变量重名',
        nameExists: '变量名已存在',
        valueRequired: '变量值不能为空',
        valueTooLong: '变量值不能超过5000个字符'
      }
    },
    preview: {
      title: '变量预览',
      variableName: '变量名',
      source: '来源',
      valueLength: '长度',
      characters: '字符',
      value: '变量值',
      copyValue: '复制值',
      copy: '复制',
      copied: '已复制',
      usageExamples: '使用示例',
      inTemplate: '在模板中',
      inMessage: '在消息中'
    },
    importer: {
      title: '导入变量',
      fromFile: '从文件导入',
      fromText: '从文本导入',
      dropFile: '拖拽文件到此处',
      orClickToSelect: '或点击选择文件',
      fileRequirements: '文件要求',
      supportedFormats: '支持的格式',
      maxSize: '最大文件大小',
      structureExample: '结构示例：键值对格式',
      textFormat: '文本格式',
      csvText: 'CSV文本',
      txtText: 'TXT文本',
      keyValuePairs: '键值对',
      csvTextHelp: '支持CSV格式的变量数据',
      txtTextHelp: '支持TXT格式的变量数据',
      previewTitle: '预览（{count}个变量）',
      conflict: '冲突',
      conflictWarning: '{count}个变量与预定义变量重名，将被跳过',
      import: '导入',
      errors: {
        invalidFormat: '无效的JSON格式',
        invalidFileType: '请选择CSV或TXT文件',
        fileTooLarge: '文件过大，请选择小于10MB的文件',
        fileReadError: '文件读取失败',
        parseError: '文件解析失败',
        invalidVariableFormat: '变量"{key}"格式不正确',
        invalidVariableName: '变量名"{name}"格式不正确',
        unsupportedFormat: '不支持的格式',
        csvMinRows: 'CSV文件必须至少包含2行（标题和数据）',
        csvRequiredColumns: 'CSV文件必须包含name和value列'
      }
    }
  },
  conversation: {
    management: {
      title: '会话管理器',
      openEditor: '打开编辑器'
    },
    title: '会话管理',
    messageCount: '共 {count} 条消息',
    quickTemplates: '快速模板',
    clearAll: '清空全部',
    noMessages: '暂无会话消息',
    addFirst: '添加第一条消息',
    addFirstMessage: '在下方添加您的第一条消息',
    addMessage: '添加消息',
    export: '导出',
    import: '导入',
    exportTitle: '导出会话',
    importTitle: '导入会话',
    copyData: '复制数据',
    importPlaceholder: '请粘贴JSON格式的会话数据',
    importError: '导入会话失败',
    confirmClear: '确定要清空所有消息吗？',
    roles: {
      system: '系统',
      user: '用户',
      assistant: '助手'
    },
    templates: {
      simple: '简单对话',
      basic: '基础对话',
      roleplay: '角色扮演',
      analysis: '分析讨论',
      creative: '创意写作',
      systemPromptTest: '测试系统提示词',
      systemPromptComparison: '对比系统提示词效果',
      userPromptTest: '测试用户提示词',
      userPromptComparison: '对比用户提示词效果',
      testSystemPrompt: '请测试这个系统提示词的效果',
      compareSystemPrompt: '请展示这个系统提示词的能力',
      systemPromptOptimizeDefault: '系统提示词优化默认上下文',
      systemPromptOptimizeDefaultDesc: '默认的系统提示词优化会话模板，包含原始提示词和用户问题',
      // 系统提示词优化模式专用模板
      systemDefault: '默认测试',
      systemRoleTest: '角色能力展示',
      systemCapabilityDemo: '功能演示',
      systemConsistencyCheck: '一致性检查',
      systemEdgeCaseTest: '边界情况测试',
      systemMultiTurnTest: '多轮对话测试',
      // 用户提示词优化模式专用模板
      userSimpleTest: '简单测试',
      userWithContext: '带上下文测试',
      userExpertMode: '专家模式',
      userStepByStep: '分步解答',
      userCreativeMode: '创意模式',
      userComparison: '对比分析',
      userDialogue: '互动对话'
    },
    
    placeholders: {
      system: '请输入系统消息（定义AI行为和上下文）...',
      user: '请输入用户消息（您的输入或问题）...',
      assistant: '请输入助手消息（AI回应）...',
      default: '请输入消息内容...'
    },
    
    variableCount: '{count} 个变量',
    missingVariables: '缺失 {count} 个',
    detectedVariables: '检测到变量',
    missingVariablesTitle: '缺失的变量',
    usedVariables: '使用的变量',
    preview: '预览',
    missingVariablesList: '缺失变量',
    totalVariables: '变量总数',
    allVariablesSet: '变量已全部配置',
    createVariable: '创建',
    
    showPreview: '显示预览',
    hidePreview: '隐藏预览',
    previewNote: '预览显示变量替换后的效果',
    moveUp: '上移',
    moveDown: '下移',
    deleteMessage: '删除消息',
    fullscreenEdit: '全屏编辑',
    editMessage: '编辑消息',
    variablesDetected: '检测到变量',
    edit: '编辑',
    editingInFullscreen: '正在全屏编辑...',
    missingVars: '缺失变量',
    clickToCreateVariable: '点击创建变量并打开变量管理器',
    clickToCopyVariable: '点击复制变量名到剪贴板',
    syncToTest: {
      success: '优化上下文已同步到测试区域',
      notSupported: '当前测试面板不支持会话同步'
    }
  },
  tools: {
    count: '{count} 个工具'
  },
  settings: {
    title: '设置',
    advancedMode: '启用高级功能',
    advancedModeTooltip: '启用自定义变量和高级会话管理功能',
    advancedModeActive: '高级功能已启用',
    language: '语言设置',
    theme: '主题设置',
    apiSettings: 'API设置',
    about: '关于',
  },
  modelManager: {
    title: '模型管理',
    textModels: '文本模型',
    imageModels: '图像模型',
    modelList: '模型列表',
    testConnection: '测试连接',
    editModel: '编辑',
    deleteModel: '删除',
    displayName: '显示名称',
    modelKey: '模型标识',
    apiUrl: 'API地址',
    apiUrlHint: '示例：https://api.example.com/v1；多数提供商地址通常以 /v1 结尾',
    defaultModel: '默认模型',
    clickToFetchModels: '点击箭头获取模型列表',
    apiKey: 'API密钥',
    addModel: '添加',
    addImageModel: '添加图像模型',

    // 高级参数
    advancedParameters: {
      title: '高级参数',
      noParamsConfigured: '未配置高级参数',
      customParam: '自定义',
      add: '添加参数',
      select: '选择参数',
      selectTitle: '添加高级参数',
      custom: '自定义参数',
      customKeyPlaceholder: '输入参数名称',
      customValuePlaceholder: '输入参数值',
      stopSequencesPlaceholder: '输入停止序列（逗号分隔）',
      unitLabel: '单位',
      currentProvider: '当前提供商',
      customProvider: '自定义',
      availableParams: '个可选参数',
      noAvailableParams: '无可选参数',
      validation: {
        dangerousParam: '此参数名称包含潜在危险字符，不允许使用',
        invalidNumber: '参数值必须是有效的{type}',
        belowMin: '参数值不能小于 {min}',
        aboveMax: '参数值不能大于 {max}',
        mustBeInteger: '参数值必须是整数'
      }
    },

    // 占位符
    modelKeyPlaceholder: '请输入模型标识',
    displayNamePlaceholder: '请输入显示名称',
    apiUrlPlaceholder: 'https://api.example.com/v1',
    defaultModelPlaceholder: '输入或选择模型名称',
    apiKeyPlaceholder: '请输入API密钥（可选）',

    // 确认信息
    deleteConfirm: '确定要删除此模型吗？此操作不可恢复。',

    // 操作结果
    testSuccess: '{provider}连接测试成功',
    testFailed: '{provider}连接测试失败：{error}',
    updateSuccess: '更新成功',
    updateFailed: '更新失败：{error}',
    addSuccess: '添加成功',
    addFailed: '添加失败：{error}',
    createSuccess: '创建成功',
    createFailed: '创建失败：{error}',
    enableSuccess: '启用成功',
    enableFailed: '启用失败：{error}',
    disableSuccess: '禁用成功',
    disableFailed: '禁用失败：{error}',
    deleteSuccess: '删除成功',
    deleteFailed: '删除失败：{error}',
    toggleFailed: '切换失败：{error}',
    fetchModelsSuccess: '成功获取 {count} 个模型',
    loadingModels: '正在加载模型选项...',
    noModelsAvailable: '没有可用模型',
    selectModel: '选择一个模型',
    fetchModelsFailed: '获取模型列表失败：{error}',
    needApiKeyAndBaseUrl: '请先填写API地址和密钥',
    needBaseUrl: '请先填写API地址',

    // 模型获取错误处理
    errors: {
      crossOriginConnectionFailed: '跨域连接失败，请检查网络连接',
      connectionFailed: '连接失败，请检查API地址和网络连接',
      missingV1Suffix: 'API地址格式错误，OpenAI兼容API需要包含"/v1"后缀',
      invalidResponseFormat: 'API返回格式不兼容，请检查API服务是否为OpenAI兼容格式',
      emptyModelList: 'API返回空的模型列表，该服务可能没有可用模型',
      apiError: 'API错误：{error}'
    },

    // 状态文本
    disabled: '已禁用',

    // 无障碍标签
    testConnectionAriaLabel: '测试连接到{name}',
    editModelAriaLabel: '编辑模型{name}',
    enableModelAriaLabel: '启用模型{name}',
    disableModelAriaLabel: '禁用模型{name}',
    deleteModelAriaLabel: '删除模型{name}',
    displayNameAriaLabel: '模型显示名称',
    apiUrlAriaLabel: '模型API地址',
    defaultModelAriaLabel: '默认模型名称',
    apiKeyAriaLabel: 'API密钥',
    cancelEditAriaLabel: '取消编辑模型',
    saveEditAriaLabel: '保存模型修改',
    cancelAddAriaLabel: '取消添加模型',
    confirmAddAriaLabel: '确认添加模型'
  },
  templateManager: {
    title: '功能提示词管理',
    optimizeTemplates: '系统提示词优化模板',
    iterateTemplates: '迭代优化模板',
    optimizeTemplatesContext: '系统提示词优化模板（上下文）',
    iterateTemplatesContext: '迭代优化模板（上下文）',
    optimizeTemplateList: '系统提示词优化模板列表',
    iterateTemplateList: '迭代优化模板列表',
    userOptimizeTemplates: '用户提示词优化模板',
    userOptimizeTemplatesContext: '用户提示词优化模板（上下文）',
    userOptimizeTemplateList: '用户提示词优化模板列表',
    // 图像类标签
    imageText2ImageTemplates: '图像 · 文生图模板',
    imageImage2ImageTemplates: '图像 · 图生图模板',
    imageIterateTemplates: '图像 · 迭代模板',
    addTemplate: '添加',
    editTemplate: '编辑',
    deleteTemplate: '删除',
    templateCount: '{count}个提示词',

    // 按钮文本
    importTemplate: '导入',
    exportTemplate: '导出',
    copyTemplate: '复制',
    useTemplate: '使用此提示词',
    viewTemplate: '查看',
    migrate: '升级',
    help: '帮助',

    // 模板格式
    templateFormat: '模板格式',
    simpleTemplate: '简单模板',
    advancedTemplate: '高级模板',
    simpleTemplateHint: '不使用模板技术，直接将模板内容作为系统提示词，用户输入作为用户消息',
    advancedTemplateHint: '支持多消息结构和高级模板语法，可使用变量：originalPrompt、lastOptimizedPrompt、iterateInput',

    // 消息模板
    messageTemplates: '消息模板',
    addMessage: '添加消息',
    removeMessage: '删除消息',
    moveUp: '上移',
    moveDown: '下移',
    messageContentPlaceholder: '输入消息内容，支持变量如 originalPrompt',

    // 角色
    roleSystem: '系统',
    roleUser: '用户',
    roleAssistant: '助手',

    // 预览
    preview: '预览',

    // 全屏编辑
    fullscreen: '全屏',
    fullscreenEdit: '全屏编辑',
    characterCount: '{count} 个字符',

    // 迁移
    convertToAdvanced: '转换为高级格式',
    migrationDescription: '将简单模板转换为高级消息格式，提供更灵活的控制能力。',
    originalTemplate: '原始模板',
    convertedTemplate: '转换后模板',
    applyMigration: '应用转换',
    migrationSuccess: '模板转换成功',
    migrationFailed: '模板转换失败',

    // 语法指南
    syntaxGuide: '语法指南',

    // 表单字段
    name: '提示词名称',
    content: '提示词内容',
    description: '描述',
    type: '类型',

    // 占位符
    namePlaceholder: '请输入提示词名称',
    contentPlaceholder: '请输入提示词内容',
    descriptionPlaceholder: '请输入提示词描述（可选）',
    searchPlaceholder: '搜索提示词...',

    // 验证错误
    noMessagesError: '高级模板至少需要一条消息',
    emptyMessageError: '消息内容不能为空',
    emptyContentError: '模板内容不能为空',

    // 确认信息
    deleteConfirm: '确定要删除此提示词吗？此操作不可恢复。',

    // 操作结果
    updateSuccess: '提示词更新成功',
    updateFailed: '提示词更新失败',
    addSuccess: '提示词添加成功',
    addFailed: '提示词添加失败',
    deleteSuccess: '提示词删除成功',
    deleteFailed: '提示词删除失败',
    copySuccess: '提示词复制成功',
    copyFailed: '提示词复制失败',
    importSuccess: '提示词导入成功',
    importFailed: '提示词导入失败',
    exportSuccess: '提示词导出成功',
    exportFailed: '提示词导出失败',

    // 无障碍标签
    editTemplateAriaLabel: '编辑提示词{name}',
    deleteTemplateAriaLabel: '删除提示词{name}',
    nameAriaLabel: '提示词名称输入框',
    contentAriaLabel: '提示词内容输入框',
    descriptionAriaLabel: '提示词描述输入框',
    typeAriaLabel: '提示词类型选择',
    searchAriaLabel: '搜索提示词',
    cancelEditAriaLabel: '取消编辑提示词',
    saveEditAriaLabel: '保存提示词修改',
    cancelAddAriaLabel: '取消添加提示词',
    confirmAddAriaLabel: '确认添加提示词',
    importTemplateAriaLabel: '导入提示词',
    exportTemplateAriaLabel: '导出提示词',
    copyTemplateAriaLabel: '复制提示词{name}',
    useTemplateAriaLabel: '使用提示词{name}',
    viewTemplateAriaLabel: '查看提示词{name}'
  },
  history: {
    title: '历史记录',
    iterationNote: '迭代说明',
    optimizedPrompt: '优化后',
    confirmClear: '确定要清空所有历史记录吗？此操作不可恢复。',
    confirmDeleteChain: '确定要删除此条历史记录吗？此操作不可恢复。',
    cleared: '历史记录已清空',
    chainDeleted: '历史记录已删除',
    useThisVersion: '使用此版本',
    noHistory: '暂无历史记录'
  },
  theme: {
    title: '主题设置',
    light: '日间',
    dark: '夜间',
    blue: '蓝色',
    classic: '米杏',
    green: '绿色',
    purple: '紫色'
  },
  test: {
    title: '测试',
    content: '测试内容',
    placeholder: '请输入要测试的内容...',
    modes: {
      simple: '简单模式',
      conversation: '会话模式'
    },
    simpleMode: {
      label: '测试内容',
      placeholder: '输入要测试的内容...',
      help: ''
    },
    model: '测试模型',
    startTest: '开始测试 →',
    startCompare: '开始对比 →',
    testing: '测试中...',
    toggleCompare: {
      enable: '开启对比',
      disable: '关闭对比'
    },
    originalResult: '原始提示词结果',
    optimizedResult: '优化后提示词结果',
    testResult: '测试结果',
    userPromptTest: '用户提示词测试',
    advanced: {
      startTest: '开始测试',
      result: '测试结果',
      messageCount: '{count} 条消息',
      missingVariables: '缺少 {count} 个变量',
      title: '高级测试'
    },
    error: {
      failed: '测试失败',
      noModel: '请先选择测试模型',
      noTestContent: '请输入测试内容'
    },
    enableMarkdown: '启用Markdown渲染',
    disableMarkdown: '关闭Markdown渲染',
    thinking: '思考过程'
  },
  template: {
    noDescription: '暂无描述',
    configure: '配置提示词',
    selected: '已选择',
    select: '选择',
    noAvailableTemplates: '暂无可用模板',
    builtinLanguage: '内置模板语言',
    switchBuiltinLanguage: '切换内置模板语言',
    languageChanged: '内置模板语言已切换为 {language}',
    languageChangeError: '切换内置模板语言失败',
    languageInitError: '初始化内置模板语言失败',
    type: {
      optimize: '优化',
      iterate: '迭代'
    },
    view: '查看',
    edit: '编辑',
    add: '添加',
    name: '提示词名称',
    namePlaceholder: '输入提示词名称',
    content: '提示词内容',
    contentPlaceholder: '输入提示词内容',
    description: '描述',
    descriptionPlaceholder: '输入提示词描述（可选）',
    close: '关闭',
    cancel: '取消',
    save: '保存修改',
    import: {
      title: '导入提示词',
      supportFormat: '支持 .json 格式的提示词文件'
    },
    unknownTime: '未知',
    deleteConfirm: '确定要删除这个提示词吗？此操作不可恢复。',
    success: {
      updated: '提示词已更新',
      added: '提示词已添加',
      deleted: '提示词已删除',
      exported: '提示词已导出',
      imported: '提示词已导入'
    },
    error: {
      loadFailed: '加载提示词失败',
      saveFailed: '保存提示词失败',
      deleteFailed: '删除提示词失败',
      exportFailed: '导出提示词失败',
      importFailed: '导入提示词失败',
      readFailed: '读取文件失败'
    }
  },
  prompt: {
    optimized: '优化后的提示词',
    optimizing: '优化中...',
    continueOptimize: '继续优化',
    copy: '复制',
    applyToTest: '应用到测试',
    appliedToTest: '已应用到高级测试，会话模板已自动配置',
    optimizedPlaceholder: '优化后的提示词将显示在这里...',
    iterateDirection: '请输入需要优化的方向：',
    iteratePlaceholder: '例如：使提示词更简洁、增加特定功能描述等...',
    confirmOptimize: '确认优化',
    iterateTitle: '迭代功能提示词',
    selectIterateTemplate: '请选择迭代提示词：',
    diff: {
      compare: '与上版对比',
      exit: '退出对比',
      enable: '启用文本对比',
      disable: '关闭文本对比'
    },
    error: {
      noTemplate: '请先选择迭代提示词'
    }
  },
  output: {
    title: '测试结果',
    copy: '复制',
    placeholder: '测试结果将显示在这里...',
    processing: '处理中...',
    success: {
      copied: '复制成功'
    },
    error: {
      copyFailed: '复制失败'
    }
  },
  optimization: {
    contextTitle: '优化上下文',
    contextDescription: '为优化提供会话背景，帮助AI更好地理解优化目标'
  },
  model: {
    select: {
      placeholder: '请选择模型',
      configure: '配置模型',
      noModels: '请配置模型',
      noAvailableModels: '暂无可用模型'
    },
    manager: {
      displayName: '例如: 自定义模型',
      apiUrl: 'API 地址',
      defaultModel: '默认模型名称',
      modelNamePlaceholder: '例如: gpt-3.5-turbo'
    }
  },
  toast: {
    error: {
      serviceInit: '服务未初始化，请稍后重试',
      optimizeFailed: '优化失败',
      iterateFailed: '迭代失败',
      compareFailed: '对比分析失败',
      noVersionsToCompare: '没有足够的版本进行对比',
      noPreviousVersion: '没有前一版本可供对比',
      testFailed: '测试失败',
      testError: '测试过程中发生错误',
      loadTemplatesFailed: '加载提示词失败',
      initFailed: '初始化失败：{error}',
      loadModelsFailed: '加载模型列表失败',
      initModelSelectFailed: '初始化模型选择失败',
      initTemplateSelectFailed: '初始化模板选择失败',
      loadHistoryFailed: '加载历史记录失败',
      clearHistoryFailed: '清空历史记录失败',
      historyChainDeleteFailed: '删除历史记录失败',
      selectTemplateFailed: '选择提示词失败：{error}',
      noOptimizeTemplate: '请先选择优化提示词',
      noOptimizeModel: '请先选择优化模型',
      noIterateTemplate: '请先选择迭代提示词',
      incompleteTestInfo: '请填写完整的测试信息',
      noDefaultTemplate: '无法加载默认提示词',
      optimizeProcessFailed: '优化过程出错',
      testProcessError: '测试过程中发生错误',
      initTemplateFailed: '初始化模板选择失败',
      appInitFailed: '应用初始化失败，请刷新或联系支持'
    },
    success: {
      optimizeSuccess: '优化成功',
      iterateComplete: '迭代优化完成',
      iterateSuccess: '迭代优化成功',
      modelSelected: '已选择模型: {name}',
      templateSelected: '已选择{type}提示词: {name}',
      historyClear: '历史记录已清空',
      historyChainDeleted: '历史记录已删除',
      historyLoaded: '历史记录已加载',
      exitCompare: '已退出对比模式',
      compareEnabled: '对比模式已启用'
    },
    warn: {
      loadOptimizeTemplateFailed: '加载已保存的优化提示词失败',
      loadIterateTemplateFailed: '加载已保存的迭代提示词失败'
    },
    info: {
      modelUpdated: '模型已更新',
      templateSelected: '选择模板',
      optimizationModeAutoSwitched: '已自动切换到{mode}提示词优化模式'
    }
  },
  log: {
    info: {
      initializing: '正在初始化...',
      initBaseServicesStart: '开始初始化基础服务...',
      templateList: '模板列表',
      createPromptService: '创建提示词服务...',
      initComplete: '初始化完成',
      templateSelected: '已选择模板'
    },
    error: {
      initBaseServicesFailed: '初始化基础服务失败'
    }
  },
  dataManager: {
    title: '数据管理',
    export: {
      title: '导出数据',
      description: '导出所有历史记录、模型配置、自定义提示词和用户设置（包括主题、语言、模型选择等）',
      button: '导出数据',
      success: '数据导出成功',
      failed: '数据导出失败'
    },
    import: {
      title: '导入数据',
      description: '导入之前导出的数据文件（将覆盖现有数据和用户设置）',
      selectFile: '点击选择文件或拖拽文件到此处',
      changeFile: '更换文件',
      button: '导入数据',
      success: '数据导入成功',
      failed: '数据导入失败',
      successWithRefresh: '数据导入成功，页面将刷新以应用所有更改'
    },
    contexts: {
      title: '上下文集合管理',
      description: '导入或导出所有上下文集合，包括消息、变量和工具配置。',
      exportFile: '导出到文件',
      exportClipboard: '导出到剪贴板',
      importFile: '从文件导入',
      importClipboard: '从剪贴板导入',
      importMode: '导入模式',
      replaceMode: '替换模式',
      appendMode: '追加模式',  
      mergeMode: '合并模式',
      replaceModeDesc: '完全替换现有上下文集合',
      appendModeDesc: '将导入内容追加到现有集合（自动处理ID冲突）',
      mergeModeDesc: '合并同ID的上下文，以导入内容为准',
      importSuccess: '成功导入 {count} 个上下文',
      exportSuccess: '成功导出 {count} 个上下文到 {target}',
      predefinedVariablesSkipped: '跳过了 {count} 个预定义变量覆盖',
      conflictingIdsRenamed: '{count} 个冲突ID已重命名',
      currentContextRestored: '当前上下文已恢复为：{contextId}',
      noContextsToImport: '没有有效的上下文可导入',
      invalidContextBundle: '无效的上下文集合格式',
      importModeRequired: '请选择导入模式'
    },
    warning: '导入数据将覆盖现有的历史记录、模型配置、自定义提示词和所有用户设置（包括主题、语言偏好等），请确保已备份重要数据。'
  },
  params: {
    "temperature": {
      "label": "温度 (Temperature)",
      "description": "控制随机性：较低的值（例如0.2）使输出更集中和确定，较高的值（例如0.8）使其更随机。"
    },
    "top_p": {
      "label": "Top P (核心采样)",
      "description": "核心采样。仅考虑累积概率达到Top P阈值的Token。例如，0.1表示仅考虑构成最高10%概率质量的Token。"
    },
    "max_tokens": {
      "label": "最大Token数",
      "description": "在补全中生成的最大Token数量。"
    },
    "presence_penalty": {
      "label": "存在惩罚 (Presence Penalty)",
      "description": "介于-2.0和2.0之间的数字。正值会根据新Token是否已在文本中出现来惩罚它们，增加模型谈论新主题的可能性。"
    },
    "frequency_penalty": {
      "label": "频率惩罚 (Frequency Penalty)",
      "description": "介于-2.0和2.0之间的数字。正值会根据新Token在文本中已出现的频率来惩罚它们，降低模型逐字重复相同行的可能性。"
    },
    "timeout": {
      "label": "超时时间 (毫秒)",
      "description_openai": "OpenAI客户端连接的请求超时时间（毫秒）。"
    },
    "maxOutputTokens": {
      "label": "最大输出Token数",
      "description": "模型在单个响应中可以输出的最大Token数。"
    },
    "top_k": {
      "label": "Top K (K选顶)",
      "description": "将下一个Token的选择范围限制为K个最可能的Token。有助于减少无意义Token的生成。"
    },
    "candidateCount": {
      "label": "候选数量",
      "description": "返回的生成响应数量。必须介于1和8之间。"
    },
    "stopSequences": {
      "label": "停止序列",
      "description": "遇到时将停止输出生成的自定义字符串。用逗号分隔多个序列。"
    },
    "tokens": {
      "unit": "令牌"
    }
    ,
    "size": {
      "label": "图像尺寸",
      "description": "生成图像的分辨率/尺寸，如 1024x1024"
    },
    "quality": {
      "label": "图像质量",
      "description": "生成图像的质量等级：auto（自动）、high（高质量）、medium（中等）、low（低质量）"
    },
    "background": {
      "label": "背景透明度",
      "description": "设置图像背景：auto（自动）、transparent（透明）、opaque（不透明）"
    },
    "imageSize": {
      "label": "图像尺寸",
      "description": "生成图像的分辨率/尺寸，如 1024x1024"
    },
    "steps": {
      "label": "迭代步数",
      "description": "扩散/推理迭代次数，步数越多通常质量越高但更慢"
    },
    "guidance": {
      "label": "引导强度",
      "description": "提示词遵循强度，值越大越贴近提示"
    },
    "cfg": {
      "label": "CFG强度",
      "description": "无分类器引导强度，用于控制生成图像与提示词的匹配程度（仅Qwen-Image模型）"
    },
    "negativePrompt": {
      "label": "负向提示词",
      "description": "不希望图像出现的内容或风格"
    },
    "responseFormat": {
      "label": "响应格式",
      "description": "返回图片的格式（URL 或 Base64 编码）"
    },
    "watermark": {
      "label": "水印",
      "description": "是否在生成的图像上添加水印"
    },
    "sequentialGeneration": {
      "label": "序列生成",
      "description": "控制序列图像生成模式（支持的模型）"
    },
    "seed": {
      "label": "随机种子",
      "description": "用于控制生成结果的随机数种子，相同种子产生相同结果"
    }
  },
  contextEditor: {
    // Variables tab (新增)
    variablesTab: '变量',
    contextVariables: '上下文变量',
    contextVariablesDesc: '管理当前上下文的变量覆盖，不影响全局变量',
    noContextVariables: '暂无上下文变量',
    addFirstContextVariable: '添加您的第一个上下文变量',
    addContextVariable: '添加上下文变量',
    editContextVariable: '编辑上下文变量',
    deleteContextVariable: '删除上下文变量',
    deleteContextVariableConfirm: '确定要删除上下文变量"{name}"吗？删除后将回退到全局值。',
    contextVariableDeleted: '已删除上下文变量：{name}',
    variableSource: '变量来源',
    variableStatus: '状态',
    contextOverride: '上下文覆盖',
    globalVariable: '全局变量',
    predefinedVariable: '预定义变量',
    missingVariable: '缺失变量',
    variableFromContext: '来自上下文',
    variableFromGlobal: '来自全局',
    variableFromPredefined: '预定义',
    predefinedVariableCannotOverride: '预定义变量不可覆盖',
    addVariable: '添加上下文变量',
    editVariable: '编辑上下文变量',
    contextVariableHelp: '上下文变量会覆盖全局同名变量，但不能覆盖预定义变量',
    finalVariablesPreview: '最终变量预览',
    contextVariableName: '变量名',
    contextVariableValue: '变量值',
    variableNameRequired: '变量名是必需的',
    variableNameInvalid: '变量名格式无效',
    variableNamePredefined: '不能使用预定义变量名',
    variableNameExists: '变量名已存在',
    variableValueRequired: '变量值是必需的',
    
    // Import/Export context variables
    importContextVariables: '导入上下文变量',
    exportContextVariables: '导出上下文变量',
    contextVariableImported: '已导入 {count} 个上下文变量',
    contextVariableSkipped: '跳过 {count} 个预定义变量冲突',
    
    // Tools editor（新增）
    editTool: '编辑工具',
    deleteToolConfirm: '确定要删除工具“{name}”吗？',
    toolDeleted: '已删除工具：{name}',
    exampleTemplate: '示例模板',
    exampleTemplateDesc: '可从天气示例开始，或从空白模板开始。',
    basicInfo: '基本信息',
    toolNamePlaceholder: '请输入工具名称，例如 get_weather',
    toolDescPlaceholder: '请输入工具描述',
    parameters: '参数配置',
    parametersPlaceholder: '请输入JSON格式的参数配置',
    invalidJson: '无效的 JSON',
    useExample: '使用示例',
    startEmpty: '从空白开始',
    save: '保存',
    toolsTooltip: '工具：{tools}',
    toolsCount: '{count} 个工具',
    title: '上下文编辑器',
    systemTemplates: '系统模板',
    userTemplates: '用户模板',
    // Basic
    noMessages: '暂无消息',
    addFirstMessage: '添加您的第一条消息',
    addMessage: '添加消息',
    noTools: '暂无工具',
    addFirstTool: '添加第一个工具',
    addTool: '添加工具',
    noDescription: '暂无描述',
    parametersCount: '{count} 个参数',

    // Templates
    templateCategory: '模板分类',
    templateCount: '{count} 个模板',
    noTemplates: '暂无模板',
    noTemplatesHint: '在模板管理器中添加模板',
    applyTemplate: '应用模板',
    moreMessages: '还有 {count} 条消息...',
    templateApplied: '已应用模板：{name}',

    // Import/Export
    importTitle: '导入上下文数据',
    importFormat: '导入格式：',
    selectFile: '选择文件',
    orPasteText: '或在下方粘贴文本',
    import: '导入',
    exportTitle: '导出上下文数据',
    exportFormat: '导出格式：',
    exportPreview: '导出预览：',
    copyToClipboard: '复制到剪贴板',
    saveToFile: '保存到文件',
    
    // Missing keys
    override: '上下文变量',
    createOverride: '创建上下文变量',
    overrideCount: '{count} 个上下文变量',
    variableOverrides: '上下文变量',
    globalVariables: '全局: {count}',
    noVariables: '暂无变量',
    addFirstVariable: '添加第一个上下文变量',
    variableName: '变量名',
    variableValue: '变量值',
    variableNamePlaceholder: '请输入变量名（不含大括号）',
    predefinedVariableWarning: '不能修改预定义变量',
    variableValuePlaceholder: '请输入变量值',
    deleteVariableConfirm: '确定要删除上下文变量"{name}"吗？',
    variableDeleted: '已删除上下文变量：{name}',
    predefinedVariableError: '不能修改预定义变量',
    variableSaved: '已{action}上下文变量：{name}',
    
    // Variable source labels
    variableSourceLabels: {
      global: '全局',
      context: '上下文'
    },
    
    // Variable status labels
    variableStatusLabels: {
      active: '活跃',
      overridden: '被覆盖'
    }
  },
  updater: {
    title: '应用更新',
    checkForUpdates: '检查更新',
    currentVersion: '当前版本',
    versionLoadFailed: '版本获取失败',
    downloadFailed: '下载失败',
    dismiss: '关闭',
    noStableVersionAvailable: '没有可用的正式版本',
    noPrereleaseVersionAvailable: '没有可用的预览版本',
    failedToGetStableInfo: '无法获取正式版更新信息',
    failedToGetPrereleaseInfo: '无法获取预览版更新信息',
    alreadyLatestStable: '当前已是最新正式版 ({version})',
    alreadyLatestPrerelease: '当前已是最新预览版 ({version})',
    stableDownloadFailed: '正式版下载失败: {error}',
    prereleaseDownloadFailed: '预览版下载失败: {error}',
    unknownError: '未知错误',
    stable: '正式版',
    prerelease: '预览版',
    downloadFailedGeneric: '{type}下载失败: {error}',
    warning: '警告',
    info: '信息',
    versionIgnored: '版本 {version} 已被忽略',
    checkFailed: '检查失败',
    ignored: '已忽略',
    unignore: '取消忽略',
    latestVersion: '最新版本',
    latestStableVersion: '最新正式版',
    noPrereleaseAvailable: '暂无预览版',
    latestIsStable: '最新版本为正式版',
    latestPrereleaseVersion: '最新预览版',
    viewStable: '查看正式版',
    viewPrerelease: '查看预览版',
    allowPrerelease: '接收预览版更新',
    noUpdatesAvailable: '当前已是最新版本',
    checkNow: '检查更新',
    checking: '正在检查更新...',
    checkingForUpdates: '正在检查更新...',
    newVersionAvailable: '发现新版本',
    viewDetails: '查看详情',
    downloadUpdate: '下载更新',
    download: '下载',
    updateAvailable: '有更新',
    hasUpdate: '有更新',
    details: '详情',
    ignore: '忽略',
    ignoreVersion: '忽略此版本',
    downloading: '正在下载更新...',
    downloadingShort: '下载中...',
    downloadComplete: '下载完成',
    clickInstallToRestart: '点击下方按钮安装并重启应用',
    installAndRestart: '安装并重启',
    updateError: '更新失败',
    downloadError: '下载失败',
    installError: '安装失败',
    upToDate: '已是最新版本',
    viewOnGitHub: '在 GitHub 上查看',
    devEnvironment: '开发环境：更新检查已禁用',
    clickToCheck: '点击检查更新',
    noReleasesFound: '未找到发布版本。此项目可能尚未发布任何版本。',
    noStableReleasesFound: '未找到稳定版本。可能只有预发布版本可用。'
  },
  accessibility: {
    labels: {
      contextEditor: '上下文编辑器',
      statisticsToolbar: '统计工具栏',
      editorMain: '编辑器主区域',
      editorTabs: '编辑器标签页',
      messageCount: '消息数量',
      variableCount: '变量数量',
      messagesTab: '消息标签页',
      messagesPanel: '消息面板',
      messagesList: '消息列表',
      conversationMessages: '对话消息',
      messageItem: '消息项',
      templatesPanel: '模板面板',
      templateCard: '模板卡片',
      toolCount: '工具数量',
      variablesPanel: '变量面板',
      emptyMessages: '空消息状态',
      messageIcon: '消息图标',
      addFirstMessage: '添加第一条消息按钮',
      emptyTemplates: '空模板状态',
      emptyVariables: '空变量状态'
    },
    descriptions: {
      contextEditor: '编辑和管理对话上下文和工具',
      messagesTab: '用于管理对话消息的标签页'
    },
    liveRegion: {
      modalClosed: '模式对话框已关闭',
      modalOpened: '模态框已打开',
      tabChanged: '标签页已切换'
    }
  },
  toolCall: {
    title: '工具调用',
    count: '{count} 个调用',
    arguments: '参数',
    result: '结果',
    error: '错误',
    status: {
      pending: '处理中',
      success: '成功',
      error: '失败'
    }
  },

  // 图像模式配置
  imageMode: {
    text2image: '文生图',
    image2image: '图生图',
    text2imageDescription: '从文本描述生成图像',
    image2imageDescription: '基于现有图像进行修改',
    uploadRequired: '图生图模式需要先上传参考图片'
  },

  imageWorkspace: {
    // 输入区域
    input: {
      originalPrompt: '原始提示词',
      originalPromptPlaceholder: '请输入需要优化的图像生成提示词',
      image: '图片',
      selectImage: '📁 选择',
      optimizeTemplate: '优化模板',
      templatePlaceholder: '请选择模板',
      textModel: '文本模型',
      modelPlaceholder: '选择模型',
      optimizing: '优化中...',
      optimizePrompt: '优化提示词'
    },
    
    // 图像生成区域
    generation: {
      imageModel: '图像模型',
      imageModelPlaceholder: '请选择图像模型',
      compareMode: '对比模式',
      generating: '生成中...',
      generateImage: '生成图像',
      processing: '处理中'
    },
    
    // 结果显示
    results: {
      originalPromptResult: '原始提示词',
      optimizedPromptResult: '优化提示词',
      testResult: '测试结果',
      download: '下载',
      copyBase64: '复制Base64',
      copyText: '复制文本',
      copySuccess: '复制成功',
      copyError: '复制失败',
      textOutput: '文本输出',
      noOriginalResult: '暂无原始结果',
      noOptimizedResult: '暂无优化结果',
      noGenerationResult: '暂无生成结果'
    },
    
    // 上传弹窗
    upload: {
      title: '上传参考图片',
      dragText: '点击或拖拽上传图片',
      fileRequirements: '支持 PNG/JPEG 格式，文件大小不超过 10MB',
      uploadFailed: '上传失败',
      uploadSuccess: '上传成功'
    }
  },

  // 图像模型管理器配置界面
  image: {
    capability: {
      text2image: '文生图',
      image2image: '图生图',
      multiImage: '多图生成',
      highResolution: '高分辨率'
    },
    step: {
      basic: '基本信息',
      provider: '选择提供商',
      connection: '连接配置',
      model: '模型选择',
      parameters: '参数设置'
    },
    config: {
      basic: {
        title: '基本配置'
      },
      name: {
        label: '配置名称',
        placeholder: '请输入配置名称'
      },
      enabled: {
        label: '启用状态'
      },
      updateSuccess: '配置已更新',
      createSuccess: '配置已创建',
      saveFailed: '保存配置失败',
      loadFailed: '加载配置失败'
    },
    provider: {
      title: '提供商选择',
      section: '提供商配置',
      label: '图像提供商',
      placeholder: '请选择提供商',
      loadFailed: '加载提供商失败'
    },
    connection: {
      title: '连接配置',
      test: '测试连接',
      testing: '正在测试连接...',
      testSuccess: '功能测试成功',
      testFailed: '连接测试失败',
      testError: '连接测试错误',
      functionTestTextToImage: '文生图测试',
      functionTestImageToImage: '图生图测试',
      testImagePreview: '测试图像预览',
      downloadSuccess: '图像下载成功',
      downloadFailed: '图像下载失败',
      apiKey: {
        label: 'API 密钥',
        description: '用于认证的密钥',
        placeholder: '请输入 API Key'
      },
      baseURL: {
        label: 'API 地址',
        description: '服务端点的基础地址',
        placeholder: 'https://api.example.com/v1'
      },
      organization: {
        label: '组织标识（可选）',
        description: 'OpenAI 组织 ID（如适用）',
        placeholder: 'org_xxx'
      },
      validation: {
        missing: '缺少必填字段：{fields}',
        invalidType: '{field} 类型应为 {expected}，实际为 {actual}'
      }
    },
    model: {
      section: '模型配置',
      label: '选择模型',
      placeholder: '请选择模型',
      loading: '正在加载模型...',
      refreshTooltip: '刷新模型列表',
      refreshDisabledTooltip: {
        dynamicNotSupported: '当前提供商不支持动态获取模型',
        connectionRequired: '需要有效的连接配置才能刷新模型'
      },
      refreshSuccess: '模型列表已刷新',
      refreshError: '刷新模型列表失败',
      selectRequired: '请选择一个模型进行测试',
      count: '共 {count} 个模型',
      capabilities: '模型能力',
      empty: '暂无图像模型配置',
      addFirst: '添加第一个图像模型',
      staticLoaded: '已加载静态模型',
      noStaticModels: '没有静态模型',
      staticLoadFailed: '加载静态模型失败',
      dynamicLoaded: '已加载动态模型',
      dynamicFailed: '加载动态模型失败，已回退静态列表',
      connectionRequired: '请先填写并校验连接信息',
      refreshFailed: '刷新模型失败'
    },
    parameters: {
      noParameters: '该模型暂无可配置参数',
      advancedConfig: '高级参数配置',
      advancedConfigDescription: '可选，用于覆盖默认模型参数'
    },
    params: {
      size: {
        label: '图像尺寸',
        description: '生成图像的分辨率/尺寸，如 1024x1024'
      },
      quality: {
        label: '图像质量',
        description: '生成图像的质量等级：auto（自动）、high（高质量）、medium（中等）、low（低质量）'
      },
      background: {
        label: '背景透明度',
        description: '设置图像背景：auto（自动）、transparent（透明）、opaque（不透明）'
      }
    }
  }
};
