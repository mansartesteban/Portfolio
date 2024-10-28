<template>
    <div class="flex flex-col items-center gap-8 ">
        <h3 class="text-2xl text-center">{{ title }}</h3>
        <div class="flex flex-wrap items-center justify-center gap-4">

            <template v-for="(item, i) of stack">
                <a :href="item.href" target="_blank" class="animate__animated animate__backInUp"
                    :style="`animation-delay:${i * 30}ms`">
                    <img :src="item.src" :alt="item.alt" :title="item.alt" width="40" height="40" />
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