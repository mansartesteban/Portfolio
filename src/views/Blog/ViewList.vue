<template>
    <ArticleCard v-for="article in articles" :title="article.title" :date="article.date" :public="article.public"
        :contentPreview="article.contentPreview" :link="article.link"></ArticleCard>
</template>

<script setup>
import { articles } from './Articles'
import ArticleCard from "./ArticleCard.vue"

</script>