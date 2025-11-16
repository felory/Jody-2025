# 在子包里pnpm install

1. 子包会产生自己的 node_modules，破坏workspace。
   ==》应该由根目录管理依赖，pnpm 会创建 虚拟链接，不应该在子目录有 node_modules。。
2. 子包 lockfile 会污染根目录 lockfile
   ===》多一个 pnpm-lock.yaml 就会导致 workspace 失效（危险）。

rm -rf node_modules
rm -f pnpm-lock.yaml
========
find . -name node_modules -exec rm -rf {} \;
find . -name "pnpm-lock.yaml" -not -path "./node_modules/\*" -not -path "./pnpm-lock.yaml" -delete

⭐️ turbowatch 是“文件监听器”，不是 dev server，没有端口！
它只是 watch 文件变化，然后执行脚本turbowatch.config.js（例如打包）

#

pnpm add -w -D @eslint/js eslint typescript typescript-eslint \
 eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh \
 eslint-plugin-import globals

##

pnpm add -D react react-dom -F jody-admin
pnpm add -D react react-dom -F ui

# 根目录install

☑ 根目录（workspace root）
放的是 工程化依赖：
Turbo
TypeScript
ESLint 系列
Prettier
Husky + lint-staged
Root tsconfig for inheritance
📌 根目录 绝对不能安装 React/Vite
否则会导致子项目的 TS / 类型解析错误

# 前端应用：

React、React DOM
Router
Zustand
React Query
zod
UI 组件库 @jody/ui
Vite（构建）
Tailwind（样式）

# 组件库(pure + stateless + type-safe)

peerDependencies:
react
react-dom
======
devDependencies:
typescript
tailwindcss (optional)
@types/react

## 单独跑eslint，查看真正的错误

pnpm --filter @jody/ui lint

pnpm --filter jody-admin lint
