<script setup lang="ts">
import DesignBottomNav, {
  DESIGN_BOTTOM_NAV_PADDING,
} from '../components/DesignBottomNav.vue'
import PixsoArticleDetailFrame from '../components/pixso/PixsoArticleDetailFrame.vue'
</script>

<template>
  <div
    class="flex min-h-screen w-full min-w-0 flex-col items-center bg-[#f9f9f7] px-3 pt-0 sm:px-4"
    :style="{ paddingBottom: DESIGN_BOTTOM_NAV_PADDING }"
  >
    <PixsoArticleDetailFrame />
  </div>

  <DesignBottomNav />
</template>
