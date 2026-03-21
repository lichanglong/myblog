<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { getPosts } from '../lib/posts'

const posts = getPosts()
</script>

<template>
  <section>
    <h1 class="mb-6 text-3xl font-bold sm:text-4xl">最新文章</h1>

    <div class="grid gap-4 sm:gap-5">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
      >
        <RouterLink :to="`/posts/${post.slug}`" class="group block">
          <h2 class="text-xl font-semibold group-hover:text-sky-600 dark:group-hover:text-sky-400">
            {{ post.title }}
          </h2>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            {{ post.excerpt }}
          </p>
        </RouterLink>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <time :datetime="post.date">{{ post.date }}</time>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
