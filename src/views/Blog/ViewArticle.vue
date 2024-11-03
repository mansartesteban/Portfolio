<template>
    <template v-if="articleFound">
        <div class="markdown" v-html="content"></div>
    </template>
    <template v-else>
        <div class="h-full w-full flex flex-col items-center justify-center flex-1 gap-4">
            <div class=" text-8xl">
                <span class="404-1">4</span>
                <span class="404-2">0</span>
                <span class="404-3">4</span>
            </div>
            <div class=" text-4xl">Cette page n'existe pas</div>
        </div>

        <div ref="magnify" class="fixed top-1/2 left-1/2 rounded-full h-96 w-96  -translate-x-1/2 -translate-y-1/2 "
            :style="{ left: `${position.x}px`, top: `${position.y}px` }">
            <div class="absolute bg-amber-800 w-24 h-full left-72 top-80 -rotate-45"
                style="transform-origin: center top;"></div>
            <div
                class="absolute backdrop-invert h-full w-full rounded-full outline-[3rem] outline -outline-offset-1 outline-gray-400">
            </div>
        </div>
    </template>
</template>

<script setup>

import { useRoute } from "vue-router"
import { articles } from "./Articles"
import slugify from '@sindresorhus/slugify'

import { parse } from "marked"
// TODO: Rename
import useMouseInteractor from "../../composables/useMouseInteractor"

const route = useRoute()
const articleSlug = computed(() => route.path.split("/").pop())
const articleFound = computed(() => articles.find(article => slugify(article.title) === articleSlug.value))

const content = ref("")

const position = ref({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
})

const magnify = ref()

import { randomNumber } from "@/utils/Algebra"

let animator = ref(null)
const animateMagnify = () => {
    let x = randomNumber(window.innerWidth * .2, window.innerWidth - window.innerWidth * .2)
    let y = randomNumber(window.innerHeight * .2, window.innerHeight - window.innerHeight * .2)


    if (animator.value) {
        animator.value.newTarget(x, y)
    } else {
        position.value.x = x
        position.value.y = y
    }

    setTimeout(animateMagnify, randomNumber(1000, 3000))
}


onMounted(() => {
    if (articleFound.value) {
        fetch(articleFound.value.markdown)
            .then(response => response.text())
            .then(text => {
                content.value = parse(text)
            })
    } else {
        animator.value = useMouseInteractor(magnify.value)
        animateMagnify()
    }
})
</script>

<style>
.markdown h1 {
    @apply text-3xl font-bold my-4
}

.markdown h2 {
    @apply text-2xl font-black my-2
}

.markdown h3 {
    @apply text-xl font-semibold my-1
}

.markdown p, .markdown ul {
    @apply mb-4
}

.markdown ul li {
    @apply list-disc ml-5
}

.markdown ol li {
    @apply list-decimal ml-5
}

.markdown a {
    @apply text-primary font-semibold
}

.markdown img {
    @apply rounded-xl drop-shadow-xl
}
</style>