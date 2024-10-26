<template>
    <div class="main-thread p-16">

        <TechStackMaster></TechStackMaster>
        <TechStackTools></TechStackTools>
        <TechStackLearning></TechStackLearning>


        <!-- <div class="right-side flex flex-col gap-2 flex-1">

            <main class="section">Je suis une section</main>
        </div> -->
    </div>
</template>

<script setup>
import TechStackMaster from "@/components/TechStackMaster.vue"
import TechStackLearning from "@/components/TechStackLearning.vue"
import TechStackTools from "@/components/TechStackTools.vue"
</script>
