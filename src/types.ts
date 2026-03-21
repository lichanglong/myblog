export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
}

export interface Post extends PostMeta {
  content: string
}
