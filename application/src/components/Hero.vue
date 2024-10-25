<template>
    <div ref="hero" class="hero"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    text: String
})

const hero = ref()

onMounted(() => {
    if (props.text) {
        let splitted = [...props.text]
        splitted.forEach((char, i) => {
            let sym = document.createElement("span")
            sym.classList.add("char")
            sym.style.setProperty("--index", i)
            sym.innerText = char
            hero.value.appendChild(sym)
        })
    }
})
</script>

<style lang="scss">
.hero {
    font-size: 15vmin;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;

    letter-spacing: -2rem;

    .char {
        backdrop-filter: blur(20px);
        z-index: var(--index);
        text-shadow: .05ch .05ch .50ch rgba(154, 193, 193, 1);
        position: relative;
        // , 0 0 .15ch .20ch rgba(0, 0, 0, .05);
    }
}
</style>