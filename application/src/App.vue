<template>
  <div
    class="fixed w-full h-1 bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-lime-500 xl:bg-green-500 2xl:bg-teal-500">
  </div>
  <div class="static text-gray-900 dark:text-gray-200  flex flex-col bg-slate-300 dark:bg-gray-900 min-h-screen ">

    <AppHeader></AppHeader>

    <main class="mt-24 p-8 md:p-10 lg:p-12 gap-16 ">
      <router-view></router-view>
    </main>
    <footer class="section"></footer>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'

</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>