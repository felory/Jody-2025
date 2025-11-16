# Jody-2025

jody-2025(repo)/
pnpm-workspace.yaml
turbo.json
package.json
.husky/
lint-staged.config.js

jody-admin/ # React + API + AI 中后台
packages/
ui/ # UI 组件库
hooks/ # 通用 hooks
utils/ # 工具库（可选）
ai-sdk/ # AI 接口 SDK（可选）

## "dev": "turbo run dev --parallel",

turbo run dev 会自动调用子包的 dev
parallel 表示多个项目可同时跑 dev

packages/ui → turbowatch
jody-admin → vite dev server（端口 5173、5174 或自动选择）
=====
你改组件库（packages/ui），
turbowatch 触发构建
jody-admin 的 dev server 自动刷新页面（HMR）
===========================
子包 build 依赖上游包 build（比如 ui → admin）
dev 永远不缓存（否则 HMR 会异常）
type-check 逐层往上检查（TS 项目链路必备）

tsup 是目前构建组件库最流行的方式
turbowatch 负责“改 UI → admin 自动刷新”
输出 ESM + CJS + d.ts

## tubo的pipeline:

| 命令          | 子包执行方式                            |
| ------------- | --------------------------------------- |
| `turbo dev`   | 并行 watch（ui 自动构建、admin 热更新） |
| `turbo build` | 按依赖顺序构建（ui → admin）            |
| `turbo lint`  | 并行执行 eslint                         |

# 工程化

🌱 阶段 1：工程化基础
pnpm workspace
husky + lint-staged
tsconfig paths
多项目 link
turbo / turbowatch

🌳 阶段 2：组件库体系（公司级 UI 组件库）
构建系统（tsup）
跨项目 HMR（turbowatch）
UI 组件结构设计
Hooks 体系
单元测试（Vitest）
Storybook 文档体系

🌲 阶段 3：AI 中后台工程（进入业务）
React + Zustand
TanStack Query
AI 接口包装
SSE/流式响应
Prompt 管理 + RAG Debugger
RBAC（权限系统）
表格、表单、流程引擎

🌴 阶段 4：全链路优化
性能监控（Web Vitals）
Bundle 体积分析（rollup-plugin-visualizer）
Turbo 缓存策略优化
CI/CD（GitHub Actions）
