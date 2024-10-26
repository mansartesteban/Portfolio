<template>
  <!-- https://www.codewithrandom.com/2024/05/09/personal-portfolio-website-html-css-js/ -->
  <main class="flex flex-col bg-gray-900	min-h-screen p-12 gap-16">

    <header class="flex items-center px-8">
      <h1 class="text-white text-2xl font-medium">Vegaia</h1>
      <div class="flex-1"></div>
      <nav class="text-white">
        <ul class="flex gap-8">
          <router-link v-for="link in navLinks" :to="link.to">
            <li>{{ link.title }}</li>
          </router-link>
        </ul>
      </nav>
    </header>

    <div class="flex flex-col items-center font-bold m-16 gap-4">
      <div class="text-6xl text-gray-200 tracking-tight animate__animated animate__fadeInLeft">
        <div>Bonjour ! Je suis</div>
      </div>
      <h1 class="text-8xl text-primary tracking-wide animate__animated animate__fadeInRight animate__delay-1s">
        <!-- <Hero text="Esteban Mansart" class="text-primary"></Hero> -->
        Esteban Mansart
      </h1>
      <h2
        class="text-3xl text-gray-200 font-light tracking-tight mt-16 animate__animated animate__zoomIn animate__delay-2s">
        Je
        suis&nbsp;<RolesList></RolesList>
      </h2>
    </div>
    <div class="scroll-content">
      <router-view></router-view>
    </div>
    <footer class="section"></footer>
  </main>
</template>

<script setup>
import Hero from "@/components/Hero.vue"
import useMouseInteractor from "./composables/useMouseInteractor"

import RolesList from "@/components/RolesList.vue"

// useMouseInteractor("#app")

const navLinks = ref([
  {
    title: "Accueil",
    to: { name: 'home' }
  },
  {
    title: "Expériences",
  },
  {
    title: "Formations",

  },
  {
    title: "Projet",
  },
  {
    title: "Blog",
    to: { name: 'blog' }
  },
  {
    title: "Contact",

  },
  {
    title: "Contact",
    to: { name: 'test' }
  }
])
</script>

<style>
div {
  /* outline: 1px dashed red; */
}
</style>

<style scoped>
.scroll-content {
  overflow: auto;

}

::-webkit-scrollbar {
  width: 0;
}
</style>