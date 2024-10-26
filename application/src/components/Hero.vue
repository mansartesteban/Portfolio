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
            sym.classList.add("char", "animate__animated", "animate__bounceInDown", "animate__faster")
            sym.style.setProperty("--index", i)
            sym.innerText = char
            if (char === " ") {
                sym.style.padding = "0 1rem"
            }
            hero.value.appendChild(sym)
        })
    }
})
</script>

<style lang="scss">
.hero {

    .char {
        display: inline-block;
        z-index: var(--index);
        // text-shadow: .05ch .05ch .20ch rgba(0, 0, 0, .25);

        animation-delay: calc(var(--index) * 50ms);
    }
}
</style>