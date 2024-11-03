<template>
    <template v-if="articleFound">
        <div class="markdown" v-html="content"></div>
    </template>
    <template v-else>
        <NotFoundComponent></NotFoundComponent>
    </template>
</template>

<script setup>

import { useRoute } from "vue-router"
import { articles } from "./Articles"
import { parse } from "marked"
import slugify from '@sindresorhus/slugify'

import NotFoundComponent from "../../components/NotFoundComponent.vue"

const route = useRoute()
const articleSlug = computed(() => route.path.split("/").pop())
const articleFound = computed(() => articles.find(article => slugify(article.title) === articleSlug.value))

const content = ref("")

onMounted(() => {
    if (articleFound.value) {
        fetch(articleFound.value.markdown)
            .then(response => response.text())
            .then(text => {
                content.value = parse(text)
            })
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