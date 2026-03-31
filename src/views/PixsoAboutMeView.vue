<script setup lang="ts">
import DesignBottomNav, {
  DESIGN_BOTTOM_NAV_PADDING,
} from '../components/DesignBottomNav.vue'
import PixsoAboutMeFrame from '../components/pixso/PixsoAboutMeFrame.vue'
</script>

<template>
  <div
    class="flex min-h-screen w-full min-w-0 flex-col items-center bg-[#eff1f0] px-3 pt-0 sm:px-4"
    :style="{ paddingBottom: DESIGN_BOTTOM_NAV_PADDING }"
  >
    <PixsoAboutMeFrame />
  </div>

  <DesignBottomNav />
</template>
