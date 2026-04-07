<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { getPosts } from '../lib/posts'

const posts = getPosts()
</script>

<template>
  <section
    class="mx-auto w-full max-w-[min(42rem,100%)] px-1 text-[#1a1c1b] sm:px-0"
  >
    <header class="mb-8 border-b border-[#375749]/12 pb-6">
      <p
        class="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#375749]"
      >
        博客
      </p>
      <h1
        class="font-serif text-3xl font-bold tracking-tight text-[#1a1c1b] sm:text-[2rem]"
      >
        最新文章
      </h1>
    </header>

    <div class="flex flex-col gap-5">
      <article
        v-for="post in posts"
        :key="post.slug"
        class="group rounded-2xl border border-[#375749]/12 bg-[#fcfcfa] p-5 shadow-[0_2px_14px_rgba(26,28,27,0.05)] transition duration-200 hover:border-[#375749]/22 hover:shadow-[0_6px_24px_rgba(55,87,73,0.08)] dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none dark:hover:border-[#375749]/30"
      >
        <RouterLink :to="`/posts/${post.slug}`" class="block">
          <h2
            class="font-serif text-xl font-semibold text-[#1a1c1b] transition-colors group-hover:text-[#375749] dark:text-slate-100 dark:group-hover:text-[#c7ead9]"
          >
            {{ post.title }}
          </h2>
          <p
            class="mt-2 text-sm leading-relaxed text-[#1a1c1b]/65 dark:text-slate-300"
          >
            {{ post.excerpt }}
          </p>
        </RouterLink>

        <div
          class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#375749]/8 pt-4 text-xs dark:border-slate-700"
        >
          <time
            class="tabular-nums text-[#1a1c1b]/45 dark:text-slate-400"
            :datetime="post.date"
          >
            {{ post.date }}
          </time>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-sm bg-[#c7ead9]/55 px-2 py-0.5 text-[11px] font-medium text-[#375749] dark:bg-[#375749]/25 dark:text-[#c7ead9]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
