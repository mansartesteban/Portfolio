<template>

    <LandingZone></LandingZone>

    <div class=" h-full flex flex-col items-center font-bold mx-8 my-10 sm:mx-10 sm:my-16 md:mx-14 md:my-20 gap-8">
        <div class="text-4xl mt-24 md:text-5xl tracking-tight text-center animate__animated animate__fadeInLeft">
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

    <div class=" flex flex-col items-center py-20 transition-opacity duration-500 ease-in-out z-10"
        :class="hasScrolled ? 'opacity-0' : ''">
        <MouseScrollAnimation></MouseScrollAnimation>
    </div>

    <div class="bio relative flex flex-col items-center gap-64 lg:gap-0 p-8 z-10 md:mx-8">
        <div class=" lg:h-screen flex flex-col items-center lg:flex-row gap-8 md:gap-32 md:my-16">
            <img :src="Illu1"
                class="lg:slide-left  drop-shadow-lg h-64 w-64 lg:w-[20rem] lg:h-[20rem] xl:w-[32rem] xl:h-[32rem]"></img>
            <p class="lg:slide-right text-justify leading-7 text-lg md:text-2xl md:leading-10 md:p-4 lg:p-8 xl:p-16">
                Depuis l'âge de 15 ans, je me suis découvert une passion profonde pour l'informatique, et plus
                précisément pour le développement. Ce qui m'enchante par-dessus tout dans cet univers, c'est cette
                sensation de devenir, à notre manière, des artisans du code, presque des artistes. Nous partons d'un
                vide absolu pour façonner des œuvres fonctionnelles, empreintes de complexité et de précision.
            </p>
        </div>
        <div class=" lg:h-screen flex flex-col items-center lg:flex-row-reverse gap-8 md:gap-32 md:my-16">
            <img :src="Illu2"
                class=" lg:slide-right drop-shadow-lg h-64 w-64 lg:w-[20rem] lg:h-[20rem] xl:w-[32rem] xl:h-[32rem]"></img>
            <p class="lg:slide-left text-justify leading-7 text-lg md:text-2xl md:leading-10 md:p-4 lg:p-8 xl:p-16">
                J'éprouve un réel plaisir à réfléchir, imaginer, concevoir, structurer et innover. J'aime à penser que
                les développeurs d'aujourd'hui jouent un rôle important dans la construction du monde de demain, en
                contribuant constamment à l'enrichissement du socle de connaissances techniques dont l'humanité dispose.
            </p>
        </div>
    </div>

    <div class="  fill-white my-8 md:m-12 ">
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



    <div class="snap-start flex flex-col gap-32  mt-32">
        <TechStackMaster class="animate__animated animate__fadeInUp"></TechStackMaster>
        <TechStackTools class="animate__animated animate__fadeInUp"></TechStackTools>
        <TechStackLearning class="animate__animated animate__fadeInUp"></TechStackLearning>
    </div>
</template>

<script setup>
import TechStackMaster from "@/views/Home/TechStackMaster.vue"
import TechStackLearning from "@/views/Home/TechStackLearning.vue"
import TechStackTools from "@/views/Home/TechStackTools.vue"
import LandingZone from "./LandingZone.vue"
import RolesList from "@/views/Home/RolesList.vue"
import MouseScrollAnimation from "@/components/MouseScrollAnimation.vue"

import Github from "@/assets/images/socials/github.svg"
import Instagram from "@/assets/images/socials/instagram.svg"
import StackOverflow from "@/assets/images/socials/stackoverflow.svg"
import StackShare from "@/assets/images/socials/stackshare.svg"
import FlatIcon from "@/assets/images/socials/flaticon.svg"
import LinkedIn from "@/assets/images/socials/linkedin.svg"

import Illu1 from "@/assets/images/Illu1.webp"
import Illu2 from "@/assets/images/Illu2.webp"

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

<style scoped></style>