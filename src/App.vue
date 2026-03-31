<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import DesignBottomNav, {
  DESIGN_BOTTOM_NAV_PADDING,
} from './components/DesignBottomNav.vue'

type Theme = 'light' | 'dark'

const THEME_KEY = 'blog-theme'
const route = useRoute()
const theme = ref<Theme>('light')

const isDark = computed(() => theme.value === 'dark')

const showDesignBottomNav = computed(
  () => route.path === '/blog' || route.path.startsWith('/posts/'),
)

function applyTheme(value: Theme) {
  document.documentElement.classList.toggle('dark', value === 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = saved ?? (prefersDark ? 'dark' : 'light')
  applyTheme(theme.value)
})

watch(theme, (value) => {
  localStorage.setItem(THEME_KEY, value)
  applyTheme(value)
})
</script>

<template>
  <RouterView v-if="route.meta.fullBleed" />

  <div
    v-else
    class="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-slate-900 dark:text-slate-100"
  >
    <header class="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <RouterLink to="/" class="text-lg font-bold tracking-tight">我的博客</RouterLink>
        <div class="flex items-center gap-4">
          <nav class="flex items-center gap-4 text-sm">
            <RouterLink
              to="/"
              class="transition hover:text-sky-600 dark:hover:text-sky-400"
              :class="route.path === '/' ? 'text-sky-600 dark:text-sky-400' : ''"
            >
              首页
            </RouterLink>
            <RouterLink
              to="/blog"
              class="transition hover:text-sky-600 dark:hover:text-sky-400"
              :class="route.path === '/blog' ? 'text-sky-600 dark:text-sky-400' : ''"
            >
              博客
            </RouterLink>
            <RouterLink
              to="/pixso-183"
              class="transition hover:text-sky-600 dark:hover:text-sky-400"
              :class="route.path === '/pixso-183' ? 'text-sky-600 dark:text-sky-400' : ''"
            >
              研究页
            </RouterLink>
            <RouterLink
              to="/about"
              class="transition hover:text-sky-600 dark:hover:text-sky-400"
              :class="route.path === '/about' ? 'text-sky-600 dark:text-sky-400' : ''"
            >
              关于我
            </RouterLink>
          </nav>
          <button
            type="button"
            class="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            @click="theme = isDark ? 'light' : 'dark'"
          >
            {{ isDark ? '浅色' : '深色' }}
          </button>
        </div>
      </div>
    </header>

    <main
      class="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10"
      :style="
        showDesignBottomNav ? { paddingBottom: DESIGN_BOTTOM_NAV_PADDING } : {}
      "
    >
      <RouterView />
    </main>

    <DesignBottomNav v-if="showDesignBottomNav" />
  </div>
</template>
