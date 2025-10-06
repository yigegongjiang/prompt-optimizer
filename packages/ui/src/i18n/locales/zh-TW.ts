export default {
  common: {
    loading: '載入中...',
    save: '儲存',
    cancel: '取消',
    confirm: '確認',
    delete: '刪除',
    edit: '編輯',
    create: '建立',
    update: '更新',
    search: '搜尋',
    settings: '設定',
    language: '語言',
    templates: '功能提示詞',
    history: '歷史紀錄',
    close: '關閉',
    test: '測試',
    enable: '啟用',
    disable: '停用',
    enabled: '已啟用',
    disabled: '已停用',
    add: '新增',
    remove: '移除',
    title: '標題',
    description: '描述',
    lastModified: '最後修改',
    noDescription: '暫無描述',
    builtin: '內建',
    custom: '自訂',
    currentTemplate: '目前提示詞',
    use: '使用',
    expand: '展開',
    collapse: '收合',
    hide: '隱藏',
    clear: '清空',
    createdAt: '建立於',
    version: 'V{version}',
    actions: '操作',
    optimize: '優化',
    iterate: '迭代',
    system: '系統',
    user: '使用者',
    copySuccess: '複製成功',
    copyFailed: '複製失敗',
    appName: '提示詞優化器',
    selectFile: '選擇檔案',
    exporting: '匯出中...',
    importing: '匯入中...',
    number: '數字',
    integer: '整數',
    optional: '選填',
    copy: '複製',
    content: '內容',
    focus: '聚焦',
    noContent: '暫無內容',
    clickToEdit: '點選編輯',
    generating: '生成中...',
    generatingReasoning: '思考中...',
    copyContent: '複製內容',
    copyAll: '複製全部',
    expandReasoning: '展開思考過程',
    collapseReasoning: '收合思考過程',
    success: '成功',
    error: '錯誤',
    warning: '警告',
    info: '資訊',
    deleteConfirmation: '你確定要刪除嗎？',
    editingDisabledDuringStream: '內容生成期間無法編輯',
    markdown: '渲染',
    text: '文字',
    switchToTextView: '切換到純文字檢視',
    switchToMarkdownView: '切換到Markdown渲染檢視',
    copied: '已複製',
    render: '渲染',
    source: '原文',
    reasoning: '思考過程',
    compare: '對比',
    moveUp: '上移',
    moveDown: '下移',
    preview: '預覽',
    import: '匯入',
    export: '匯出',
    next: '下一步'
  },
  actions: {
    copy: '複製',
    fullscreen: '全螢幕'
  },
  nav: {
    home: '首頁',
    dashboard: '儀表板',
    promptOptimizer: '提示詞優化器',
    modelManager: '模型管理',
    history: '歷史紀錄',
    templates: '功能提示詞',
    dataManager: '資料管理',
    advancedMode: '進階模式',
    variableManager: '變數管理',
    basicMode: '基礎',
    contextMode: '情境',
    imageMode: '圖像',
  },
  promptOptimizer: {
    title: '提示詞優化器',
    inputPlaceholder: '請輸入需要優化的prompt...',
    optimize: '開始優化 →',
    history: '歷史紀錄',
    save: '儲存提示詞',
    share: '分享',
    export: '匯出',
    originalPrompt: '原始提示詞',
    optimizeModel: '優化模型',
    templateLabel: '優化提示詞',
    originalPromptPlaceholder: '請輸入需要優化的原始提示詞...',

    // 新增：優化模式相關
    optimizationMode: '優化模式',
    systemPrompt: '系統提示詞優化',
    userPrompt: '使用者提示詞優化',
    systemPromptInput: '系統提示詞',
    userPromptInput: '使用者提示詞',
    systemPromptPlaceholder: '請輸入需要優化的系統提示詞...',
    userPromptPlaceholder: '請輸入需要優化的使用者提示詞...',
    systemPromptHelp: '系統提示詞優化模式：優化用於定義AI助手角色、行為和回應風格的系統提示詞',
    userPromptHelp: '使用者提示詞優化模式：優化使用者與AI互動時使用的提示詞，提高互動效果和準確性',
    contextManagement: '情境管理',
    optimizationContext: '優化情境',
    conversationContext: '對話情境',
    contextHelp: '在進階模式下，您可以新增對話情境來幫助AI更好地理解優化需求',
    contextTitle: '優化情境',
    contextDescription: '為優化提供對話背景，幫助AI更好地理解優化目標'
  },
  variables: {
    title: '變數管理',
    count: '變數：{count}',
    missing: '缺少：{count}',
    total: '共 {count} 個變數',
    predefined: '預定義變數',
    custom: '自訂變數',
    predefinedBadge: '內建',
    customBadge: '自訂',
    predefinedDescriptions: {
      originalPrompt: '目前原始提示詞內容',
      lastOptimizedPrompt: '最後一次優化的提示詞結果',
      iterateInput: '迭代優化的輸入內容',
      currentPrompt: '目前使用的提示詞（優化後或原始）',
      userQuestion: '使用者問題或輸入',
      conversationContext: '目前對話情境資訊',
      toolsContext: '可用工具資訊（由系統自動注入）'
    },
    readonly: '唯讀',
    emptyValue: '(空)',
    noCustomVariables: '暫無自訂變數',
    addFirstVariable: '在下方新增您的第一個自訂變數',
    addNew: '新增變數',
    name: '變數名稱',
    value: '變數值',
    namePlaceholder: '例如：userName, productType',
    valuePlaceholder: '請輸入變數值',
    add: '新增',
    edit: '編輯',
    delete: '刪除',
    export: '匯出',
    import: '匯入',
    exportTitle: '匯出變數',
    importTitle: '匯入變數',
    copyData: '複製資料',
    importPlaceholder: '請貼上JSON格式的變數資料',
    errors: {
      invalidName: '變數名稱必須以字母開頭，只能包含字母、數字和底線',
      predefinedName: '不能使用預定義變數名稱',
      duplicateName: '變數名稱已存在',
      valueTooLong: '變數值過長（最大10,000字元）',
      importFailed: '匯入變數失敗'
    },
    management: {
      title: '變數管理',
      addVariable: '新增變數',
      import: '匯入',
      export: '匯出',
      variableName: '變數名稱',
      value: '值',
      description: '描述',
      sourceLabel: '來源',
      preview: '預覽',
      deleteConfirm: '確定要刪除變數 "{name}" 嗎？',
      totalCount: '共 {count} 個變數',
      noVariables: '暫無變數',
      exportTitle: '匯出變數',
      exportFormat: '匯出格式',
      exportInfo: '匯出資訊',
      exportPreview: '匯出預覽',
      variables: '變數',
      download: '下載',
      source: {
        predefined: '預定義',
        custom: '自訂'
      }
    },
    editor: {
      addTitle: '新增變數',
      editTitle: '編輯變數',
      variableName: '變數名稱',
      variableNamePlaceholder: '例如：userName',
      variableNameHelp: '只能包含字母、數字和底線，且必須以字母或底線開頭',
      variableValue: '變數值',
      variableValuePlaceholder: '輸入變數的值...',
      variableValueHelp: '支援多行文字，最多5000個字元',
      preview: '預覽',
      usage: '使用方式',
      resolvedValue: '解析後的值',
      errors: {
        nameRequired: '變數名稱不能為空',
        nameInvalid: '變數名稱格式不正確',
        namePredefined: '不能與預定義變數重名',
        nameExists: '變數名稱已存在',
        valueRequired: '變數值不能為空',
        valueTooLong: '變數值不能超過5000個字元'
      }
    },
    preview: {
      title: '變數預覽',
      variableName: '變數名稱',
      source: '來源',
      valueLength: '長度',
      characters: '字元',
      value: '變數值',
      copyValue: '複製值',
      copy: '複製',
      copied: '已複製',
      usageExamples: '使用範例',
      inTemplate: '在範本中',
      inMessage: '在訊息中'
    },
    importer: {
      title: '匯入變數',
      fromFile: '從檔案匯入',
      fromText: '從文字匯入',
      dropFile: '拖曳檔案到此處',
      orClickToSelect: '或點選選擇檔案',
      fileRequirements: '檔案要求',
      supportedFormats: '支援的格式',
      maxSize: '最大檔案大小',
      structureExample: '結構範例：鍵值對格式',
      textFormat: '文字格式',
      csvText: 'CSV文字',
      txtText: 'TXT文字',
      keyValuePairs: '鍵值對',
      csvTextHelp: '支援CSV格式的變數資料',
      txtTextHelp: '支援TXT格式的變數資料',
      previewTitle: '預覽（{count}個變數）',
      conflict: '衝突',
      conflictWarning: '{count}個變數與預定義變數重名，將被跳過',
      import: '匯入',
      errors: {
        invalidFormat: '無效的JSON格式',
        invalidFileType: '請選擇CSV或TXT檔案',
        fileTooLarge: '檔案過大，請選擇小於10MB的檔案',
        fileReadError: '檔案讀取失敗',
        parseError: '檔案解析失敗',
        invalidVariableFormat: '變數"{key}"格式不正確',
        invalidVariableName: '變數名稱"{name}"格式不正確',
        unsupportedFormat: '不支援的格式',
        csvMinRows: 'CSV檔案必須至少包含2列（標題和資料）',
        csvRequiredColumns: 'CSV檔案必須包含name和value欄'
      }
    }
  },
  conversation: {
    management: {
      title: '對話管理器',
      openEditor: '開啟編輯器'
    },
    title: '對話管理',
    messageCount: '共 {count} 則訊息',
    quickTemplates: '快速範本',
    clearAll: '清空全部',
    noMessages: '暫無對話訊息',
    addFirst: '新增第一則訊息',
    addFirstMessage: '在下方新增您的第一則訊息',
    addMessage: '新增訊息',
    export: '匯出',
    import: '匯入',
    exportTitle: '匯出對話',
    importTitle: '匯入對話',
    copyData: '複製資料',
    importPlaceholder: '請貼上JSON格式的對話資料',
    importError: '匯入對話失敗',
    confirmClear: '確定要清空所有訊息嗎？',
    roles: {
      system: '系統',
      user: '使用者',
      assistant: '助手'
    },
    templates: {
      simple: '簡單對話',
      basic: '基礎對話',
      roleplay: '角色扮演',
      analysis: '分析討論',
      creative: '創意寫作',
      systemPromptTest: '測試系統提示詞',
      systemPromptComparison: '對比系統提示詞效果',
      userPromptTest: '測試使用者提示詞',
      userPromptComparison: '對比使用者提示詞效果',
      testSystemPrompt: '請測試這個系統提示詞的效果',
      compareSystemPrompt: '請展示這個系統提示詞的能力',
      systemPromptOptimizeDefault: '系統提示詞優化預設情境',
      systemPromptOptimizeDefaultDesc: '預設的系統提示詞優化對話範本，包含原始提示詞和使用者問題',
      // 系統提示詞優化模式專用範本
      systemDefault: '預設測試',
      systemRoleTest: '角色能力展示',
      systemCapabilityDemo: '功能示範',
      systemConsistencyCheck: '一致性檢查',
      systemEdgeCaseTest: '邊界情況測試',
      systemMultiTurnTest: '多輪對話測試',
      // 使用者提示詞優化模式專用範本
      userSimpleTest: '簡單測試',
      userWithContext: '帶情境測試',
      userExpertMode: '專家模式',
      userStepByStep: '分步解答',
      userCreativeMode: '創意模式',
      userComparison: '對比分析',
      userDialogue: '互動對話'
    },

    placeholders: {
      system: '請輸入系統訊息（定義AI行為和情境）...',
      user: '請輸入使用者訊息（您的輸入或問題）...',
      assistant: '請輸入助手訊息（AI回應）...',
      default: '請輸入訊息內容...'
    },

    variableCount: '{count} 個變數',
    missingVariables: '缺少 {count} 個',
    detectedVariables: '偵測到變數',
    missingVariablesTitle: '缺少的變數',
    usedVariables: '使用的變數',
    preview: '預覽',
    missingVariablesList: '缺少變數',
    totalVariables: '變數總數',
    allVariablesSet: '變數已全部配置',
    createVariable: '建立',

    showPreview: '顯示預覽',
    hidePreview: '隱藏預覽',
    previewNote: '預覽顯示變數替換後的效果',
    moveUp: '上移',
    moveDown: '下移',
    deleteMessage: '刪除訊息',
    fullscreenEdit: '全螢幕編輯',
    editMessage: '編輯訊息',
    variablesDetected: '偵測到變數',
    edit: '編輯',
    editingInFullscreen: '正在全螢幕編輯...',
    missingVars: '缺少變數',
    clickToCreateVariable: '點選建立變數並開啟變數管理器',
    clickToCopyVariable: '點選複製變數名稱到剪貼簿',
    syncToTest: {
      success: '優化情境已同步到測試區域',
      notSupported: '目前測試面板不支援對話同步'
    }
  },
  tools: {
    count: '{count} 個工具'
  },
  settings: {
    title: '設定',
    advancedMode: '啟用進階功能',
    advancedModeTooltip: '啟用自訂變數和進階對話管理功能',
    advancedModeActive: '進階功能已啟用',
    language: '語言設定',
    theme: '主題設定',
    apiSettings: 'API設定',
    about: '關於',
  },
  modelManager: {
    title: '模型管理',
    textModels: '文字模型',
    imageModels: '圖像模型',
    modelList: '模型清單',
    testConnection: '測試連線',
    editModel: '編輯',
    deleteModel: '刪除',
    displayName: '顯示名稱',
    modelKey: '模型標識',
    apiUrl: 'API位址',
    apiUrlHint: '範例：https://api.example.com/v1；多數提供商位址通常以 /v1 結尾',
    defaultModel: '預設模型',
    clickToFetchModels: '點選箭頭取得模型清單',
    apiKey: 'API金鑰',
    addModel: '新增',
    addImageModel: '新增圖像模型',

    // 進階參數
    advancedParameters: {
      title: '進階參數',
      noParamsConfigured: '未配置進階參數',
      customParam: '自訂',
      add: '新增參數',
      select: '選擇參數',
      selectTitle: '新增進階參數',
      custom: '自訂參數',
      customKeyPlaceholder: '輸入參數名稱',
      customValuePlaceholder: '輸入參數值',
      stopSequencesPlaceholder: '輸入停止序列（逗號分隔）',
      unitLabel: '單位',
      currentProvider: '目前提供商',
      customProvider: '自訂',
      availableParams: '個可選參數',
      noAvailableParams: '無可選參數',
      validation: {
        dangerousParam: '此參數名稱包含潛在危險字元，不允許使用',
        invalidNumber: '參數值必須是有效的{type}',
        belowMin: '參數值不能小於 {min}',
        aboveMax: '參數值不能大於 {max}',
        mustBeInteger: '參數值必須是整數'
      }
    },

    // 佔位符
    modelKeyPlaceholder: '請輸入模型標識',
    displayNamePlaceholder: '請輸入顯示名稱',
    apiUrlPlaceholder: 'https://api.example.com/v1',
    defaultModelPlaceholder: '輸入或選擇模型名稱',
    apiKeyPlaceholder: '請輸入API金鑰（選填）',

    // 確認資訊
    deleteConfirm: '確定要刪除此模型嗎？此操作無法復原。',

    // 操作結果
    testSuccess: '{provider}連線測試成功',
    testFailed: '{provider}連線測試失敗：{error}',
    updateSuccess: '更新成功',
    updateFailed: '更新失敗：{error}',
    addSuccess: '新增成功',
    addFailed: '新增失敗：{error}',
    createSuccess: '建立成功',
    createFailed: '建立失敗：{error}',
    enableSuccess: '啟用成功',
    enableFailed: '啟用失敗：{error}',
    disableSuccess: '停用成功',
    disableFailed: '停用失敗：{error}',
    deleteSuccess: '刪除成功',
    deleteFailed: '刪除失敗：{error}',
    toggleFailed: '切換失敗：{error}',
    fetchModelsSuccess: '成功取得 {count} 個模型',
    loadingModels: '正在載入模型選項...',
    noModelsAvailable: '沒有可用模型',
    selectModel: '選擇一個模型',
    fetchModelsFailed: '取得模型清單失敗：{error}',
    needApiKeyAndBaseUrl: '請先填寫API位址和金鑰',
    needBaseUrl: '請先填寫API位址',

    // 模型取得錯誤處理
    errors: {
      crossOriginConnectionFailed: '跨域連線失敗，請檢查網路連線',
      connectionFailed: '連線失敗，請檢查API位址和網路連線',
      missingV1Suffix: 'API位址格式錯誤，OpenAI相容API需要包含"/v1"後綴',
      invalidResponseFormat: 'API回應格式不相容，請檢查API服務是否為OpenAI相容格式',
      emptyModelList: 'API回應空的模型清單，該服務可能沒有可用模型',
      apiError: 'API錯誤：{error}'
    },

    // 狀態文字
    disabled: '已停用',

    // 無障礙標籤
    testConnectionAriaLabel: '測試連線到{name}',
    editModelAriaLabel: '編輯模型{name}',
    enableModelAriaLabel: '啟用模型{name}',
    disableModelAriaLabel: '停用模型{name}',
    deleteModelAriaLabel: '刪除模型{name}',
    displayNameAriaLabel: '模型顯示名稱',
    apiUrlAriaLabel: '模型API位址',
    defaultModelAriaLabel: '預設模型名稱',
    apiKeyAriaLabel: 'API金鑰',
    cancelEditAriaLabel: '取消編輯模型',
    saveEditAriaLabel: '儲存模型修改',
    cancelAddAriaLabel: '取消新增模型',
    confirmAddAriaLabel: '確認新增模型'
  },
  templateManager: {
    title: '功能提示詞管理',
    optimizeTemplates: '系統提示詞優化範本',
    iterateTemplates: '迭代優化範本',
    optimizeTemplatesContext: '系統提示詞優化範本（情境）',
    iterateTemplatesContext: '迭代優化範本（情境）',
    optimizeTemplateList: '系統提示詞優化範本清單',
    iterateTemplateList: '迭代優化範本清單',
    userOptimizeTemplates: '使用者提示詞優化範本',
    userOptimizeTemplatesContext: '使用者提示詞優化範本（情境）',
    userOptimizeTemplateList: '使用者提示詞優化範本清單',
    // 圖像類標籤
    imageText2ImageTemplates: '圖像 · 文生圖範本',
    imageImage2ImageTemplates: '圖像 · 圖生圖範本',
    imageIterateTemplates: '圖像 · 迭代範本',
    addTemplate: '新增',
    editTemplate: '編輯',
    deleteTemplate: '刪除',
    templateCount: '{count}個提示詞',

    // 按鈕文字
    importTemplate: '匯入',
    exportTemplate: '匯出',
    copyTemplate: '複製',
    useTemplate: '使用此提示詞',
    viewTemplate: '檢視',
    migrate: '升級',
    help: '說明',

    // 範本格式
    templateFormat: '範本格式',
    simpleTemplate: '簡單範本',
    advancedTemplate: '進階範本',
    simpleTemplateHint: '不使用範本技術，直接將範本內容作為系統提示詞，使用者輸入作為使用者訊息',
    advancedTemplateHint: '支援多訊息結構和進階範本語法，可使用變數：originalPrompt、lastOptimizedPrompt、iterateInput',

    // 訊息範本
    messageTemplates: '訊息範本',
    addMessage: '新增訊息',
    removeMessage: '刪除訊息',
    moveUp: '上移',
    moveDown: '下移',
    messageContentPlaceholder: '輸入訊息內容，支援變數如 originalPrompt',

    // 角色
    roleSystem: '系統',
    roleUser: '使用者',
    roleAssistant: '助手',

    // 預覽
    preview: '預覽',

    // 全螢幕編輯
    fullscreen: '全螢幕',
    fullscreenEdit: '全螢幕編輯',
    characterCount: '{count} 個字符',

    // 遷移
    convertToAdvanced: '轉換為進階格式',
    migrationDescription: '將簡單範本轉換為進階訊息格式，提供更靈活的控制能力。',
    originalTemplate: '原始範本',
    convertedTemplate: '轉換後範本',
    applyMigration: '套用轉換',
    migrationSuccess: '範本轉換成功',
    migrationFailed: '範本轉換失敗',

    // 語法指南
    syntaxGuide: '語法指南',

    // 表單欄位
    name: '提示詞名稱',
    content: '提示詞內容',
    description: '描述',
    type: '類型',

    // 佔位符
    namePlaceholder: '請輸入提示詞名稱',
    contentPlaceholder: '請輸入提示詞內容',
    descriptionPlaceholder: '請輸入提示詞描述（選填）',
    searchPlaceholder: '搜尋提示詞...',

    // 驗證錯誤
    noMessagesError: '進階範本至少需要一則訊息',
    emptyMessageError: '訊息內容不能為空',
    emptyContentError: '範本內容不能為空',

    // 確認資訊
    deleteConfirm: '確定要刪除此提示詞嗎？此操作無法復原。',

    // 操作結果
    updateSuccess: '提示詞更新成功',
    updateFailed: '提示詞更新失敗',
    addSuccess: '提示詞新增成功',
    addFailed: '提示詞新增失敗',
    deleteSuccess: '提示詞刪除成功',
    deleteFailed: '提示詞刪除失敗',
    copySuccess: '提示詞複製成功',
    copyFailed: '提示詞複製失敗',
    importSuccess: '提示詞匯入成功',
    importFailed: '提示詞匯入失敗',
    exportSuccess: '提示詞匯出成功',
    exportFailed: '提示詞匯出失敗',

    // 無障礙標籤
    editTemplateAriaLabel: '編輯提示詞{name}',
    deleteTemplateAriaLabel: '刪除提示詞{name}',
    nameAriaLabel: '提示詞名稱輸入框',
    contentAriaLabel: '提示詞內容輸入框',
    descriptionAriaLabel: '提示詞描述輸入框',
    typeAriaLabel: '提示詞類型選擇',
    searchAriaLabel: '搜尋提示詞',
    cancelEditAriaLabel: '取消編輯提示詞',
    saveEditAriaLabel: '儲存提示詞修改',
    cancelAddAriaLabel: '取消新增提示詞',
    confirmAddAriaLabel: '確認新增提示詞',
    importTemplateAriaLabel: '匯入提示詞',
    exportTemplateAriaLabel: '匯出提示詞',
    copyTemplateAriaLabel: '複製提示詞{name}',
    useTemplateAriaLabel: '使用提示詞{name}',
    viewTemplateAriaLabel: '檢視提示詞{name}'
  },
  history: {
    title: '歷史紀錄',
    iterationNote: '迭代說明',
    optimizedPrompt: '優化後',
    confirmClear: '確定要清空所有歷史紀錄嗎？此操作無法復原。',
    confirmDeleteChain: '確定要刪除此條歷史紀錄嗎？此操作無法復原。',
    cleared: '歷史紀錄已清空',
    chainDeleted: '歷史紀錄已刪除',
    useThisVersion: '使用此版本',
    noHistory: '暫無歷史紀錄'
  },
  theme: {
    title: '主題設定',
    light: '日間',
    dark: '夜間',
    blue: '藍色',
    classic: '米杏',
    green: '綠色',
    purple: '紫色'
  },
  test: {
    title: '測試',
    content: '測試內容',
    placeholder: '請輸入要測試的內容...',
    modes: {
      simple: '簡單模式',
      conversation: '對話模式'
    },
    simpleMode: {
      label: '測試內容',
      placeholder: '輸入要測試的內容...',
      help: ''
    },
    model: '測試模型',
    startTest: '開始測試 →',
    startCompare: '開始對比 →',
    testing: '測試中...',
    toggleCompare: {
      enable: '開啟對比',
      disable: '關閉對比'
    },
    originalResult: '原始提示詞結果',
    optimizedResult: '優化後提示詞結果',
    testResult: '測試結果',
    userPromptTest: '使用者提示詞測試',
    advanced: {
      startTest: '開始測試',
      result: '測試結果',
      messageCount: '{count} 則訊息',
      missingVariables: '缺少 {count} 個變數',
      title: '進階測試'
    },
    error: {
      failed: '測試失敗',
      noModel: '請先選擇測試模型',
      noTestContent: '請輸入測試內容'
    },
    enableMarkdown: '啟用Markdown渲染',
    disableMarkdown: '關閉Markdown渲染',
    thinking: '思考過程'
  },
  template: {
    noDescription: '暫無描述',
    configure: '配置提示詞',
    selected: '已選擇',
    select: '選擇',
    noAvailableTemplates: '暫無可用範本',
    builtinLanguage: '內建範本語言',
    switchBuiltinLanguage: '切換內建範本語言',
    languageChanged: '內建範本語言已切換為 {language}',
    languageChangeError: '切換內建範本語言失敗',
    languageInitError: '初始化內建範本語言失敗',
    type: {
      optimize: '優化',
      iterate: '迭代'
    },
    view: '檢視',
    edit: '編輯',
    add: '新增',
    name: '提示詞名稱',
    namePlaceholder: '輸入提示詞名稱',
    content: '提示詞內容',
    contentPlaceholder: '輸入提示詞內容',
    description: '描述',
    descriptionPlaceholder: '輸入提示詞描述（選填）',
    close: '關閉',
    cancel: '取消',
    save: '儲存修改',
    import: {
      title: '匯入提示詞',
      supportFormat: '支援 .json 格式的提示詞檔案'
    },
    unknownTime: '未知',
    deleteConfirm: '確定要刪除這個提示詞嗎？此操作無法復原。',
    success: {
      updated: '提示詞已更新',
      added: '提示詞已新增',
      deleted: '提示詞已刪除',
      exported: '提示詞已匯出',
      imported: '提示詞已匯入'
    },
    error: {
      loadFailed: '載入提示詞失敗',
      saveFailed: '儲存提示詞失敗',
      deleteFailed: '刪除提示詞失敗',
      exportFailed: '匯出提示詞失敗',
      importFailed: '匯入提示詞失敗',
      readFailed: '讀取檔案失敗'
    }
  },
  prompt: {
    optimized: '優化後的提示詞',
    optimizing: '優化中...',
    continueOptimize: '繼續優化',
    copy: '複製',
    applyToTest: '套用到測試',
    appliedToTest: '已套用到進階測試，對話範本已自動配置',
    optimizedPlaceholder: '優化後的提示詞將顯示在這裡...',
    iterateDirection: '請輸入需要優化的方向：',
    iteratePlaceholder: '例如：使提示詞更簡潔、增加特定功能描述等...',
    confirmOptimize: '確認優化',
    iterateTitle: '迭代功能提示詞',
    selectIterateTemplate: '請選擇迭代提示詞：',
    diff: {
      compare: '與上版對比',
      exit: '退出對比',
      enable: '啟用文字對比',
      disable: '關閉文字對比'
    },
    error: {
      noTemplate: '請先選擇迭代提示詞'
    }
  },
  output: {
    title: '測試結果',
    copy: '複製',
    placeholder: '測試結果將顯示在這裡...',
    processing: '處理中...',
    success: {
      copied: '複製成功'
    },
    error: {
      copyFailed: '複製失敗'
    }
  },
  optimization: {
    contextTitle: '優化情境',
    contextDescription: '為優化提供對話背景，幫助AI更好地理解優化目標'
  },
  model: {
    select: {
      placeholder: '請選擇模型',
      configure: '配置模型',
      noModels: '請配置模型',
      noAvailableModels: '暫無可用模型'
    },
    manager: {
      displayName: '例如: 自訂模型',
      apiUrl: 'API 位址',
      defaultModel: '預設模型名稱',
      modelNamePlaceholder: '例如: gpt-3.5-turbo'
    }
  },
  toast: {
    error: {
      serviceInit: '服務未初始化，請稍後重試',
      optimizeFailed: '優化失敗',
      iterateFailed: '迭代失敗',
      compareFailed: '對比分析失敗',
      noVersionsToCompare: '沒有足夠的版本進行對比',
      noPreviousVersion: '沒有前一版本可供對比',
      testFailed: '測試失敗',
      testError: '測試過程中發生錯誤',
      loadTemplatesFailed: '載入提示詞失敗',
      initFailed: '初始化失敗：{error}',
      loadModelsFailed: '載入模型清單失敗',
      initModelSelectFailed: '初始化模型選擇失敗',
      initTemplateSelectFailed: '初始化範本選擇失敗',
      loadHistoryFailed: '載入歷史紀錄失敗',
      clearHistoryFailed: '清空歷史紀錄失敗',
      historyChainDeleteFailed: '刪除歷史紀錄失敗',
      selectTemplateFailed: '選擇提示詞失敗：{error}',
      noOptimizeTemplate: '請先選擇優化提示詞',
      noOptimizeModel: '請先選擇優化模型',
      noIterateTemplate: '請先選擇迭代提示詞',
      incompleteTestInfo: '請填寫完整的測試資訊',
      noDefaultTemplate: '無法載入預設提示詞',
      optimizeProcessFailed: '優化過程出錯',
      testProcessError: '測試過程中發生錯誤',
      initTemplateFailed: '初始化範本選擇失敗',
      appInitFailed: '應用程式初始化失敗，請重新整理或聯絡支援'
    },
    success: {
      optimizeSuccess: '優化成功',
      iterateComplete: '迭代優化完成',
      iterateSuccess: '迭代優化成功',
      modelSelected: '已選擇模型: {name}',
      templateSelected: '已選擇{type}提示詞: {name}',
      historyClear: '歷史紀錄已清空',
      historyChainDeleted: '歷史紀錄已刪除',
      historyLoaded: '歷史紀錄已載入',
      exitCompare: '已退出對比模式',
      compareEnabled: '對比模式已啟用'
    },
    warn: {
      loadOptimizeTemplateFailed: '載入已儲存的優化提示詞失敗',
      loadIterateTemplateFailed: '載入已儲存的迭代提示詞失敗'
    },
    info: {
      modelUpdated: '模型已更新',
      templateSelected: '選擇範本',
      optimizationModeAutoSwitched: '已自動切換到{mode}提示詞優化模式'
    }
  },
  log: {
    info: {
      initializing: '正在初始化...',
      initBaseServicesStart: '開始初始化基礎服務...',
      templateList: '範本清單',
      createPromptService: '建立提示詞服務...',
      initComplete: '初始化完成',
      templateSelected: '已選擇範本'
    },
    error: {
      initBaseServicesFailed: '初始化基礎服務失敗'
    }
  },
  dataManager: {
    title: '資料管理',
    export: {
      title: '匯出資料',
      description: '匯出所有歷史紀錄、模型配置、自訂提示詞和使用者設定（包括主題、語言、模型選擇等）',
      button: '匯出資料',
      success: '資料匯出成功',
      failed: '資料匯出失敗'
    },
    import: {
      title: '匯入資料',
      description: '匯入之前匯出的資料檔案（將覆蓋現有資料和使用者設定）',
      selectFile: '點選選擇檔案或拖曳檔案到此處',
      changeFile: '更換檔案',
      button: '匯入資料',
      success: '資料匯入成功',
      failed: '資料匯入失敗',
      successWithRefresh: '資料匯入成功，頁面將重新整理以套用所有變更'
    },
    contexts: {
      title: '情境集合管理',
      description: '匯入或匯出所有情境集合，包括訊息、變數和工具配置。',
      exportFile: '匯出到檔案',
      exportClipboard: '匯出到剪貼簿',
      importFile: '從檔案匯入',
      importClipboard: '從剪貼簿匯入',
      importMode: '匯入模式',
      replaceMode: '替換模式',
      appendMode: '追加模式',
      mergeMode: '合併模式',
      replaceModeDesc: '完全替換現有情境集合',
      appendModeDesc: '將匯入內容追加到現有集合（自動處理ID衝突）',
      mergeModeDesc: '合併同ID的情境，以匯入內容為準',
      importSuccess: '成功匯入 {count} 個情境',
      exportSuccess: '成功匯出 {count} 個情境到 {target}',
      predefinedVariablesSkipped: '跳過了 {count} 個預定義變數覆蓋',
      conflictingIdsRenamed: '{count} 個衝突ID已重新命名',
      currentContextRestored: '目前情境已還原為：{contextId}',
      noContextsToImport: '沒有有效的情境可匯入',
      invalidContextBundle: '無效的情境集合格式',
      importModeRequired: '請選擇匯入模式'
    },
    warning: '匯入資料將覆蓋現有的歷史紀錄、模型配置、自訂提示詞和所有使用者設定（包括主題、語言偏好等），請確保已備份重要資料。'
  },
  params: {
    "temperature": {
      "label": "溫度 (Temperature)",
      "description": "控制隨機性：較低的值（例如0.2）使輸出更集中和確定，較高的值（例如0.8）使其更隨機。"
    },
    "top_p": {
      "label": "Top P (核心取樣)",
      "description": "核心取樣。僅考慮累積機率達到Top P閾值的Token。例如，0.1表示僅考慮構成最高10%機率質量的Token。"
    },
    "max_tokens": {
      "label": "最大Token數",
      "description": "在補全中生成的最大Token數量。"
    },
    "presence_penalty": {
      "label": "存在懲罰 (Presence Penalty)",
      "description": "介於-2.0和2.0之間的數字。正值會根據新Token是否已在文字中出現來懲罰它們，增加模型談論新主題的可能性。"
    },
    "frequency_penalty": {
      "label": "頻率懲罰 (Frequency Penalty)",
      "description": "介於-2.0和2.0之間的數字。正值會根據新Token在文字中已出現的頻率來懲罰它們，降低模型逐字重複相同行的可能性。"
    },
    "timeout": {
      "label": "逾時時間 (毫秒)",
      "description_openai": "OpenAI用戶端連線的請求逾時時間（毫秒）。"
    },
    "maxOutputTokens": {
      "label": "最大輸出Token數",
      "description": "模型在單個回應中可以輸出的最大Token數。"
    },
    "top_k": {
      "label": "Top K (K選頂)",
      "description": "將下一個Token的選擇範圍限制為K個最可能的Token。有助於減少無意義Token的生成。"
    },
    "candidateCount": {
      "label": "候選數量",
      "description": "回應的生成回應數量。必須介於1和8之間。"
    },
    "stopSequences": {
      "label": "停止序列",
      "description": "遇到時將停止輸出生成的自訂字串。用逗號分隔多個序列。"
    },
    "tokens": {
      "unit": "令牌"
    }
    ,
    "size": {
      "label": "圖像尺寸",
      "description": "生成圖像的解析度/尺寸，如 1024x1024"
    },
    "quality": {
      "label": "圖像品質",
      "description": "生成圖像的品質等級：auto（自動）、high（高品質）、medium（中等）、low（低品質）"
    },
    "background": {
      "label": "背景透明度",
      "description": "設定圖像背景：auto（自動）、transparent（透明）、opaque（不透明）"
    },
    "imageSize": {
      "label": "圖像尺寸",
      "description": "生成圖像的解析度/尺寸，如 1024x1024"
    },
    "steps": {
      "label": "迭代步數",
      "description": "擴散/推理迭代次數，步數越多通常品質越高但更慢"
    },
    "guidance": {
      "label": "引導強度",
      "description": "提示詞遵循強度，值越大越貼近提示"
    },
    "cfg": {
      "label": "CFG強度",
      "description": "無分類器引導強度，用於控制生成圖像與提示詞的匹配程度（僅Qwen-Image模型）"
    },
    "negativePrompt": {
      "label": "負向提示詞",
      "description": "不希望圖像出現的內容或風格"
    },
    "responseFormat": {
      "label": "回應格式",
      "description": "回應圖片的格式（URL 或 Base64 編碼）"
    },
    "watermark": {
      "label": "浮水印",
      "description": "是否在生成的圖像上新增浮水印"
    },
    "sequentialGeneration": {
      "label": "序列生成",
      "description": "控制序列圖像生成模式（支援的模型）"
    },
    "seed": {
      "label": "隨機種子",
      "description": "用於控制生成結果的隨機數種子，相同種子產生相同結果"
    }
  },
  contextEditor: {
    // Variables tab (新增)
    variablesTab: '變數',
    contextVariables: '情境變數',
    contextVariablesDesc: '管理目前情境的變數覆蓋，不影響全域變數',
    noContextVariables: '暫無情境變數',
    addFirstContextVariable: '新增您的第一個情境變數',
    addContextVariable: '新增情境變數',
    editContextVariable: '編輯情境變數',
    deleteContextVariable: '刪除情境變數',
    deleteContextVariableConfirm: '確定要刪除情境變數"{name}"嗎？刪除後將回退到全域值。',
    contextVariableDeleted: '已刪除情境變數：{name}',
    variableSource: '變數來源',
    variableStatus: '狀態',
    contextOverride: '情境覆蓋',
    globalVariable: '全域變數',
    predefinedVariable: '預定義變數',
    missingVariable: '缺少變數',
    variableFromContext: '來自情境',
    variableFromGlobal: '來自全域',
    variableFromPredefined: '預定義',
    predefinedVariableCannotOverride: '預定義變數不可覆蓋',
    addVariable: '新增情境變數',
    editVariable: '編輯情境變數',
    contextVariableHelp: '情境變數會覆蓋全域同名變數，但不能覆蓋預定義變數',
    finalVariablesPreview: '最終變數預覽',
    contextVariableName: '變數名稱',
    contextVariableValue: '變數值',
    variableNameRequired: '變數名稱是必需的',
    variableNameInvalid: '變數名稱格式無效',
    variableNamePredefined: '不能使用預定義變數名稱',
    variableNameExists: '變數名稱已存在',
    variableValueRequired: '變數值是必需的',

    // Import/Export context variables
    importContextVariables: '匯入情境變數',
    exportContextVariables: '匯出情境變數',
    contextVariableImported: '已匯入 {count} 個情境變數',
    contextVariableSkipped: '跳過 {count} 個預定義變數衝突',

    // Tools editor（新增）
    editTool: '編輯工具',
    deleteToolConfirm: '確定要刪除工具"{name}"嗎？',
    toolDeleted: '已刪除工具：{name}',
    exampleTemplate: '範例範本',
    exampleTemplateDesc: '可從天氣範例開始，或從空白範本開始。',
    basicInfo: '基本資訊',
    toolNamePlaceholder: '請輸入工具名稱，例如 get_weather',
    toolDescPlaceholder: '請輸入工具描述',
    parameters: '參數配置',
    parametersPlaceholder: '請輸入JSON格式的參數配置',
    invalidJson: '無效的 JSON',
    useExample: '使用範例',
    startEmpty: '從空白開始',
    save: '儲存',
    toolsTooltip: '工具：{tools}',
    toolsCount: '{count} 個工具',
    title: '情境編輯器',
    systemTemplates: '系統範本',
    userTemplates: '使用者範本',
    // Basic
    noMessages: '暫無訊息',
    addFirstMessage: '新增您的第一則訊息',
    addMessage: '新增訊息',
    noTools: '暫無工具',
    addFirstTool: '新增第一個工具',
    addTool: '新增工具',
    noDescription: '暫無描述',
    parametersCount: '{count} 個參數',

    // Templates
    templateCategory: '範本分類',
    templateCount: '{count} 個範本',
    noTemplates: '暫無範本',
    noTemplatesHint: '在範本管理器中新增範本',
    applyTemplate: '套用範本',
    moreMessages: '還有 {count} 則訊息...',
    templateApplied: '已套用範本：{name}',

    // Import/Export
    importTitle: '匯入情境資料',
    importFormat: '匯入格式：',
    selectFile: '選擇檔案',
    orPasteText: '或在下方貼上文字',
    import: '匯入',
    exportTitle: '匯出情境資料',
    exportFormat: '匯出格式：',
    exportPreview: '匯出預覽：',
    copyToClipboard: '複製到剪貼簿',
    saveToFile: '儲存到檔案',

    // Missing keys
    override: '情境變數',
    createOverride: '建立情境變數',
    overrideCount: '{count} 個情境變數',
    variableOverrides: '情境變數',
    globalVariables: '全域: {count}',
    noVariables: '暫無變數',
    addFirstVariable: '新增第一個情境變數',
    variableName: '變數名稱',
    variableValue: '變數值',
    variableNamePlaceholder: '請輸入變數名稱（不含大括號）',
    predefinedVariableWarning: '不能修改預定義變數',
    variableValuePlaceholder: '請輸入變數值',
    deleteVariableConfirm: '確定要刪除情境變數"{name}"嗎？',
    variableDeleted: '已刪除情境變數：{name}',
    predefinedVariableError: '不能修改預定義變數',
    variableSaved: '已{action}情境變數：{name}',

    // Variable source labels
    variableSourceLabels: {
      global: '全域',
      context: '情境'
    },

    // Variable status labels
    variableStatusLabels: {
      active: '活躍',
      overridden: '被覆蓋'
    }
  },
  updater: {
    title: '應用程式更新',
    checkForUpdates: '檢查更新',
    currentVersion: '目前版本',
    versionLoadFailed: '版本取得失敗',
    downloadFailed: '下載失敗',
    dismiss: '關閉',
    noStableVersionAvailable: '沒有可用的正式版本',
    noPrereleaseVersionAvailable: '沒有可用的預覽版本',
    failedToGetStableInfo: '無法取得正式版更新資訊',
    failedToGetPrereleaseInfo: '無法取得預覽版更新資訊',
    alreadyLatestStable: '目前已是最新正式版 ({version})',
    alreadyLatestPrerelease: '目前已是最新預覽版 ({version})',
    stableDownloadFailed: '正式版下載失敗: {error}',
    prereleaseDownloadFailed: '預覽版下載失敗: {error}',
    unknownError: '未知錯誤',
    stable: '正式版',
    prerelease: '預覽版',
    downloadFailedGeneric: '{type}下載失敗: {error}',
    warning: '警告',
    info: '資訊',
    versionIgnored: '版本 {version} 已被忽略',
    checkFailed: '檢查失敗',
    ignored: '已忽略',
    unignore: '取消忽略',
    latestVersion: '最新版本',
    latestStableVersion: '最新正式版',
    noPrereleaseAvailable: '暫無預覽版',
    latestIsStable: '最新版本為正式版',
    latestPrereleaseVersion: '最新預覽版',
    viewStable: '檢視正式版',
    viewPrerelease: '檢視預覽版',
    allowPrerelease: '接收預覽版更新',
    noUpdatesAvailable: '目前已是最新版本',
    checkNow: '檢查更新',
    checking: '正在檢查更新...',
    checkingForUpdates: '正在檢查更新...',
    newVersionAvailable: '發現新版本',
    viewDetails: '檢視詳情',
    downloadUpdate: '下載更新',
    download: '下載',
    updateAvailable: '有更新',
    hasUpdate: '有更新',
    details: '詳情',
    ignore: '忽略',
    ignoreVersion: '忽略此版本',
    downloading: '正在下載更新...',
    downloadingShort: '下載中...',
    downloadComplete: '下載完成',
    clickInstallToRestart: '點選下方按鈕安裝並重新啟動應用程式',
    installAndRestart: '安裝並重新啟動',
    updateError: '更新失敗',
    downloadError: '下載失敗',
    installError: '安裝失敗',
    upToDate: '已是最新版本',
    viewOnGitHub: '在 GitHub 上檢視',
    devEnvironment: '開發環境：更新檢查已停用',
    clickToCheck: '點選檢查更新',
    noReleasesFound: '未找到發布版本。此專案可能尚未發布任何版本。',
    noStableReleasesFound: '未找到穩定版本。可能只有預發布版本可用。'
  },
  accessibility: {
    labels: {
      contextEditor: '情境編輯器',
      statisticsToolbar: '統計工具列',
      editorMain: '編輯器主區域',
      editorTabs: '編輯器標籤頁',
      messageCount: '訊息數量',
      variableCount: '變數數量',
      messagesTab: '訊息標籤頁',
      messagesPanel: '訊息面板',
      messagesList: '訊息清單',
      conversationMessages: '對話訊息',
      messageItem: '訊息項目',
      templatesPanel: '範本面板',
      templateCard: '範本卡片',
      toolCount: '工具數量',
      variablesPanel: '變數面板',
      emptyMessages: '空訊息狀態',
      messageIcon: '訊息圖示',
      addFirstMessage: '新增第一則訊息按鈕',
      emptyTemplates: '空範本狀態',
      emptyVariables: '空變數狀態'
    },
    descriptions: {
      contextEditor: '編輯和管理對話情境和工具',
      messagesTab: '用於管理對話訊息的標籤頁'
    },
    liveRegion: {
      modalClosed: '模式對話框已關閉',
      modalOpened: '模態框已開啟',
      tabChanged: '標籤頁已切換'
    }
  },
  toolCall: {
    title: '工具呼叫',
    count: '{count} 個呼叫',
    arguments: '參數',
    result: '結果',
    error: '錯誤',
    status: {
      pending: '處理中',
      success: '成功',
      error: '失敗'
    }
  },

  // 圖像模式配置
  imageMode: {
    text2image: '文生圖',
    image2image: '圖生圖',
    text2imageDescription: '從文字描述生成圖像',
    image2imageDescription: '基於現有圖像進行修改',
    uploadRequired: '圖生圖模式需要先上傳參考圖片'
  },

  imageWorkspace: {
    // 輸入區域
    input: {
      originalPrompt: '原始提示詞',
      originalPromptPlaceholder: '請輸入需要優化的圖像生成提示詞',
      image: '圖片',
      selectImage: '📁 選擇',
      optimizeTemplate: '優化範本',
      templatePlaceholder: '請選擇範本',
      textModel: '文字模型',
      modelPlaceholder: '選擇模型',
      optimizing: '優化中...',
      optimizePrompt: '優化提示詞'
    },

    // 圖像生成區域
    generation: {
      imageModel: '圖像模型',
      imageModelPlaceholder: '請選擇圖像模型',
      compareMode: '對比模式',
      generating: '生成中...',
      generateImage: '生成圖像',
      processing: '處理中'
    },

    // 結果顯示
    results: {
      originalPromptResult: '原始提示詞',
      optimizedPromptResult: '優化提示詞',
      testResult: '測試結果',
      download: '下載',
      copyBase64: '複製Base64',
      copyText: '複製文字',
      copySuccess: '複製成功',
      copyError: '複製失敗',
      textOutput: '文字輸出',
      noOriginalResult: '暫無原始結果',
      noOptimizedResult: '暫無優化結果',
      noGenerationResult: '暫無生成結果'
    },

    // 上傳彈窗
    upload: {
      title: '上傳參考圖片',
      dragText: '點選或拖曳上傳圖片',
      fileRequirements: '支援 PNG/JPEG 格式，檔案大小不超過 10MB',
      uploadFailed: '上傳失敗',
      uploadSuccess: '上傳成功'
    }
  },

  // 圖像模型管理器配置介面
  image: {
    capability: {
      text2image: '文生圖',
      image2image: '圖生圖',
      multiImage: '多圖生成',
      highResolution: '高解析度'
    },
    step: {
      basic: '基本資訊',
      provider: '選擇提供商',
      connection: '連線配置',
      model: '模型選擇',
      parameters: '參數設定'
    },
    config: {
      basic: {
        title: '基本配置'
      },
      name: {
        label: '配置名稱',
        placeholder: '請輸入配置名稱'
      },
      enabled: {
        label: '啟用狀態'
      },
      updateSuccess: '配置已更新',
      createSuccess: '配置已建立',
      saveFailed: '儲存配置失敗',
      loadFailed: '載入配置失敗'
    },
    provider: {
      title: '提供商選擇',
      section: '提供商配置',
      label: '圖像提供商',
      placeholder: '請選擇提供商',
      loadFailed: '載入提供商失敗'
    },
    connection: {
      title: '連線配置',
      test: '測試連線',
      testing: '正在測試連線...',
      testSuccess: '功能測試成功',
      testFailed: '連線測試失敗',
      testError: '連線測試錯誤',
      functionTestTextToImage: '文生圖測試',
      functionTestImageToImage: '圖生圖測試',
      testImagePreview: '測試圖像預覽',
      downloadSuccess: '圖像下載成功',
      downloadFailed: '圖像下載失敗',
      apiKey: {
        label: 'API 金鑰',
        description: '用於認證的金鑰',
        placeholder: '請輸入 API Key'
      },
      baseURL: {
        label: 'API 位址',
        description: '服務端點的基礎位址',
        placeholder: 'https://api.example.com/v1'
      },
      organization: {
        label: '組織標識（選填）',
        description: 'OpenAI 組織 ID（如適用）',
        placeholder: 'org_xxx'
      },
      validation: {
        missing: '缺少必填欄位：{fields}',
        invalidType: '{field} 類型應為 {expected}，實際為 {actual}'
      }
    },
    model: {
      section: '模型配置',
      label: '選擇模型',
      placeholder: '請選擇模型',
      loading: '正在載入模型...',
      refreshTooltip: '重新整理模型清單',
      refreshDisabledTooltip: {
        dynamicNotSupported: '目前提供商不支援動態取得模型',
        connectionRequired: '需要有效的連線配置才能重新整理模型'
      },
      refreshSuccess: '模型清單已重新整理',
      refreshError: '重新整理模型清單失敗',
      selectRequired: '請選擇一個模型進行測試',
      count: '共 {count} 個模型',
      capabilities: '模型能力',
      empty: '暫無圖像模型配置',
      addFirst: '新增第一個圖像模型',
      staticLoaded: '已載入靜態模型',
      noStaticModels: '沒有靜態模型',
      staticLoadFailed: '載入靜態模型失敗',
      dynamicLoaded: '已載入動態模型',
      dynamicFailed: '載入動態模型失敗，已回退靜態清單',
      connectionRequired: '請先填寫並校驗連線資訊',
      refreshFailed: '重新整理模型失敗'
    },
    parameters: {
      noParameters: '該模型暫無可配置參數',
      advancedConfig: '進階參數配置',
      advancedConfigDescription: '選填，用於覆蓋預設模型參數'
    },
    params: {
      size: {
        label: '圖像尺寸',
        description: '生成圖像的解析度/尺寸，如 1024x1024'
      },
      quality: {
        label: '圖像品質',
        description: '生成圖像的品質等級：auto（自動）、high（高品質）、medium（中等）、low（低品質）'
      },
      background: {
        label: '背景透明度',
        description: '設定圖像背景：auto（自動）、transparent（透明）、opaque（不透明）'
      }
    }
  }
};