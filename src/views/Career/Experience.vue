<template>
    <div class="snap-center relative p-1 h-screen mb-16  rounded-xl">
        <div class="flex flex-col items-center">
            <img :src="image">
        </div>
        <div class="absolute top-0 left-0 opacity-10 h-screen -m-8">
            <img class="h-full object-cover " :src="Back" alt="">
        </div>
        <div class="mt-4 text-justify flex flex-col gap-8">
            <h2 class="text-2xl font-bold">{{ title }}</h2>
            <span class="text-bold"></span>
            <span class="text-bold"></span>
            <p v-html="content"></p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    image: String,
    title: String,
    content: String,
    link: String,
})
</script>