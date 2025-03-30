<template>
  <h1 class="text-5xl md:text-4xl text-center text-primary tracking-wide">
    Showcase
  </h1>

  <div class="flex flex-row align-center justify-center gap-16 mt-16">
    <router-link :to="{ name: 'sc_sorts' }">
      <Card
        title="Algorithmes de tri"
        cta-label="Voir"
        text="Découvrez comment fonctionnent les algorithmes de tri grâce à ces animations visuelles !"
        :img="SortsImg"
        class="hover:bg-slate-200/20 transition-all"
      ></Card>
    </router-link>
  </div>
</template>

<script setup>
  import SortsImg from "@/assets/images/showcase/home_sorts.png";
</script>
