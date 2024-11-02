<template>
    <header
        class="fixed z-30 top-0 left-0 w-screen transition-all ease-in-out duration-1000 md:px-10 lg:px-12 xl:px-14 2xl:px-16 flex items-center justify-between "
        :class="[hasScrolled ? 'p-4 h-12 sticked ' : 'px-8 h-24', { 'backdrop-blur-md': !opened }]">
        <div class="read-progress z-100 absolute top-0 left-0 h-[1px] w-screen bg-slate-200">
        </div>
        <h1 class="text-2xl font-medium"><a href="/">Vegaia</a></h1>

        <div class="toggle-button flex flex-col gap-1 lg:hidden" @click.prevent="toggleMenu">
            <div id="top-line" class="bg-white rounded-full w-6 h-1 origin-top-right transition-all"
                :class="opened ? 'translate-x-1 -rotate-45' : ''"></div>
            <div id="middle-line" class="bg-white rounded-full w-6 h-1 transition-all"
                :class="opened ? 'opacity-0' : ''"></div>
            <div id="bottom-line" class="bg-white rounded-full w-6 h-1 origin-bottom-right transition-all"
                :class="opened ? 'translate-x-1 rotate-45' : ''"></div>
        </div>

        <nav class="hidden lg:block">
            <ul class="hidden lg:flex items-center gap-8 p-2">
                <router-link v-for=" link in navLinks" :to="link.to">
                    <li>{{ link.title }}</li>
                </router-link>
            </ul>
        </nav>
    </header>
    <nav class="lg:hidden">
        <ul id="menu"
            class="fixed z-20 text-xl  flex flex-col items-center gap-8 p-8 bg-slate-800 w-full backdrop-shadow-md transition-top ease-in-out duration-1000"
            :class="[opened ? 'top-0' : '-top-full', hasScrolled ? 'sticked' : '', hasScrolled ? 'pt-20' : 'pt-32']">
            <router-link v-for="(link, i) in navLinks" :to="link.to" class=""
                :class="{ 'left-0': opened, 'left-full': !opened }" :style="`transition-delay: ${i * 100 + 200}ms;`"
                @click="opened = false">
                <li>{{ link.title }}</li>
            </router-link>
        </ul>

    </nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'


const hasScrolled = ref(false)

window.addEventListener("scroll", (e) => hasScrolled.value = window.scrollY > 0)

const opened = ref(false)
const navLinks = ref([
    {
        title: "Accueil",
        to: { name: 'home' }
    },
    {
        title: "Expériences",
        to: "/career"
    },
    // {
    //     title: "Projet",
    //     to: "/"
    // },
    {
        title: "Blog",
        to: { name: 'blog' }
    },
    {
        title: "Contact",
        to: "/"
    },

])

const toggleMenu = () => opened.value = !opened.value

onMounted(() => onClickOutside(document.querySelector('#menu'), (e) => {
    if (!e.target.closest(".toggle-button")) {
        opened.value = false
    }
}))
</script>

<style scoped>
.animate__mySlideInRight {
    animation-name: mySlideInRight;
    animation-duration: .5s;
    animation-delay: .5s;
}

.animate__mySlideInLeft {
    animation-name: mySlideInLeft;
    animation-duration: .5s;
}

.read-progress {
    box-shadow: 0 1px 5px rgba(255, 255, 255, 1);
    transform-origin: left;
    animation: width-scroll 1s ease-in-out;
    animation-timeline: scroll();
}

@keyframes width-scroll {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}
</style>