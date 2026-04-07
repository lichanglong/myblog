<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../lib/posts'

const route = useRoute()

const post = computed(() => getPostBySlug(String(route.params.slug ?? '')))
</script>

<template>
  <article
    v-if="post"
    class="mx-auto w-full max-w-[min(42rem,100%)] rounded-2xl border border-[#375749]/12 bg-[#fcfcfa] px-5 py-6 shadow-[0_2px_14px_rgba(26,28,27,0.05)] sm:px-8 sm:py-8 dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none"
  >
    <header class="mb-8 border-b border-[#375749]/10 pb-6 dark:border-slate-700">
      <h1
        class="font-serif text-3xl font-bold tracking-tight text-[#1a1c1b] sm:text-[2rem] dark:text-slate-100"
      >
        {{ post.title }}
      </h1>
      <div
        class="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#1a1c1b]/45 dark:text-slate-400"
      >
        <time :datetime="post.date">{{ post.date }}</time>
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-sm bg-[#c7ead9]/55 px-2 py-0.5 text-[11px] font-medium text-[#375749] dark:bg-[#375749]/25 dark:text-[#c7ead9]"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div
      class="markdown-body text-[#1a1c1b]/90 dark:text-slate-200 [&_a]:text-[#375749] [&_a]:underline [&_a]:decoration-[#375749]/30 dark:[&_a]:text-[#c7ead9]"
      v-html="post.content"
    />
  </article>

  <section
    v-else
    class="mx-auto max-w-[min(42rem,100%)] rounded-2xl border border-amber-200/80 bg-amber-50/90 p-4 text-amber-950 dark:border-amber-700/60 dark:bg-amber-950/35 dark:text-amber-100"
  >
    文章不存在。
  </section>
</template>
