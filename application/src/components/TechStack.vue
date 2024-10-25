<template>
    <div class="flex flex-column align-items-center gap-2 pb-2">
        <h3>{{ title }}</h3>
        <div class="grid gap-2">

            <template v-for="item of stack">
                <a :href="item.href" target="_blank">
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