<template>
    <nav class="text-white" :class="{ opened: !closed }">
        <div class="fixed lg:hidden top-8 right-8 z-10 fill-white" @click="closed = !closed">
            <svg id="hamburger" class="Header__toggle-svg" viewbox="0 0 60 40" width="52" height="34">
                <g stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                    <path id="top-line" d="M10,10 L50,10 Z"></path>
                    <path id="middle-line" d="M10,20 L50,20 Z"></path>
                    <path id="bottom-line" d="M10,30 L50,30 Z"></path>
                </g>
            </svg>
        </div>
        <ul class="fixed lg:hidden flex flex-col items-center gap-8 right-0 top-0 p-8 bg-gray-800 w-full z-0 drop-shadow-xl"
            :class="closed ? 'closed' : 'opened'">
            <router-link v-for="(link, i) in navLinks" :to="link.to" class="animate__animated"
                :class="{ 'animate__mySlideInRight': !closed, 'animate__mySlideInLeft': closed }"
                :style="`animation-delay: ${i * 100 + 200}ms;`">
                <li>{{
                    link.title }}</li>
            </router-link>
        </ul>
        <ul class="hidden lg:flex flex items-center gap-8 p-8  " :class="closed ? 'closed' : 'opened'">
            <router-link v-for="link in navLinks" :to="link.to">
                <li>{{ link.title }}</li>
            </router-link>
        </ul>
    </nav>
</template>

<script setup>
const closed = ref(true)
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

</script>

<style scoped>
#top-line,
#bottom-line,
#middle-line {
    transform-box: fill-box;
    transform-origin: center;
}

nav:not(.opened) svg {
    #top-line {
        animation: down-rotate-reverse 0.6s ease-out both;
    }

    #bottom-line {
        animation: up-rotate-reverse 0.6s ease-out both;
    }

    #middle-line {
        animation: hide-reverse 0.6s ease-out forwards;
    }
}

nav.opened svg {
    #top-line {
        animation: down-rotate 0.6s ease-out both;
    }

    #bottom-line {
        animation: up-rotate 0.6s ease-out both;
    }

    #middle-line {
        animation: hide 0.6s ease-out forwards;
    }
}

ul {
    transition: top .5s ease-in-out;
    top: 0;
}

ul.closed {
    top: -100%;
}

.animate__mySlideInRight {
    animation-name: mySlideInRight;
    animation-duration: .5s;
    animation-delay: .5s;
}

.animate__mySlideInLeft {
    animation-name: mySlideInLeft;
    animation-duration: .5s;
}

@keyframes mySlideInRight {
    from {
        transform: translate3d(100vw, 0, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes mySlideInLeft {
    to {
        transform: translate3d(100vw, 0, 0);
    }

    from {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes up-rotate {
    0% {
        animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
        transform: translateY(0px);
    }

    30% {
        transform-origin: center;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translateY(-10px);
    }

    100% {
        transform-origin: center;
        transform: translateY(-10px) rotate(45deg) scale(0.9);
    }
}

@keyframes down-rotate {
    0% {
        animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
        transform: translateY(0px);
    }

    30% {
        transform-origin: center;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translateY(10px);
    }

    100% {
        transform-origin: center;
        transform: translateY(10px) rotate(-45deg) scale(0.9);
    }
}

@keyframes hide {
    29% {
        opacity: 1;
    }

    30% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes up-rotate-reverse {
    100% {
        animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
        transform: translateY(0px);
    }

    70% {
        transform-origin: center;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translateY(-10px);
    }

    0% {
        transform-origin: center;
        transform: translateY(-10px) rotate(45deg) scale(0.9);
    }
}

@keyframes down-rotate-reverse {
    100% {
        animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
        transform: translateY(0px);
    }

    70% {
        transform-origin: center;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: translateY(10px);
    }

    0% {
        transform-origin: center;
        transform: translateY(10px) rotate(-45deg) scale(0.9);
    }
}

@keyframes hide-reverse {
    71% {
        opacity: 1;
    }

    70% {
        opacity: 0;
    }

    0% {
        opacity: 0;
    }
}
</style>