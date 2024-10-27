<template>
  <!-- https://www.codewithrandom.com/2024/05/09/personal-portfolio-website-html-css-js/ -->
  <main class="static overflow-y-auto flex flex-col bg-gray-900	min-h-screen p-8 md:p-10 lg:p-12 gap-16 w-screen">

    <!-- <div
      class="w-screen p-1 bg-blue-500 sm:bg-red-100 md:bg-red-300 lg:bg-red-500 xl:bg-red-700 2xl:bg-red-900 absolute left-0 right-0 top-0">
    </div> -->
    <div class="animated-background z-[1] rounded-full animate-opacity blur-4xl opacity-20 absolute  bg-yellow-500 ">
    </div>
    <div class="animated-background z-[1] rounded-full animate-opacity blur-4xl opacity-20 absolute  bg-red-500 ">
    </div>
    <div class="animated-background z-[0] rounded-full animate-opacity blur-4xl opacity-20 absolute  bg-purple-500">
    </div>
    <div class="animated-background z-[0] rounded-full animate-opacity blur-4xl opacity-20 absolute  bg-green-500">
    </div>
    <div class="animated-background z-[0] rounded-full animate-opacity blur-4xl opacity-20 absolute  bg-blue-500">
    </div>


    <header class="flex items-center px-0 md:px-4 lg:px-8 z-10">
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

    <div class="flex flex-col items-center font-bold m-8 md:m-16 gap-4 z-10">
      <div
        class="text-4xl md:text-5xl lg:text-6xl text-gray-200 tracking-tight text-center animate__animated animate__fadeInLeft">
        Bonjour ! Je suis
      </div>
      <h1
        class="text-6xl md:text-6xl lg:text-8xl text-center text-primary tracking-wide animate__animated animate__fadeInRight animate__delay-1s">
        <!-- <Hero text="Esteban Mansart" class="text-primary"></Hero> -->
        Esteban Mansart
      </h1>
      <h2
        class="text-center text-3xl text-gray-200 font-light tracking-tight mt-16 animate__animated animate__zoomIn animate__delay-2s">
        Je
        suis&nbsp;
        <div class="sm:inline-block"></div>
        <RolesList></RolesList>
      </h2>

    </div>

    <div class="socials  fill-white z-10">
      <div class="text-center text-white">Rejoignez-moi</div>
      <div class="flex justify-center align-center gap-8 p-8">
        <a v-for="social in socials" :href="social.to" target="_blank" class="flex justify-center align-center">
          <div class="flex justify-center align-center bg-gray-200 rounded-lg p-2 social">
            <img :src="social.img" width="32" height="32">
          </div>
        </a>
      </div>
    </div>

    <div class="scroll-content z-10">
      <router-view></router-view>
    </div>
    <footer class="section"></footer>
  </main>
</template>

<script setup>
import Hero from "@/components/Hero.vue"
import useMouseInteractor from "./composables/useMouseInteractor"

import RolesList from "@/components/RolesList.vue"

import Github from "@/assets/images/socials/github.svg"
import Instagram from "@/assets/images/socials/instagram.svg"
import StackOverflow from "@/assets/images/socials/stackoverflow.svg"
import StackShare from "@/assets/images/socials/stackshare.svg"
import FlatIcon from "@/assets/images/socials/flaticon.svg"
import LinkedIn from "@/assets/images/socials/linkedin.svg"
import { onMounted } from "vue"
import { randomNumber } from "./utils/Algebra"

// useMouseInteractor("#app")

const navLinks = ref([
  {
    title: "Accueil",
    to: { name: 'home' }
  },
  {
    title: "Expériences",
    to: "/"
  },
  {
    title: "Formations",
    to: "/"
  },
  {
    title: "Projet",
    to: "/"
  },
  {
    title: "Blog",
    to: { name: 'blog' }
  },
  {
    title: "Contact",
    to: "/"
  },
  {
    title: "Contact",
    to: { name: 'test' }
  }
])

const socials = [
  {
    title: "Github",
    img: Github,
    to: "https://github.com/mansartesteban",
  },
  {
    title: "LinkedIn",
    img: LinkedIn,
    to: "https://www.linkedin.com/in/estebanmansart/",
  },
  {
    title: "StackShare",
    img: StackShare,
    to: "https://stackshare.io/estebanmansart",
  },
  {
    title: "StackOverflow",
    img: StackOverflow,
    to: "https://stackoverflow.com/users/14555332/esteban-mansart",
  },
  {
    title: "FlatIcon",
    img: FlatIcon,
    to: "https://www.flaticon.com/authors/esteban-mansart",
  },
  {
    title: "Instagram",
    img: Instagram,
    to: "https://www.instagram.com/esteban.mansart",
  }
]

const animateBackground = async (elem) => {

  let windowSize = {
    x: window.visualViewport.width,
    y: window.visualViewport.height,
  }
  let attributes = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }

  let minSize = 100
  let shorterSide = Math.min(windowSize.x, windowSize.y)
  let padding = shorterSide * .1

  const changeAttributes = () => {
    let size = randomNumber(minSize, shorterSide - padding)

    attributes.top = randomNumber(padding, windowSize.y - size - padding)
    attributes.left = randomNumber(padding, windowSize.x - size - padding)

    attributes.bottom = windowSize.y - attributes.top - size
    attributes.right = windowSize.x - attributes.left - size

    elem.style.top = `${attributes.top}px`
    elem.style.bottom = `${attributes.bottom}px`
    elem.style.left = `${attributes.left}px`
    elem.style.right = `${attributes.right}px`

    let nextAnimationIn = randomNumber(2000, 5000)

    elem.style.transitionDuration = (nextAnimationIn / 1000) + "s"

    setTimeout(changeAttributes, nextAnimationIn)
  }

  changeAttributes()

}

onMounted(() => {
  document.querySelectorAll(".animated-background").forEach(animateBackground)

})
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

.animated-background {
  transition:
    top 4s cubic-bezier(.33, 0, .66, 1),
    bottom 4s cubic-bezier(.33, 0, .66, 1),
    left 4s cubic-bezier(.33, 0, .66, 1),
    right 4s cubic-bezier(.33, 0, .66, 1);
}

.animate::before {
  --padding: -10px;
  content: "";
  position: absolute;
  top: var(--padding);
  left: var(--padding);
  right: var(--padding);
  bottom: var(--padding);
  border: 3px dashed red;
}
</style>