<template>
    <div class="blog flex flex-col gap-16 p-4">
        <ArticleCard v-for="article in articles" :title="article.title" :date="article.date" :public="article.public"
            :contentPreview="article.contentPreview" :link="article.link"></ArticleCard>
    </div>
</template>

<script setup>
import ArticleCard from "./ArticleCard.vue"

import Article1 from "./articles/enhance-your-github-profile.md"


// title
// date
// public
// contentPreview
// link
const articles = ref(Array(4).fill([
    {
        title: "Améliorer votre profil Github",
        date: new Date(),
        public: "Tout le monde",
        link: "http://google.com",
        subtitle: "Débutant",
        markdown: Article1,
        contentPreview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium facere hic maxime aliquid. Veritatis ut ullam eum animi quam, officia dicta rerum delectus! "
    },
    // {
    //     title: ""
    // }
]).flat())
</script>