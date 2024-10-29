<template>

    <LandingZone></LandingZone>

    <div
        class="snap-start h-full flex flex-col items-center font-bold mx-8 my-10 sm:mx-10 sm:my-16 md:mx-14 md:my-20 gap-8">
        <div class="text-4xl md:text-5xl tracking-tight text-center animate__animated animate__fadeInLeft">
            Bonjour ! Je m'appelle
        </div>
        <h1
            class="text-5xl md:text-6xl text-center text-primary tracking-wide animate__animated animate__fadeInRight animate__delay-1s">
            Esteban Mansart
        </h1>
        <h2
            class="text-center text-3xl font-light tracking-tight mt-8 md:mt-12 lg:mt-16 animate__animated animate__zoomIn animate__delay-2s">
            Je
            suis&nbsp;
            <div class="sm:inline-block"></div>
            <RolesList></RolesList>
        </h2>

    </div>

    <div class="snap-start flex flex-col items-center py-20 transition-opacity duration-500 ease-in-out z-10"
        :class="hasScrolled ? 'opacity-0' : ''">
        <MouseScrollAnimation></MouseScrollAnimation>
    </div>

    <div class=" snap-start fill-white my-8 md:m-12 ">
        <div class="relative text-center text-2xl mb-8">Rejoignez-moi</div>
        <div class="flex flex-wrap justify-center align-center gap-4 md:gap-6 lg:gap-8">
            <a v-for="(social, i) in socials" :href="social.to" target="_blank"
                class="flex justify-center align-center animate__animated animate__jackInTheBox"
                :style="`animation-delay: ${200 * i}ms`">
                <div class="flex justify-center align-center bg-gray-200 rounded-lg p-2 social">
                    <img :src="social.img" width="32" height="32">
                </div>
            </a>
        </div>
    </div>



    <div class="snap-start flex flex-col gap-32 m-8 md:m-16 mt-32">
        <TechStackMaster class="animate__animated animate__fadeInUp"></TechStackMaster>
        <TechStackTools class="animate__animated animate__fadeInUp"></TechStackTools>
        <TechStackLearning class="animate__animated animate__fadeInUp"></TechStackLearning>
    </div>
</template>

<script setup>
import TechStackMaster from "@/components/TechStackMaster.vue"
import TechStackLearning from "@/components/TechStackLearning.vue"
import TechStackTools from "@/components/TechStackTools.vue"
import LandingZone from "./LandingZone.vue"
import RolesList from "@/components/RolesList.vue"
import MouseScrollAnimation from "@/components/MouseScrollAnimation.vue"

import Github from "@/assets/images/socials/github.svg"
import Instagram from "@/assets/images/socials/instagram.svg"
import StackOverflow from "@/assets/images/socials/stackoverflow.svg"
import StackShare from "@/assets/images/socials/stackshare.svg"
import FlatIcon from "@/assets/images/socials/flaticon.svg"
import LinkedIn from "@/assets/images/socials/linkedin.svg"

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

const hasScrolled = ref(false)

window.addEventListener("scroll", (e) => hasScrolled.value = window.scrollY > 0)
</script>
