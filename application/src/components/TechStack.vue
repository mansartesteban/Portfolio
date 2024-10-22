<template>
    <div class="flex flex-column gap-2 pb-2">
        <h3>{{ title }}</h3>
        <div class="grid gap-1">

            <template v-for="item of stack">
                <a :href="item.href" target="_blank">
                    <img :src="item.src" :alt="item.alt" :title="item.alt" width="32" height="32" />
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
    grid-template-columns: repeat(6, 1fr);
}
</style>