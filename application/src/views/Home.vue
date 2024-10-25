<template>
    <div class="main-thread flex flex-column align-items-stretch">
        <header class="section flex justify-content-center">
            <nav>
                <ul class="flex gap-2">
                    <li>Accueil</li>
                    <li>Expériences</li>
                    <li>Formations</li>
                    <li>Projet</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li><router-link :to="{ name: 'test' }">Sandbox</router-link></li>
                </ul>
            </nav>
        </header>

        <article class="section left-side">

            <h1>Esteban Mansart</h1>
            <p>Développeur Web Front-End / Back-End / Week-End</p>
            <hr />
            <TechStackMaster></TechStackMaster>
            <TechStackTools></TechStackTools>
            <TechStackLearning></TechStackLearning>

        </article>

        <footer class="section"></footer>
        <!-- <div class="right-side flex flex-column gap-2 flex-1">

            <main class="section">Je suis une section</main>
        </div> -->
    </div>
</template>

<script setup>
import TechStackMaster from "@/components/TechStackMaster.vue"
import TechStackLearning from "@/components/TechStackLearning.vue"
import TechStackTools from "@/components/TechStackTools.vue"
</script>


<style scoped>
.main-thread {
    width: 50%;
    padding: 1.5rem;
    gap: 2rem;
}

.left-side {
    /* width:25%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
}

/* .right-side {
  flex: 3;
} */
</style>