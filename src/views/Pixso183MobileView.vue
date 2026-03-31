<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PixsoResearchMobileFrame from '../components/pixso/PixsoResearchMobileFrame.vue'
</script>

<template>
  <div
    class="flex min-h-screen w-full min-w-0 flex-col items-center bg-[#f7faf9] px-3 pb-8 sm:px-4"
    style="padding-bottom: max(2rem, env(safe-area-inset-bottom, 0px))"
  >
    <PixsoResearchMobileFrame />
    <RouterLink
      to="/"
      class="mt-6 text-sm text-[#006853]/80 underline decoration-[#006853]/25 underline-offset-4 hover:text-[#2c2f2f]"
    >
      返回封面首页
    </RouterLink>
  </div>
</template>
