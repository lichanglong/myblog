<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DesignBottomNav, {
  DESIGN_BOTTOM_NAV_PADDING,
} from './components/DesignBottomNav.vue'
import Pixso622TopBar from './components/pixso/Pixso622TopBar.vue'

const route = useRoute()

const showDesignBottomNav = computed(
  () => route.path === '/blog' || route.path.startsWith('/posts/'),
)
</script>

<template>
  <RouterView v-if="route.meta.fullBleed" />

  <div v-else class="min-h-screen bg-[#f9f9f7] text-slate-800">
    <Pixso622TopBar />

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
