<template>
    <div class="blog flex flex-col gap-2">
        <div v-for="article in articles" class="blog-article section flex flex-col gap-2">
            <div class="blog-article__header">
                <div class="blog-article__title">
                    <h1>{{ article.title }}</h1>
                </div>
                <div class="blog-article__subtitle">
                    <h2>{{ article.subtitle }}</h2>
                </div>
            </div>
            <div class="btn">Lire l'article</div>
            <!-- <div class="blog-article__body">
                {{ article.markdown }}
            </div> -->
        </div>
    </div>
</template>

<script setup>
import Article1 from "./articles/enhance-your-github-profile.md"

const articles = ref(Array(4).fill([
    {
        title: "Améliorer votre profil Github",
        subtitle: "Débutant",
        markdown: Article1
    },
    // {
    //     title: ""
    // }
]).flat())
</script>