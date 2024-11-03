<template>
    <div class="flex flex-col items-center text-center">
        <img :src="Beach" class="w-[15rem] h-[15rem] mb-8">
        <div class="h-full w-full flex flex-col items-center justify-center flex-1 gap-4">
            <div class=" text-8xl">
                <span class="404-1">4</span>
                <span class="404-2">0</span>
                <span class="404-3">4</span>
            </div>
            <div class=" text-4xl">Cette page n'existe pas</div>
        </div>

        <div ref="magnify" class="fixed scale-[.5] lg:scale-100">
            <div
                class="absolute backdrop-invert z-10 rounded-full top-[4.7rem] left-[4.7rem] w-[18rem] h-[18rem] -translate-x-full -translate-y-full ">
            </div>
            <img class="relative min-h-[30rem] h-[30rem] min-w-[30rem] w-[30rem] z-20 -translate-x-1/2 -translate-y-1/2"
                :src="MagnifyInside">
        </div>
    </div>
</template>

<script setup>
import { useLerpAnimation, randomNumber } from "@mansartesteban/utils"
import MagnifyInside from "@/assets/images/magnify-inside.svg"

import Beach from "@/assets/images/beach.svg"

const magnify = ref()

let animator = ref(null)
const animateMagnify = () => {

    if (animator.value) {
        animator.value.newRandomTarget()
    }

    setTimeout(animateMagnify, randomNumber(1000, 3000))
}

onMounted(() => {
    animator.value = useLerpAnimation(magnify.value)
    animateMagnify()
})

</script>