import MarkdownIt from 'markdown-it'
import type { Post, PostMeta } from '../types'

const postModules = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

interface FrontmatterData {
  title?: string
  excerpt?: string
  date?: string
  tags?: string[]
}

function parseFrontmatter(raw: string): { data: FrontmatterData; content: string } {
  const normalized = raw.replace(/\r\n/g, '\n')
  if (!normalized.startsWith('---\n')) {
    return { data: {}, content: normalized }
  }

  const end = normalized.indexOf('\n---\n', 4)
  if (end === -1) {
    return { data: {}, content: normalized }
  }

  const fmBlock = normalized.slice(4, end)
  const content = normalized.slice(end + 5)
  const lines = fmBlock.split('\n')
  const data: FrontmatterData = {}

  let currentArrayKey: 'tags' | null = null

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (currentArrayKey && trimmed.startsWith('- ')) {
      data[currentArrayKey] ??= []
      const list = data[currentArrayKey]
      if (list) {
        list.push(trimmed.slice(2).trim())
      }
      continue
    }

    const sep = trimmed.indexOf(':')
    if (sep === -1) continue

    const key = trimmed.slice(0, sep).trim()
    const value = trimmed.slice(sep + 1).trim()
    currentArrayKey = null

    if (key === 'title') data.title = value
    else if (key === 'excerpt') data.excerpt = value
    else if (key === 'date') data.date = value
    else if (key === 'tags') {
      if (!value) {
        data.tags = []
        currentArrayKey = 'tags'
      } else {
        data.tags = value.split(',').map((item) => item.trim()).filter(Boolean)
      }
    }
  }

  return { data, content }
}

function parsePost(filePath: string, raw: string): Post {
  const slug = filePath.split('/').pop()?.replace('.md', '') ?? ''
  const { data, content } = parseFrontmatter(raw)

  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ''),
    date: String(data.date ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
    content: markdown.render(content),
  }
}

const allPosts: Post[] = Object.entries(postModules)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))

export function getPosts(): PostMeta[] {
  return allPosts.map(({ content, ...meta }) => meta)
}

export function getPostBySlug(slug: string): Post | null {
  return allPosts.find((post) => post.slug === slug) ?? null
}
