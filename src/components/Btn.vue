<template>
    <router-link :to="href">
        <div class="btn">
            <slot></slot>
        </div>
    </router-link>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>

<style scoped>
.btn {
    border-radius: var(--btn--border-radius);
}
</style>