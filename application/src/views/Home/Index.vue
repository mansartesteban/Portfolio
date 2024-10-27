<template>

    <LandingZone></LandingZone>

    <div class="flex flex-col items-center font-bold m-8 md:m-16 gap-4 h-2/3">
        <div
            class="text-4xl md:text-5xl lg:text-6xl text-gray-200 tracking-tight text-center animate__animated animate__fadeInLeft">
            Bonjour ! Je suis
        </div>
        <h1
            class="text-6xl md:text-6xl lg:text-8xl text-center text-primary tracking-wide animate__animated animate__fadeInRight animate__delay-1s">
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

    <div class=" fill-white m-8 md:m-16">
        <div class="text-center text-2xl text-white mb-8">Rejoignez-moi</div>
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

    <div class="flex flex-col gap-16 m-8 md:m-16">
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
</script>
