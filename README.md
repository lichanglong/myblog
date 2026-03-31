# Vue 3 个人博客

基于 Vue 3 + Vite + TypeScript + Tailwind CSS 的个人博客示例项目，包含：

- 首页文章列表（标题、摘要、发布时间、标签）
- 文章详情页（读取本地 `.md` 文件并渲染 Markdown）
- 关于我页面
- Pixso 设计稿占位落地页（路由 `#/design`，需按稿补充标注或截图后精调）
- 暗色模式切换（本地持久化）
- GitHub Pages 部署配置

## 本地运行

```bash
npm install
npm run dev
```

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

项目已提供脚本：

```bash
npm run deploy
```

该命令会构建并把 `dist` 发布到 `gh-pages` 分支。

### 路由说明（GitHub Pages）

部署在子路径（如 `https://用户名.github.io/myblog/`）时，使用 **Hash 路由**，避免直接打开子页面出现 404。

- 首页：`https://用户名.github.io/myblog/#/`
- 设计稿页：`https://用户名.github.io/myblog/#/design`
- 文章：`https://用户名.github.io/myblog/#/posts/文章-slug`

本地开发：先在项目目录执行 `npm run dev`，再打开 `http://localhost:5173/#/design`（地址栏会带 `#`；若打不开可试 `http://127.0.0.1:5173/#/design`）
