---
title: Markdown 渲染实践
excerpt: 使用 markdown-it 解析 frontmatter，渲染本地 Markdown 文章。
date: 2026-03-20
tags:
  - 文档
  - 元数据
---

# Markdown 渲染实践

文章正文放在本地 `.md` 文件中，利用 frontmatter 管理元数据。

示例代码：

```ts
const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })
```

页面会把正文转换为 HTML，再渲染到文章详情页。
