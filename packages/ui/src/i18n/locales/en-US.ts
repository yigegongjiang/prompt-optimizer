export default {
  common: {
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    edit: 'Edit',
    copy: 'Copy',
    create: 'Create',
    update: 'Update',
    search: 'Search',
    settings: 'Settings',
    language: 'Language',
    templates: 'Templates',
    history: 'History',
    close: 'Close',
    test: 'Test',
    enable: 'Enable',
    disable: 'Disable',
    enabled: 'Enabled',
    disabled: 'Disabled',
    add: 'Add',
    remove: 'Remove',
    title: 'Title',
    description: 'Description',
    lastModified: 'Last Modified',
    noDescription: 'No description',
    builtin: 'Built-in',
    custom: 'Custom',
    currentTemplate: 'Current Template',
    use: 'Use',
    expand: 'Expand',
    collapse: 'Collapse',
    hide: 'Hide',
    clear: 'Clear',
    createdAt: 'Created at',
    version: 'V{version}',
    actions: 'Actions',
    optimize: 'Optimize',
    iterate: 'Iterate',
    system: 'System',
    user: 'User',
    copySuccess: 'Copied to clipboard',
    copyFailed: 'Copy Failed',
    appName: 'Prompt Optimizer',
    selectFile: 'Select File',
    exporting: 'Exporting...',
    importing: 'Importing...',
    number: 'Number',
    integer: 'Integer',
    optional: 'Optional',
    content: 'Content',
    noContent: 'No content',
    clickToEdit: 'Click to edit',
    generating: 'Generating...',
    generatingReasoning: 'Thinking...',
    copyContent: 'Copy Content',
    copyAll: 'Copy All',
    focus: 'Focus',
    expandReasoning: 'Expand reasoning',
    collapseReasoning: 'Collapse reasoning',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    deleteConfirmation: 'Are you sure you want to delete this?',
    editingDisabledDuringStream: 'Editing is disabled while content is being generated',
    markdown: 'Render',
    text: 'Text',
    switchToTextView: 'Switch to Plain Text View',
    switchToMarkdownView: 'Switch to Markdown Render View',
    copied: 'Copied',
    render: 'Render',
    source: 'Source',
    reasoning: 'Reasoning',
    compare: 'Compare',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    preview: 'Preview',
    import: 'Import',
    export: 'Export',
    next: 'Next'
  },
  actions: {
    copy: 'Copy',
    fullscreen: 'Fullscreen'
  },
  nav: {
    home: 'Home',
    dashboard: 'Dashboard',
    promptOptimizer: 'Prompt Optimizer',
    modelManager: 'Model Manager',
    history: 'History',
    templates: 'Templates',
    dataManager: 'Data Manager',
    advancedMode: 'Advanced Mode',
    variableManager: 'Variable Manager',
    basicMode: 'Basic',
    contextMode: 'Context',
    imageMode: 'Image',
  },
  promptOptimizer: {
    title: 'Prompt Optimizer',
    inputPlaceholder: 'Enter your prompt to optimize...',
    optimize: 'Optimize →',
    history: 'History',
    save: 'Save Prompt',
    share: 'Share',
    export: 'Export',
    originalPrompt: 'Original Prompt',
    optimizeModel: 'Optimization Model',
    templateLabel: 'Optimization Template',
    originalPromptPlaceholder: 'Enter your original prompt to optimize...',

    // New: Optimization Mode Related
    optimizationMode: 'Optimization Mode',
    systemPrompt: 'System Prompt Optimization',
    userPrompt: 'User Prompt Optimization',
    systemPromptInput: 'System Prompt',
    userPromptInput: 'User Prompt',
    systemPromptPlaceholder: 'Enter the system prompt to optimize...',
    userPromptPlaceholder: 'Enter the user prompt to optimize...',
    systemPromptHelp: 'System Prompt Optimization Mode: Optimize system prompts that define AI assistant role, behavior and response style',
    userPromptHelp: 'User Prompt Optimization Mode: Optimize user prompts to improve AI interaction effectiveness and accuracy',
    contextManagement: 'Context Management',
    optimizationContext: 'Optimization Context',
    conversationContext: 'Conversation Context',
    contextHelp: 'In advanced mode, you can add conversation context to help AI better understand optimization requirements',
    contextTitle: 'Optimization Context',
    contextDescription: 'Provide conversation background for optimization to help AI better understand optimization goals'
  },
  variables: {
    title: 'Variable Manager',
    count: 'Variables: {count}',
    missing: 'Missing: {count}',
    total: '{count} variables total',
    predefined: 'Predefined Variables',
    custom: 'Custom Variables',
    predefinedBadge: 'Built-in',
    customBadge: 'Custom',
    predefinedDescriptions: {
      originalPrompt: 'Current original prompt content',
      lastOptimizedPrompt: 'Last optimized prompt result',
      iterateInput: 'Input content for iteration optimization',
      currentPrompt: 'Current prompt in use (optimized or original)',
      userQuestion: 'User question or input',
      conversationContext: 'Current conversation context information',
      toolsContext: 'Available tools information (auto-injected)'
    },
    readonly: 'Read-only',
    emptyValue: '(empty)',
    noCustomVariables: 'No custom variables yet',
    addFirstVariable: 'Add your first custom variable below',
    addNew: 'Add New Variable',
    name: 'Variable Name',
    value: 'Variable Value',
    namePlaceholder: 'e.g., userName, productType',
    valuePlaceholder: 'Enter variable value',
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    export: 'Export',
    import: 'Import',
    exportTitle: 'Export Variables',
    importTitle: 'Import Variables',
    copyData: 'Copy Data',
    importPlaceholder: 'Paste variable data in JSON format',
    errors: {
      invalidName: 'Variable name must start with letter and contain only letters, numbers, and underscores',
      predefinedName: 'Cannot use predefined variable name',
      duplicateName: 'Variable name already exists',
      valueTooLong: 'Variable value is too long (max 10,000 characters)',
      importFailed: 'Failed to import variables'
    },
    management: {
      title: 'Variable Management',
      addVariable: 'Add Variable',
      import: 'Import',
      export: 'Export',
      variableName: 'Variable Name',
      value: 'Value',
      description: 'Description',
      sourceLabel: 'Source',
      preview: 'Preview',
      deleteConfirm: 'Are you sure you want to delete variable "{name}"?',
      totalCount: '{count} variables total',
      noVariables: 'No variables',
      exportTitle: 'Export Variables',
      exportFormat: 'Export Format',
      exportInfo: 'Export Information',
      exportPreview: 'Export Preview',
      variables: 'variables',
      download: 'Download',
      source: {
        predefined: 'Predefined',
        custom: 'Custom'
      }
    },
    editor: {
      addTitle: 'Add Variable',
      editTitle: 'Edit Variable',
      variableName: 'Variable Name',
      variableNamePlaceholder: 'e.g., userName',
      variableNameHelp: 'Can only contain letters, numbers, and underscores, must start with letter or underscore',
      variableValue: 'Variable Value',
      variableValuePlaceholder: 'Enter variable value...',
      variableValueHelp: 'Supports multi-line text, up to 5000 characters',
      preview: 'Preview',
      usage: 'Usage',
      resolvedValue: 'Resolved Value',
      errors: {
        nameRequired: 'Variable name is required',
        nameInvalid: 'Invalid variable name format',
        namePredefined: 'Cannot use predefined variable name',
        nameExists: 'Variable name already exists',
        valueRequired: 'Variable value is required',
        valueTooLong: 'Variable value cannot exceed 5000 characters'
      }
    },
    preview: {
      title: 'Variable Preview',
      variableName: 'Variable Name',
      source: 'Source',
      valueLength: 'Length',
      characters: 'characters',
      value: 'Variable Value',
      copyValue: 'Copy Value',
      copy: 'Copy',
      copied: 'Copied',
      usageExamples: 'Usage Examples',
      inTemplate: 'In Template',
      inMessage: 'In Message'
    },
    importer: {
      title: 'Import Variables',
      fromFile: 'From File',
      fromText: 'From Text',
      dropFile: 'Drop file here',
      orClickToSelect: 'or click to select file',
      fileRequirements: 'File Requirements',
      supportedFormats: 'Supported Formats',
      maxSize: 'Max Size',
      structureExample: 'Structure example: key-value pairs',
      textFormat: 'Text Format',
      csvText: 'CSV Text',
      txtText: 'TXT Text',
      keyValuePairs: 'Key-Value Pairs',
      csvTextHelp: 'Supports CSV format variable data',
      txtTextHelp: 'Supports TXT format variable data',
      previewTitle: 'Preview ({count} variables)',
      conflict: 'Conflict',
      conflictWarning: '{count} variables conflict with predefined variables and will be skipped',
      import: 'Import',
      errors: {
        invalidFormat: 'Invalid JSON format',
        invalidFileType: 'Please select a CSV or TXT file',
        fileTooLarge: 'File too large, please select a file smaller than 10MB',
        fileReadError: 'File read failed',
        parseError: 'File parse failed',
        invalidVariableFormat: 'Variable "{key}" format is invalid',
        invalidVariableName: 'Variable name "{name}" format is invalid',
        unsupportedFormat: 'Unsupported format',
        csvMinRows: 'CSV file must have at least 2 rows (header and data)',
        csvRequiredColumns: 'CSV file must contain name and value columns'
      }
    }
  },
  conversation: {
    management: {
      title: 'Conversation Manager',
      openEditor: 'Open Editor'
    },
    title: 'Conversation Manager',
    messageCount: '{count} messages',
    quickTemplates: 'Quick Templates',
    clearAll: 'Clear All',
    noMessages: 'No conversation messages yet',
    addFirstMessage: 'Add your first message below',
    addFirst: 'Add your first message below',
    addMessage: 'Add Message',
    export: 'Export',
    import: 'Import',
    exportTitle: 'Export Conversation',
    importTitle: 'Import Conversation',
    copyData: 'Copy Data',
    importPlaceholder: 'Paste conversation data in JSON format',
    importError: 'Failed to import conversation',
    confirmClear: 'Are you sure you want to clear all messages?',
    
    roles: {
      system: 'System',
      user: 'User',
      assistant: 'Assistant'
    },
    templates: {
      simple: 'Simple Chat',
      roleplay: 'Role Play',
      analysis: 'Analysis Discussion',
      creative: 'Creative Writing',
      systemPromptTest: 'Test System Prompt',
      systemPromptComparison: 'Compare System Prompt Effects',
      userPromptTest: 'Test User Prompt',
      userPromptComparison: 'Compare User Prompt Effects',
      testSystemPrompt: 'Please test the effectiveness of this system prompt',
      compareSystemPrompt: 'Please demonstrate the capabilities of this system prompt',
      systemPromptOptimizeDefault: 'System Prompt Optimization Default Context',
      systemPromptOptimizeDefaultDesc: 'Default conversation template for system prompt optimization, including original prompt and user question',
      // System prompt optimization mode templates
      systemDefault: 'Default Test',
      systemRoleTest: 'Role Capability Demo',
      systemCapabilityDemo: 'Feature Demonstration',
      systemConsistencyCheck: 'Consistency Check',
      systemEdgeCaseTest: 'Edge Case Test',
      systemMultiTurnTest: 'Multi-turn Conversation Test',
      // User prompt optimization mode templates
      userSimpleTest: 'Simple Test',
      userWithContext: 'Test with Context',
      userExpertMode: 'Expert Mode',
      userStepByStep: 'Step-by-step Response',
      userCreativeMode: 'Creative Mode',
      userComparison: 'Comparative Analysis',
      userDialogue: 'Interactive Dialogue'
    },
    
    placeholders: {
      system: 'Enter system message (defines AI behavior and context)...',
      user: 'Enter user message (your input or question)...',
      assistant: 'Enter assistant message (AI response)...',
      default: 'Enter message content...'
    },
    
    variableCount: '{count} variables',
    missingVariables: '{count} missing',
    detectedVariables: 'Variables found',
    missingVariablesTitle: 'Missing Variables',
    usedVariables: 'Used Variables',
    preview: 'Preview',
    missingVariablesList: 'Missing variables',
    totalVariables: 'Total Variables',
    allVariablesSet: 'All Variables Set',
    createVariable: 'Create',
    
    showPreview: 'Show Preview',
    hidePreview: 'Hide Preview',
    previewNote: 'Preview shows how variables will be replaced',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    deleteMessage: 'Delete Message',
    fullscreenEdit: 'Fullscreen Edit',
    editMessage: 'Edit Message',
    variablesDetected: 'Variables Detected',
    edit: 'Edit',
    editingInFullscreen: 'Editing in fullscreen...',
    missingVars: 'Missing Variables',
    clickToCreateVariable: 'Click to create variable and open Variable Manager',
    clickToCopyVariable: 'Click to copy variable name to clipboard',
    syncToTest: {
      success: 'Optimization context synced to test area',
      notSupported: 'Current test panel does not support conversation sync'
    }
  },
  tools: {
    count: '{count} tools'
  },
  settings: {
    title: 'Settings',
    advancedMode: 'Enable Advanced Features',
    advancedModeTooltip: 'Enable custom variables and advanced conversation management',
    advancedModeActive: 'Advanced features are enabled',
    language: 'Language Settings',
    theme: 'Theme Settings',
    apiSettings: 'API Settings',
    about: 'About',
  },
  modelManager: {
    title: 'Model Manager',
    textModels: 'Text Models',
    imageModels: 'Image Models',
    modelList: 'Model List',
    testConnection: 'Test Connection',
    editModel: 'Edit',
    deleteModel: 'Delete',
    displayName: 'Display Name',
    modelKey: 'Model Key',
    apiUrl: 'API URL',
    apiUrlHint: 'Example: https://api.example.com/v1; most providers use endpoints ending with /v1',
    defaultModel: 'Default Model',
    clickToFetchModels: 'Click arrow to fetch model list',
    apiKey: 'API Key',
    addModel: 'Add',
    addImageModel: 'Add Image Model',

    // Advanced Parameters
    advancedParameters: {
      title: 'Advanced Parameters',
      noParamsConfigured: 'No advanced parameters configured',
      customParam: 'Custom',
      add: 'Add Parameter',
      select: 'Select a parameter',
      selectTitle: 'Add Advanced Parameter',
      custom: 'Custom Parameter',
      customKeyPlaceholder: 'Enter parameter name',
      customValuePlaceholder: 'Enter parameter value',
      stopSequencesPlaceholder: 'Enter stop sequences (comma-separated)',
      unitLabel: 'Unit',
      currentProvider: 'Current Provider',
      customProvider: 'Custom',
      availableParams: 'available parameters',
      noAvailableParams: 'no available parameters',
      validation: {
        dangerousParam: 'This parameter is considered dangerous and is not allowed',
        invalidNumber: 'Must be a valid number',
        belowMin: 'Value cannot be less than {min}',
        aboveMax: 'Value cannot be greater than {max}',
        mustBeInteger: 'Must be an integer'
      }
    },

    // Placeholders
    modelKeyPlaceholder: 'Enter model key',
    displayNamePlaceholder: 'Enter display name',
    apiUrlPlaceholder: 'https://api.example.com/v1',
    defaultModelPlaceholder: 'Type or select a model name',
    apiKeyPlaceholder: 'Enter API key (optional)',

    // Confirmation
    deleteConfirm: 'Are you sure you want to delete this model? This action cannot be undone.',

    // Operation Results
    testSuccess: 'Connection successful for {provider}!',
    testFailed: 'Connection failed for {provider}: {error}',
    updateSuccess: 'Update successful',
    updateFailed: 'Update failed: {error}',
    addSuccess: 'Model added successfully',
    addFailed: 'Failed to add model: {error}',
    createSuccess: 'Model created successfully',
    createFailed: 'Failed to create model: {error}',
    enableSuccess: 'Model enabled',
    enableFailed: 'Failed to enable model: {error}',
    disableSuccess: 'Model disabled',
    disableFailed: 'Failed to disable model: {error}',
    deleteSuccess: 'Model deleted',
    deleteFailed: 'Failed to delete model: {error}',
    toggleFailed: 'Toggle failed: {error}',
    fetchModelsSuccess: 'Successfully retrieved 1 model | Successfully retrieved {count} models',
    loadingModels: 'Loading model options...',
    noModelsAvailable: 'No models available',
    selectModel: 'Select a model',
    fetchModelsFailed: 'Failed to fetch models: {error}',
    needApiKeyAndBaseUrl: 'Please fill API key and base URL first',
    needBaseUrl: 'Please fill in API URL first',

    // Error handling for model fetching
    errors: {
      crossOriginConnectionFailed: 'Cross-origin connection failed. Please check network connection',
      connectionFailed: 'Connection failed. Please check API address and network connection',
      missingV1Suffix: 'API URL format error. OpenAI-compatible APIs should include "/v1" suffix',
      invalidResponseFormat: 'API response format incompatible. Please check if API service uses OpenAI-compatible format',
      emptyModelList: 'API returned empty model list. This service may have no available models',
      apiError: 'API error: {error}'
    },

    // Status Text
    disabled: 'Disabled',

    // Accessibility Labels
    testConnectionAriaLabel: 'Test connection to {name}',
    editModelAriaLabel: 'Edit model {name}',
    enableModelAriaLabel: 'Enable model {name}',
    disableModelAriaLabel: 'Disable model {name}',
    deleteModelAriaLabel: 'Delete model {name}',
    displayNameAriaLabel: 'Model display name',
    apiUrlAriaLabel: 'Model API URL',
    defaultModelAriaLabel: 'Default model name',
    apiKeyAriaLabel: 'API key',
    cancelEditAriaLabel: 'Cancel editing model',
    saveEditAriaLabel: 'Save model changes',
    cancelAddAriaLabel: 'Cancel adding model',
    confirmAddAriaLabel: 'Confirm add model'
  },
  templateManager: {
    title: 'Template Manager',
    optimizeTemplates: 'System Prompt Optimization Templates',
    iterateTemplates: 'Iteration Optimization Templates',
    optimizeTemplatesContext: 'System Prompt Optimization Templates (Context)',
    iterateTemplatesContext: 'Iteration Optimization Templates (Context)',
    optimizeTemplateList: 'System Prompt Optimization Template List',
    iterateTemplateList: 'Iteration Optimization Template List',
    userOptimizeTemplates: 'User Prompt Optimization Templates',
    userOptimizeTemplatesContext: 'User Prompt Optimization Templates (Context)',
    userOptimizeTemplateList: 'User Prompt Optimization Template List',
    // Image categories
    imageText2ImageTemplates: 'Image · Text-to-Image Templates',
    imageImage2ImageTemplates: 'Image · Image-to-Image Templates',
    imageIterateTemplates: 'Image · Iterate Templates',
    addTemplate: 'Add',
    editTemplate: 'Edit',
    deleteTemplate: 'Delete',
    templateCount: '{count} template | {count} templates',

    // Button Text
    importTemplate: 'Import',
    exportTemplate: 'Export',
    copyTemplate: 'Copy',
    useTemplate: 'Use',
    viewTemplate: 'View',
    migrate: 'Upgrade',
    help: 'Help',

    // Template Format
    templateFormat: 'Template Format',
    simpleTemplate: 'Simple Template',
    advancedTemplate: 'Advanced Template',
    simpleTemplateHint: 'No template technology used, template content directly serves as system prompt, user input as user message',
    advancedTemplateHint: 'Supports multi-message structure and advanced template syntax, available variables: originalPrompt, lastOptimizedPrompt, iterateInput',

    // Message Templates
    messageTemplates: 'Message Templates',
    addMessage: 'Add Message',
    removeMessage: 'Remove Message',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    messageContentPlaceholder: 'Enter message content, supports variables like originalPrompt',

    // Roles
    roleSystem: 'System',
    roleUser: 'User',
    roleAssistant: 'Assistant',

    // Preview
    preview: 'Preview',

    // Fullscreen Edit
    fullscreen: 'Fullscreen',
    fullscreenEdit: 'Fullscreen Edit',
    characterCount: '{count} characters',

    // Migration
    convertToAdvanced: 'Convert to Advanced Format',
    migrationDescription: 'Convert simple template to advanced message format for more flexible control.',
    originalTemplate: 'Original Template',
    convertedTemplate: 'Converted Template',
    applyMigration: 'Apply Conversion',
    migrationSuccess: 'Template converted successfully',
    migrationFailed: 'Template conversion failed',

    // Syntax Guide
    syntaxGuide: 'Syntax Guide',

    // Form Fields
    name: 'Template Name',
    content: 'Template Content',
    description: 'Description',
    type: 'Type',

    // Placeholders
    namePlaceholder: 'Enter template name',
    contentPlaceholder: 'Enter template content',
    descriptionPlaceholder: 'Enter template description (optional)',
    searchPlaceholder: 'Search templates...',

    // Validation Errors
    noMessagesError: 'Advanced template requires at least one message',
    emptyMessageError: 'Message content cannot be empty',
    emptyContentError: 'Template content cannot be empty',

    // Confirmation
    deleteConfirm: 'Are you sure you want to delete this template? This action cannot be undone.',

    // Operation Results
    updateSuccess: 'Template updated successfully',
    updateFailed: 'Failed to update template',
    addSuccess: 'Template added successfully',
    addFailed: 'Failed to add template',
    deleteSuccess: 'Template deleted successfully',
    deleteFailed: 'Failed to delete template',
    copySuccess: 'Template copied successfully',
    copyFailed: 'Failed to copy template',
    importSuccess: 'Template imported successfully',
    importFailed: 'Failed to import template',
    exportSuccess: 'Template exported successfully',
    exportFailed: 'Failed to export template',

    // Accessibility Labels
    editTemplateAriaLabel: 'Edit template {name}',
    deleteTemplateAriaLabel: 'Delete template {name}',
    nameAriaLabel: 'Template name input',
    contentAriaLabel: 'Template content input',
    descriptionAriaLabel: 'Template description input',
    typeAriaLabel: 'Template type selection',
    searchAriaLabel: 'Search templates',
    cancelEditAriaLabel: 'Cancel editing template',
    saveEditAriaLabel: 'Save template changes',
    cancelAddAriaLabel: 'Cancel adding template',
    confirmAddAriaLabel: 'Confirm add template',
    importTemplateAriaLabel: 'Import template',
    exportTemplateAriaLabel: 'Export template',
    copyTemplateAriaLabel: 'Copy template {name}',
    useTemplateAriaLabel: 'Use template {name}',
    viewTemplateAriaLabel: 'View template {name}'
  },
  history: {
    title: 'History',
    iterationNote: 'Iteration Note',
    optimizedPrompt: 'Optimized Prompt',
    confirmClear: 'Are you sure you want to clear all history records? This action cannot be undone.',
    confirmDeleteChain: 'Are you sure you want to delete this history record? This action cannot be undone.',
    cleared: 'History cleared',
    chainDeleted: 'History record deleted',
    useThisVersion: 'Use This Version',
    noHistory: 'No history records'
  },
  theme: {
    title: 'Theme Settings',
    light: 'Light',
    dark: 'Dark',
    blue: 'Blue',
    classic: 'Beige',
    green: 'Green',
    purple: 'Purple'
  },
  test: {
    title: 'Test',
    content: 'Test Content',
    placeholder: 'Enter content to test...',
    modes: {
      simple: 'Simple Mode',
      conversation: 'Conversation Mode'
    },
    simpleMode: {
      label: 'Test Content',
      placeholder: 'Enter content to test...',
      help: ''
    },
    model: 'Test Model',
    startTest: 'Start Test →',
    startCompare: 'Start Compare Test →',
    testing: 'Testing...',
    toggleCompare: {
      enable: 'Enable Compare',
      disable: 'Disable Compare'
    },
    originalResult: 'Original Prompt Result',
    optimizedResult: 'Optimized Prompt Result',
    testResult: 'Test Result',
    userPromptTest: 'User Prompt Test',
    advanced: {
      startTest: 'Start Test',
      result: 'Test Result',
      messageCount: '{count} messages',
      missingVariables: '{count} missing variables'
    },
    error: {
      failed: 'Test Failed',
      noModel: 'Please select a test model first',
      noTestContent: 'Please enter test content'
    },
    enableMarkdown: 'Enable Markdown rendering',
    disableMarkdown: 'Disable Markdown rendering',
    thinking: 'Thinking Process'
  },
  template: {
    noDescription: 'No Description',
    configure: 'Configure Template',
    selected: 'Selected',
    select: 'Select',
    noAvailableTemplates: 'No available templates',
    builtinLanguage: 'Built-in Template Language',
    switchBuiltinLanguage: 'Switch built-in template language',
    languageChanged: 'Built-in template language switched to {language}',
    languageChangeError: 'Failed to switch built-in template language',
    languageInitError: 'Failed to initialize built-in template language',
    type: {
      optimize: 'Optimize',
      iterate: 'Iterate'
    },
    view: 'View',
    edit: 'Edit',
    add: 'Add',
    name: 'Template Name',
    namePlaceholder: 'Enter template name',
    content: 'Template Content',
    contentPlaceholder: 'Enter template content',
    description: 'Description',
    descriptionPlaceholder: 'Enter template description (optional)',
    close: 'Close',
    cancel: 'Cancel',
    save: 'Save Changes',
    import: {
      title: 'Import Template',
      supportFormat: 'Supports .json format template files'
    },
    unknownTime: 'Unknown',
    deleteConfirm: 'Are you sure you want to delete this template? This action cannot be undone.',
    success: {
      updated: 'Template updated',
      added: 'Template added',
      deleted: 'Template deleted',
      exported: 'Template exported',
      imported: 'Template imported'
    },
    error: {
      loadFailed: 'Failed to load template',
      saveFailed: 'Failed to save template',
      deleteFailed: 'Failed to delete template',
      exportFailed: 'Failed to export template',
      importFailed: 'Failed to import template',
      readFailed: 'Failed to read file'
    }
  },
  prompt: {
    optimized: 'Optimized Prompt',
    optimizing: 'Optimizing...',
    continueOptimize: 'Continue Optimize',
    copy: 'Copy',
    applyToTest: 'Apply to Test',
    appliedToTest: 'Applied to advanced testing with conversation template auto-configured',
    optimizedPlaceholder: 'Optimized prompt will be shown here...',
    iterateDirection: 'Please enter optimization direction:',
    iteratePlaceholder: 'e.g., Make the prompt more concise, add specific functionality description, etc...',
    confirmOptimize: 'Confirm Optimize',
    iterateTitle: 'Iteration Template',
    selectIterateTemplate: 'Please select iteration template:',
    diff: {
      compare: 'Compare with Previous',
      exit: 'Exit Compare',
      enable: 'Enable text comparison',
      disable: 'Disable text comparison'
    },
    error: {
      noTemplate: 'Please select an iteration template first'
    }
  },
  output: {
    title: 'Test Result',
    copy: 'Copy',
    placeholder: 'Test result will be shown here...',
    processing: 'Processing...',
    success: {
      copied: 'Copied successfully'
    },
    error: {
      copyFailed: 'Copy failed'
    }
  },
  optimization: {
    contextTitle: 'Optimization Context',
    contextDescription: 'Provide conversation background for optimization to help AI better understand optimization goals'
  },
  model: {
    select: {
      placeholder: 'Please select a model',
      configure: 'Configure Model',
      noModels: 'No model',
      noAvailableModels: 'No available models'
    },
    manager: {
      displayName: 'e.g., Custom Model',
      apiUrl: 'API URL',
      defaultModel: 'Default Model Name',
      modelNamePlaceholder: 'e.g., gpt-3.5-turbo'
    }
  },
  toast: {
    error: {
      serviceInit: 'Service not initialized, please try again later',
      optimizeFailed: 'Optimization failed',
      iterateFailed: 'Iteration failed',
      compareFailed: 'Comparison analysis failed',
      noVersionsToCompare: 'Not enough versions to compare',
      noPreviousVersion: 'No previous version available for comparison',
      testFailed: 'Test failed',
      testError: 'Error occurred during test',
      loadTemplatesFailed: 'Failed to load templates',
      initFailed: 'Initialization failed: {error}',
      loadModelsFailed: 'Failed to load model list',
      initModelSelectFailed: 'Failed to initialize model selection',
      initTemplateSelectFailed: 'Failed to initialize template selection',
      loadHistoryFailed: 'Failed to load history',
      clearHistoryFailed: 'Failed to clear history',
      historyChainDeleteFailed: 'Failed to delete history record',
      selectTemplateFailed: 'Failed to select template: {error}',
      noOptimizeTemplate: 'Please select an optimization template first',
      noOptimizeModel: 'Please select an optimization model first',
      noIterateTemplate: 'Please select an iteration template first',
      incompleteTestInfo: 'Please fill in complete test information',
      noDefaultTemplate: 'Failed to load default template',
      optimizeProcessFailed: 'Error in optimization process',
      testProcessError: 'Error occurred during test process',
      initTemplateFailed: 'Failed to initialize template selection',
      appInitFailed: 'Application initialization failed, please refresh or contact support'
    },
    success: {
      optimizeSuccess: 'Optimization successful',
      iterateComplete: 'Iteration optimization completed',
      iterateSuccess: 'Iteration optimization successful',
      modelSelected: 'Model selected: {name}',
      templateSelected: '{type} template selected: {name}',
      historyClear: 'History cleared',
      historyChainDeleted: 'History record deleted',
      historyLoaded: 'History loaded successfully',
      exitCompare: 'Exited compare mode',
      compareEnabled: 'Compare mode enabled'
    },
    warn: {
      loadOptimizeTemplateFailed: 'Failed to load saved optimization template',
      loadIterateTemplateFailed: 'Failed to load saved iteration template'
    },
    info: {
      modelUpdated: 'Model updated',
      templateSelected: 'Template selected',
      optimizationModeAutoSwitched: 'Automatically switched to {mode} prompt optimization mode'
    }
  },
  log: {
    info: {
      initializing: 'Initializing...',
      initBaseServicesStart: 'Starting to initialize base services...',
      templateList: 'Template list',
      createPromptService: 'Creating prompt service...',
      initComplete: 'Initialization complete',
      templateSelected: 'Template selected'
    },
    error: {
      initBaseServicesFailed: 'Failed to initialize base services'
    }
  },
  dataManager: {
    title: 'Data Manager',
    export: {
      title: 'Export Data',
      description: 'Export all history records, model configurations, custom templates and user settings (including theme, language, model selections, etc.)',
      button: 'Export Data',
      success: 'Data exported successfully',
      failed: 'Failed to export data'
    },
    import: {
      title: 'Import Data',
      description: 'Import previously exported data file (will overwrite existing data and user settings)',
      selectFile: 'Click to select file or drag file here',
      changeFile: 'Change File',
      button: 'Import Data',
      success: 'Data imported successfully',
      failed: 'Failed to import data',
      successWithRefresh: 'Data imported successfully, page will refresh to apply all changes'
    },
    contexts: {
      title: 'Context Collections Management',
      description: 'Import or export all context collections, including messages, variables and tool configurations.',
      exportFile: 'Export to File',
      exportClipboard: 'Export to Clipboard',
      importFile: 'Import from File',
      importClipboard: 'Import from Clipboard',
      importMode: 'Import Mode',
      replaceMode: 'Replace Mode',
      appendMode: 'Append Mode',  
      mergeMode: 'Merge Mode',
      replaceModeDesc: 'Completely replace existing context collections',
      appendModeDesc: 'Append import content to existing collections (auto handle ID conflicts)',
      mergeModeDesc: 'Merge contexts with same ID, using import content as priority',
      importSuccess: 'Successfully imported {count} contexts',
      exportSuccess: 'Successfully exported {count} contexts to {target}',
      predefinedVariablesSkipped: 'Skipped {count} predefined variable overrides',
      conflictingIdsRenamed: '{count} conflicting IDs renamed',
      currentContextRestored: 'Current context restored to: {contextId}',
      noContextsToImport: 'No valid contexts to import',
      invalidContextBundle: 'Invalid context bundle format',
      importModeRequired: 'Please select import mode'
    },
    warning: 'Importing data will overwrite existing history records, model configurations, custom templates and all user settings (including theme, language preferences, etc.). Please ensure you have backed up important data.'
  },
  params: {
    "temperature": {
      "label": "Temperature",
      "description": "Controls randomness: Lower values (e.g., 0.2) make the output more focused and deterministic, while higher values (e.g., 0.8) make it more random."
    },
    "top_p": {
      "label": "Top P",
      "description": "Nucleus sampling. Considers tokens with top P probability mass. E.g., 0.1 means only tokens comprising the top 10% probability mass are considered."
    },
    "max_tokens": {
      "label": "Max Tokens",
      "description": "Maximum number of tokens to generate in the completion."
    },
    "presence_penalty": {
      "label": "Presence Penalty",
      "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics."
    },
    "frequency_penalty": {
      "label": "Frequency Penalty",
      "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim."
    },
    "timeout": {
      "label": "Timeout (ms)",
      "description_openai": "Request timeout in milliseconds for the OpenAI client connection."
    },
    "maxOutputTokens": {
      "label": "Max Output Tokens",
      "description": "Maximum number of tokens the model can output in a single response."
    },
    "top_k": {
      "label": "Top K",
      "description": "Filters the next token choices to the K most likely tokens. Helps to reduce nonsensical token generation."
    },
    "candidateCount": {
      "label": "Candidate Count",
      "description": "Number of generated responses to return. Must be between 1 and 8."
    },
    "stopSequences": {
      "label": "Stop Sequences",
      "description": "Custom strings that will stop output generation if encountered. Specify multiple sequences separated by commas."
    },
    "tokens": {
      "unit": "tokens"
    }
    ,
    "size": {
      "label": "Image Size",
      "description": "Resolution/size of the generated image, e.g., 1024x1024"
    },
    "quality": {
      "label": "Image Quality",
      "description": "Quality level for generated image: auto (automatic), high (high quality), medium, low (low quality)"
    },
    "background": {
      "label": "Background Transparency",
      "description": "Set image background: auto (automatic), transparent, opaque"
    },
    "imageSize": {
      "label": "Image Size",
      "description": "Resolution/size of the generated image, e.g., 1024x1024"
    },
    "steps": {
      "label": "Steps",
      "description": "Diffusion/inference steps; more steps usually improve quality but take longer"
    },
    "guidance": {
      "label": "Guidance Scale",
      "description": "Strength to follow the prompt; higher values adhere more to the prompt"
    },
    "cfg": {
      "label": "CFG Scale",
      "description": "Classifier-Free Guidance scale for controlling prompt adherence (Qwen-Image only)"
    },
    "negativePrompt": {
      "label": "Negative Prompt",
      "description": "Content or styles you do not want in the image"
    },
    "responseFormat": {
      "label": "Response Format",
      "description": "Format of the returned image (URL or Base64)"
    },
    "watermark": {
      "label": "Watermark",
      "description": "Whether to add a watermark to the generated image"
    },
    "sequentialGeneration": {
      "label": "Sequential Generation",
      "description": "Control sequential image generation mode (for supported models)"
    },
    "seed": {
      "label": "Seed",
      "description": "Random seed for controlling generation results, same seed produces same output"
    }
  },
  contextEditor: {
    // Variables tab (新增)
    variablesTab: 'Variables',
    contextVariables: 'Context Variables',
    contextVariablesDesc: 'Manage context-level variable overrides without affecting global variables',
    noContextVariables: 'No context variables',
    addFirstContextVariable: 'Add your first context variable',
    addContextVariable: 'Add Context Variable',
    editContextVariable: 'Edit Context Variable',
    deleteContextVariable: 'Delete Context Variable',
    deleteContextVariableConfirm: 'Are you sure you want to delete context variable "{name}"? It will revert to global value.',
    contextVariableDeleted: 'Context variable deleted: {name}',
    variableSource: 'Variable Source',
    variableStatus: 'Status',
    contextOverride: 'Context Override',
    globalVariable: 'Global Variable',
    predefinedVariable: 'Predefined Variable',
    missingVariable: 'Missing Variable',
    variableFromContext: 'From Context',
    variableFromGlobal: 'From Global',
    variableFromPredefined: 'Predefined',
    predefinedVariableCannotOverride: 'Predefined variables cannot be overridden',
    addVariable: 'Add Context Variable',
    editVariable: 'Edit Context Variable',
    contextVariableHelp: 'Context variables will override global variables with the same name, but cannot override predefined variables',
    finalVariablesPreview: 'Final Variables Preview',
    contextVariableName: 'Variable Name',
    contextVariableValue: 'Variable Value',
    variableNameRequired: 'Variable name is required',
    variableNameInvalid: 'Invalid variable name format',
    variableNamePredefined: 'Cannot use predefined variable name',
    variableNameExists: 'Variable name already exists',
    variableValueRequired: 'Variable value is required',
    
    // Import/Export context variables
    importContextVariables: 'Import Context Variables',
    exportContextVariables: 'Export Context Variables',
    contextVariableImported: 'Imported {count} context variables',
    contextVariableSkipped: 'Skipped {count} predefined variable conflicts',
    
    title: 'Context Editor',
    systemTemplates: 'System Templates',
    userTemplates: 'User Templates',
    // Basic
    noMessages: 'No messages',
    addFirstMessage: 'Add your first message',
    addMessage: 'Add Message',
    noTools: 'No tools',
    addFirstTool: 'Add first tool',
    addTool: 'Add Tool',
    noDescription: 'No description',
    parametersCount: '{count} parameters',

    // Templates
    templateCategory: 'Template Category',
    templateCount: '{count} templates',
    noTemplates: 'No templates',
    noTemplatesHint: 'Add templates in Template Manager',
    applyTemplate: 'Apply Template',
    moreMessages: '{count} more messages...',
    templateApplied: 'Template applied: {name}',

    // Import/Export
    importTitle: 'Import Context Data',
    importFormat: 'Import Format:',
    selectFile: 'Select File',
    orPasteText: 'Or paste text below',
    import: 'Import',
    exportTitle: 'Export Context Data',
    exportFormat: 'Export Format:',
    exportPreview: 'Export Preview:',
    copyToClipboard: 'Copy to Clipboard',
    saveToFile: 'Save to File',

    // Tools editor
    editTool: 'Edit Tool',
    deleteToolConfirm: 'Are you sure you want to delete tool "{name}"?',
    toolDeleted: 'Tool deleted: {name}',
    exampleTemplate: 'Example Template',
    exampleTemplateDesc: 'Start from a weather example or from an empty template.',
    basicInfo: 'Basic Info',
    toolNamePlaceholder: 'Enter tool name, e.g., get_weather',
    toolDescPlaceholder: 'Enter tool description',
    parameters: 'Parameters',
    parametersPlaceholder: 'Enter JSON format parameter configuration',
    invalidJson: 'Invalid JSON',
    useExample: 'Use Example',
    startEmpty: 'Start Empty',
    save: 'Save',
    toolsTooltip: 'Tools: {tools}',
    toolsCount: '{count} tools',
    
    // Missing keys
    override: 'Context Variable',
    createOverride: 'Create Context Variable',
    overrideCount: '{count} context variables',
    variableOverrides: 'Context Variables',
    globalVariables: 'Global: {count}',
    noVariables: 'No variables',
    addFirstVariable: 'Add your first context variable',
    variableName: 'Variable Name',
    variableValue: 'Variable Value',
    variableNamePlaceholder: 'Enter variable name (without brackets)',
    predefinedVariableWarning: 'Cannot modify predefined variables',
    variableValuePlaceholder: 'Enter variable value',
    deleteVariableConfirm: 'Are you sure you want to delete context variable "{name}"?',
    variableDeleted: 'Context variable deleted: {name}',
    predefinedVariableError: 'Cannot modify predefined variables',
    variableSaved: '{action} context variable: {name}',
    
    // Variable source labels
    variableSourceLabels: {
      global: 'Global',
      context: 'Context'
    },
    
    // Variable status labels
    variableStatusLabels: {
      active: 'Active',
      overridden: 'Overridden'
    }
  },
  updater: {
    title: 'App Updates',
    checkForUpdates: 'Check for updates',
    currentVersion: 'Current Version',
    versionLoadFailed: 'Failed to load version',
    downloadFailed: 'Download Failed',
    dismiss: 'Dismiss',
    noStableVersionAvailable: 'No stable version available',
    noPrereleaseVersionAvailable: 'No prerelease version available',
    failedToGetStableInfo: 'Failed to get stable version update info',
    failedToGetPrereleaseInfo: 'Failed to get prerelease version update info',
    alreadyLatestStable: 'Already using the latest stable version ({version})',
    alreadyLatestPrerelease: 'Already using the latest prerelease version ({version})',
    stableDownloadFailed: 'Stable version download failed: {error}',
    prereleaseDownloadFailed: 'Prerelease version download failed: {error}',
    unknownError: 'Unknown error',
    stable: 'Stable',
    prerelease: 'Prerelease',
    downloadFailedGeneric: '{type} download failed: {error}',
    warning: 'Warning',
    info: 'Information',
    versionIgnored: 'Version {version} is ignored',
    checkFailed: 'Check Failed',
    ignored: 'Ignored',
    unignore: 'Unignore',
    latestVersion: 'Latest Version',
    noPrereleaseAvailable: 'No prerelease available',
    latestIsStable: 'Latest version is stable',
    latestStableVersion: 'Latest Stable Version',
    latestPrereleaseVersion: 'Latest Prerelease Version',
    viewStable: 'View Stable',
    viewPrerelease: 'View Prerelease',
    allowPrerelease: 'Receive prerelease updates',
    noUpdatesAvailable: 'You are using the latest version',
    checkNow: 'Check for Updates',
    checking: 'Checking for updates...',
    checkingForUpdates: 'Checking for updates...',
    newVersionAvailable: 'New version available',
    viewDetails: 'View Details',
    downloadUpdate: 'Download Update',
    download: 'Download',
    updateAvailable: 'Update Available',
    hasUpdate: 'Update Available',
    details: 'Details',
    ignore: 'Ignore',
    ignoreVersion: 'Ignore This Version',
    downloading: 'Downloading update...',
    downloadingShort: 'Downloading...',
    downloadComplete: 'Download Complete',
    clickInstallToRestart: 'Click the button below to install and restart the application',
    installAndRestart: 'Install and Restart',
    updateError: 'Update failed',
    downloadError: 'Download failed',
    installError: 'Installation failed',
    upToDate: 'Up to Date',
    devEnvironment: 'Development Environment: Update checking is disabled',
    clickToCheck: 'Click to check for updates',
    viewOnGitHub: 'View on GitHub',
    noReleasesFound: 'No releases found. This project may not have published any versions yet.',
    noStableReleasesFound: 'No stable releases found. Only prerelease versions may be available.'
  },
  accessibility: {
    labels: {
      contextEditor: 'Context Editor',
      statisticsToolbar: 'Statistics Toolbar',
      editorMain: 'Editor Main Area',
      editorTabs: 'Editor Tabs',
      messageCount: 'Message Count',
      variableCount: 'Variable Count',
      messagesTab: 'Messages Tab',
      messagesPanel: 'Messages Panel',
      messagesList: 'Messages List',
      conversationMessages: 'Conversation Messages',
      messageItem: 'Message Item',
      templatesPanel: 'Templates panel',
      templateCard: 'Template card',
      toolCount: 'Tool Count',
      variablesPanel: 'Variables Panel',
      emptyMessages: 'Empty messages state',
      messageIcon: 'Message icon',
      addFirstMessage: 'Add first message button',
      emptyTemplates: 'Empty templates state',
      emptyVariables: 'Empty variables state'
    },
    descriptions: {
      contextEditor: 'Edit and manage conversation context and tools',
      messagesTab: 'Tab for managing conversation messages'
    },
    liveRegion: {
      modalOpened: 'Modal dialog opened',
      modalClosed: 'Modal dialog closed',
      tabChanged: 'Tab changed'
    }
  },
  toolCall: {
    title: 'Tool Calls',
    count: '{count} calls',
    arguments: 'Arguments',
    result: 'Result',
    error: 'Error',
    status: {
      pending: 'Pending',
      success: 'Success',
      error: 'Failed'
    }
  },

  // Image mode configuration
  imageMode: {
    text2image: 'Text-to-Image',
    image2image: 'Image-to-Image',
    text2imageDescription: 'Generate images from text descriptions',
    image2imageDescription: 'Modify based on existing images',
    uploadRequired: 'Image-to-Image mode requires uploading a reference image first'
  },

  imageWorkspace: {
    // Input area
    input: {
      originalPrompt: 'Original Prompt',
      originalPromptPlaceholder: 'Enter the image generation prompt to optimize',
      image: 'Image',
      selectImage: '📁 Select',
      optimizeTemplate: 'Optimization Template',
      templatePlaceholder: 'Please select template',
      textModel: 'Text Model',
      modelPlaceholder: 'Select model',
      optimizing: 'Optimizing...',
      optimizePrompt: 'Optimize Prompt'
    },
    
    // Image generation area
    generation: {
      imageModel: 'Image Model',
      imageModelPlaceholder: 'Please select image model',
      compareMode: 'Compare Mode',
      generating: 'Generating...',
      generateImage: 'Generate Image',
      processing: 'Processing'
    },
    
    // Results display
    results: {
      originalPromptResult: 'Original Prompt',
      optimizedPromptResult: 'Optimized Prompt',
      testResult: 'Test Result',
      download: 'Download',
      copyBase64: 'Copy Base64',
      copyText: 'Copy Text',
      copySuccess: 'Copied successfully',
      copyError: 'Copy failed',
      textOutput: 'Text Output',
      noOriginalResult: 'No original result',
      noOptimizedResult: 'No optimized result',
      noGenerationResult: 'No generation result'
    },
    
    // Upload modal
    upload: {
      title: 'Upload Reference Image',
      dragText: 'Click or drag to upload image',
      fileRequirements: 'Supports PNG/JPEG formats, file size up to 10MB',
      uploadFailed: 'Upload failed',
      uploadSuccess: 'Upload successful'
    }
  },

  // Image model manager configuration interface
  image: {
    capability: {
      text2image: 'Text-to-Image',
      image2image: 'Image-to-Image',
      multiImage: 'Multi-image',
      highResolution: 'High Resolution'
    },
    step: {
      basic: 'Basic Information',
      provider: 'Provider Selection',
      connection: 'Connection Configuration',
      model: 'Model Selection',
      parameters: 'Parameter Settings'
    },
    config: {
      basic: {
        title: 'Basic Configuration'
      },
      name: {
        label: 'Configuration Name',
        placeholder: 'Please enter configuration name'
      },
      enabled: {
        label: 'Enable Status'
      },
      updateSuccess: 'Configuration updated',
      createSuccess: 'Configuration created',
      saveFailed: 'Failed to save configuration',
      loadFailed: 'Failed to load configurations'
    },
    provider: {
      title: 'Provider Selection',
      section: 'Provider Configuration',
      label: 'Image Provider',
      placeholder: 'Please select provider',
      loadFailed: 'Failed to load providers'
    },
    connection: {
      title: 'Connection Configuration',
      test: 'Test Connection',
      testing: 'Testing connection...',
      testSuccess: 'Function test successful',
      testFailed: 'Connection test failed',
      testError: 'Connection test error',
      functionTestTextToImage: 'Text-to-Image test',
      functionTestImageToImage: 'Image-to-Image test',
      testImagePreview: 'Test Image Preview',
      downloadSuccess: 'Image downloaded successfully',
      downloadFailed: 'Image download failed',
      apiKey: {
        label: 'API Key',
        description: 'Authentication key',
        placeholder: 'Enter API Key'
      },
      baseURL: {
        label: 'API Base URL',
        description: 'Base URL of the service endpoint',
        placeholder: 'https://api.example.com/v1'
      },
      organization: {
        label: 'Organization (optional)',
        description: 'OpenAI organization ID if applicable',
        placeholder: 'org_xxx'
      },
      validation: {
        missing: 'Missing required fields: {fields}',
        invalidType: '{field} should be {expected}, got {actual}'
      }
    },
    model: {
      section: 'Model Configuration',
      label: 'Model',
      placeholder: 'Please select model',
      loading: 'Loading models...',
      refreshTooltip: 'Refresh model list',
      refreshDisabledTooltip: {
        dynamicNotSupported: 'Current provider does not support dynamic model loading',
        connectionRequired: 'Valid connection configuration required to refresh models'
      },
      refreshSuccess: 'Model list refreshed',
      refreshError: 'Failed to refresh model list',
      selectRequired: 'Please select a model to test',
      count: '{count} models',
      capabilities: 'Capabilities',
      empty: 'No image model configurations',
      addFirst: 'Add First Image Model',
      staticLoaded: 'Static models loaded',
      noStaticModels: 'No static models',
      staticLoadFailed: 'Failed to load static models',
      dynamicLoaded: 'Dynamic models loaded',
      dynamicFailed: 'Failed to load dynamic models, fell back to static list',
      connectionRequired: 'Please fill and validate connection first',
      refreshFailed: 'Failed to refresh models'
    },
    parameters: {
      noParameters: 'No configurable parameters for this model',
      advancedConfig: 'Advanced Parameter Configuration',
      advancedConfigDescription: 'Optional, used to override default model parameters'
    },
    params: {
      size: {
        label: 'Image Size',
        description: 'Generated image resolution/size, e.g., 1024x1024'
      },
      quality: {
        label: 'Image Quality',
        description: 'Generated image quality level: auto (automatic), high (high quality), medium (medium), low (low quality)'
      },
      background: {
        label: 'Background Transparency',
        description: 'Set image background: auto (automatic), transparent (transparent), opaque (opaque)'
      }
    }
  }
};
