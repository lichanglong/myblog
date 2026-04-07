<script setup lang="ts">
import { RouterLink } from 'vue-router'
import p748 from '../../assets/pixso-622/Frame_2_748.png?url'
</script>

<template>
  <header
    class="pixso-622-topbar sticky top-0 z-[90] w-full border-b border-[#375749]/10 bg-[#f9f9f7]/95 backdrop-blur-md"
    style="padding-top: env(safe-area-inset-top, 0px)"
  >
    <div
      class="pixso-622-topbar__inner mx-auto box-border w-full max-w-[390px] px-3 sm:px-4"
    >
      <RouterLink
        to="/"
        class="block w-full outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-sky-500"
        aria-label="返回首页"
      >
        <div
          id="2_748"
          class="vector-wrapper-2_748"
          :style="{ '--p748': `url(${p748})` }"
        >
          <div class="vector-2_748"></div>
        </div>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.vector-2_748 {
  position: absolute;
  inset: 0;
  background-image: var(--p748);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.vector-wrapper-2_748 {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 64px;
  box-sizing: border-box;
}

@media (max-width: 420px) {
  .vector-wrapper-2_748 {
    width: 100%;
    max-width: 100%;
  }
}
</style>
