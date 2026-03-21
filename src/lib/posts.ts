import matter from 'gray-matter'
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

function parsePost(filePath: string, raw: string): Post {
  const slug = filePath.split('/').pop()?.replace('.md', '') ?? ''
  const { data, content } = matter(raw)

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
