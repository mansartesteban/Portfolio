<template>
    <span :class="['text-primary writer', { typing }]">{{ text }}</span>
</template>

<script setup>

import { randomNumber } from '@/utils/Algebra'

const text = ref("")
const typing = ref(false)

const words = [
    "développeur web",
    "passionné",
    "curieux",
    "intégrateur",
    "rigoureux",
    "expérimenté",
    "sérieux",
    "rêveur",
    "photographe",
    "un peu bête.",
]


const sleep = ms => new Promise(r => setTimeout(r, ms))

const animate = async (index = 0) => {
    typing.value = true
    let word = [...words[index]]
    for (let i = 0; i < word.length; i++) {
        text.value += word[i]
        await sleep(randomNumber(50, 150))
    }

    typing.value = false
    await sleep(2000)
    typing.value = true
    while (text.value.length > 0) {
        text.value = text.value.substr(0, text.value.length - 1)
        await sleep(randomNumber(50, 150))
    }

    animate((index + 1) % words.length)
}

onMounted(animate)
</script>

<style scoped>
.writer {

    border-right: .1em solid white;
}

.writer:not(.typing) {
    animation: blink-caret 1.2s step-end infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: white;
    }
}
</style>