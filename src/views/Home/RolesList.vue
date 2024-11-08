<template>
    <span ref="container" class="text-primary font-semibold"></span>
</template>

<script setup>
import useTypingAnimation from "@mansartesteban/use-typing-animation"

const words = [
    "développeur web",
    "passionné",
    "curieux",
    "intégrateur",
    "heureux",
    "rigoureux",
    "expérimenté",
    "sérieux",
    "rêveur",
    "photographe",
    "un peu bête.",
]

const typingAnimation = useTypingAnimation(words)

const container = ref()
onMounted(() => {
    typingAnimation.animate(container.value)
})

</script>
