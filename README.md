# Vue 3 个人博客

基于 Vue 3 + Vite + TypeScript + Tailwind CSS 的个人博客示例项目，包含：

- 首页文章列表（标题、摘要、发布时间、标签）
- 文章详情页（读取本地 `.md` 文件并渲染 Markdown）
- 关于我页面
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
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
