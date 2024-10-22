<template>
  <!-- https://www.codewithrandom.com/2024/05/09/personal-portfolio-website-html-css-js/ -->
  <div class="main-thread">
    <aside class="section left-side">
      <h1>Esteban Mansart</h1>
      <p>Développeur Web Front-End / Back-End / Week-End</p>
      <hr />
      <h2>Expériences</h2>
      <br>
      <h2>Formations</h2>
      <hr>
      <h2>Technologies maîtrisées</h2>
      <br>

      <TechStackMaster></TechStackMaster>
      <TechStackTools></TechStackTools>
      <TechStackLearning></TechStackLearning>


    </aside>
    <main class="section right-side">Je suis une section</main>
  </div>
</template>

<script setup>
import TechStackMaster from "./components/TechStackMaster.vue"
import TechStackLearning from "./components/TechStackLearning.vue"
import TechStackTools from "./components/TechStackTools.vue"
</script>

<style scoped>
.main-thread {
  width: 75%;
  padding: 1.5rem;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.left-side {
  /* width:25%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.right-side {
  flex: 3;
}
</style>
