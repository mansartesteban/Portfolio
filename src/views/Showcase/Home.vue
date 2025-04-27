<template>
  <h1 class="text-5xl md:text-4xl text-center text-primary tracking-wide">
    Showcase
  </h1>

  <div
    class="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-16 mt-16"
  >
    <router-link :to="{ name: 'sc_sorts' }">
      <Card
        title="Algorithmes de tri"
        cta-label="Voir"
        text="Découvrez comment fonctionnent les algorithmes de tri grâce à ces animations visuelles !"
        :img="SortsImg"
        class="hover:bg-slate-200/20 transition-all"
      ></Card>
    </router-link>
    <a
      href="https://pere-noel-de-beauvais.com/"
      target="_blank"
    >
      <Card
        title="Le Père-Noël de Beauvais"
        cta-label="Voir"
        text="Un site vitrine féérique que j’ai développé pour présenter et réserver des prestations du Père Noël à domicile et en événementiel."
        :img="PereNoelDeBeauvaisImg"
        class="hover:bg-slate-200/20 transition-all"
      ></Card>
    </a>
    <a
      href="https://pitaya-book.vercel.app/"
      target="_blank"
    >
      <Card
        title="Pitaya-Inc Book"
        cta-label="Voir"
        text="Mon book de photographe. Un site vitrine que j'ai développé pour présenter mes photos et mes prestations de photographe."
        :img="PitayaBookImg"
        class="hover:bg-slate-200/20 transition-all"
      ></Card>
    </a>
  </div>
</template>

<script setup>
  import SortsImg from "@/assets/images/showcase/home_sorts.png";
  import PereNoelDeBeauvaisImg from "@/assets/images/showcase/home_pere_noel_de_beauvais.png";
  import PitayaBookImg from "@/assets/images/showcase/home_pitaya_book.png";
</script>
