<template>
  <div
    class="fixed w-full h-1 bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-lime-500 xl:bg-green-500 2xl:bg-teal-500">
  </div>
  <main
    class="static text-gray-900 dark:text-gray-200 overflow-x-hidden flex flex-col bg-slate-300 dark:bg-gray-900	min-h-screen p-8 md:p-10 lg:p-12 gap-16">

    <header class="flex items-center px-0 md:px-4 lg:px-6 xl:px-8 z-10">
      <h1 class="text-2xl font-medium">Vegaia</h1>
      <div class="flex-1"></div>
      <NavBar></NavBar>
    </header>

    <div>
      <router-view></router-view>
    </div>
    <footer class="section"></footer>
  </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';


</script>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>