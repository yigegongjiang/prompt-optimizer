# MCP 服务器用户指南

{% raw %}
<!-- 内容来源：仓库 docs/user/mcp-server.md -->
{% endraw %}

Prompt Optimizer 支持 Model Context Protocol (MCP) 协议，可以与 Claude Desktop 等支持 MCP 的 AI 应用集成。

## 🎯 功能特性

- **optimize-user-prompt**: 优化用户提示词以提升 LLM 性能
- **optimize-system-prompt**: 优化系统提示词以提升 LLM 性能
- **iterate-prompt**: 基于特定需求迭代改进成熟的提示词

## 🚀 快速开始

### Docker 部署（推荐）

Docker 是最简单的部署方式，Web 界面和 MCP 服务器会同时启动：

```bash
# 基本部署
docker run -d -p 8081:80 \
  -e VITE_OPENAI_API_KEY=your-openai-key \
  -e MCP_DEFAULT_MODEL_PROVIDER=openai \
  --name prompt-optimizer \
  linshen/prompt-optimizer

# 访问地址
# Web 界面：http://localhost:8081
# MCP 服务器：http://localhost:8081/mcp
```

### 开发者本地部署

> **注意**：此方式仅适用于开发者进行开发和调试，普通用户建议使用 Docker 部署。

```bash
# 1. 克隆项目
git clone https://github.com/your-repo/prompt-optimizer.git
cd prompt-optimizer

# 2. 安装依赖
pnpm install

# 3. 配置环境变量（复制并编辑 .env.local）
cp env.local.example .env.local

# 4. 启动 MCP 服务器
pnpm mcp:dev
```

服务器将在 `http://localhost:3000/mcp` 启动。开发者可以查看 packages/mcp-server/README.md 获取更多开发相关信息。

## ⚙️ 环境变量配置

### API 密钥配置

至少需要配置一个 API 密钥：

```bash
# 选择一个或多个 API 密钥
VITE_OPENAI_API_KEY=your-openai-key
VITE_GEMINI_API_KEY=your-gemini-key
VITE_DEEPSEEK_API_KEY=your-deepseek-key
VITE_SILICONFLOW_API_KEY=your-siliconflow-key
VITE_ZHIPU_API_KEY=your-zhipu-key

# 自定义 API（如 Ollama）
VITE_CUSTOM_API_KEY=your-custom-key
VITE_CUSTOM_API_BASE_URL=http://localhost:11434/v1
VITE_CUSTOM_API_MODEL=qwen2.5:0.5b
```

### MCP 服务器配置

```bash
# 首选模型提供商（当配置了多个 API 密钥时）
# 可选值：openai, gemini, deepseek, siliconflow, zhipu, custom
MCP_DEFAULT_MODEL_PROVIDER=openai

# 日志级别（可选，默认 debug）
# 可选值：debug, info, warn, error
MCP_LOG_LEVEL=info

# HTTP 端口（可选，默认 3000，Docker 部署时无需设置）
MCP_HTTP_PORT=3000

# 默认语言（可选，默认 zh）
# 可选值：zh, en
MCP_DEFAULT_LANGUAGE=zh
```

## 🔗 客户端连接

### Claude Desktop 集成

1. 找到配置目录
   - Windows: `%APPDATA%\\Claude\\services`
   - macOS: `~/Library/Application Support/Claude/services`
   - Linux: `~/.config/Claude/services`

2. 编辑配置文件 `services.json`：

```json
{
  "services": [
    {
      "name": "Prompt Optimizer",
      "url": "http://localhost:8081/mcp"
    }
  ]
}
```

> 如果是本地开发（端口 3000），请改为 `http://localhost:3000/mcp`。

## 🧪 测试与验证

使用 MCP Inspector：

```bash
# 1. 启动 MCP 服务器
pnpm mcp:dev

# 2. 启动 Inspector
npx @modelcontextprotocol/inspector
```

在 Inspector Web UI 中：
1. 选择 `Streamable HTTP`
2. 服务器 URL：`http://localhost:3000/mcp`
3. 点击 "Connect" 连接服务器
4. 测试可用的工具

## 🔧 故障排除

### 常见问题

#### 端口占用
更换端口或停止占用进程

```bash
# Windows 查看端口占用
netstat -ano | findstr :3000

# 更换端口
MCP_HTTP_PORT=3001 pnpm mcp:dev
```

#### API 密钥无效
检查是否配置了至少一个有效密钥

```bash
# 确保至少配置一个有效的 API 密钥
echo $VITE_OPENAI_API_KEY
```

#### 模型提供商不匹配
校验 `MCP_DEFAULT_MODEL_PROVIDER`

```bash
# 确保提供商名称正确
MCP_DEFAULT_MODEL_PROVIDER=openai  # 不是 OpenAI
```

#### Docker 部署时 401 认证错误

**问题**: 使用 Docker 部署并启用了 `ACCESS_PASSWORD` 后，MCP Inspector 连接失败，返回 401 错误

**原因**: Docker 部署启用密码保护后，Nginx 会对所有路由启用 Basic 认证，包括 `/mcp` 路由

**解决方案**:
- **已修复（v1.4.0+）**：`/mcp` 路由已配置为绕过 Basic 认证
- **旧版本临时方案**：
  1. 不设置 `ACCESS_PASSWORD` 环境变量
  2. 或使用网络隔离（如仅在内网使用）
  3. 或直接暴露 3000 端口：`docker run -p 3000:3000 ...`

**技术说明**:
- MCP 协议本身不支持 HTTP Basic 认证
- 新版本在 `docker/nginx.conf` 中为 `/mcp` 路由添加了 `auth_basic off;`
- Web 应用访问仍然受密码保护

#### Claude Desktop 连接失败
检查服务运行状态、URL、防火墙与日志

**解决步骤**：
1. 确认 MCP 服务器正在运行
2. 检查 URL 是否正确
3. 确认防火墙设置
4. 查看 Claude Desktop 日志

