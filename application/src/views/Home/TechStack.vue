<template>
    <div class="flex flex-col items-center gap-16 p-8">
        <h3 class="text-3xl text-center">{{ title }}</h3>
        <div class="flex flex-wrap items-center justify-center gap-8">
            <template v-for="(item, i) of stack">
                <a :href="item.href" target="_blank"
                    class="animate__animated animate__backInUp bg-white/25 p-4 rounded-xl flex flex-col items-center justify-center text-center w-16 h-16 drop-shadow-2xl "
                    :style="`animation-delay:${i * 30}ms`">
                    <img class="" :src="item.src" :alt="item.alt" :title="item.alt" />
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "Stack",
    },
    stack: {
        type: Array,
        default: () => [],
        validator: (value) => Array.isArray(value) && value.every(item => item.href && item.src && item.alt)
    }
})
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
}
</style>