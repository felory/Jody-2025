# 项目介绍

pnpm create vite@latest jody-admin --template react-ts

## zod 做 数据校验（schema validation）：

表单校验
API 类型校验
后端 AI schema 校验（尤其 AI JSON 输出）

## zustand 轻量状态管理库：全局 UI 状态（sidebar collapse），用户信息，权限管理

React 19 之后，Redux、MobX 都比较重了，而：
Zustand 简单、函数式
性能极高
支持 React 19 的并发 + server actions

## @tanstack/react-query 服务端状态管理（API 数据缓存）

React Query 的好处：
自动缓存数据
自动请求重试
loading/error 状态不用自己写
未来对接 AI API 时极好用

## @jody/ui 组件库，不需发布 立即生效 联动到jody-admins。
