<script lang="ts">
export const DESIGN_BOTTOM_NAV_PADDING =
  'calc(4.75rem + max(0.5rem, env(safe-area-inset-bottom, 0px)))'
</script>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { to: '/', key: 'home', label: '首页' },
  { to: '/about-me', key: 'about', label: '关于我' },
  { to: '/article/sample', key: 'article', label: '文章' },
  { to: '/blog', key: 'blog', label: '博客' },
] as const

function navActive(key: (typeof navItems)[number]['key']): boolean {
  const p = route.path
  if (key === 'home')
    return p === '/' || p === ''
  if (key === 'about')
    return p === '/about-me'
  if (key === 'article')
    return p === '/article/sample' || p.startsWith('/article/')
  return p === '/blog' || p.startsWith('/posts')
}

function linkClass(key: (typeof navItems)[number]['key']): string {
  return navActive(key)
    ? 'text-sky-700 [&_svg]:opacity-100'
    : 'text-[#375749]/50 hover:text-[#375749]/75 [&_svg]:opacity-50'
}
</script>

<template>
  <nav
    class="fixed bottom-0 z-[100] border-t border-[#375749]/12 bg-[#fcfcfa]/95 shadow-[0_-4px_24px_rgba(26,28,27,0.06)] backdrop-blur-md max-md:inset-x-0 md:left-1/2 md:right-auto md:w-[min(390px,100vw)] md:-translate-x-1/2"
    aria-label="页面导航"
  >
    <div
      class="flex w-full items-stretch gap-1 px-1.5"
      :style="{
        paddingBottom: 'max(0.35rem, env(safe-area-inset-bottom, 0px))',
        paddingTop: '0.5rem',
      }"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        class="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-2xl py-2 transition-colors duration-200"
        :class="linkClass(item.key)"
      >
        <svg
          v-if="item.key === 'home'"
          class="h-6 w-6 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
        <svg
          v-else-if="item.key === 'about'"
          class="h-6 w-6 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <svg
          v-else-if="item.key === 'article'"
          class="h-6 w-6 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
        <svg
          v-else
          class="h-6 w-6 shrink-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
        <span
          class="max-w-full truncate px-0.5 text-center text-[11px] font-medium leading-tight tracking-tight"
          :class="navActive(item.key) ? 'font-semibold' : ''"
        >
          {{ item.label }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>
