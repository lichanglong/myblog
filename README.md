# Vue 3 个人博客

基于 **Vue 3 + Vite + TypeScript + Tailwind CSS** 的个人博客项目。页面 UI 先在 **Google Stitch** 中完成视觉与布局设计；将设计导出为 **Figma 格式（.fig）** 后，在 **Pixso** 中打开或导入，再对照设计稿在本仓库里用 **Cursor** 还原为 Vue 组件与样式。

## 设计到代码的流程

1. **Stitch**：在 Google Stitch 中产出界面与版式。
2. **导出**：导出为可在 Pixso / Figma 生态中使用的文件（常见为 **.fig**）。
3. **Pixso**：在 Pixso 中导入或编辑该稿，作为实现时的结构、标注与切图来源。
4. **Cursor**：在本地用 Cursor 对照 Pixso 稿编写和维护 `src/` 下的 Vue 页面与资源。

设计落地相关代码主要集中在 `src/components/pixso/`、`src/views/` 中的 Pixso 视图，以及 `src/assets/pixso/` 等静态资源目录；部分流程脚本位于 `scripts/`。

## 项目功能概览

- **首页（`#/`）**：Pixso 专题/编辑风向设计稿落地（`PixsoEditorialFrame` 等），含底部导航。
- **文章列表（`#/blog`）**：读取 `src/posts/` 下的 Markdown 文章列表。
- **文章详情（`#/posts/:slug`）**：单篇文章渲染。
- **关于（`#/about`）**：传统文案页。
- **设计稿子页**：`#/about-me`、`#/article/sample` 等为 Pixso 单屏演示；`#/design` 会重定向到 `/#/`。
- **暗色模式**：在带顶栏的博客布局中可切换，并本地持久化。
- **部署**：已配置 GitHub Pages（Hash 路由，适合静态托管）。

## 本地运行

```bash
npm install
npm run dev
```

浏览器访问开发地址（示例）：`http://localhost:5173/#/`。

## 构建

```bash
npm run build
npm run preview
```

## 文章写作方式

在 `src/posts/` 下新增 `.md` 文件，示例：

```md
---
title: 文章标题
excerpt: 文章摘要
date: 2026-03-21
tags:
  - Vue3
  - 技术随笔
---

# 正文标题

文章正文...
```

## 部署到 GitHub Pages

### 方式一：GitHub Actions（推荐）

仓库已提供 `.github/workflows/deploy.yml`，推送到 `main` 分支后会自动部署。

首次使用需在 GitHub 仓库设置中启用：

- `Settings` -> `Pages`
- `Build and deployment` 选择 `GitHub Actions`

### 方式二：手动部署

```bash
npm run deploy
```

该命令会构建并把 `dist` 发布到 `gh-pages` 分支。

### 路由说明（GitHub Pages）

部署在子路径（如 `https://用户名.github.io/myblog/`）时使用 **Hash 路由**，避免直接打开子页面出现 404。

- 首页（设计稿封面）：`https://用户名.github.io/myblog/#/`
- 文章列表：`https://用户名.github.io/myblog/#/blog`
- 单篇文章：`https://用户名.github.io/myblog/#/posts/文章-slug`
- 旧链接 `/#/design` 会跳到 `/#/`

本地若打不开 `localhost`，可改用 `http://127.0.0.1:5173/#/`。
