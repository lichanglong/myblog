<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../lib/posts'

const route = useRoute()

const post = computed(() => getPostBySlug(String(route.params.slug ?? '')))
</script>

<template>
  <article v-if="post" class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 sm:p-8">
    <header class="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
      <h1 class="mb-3 text-3xl font-bold sm:text-4xl">{{ post.title }}</h1>
      <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <time :datetime="post.date">{{ post.date }}</time>
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800"
        >
          #{{ tag }}
        </span>
      </div>
    </header>

    <div class="markdown-body" v-html="post.content"></div>
  </article>

  <section v-else class="rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200">
    文章不存在。
  </section>
</template>
