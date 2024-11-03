<template>

  <div class="static text-gray-900 dark:text-gray-200 flex flex-col bg-slate-300 dark:bg-gray-900 min-h-screen ">

    <!-- <div
      class="fixed w-full h-1 bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-lime-500 xl:bg-green-500 2xl:bg-teal-500">
    </div> -->

    <AppHeader></AppHeader>


    <main class="flex flex-col mt-24 p-4 md:p-10 lg:p-12 flex-1">
      <router-view></router-view>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import Lenis from 'lenis'

const lenis = new Lenis({
  lerp: .1
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<style>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>