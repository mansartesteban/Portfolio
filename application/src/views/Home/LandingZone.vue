<template>
    <div class="">
        <div class="animated-background rounded-full animate-opacity blur-4xl absolute  bg-yellow-500 ">
        </div>
        <div class="animated-background rounded-full animate-opacity blur-4xl absolute  bg-red-500 ">
        </div>
        <div class="animated-background rounded-full animate-opacity blur-4xl absolute  bg-purple-500">
        </div>
        <div class="animated-background rounded-full animate-opacity blur-4xl absolute  bg-green-500">
        </div>
        <div class="animated-background rounded-full animate-opacity blur-4xl absolute  bg-blue-500">
        </div>
    </div>
</template>

<script setup>

import { onMounted } from "vue"
import { randomNumber } from "@/utils/Algebra"


const animateBackground = async (elem) => {

    let windowSize = {
        x: window.visualViewport.width,
        y: window.visualViewport.height,
    }
    let attributes = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }

    let minSize = 100
    let shorterSide = Math.min(windowSize.x, windowSize.y)
    let padding = shorterSide * .1

    const changeAttributes = () => {
        let size = randomNumber(minSize, shorterSide - padding)

        attributes.top = randomNumber(padding, windowSize.y - size - padding)
        attributes.left = randomNumber(padding, windowSize.x - size - padding)

        attributes.bottom = windowSize.y - attributes.top - size
        attributes.right = windowSize.x - attributes.left - size

        elem.style.top = `${attributes.top}px`
        elem.style.bottom = `${attributes.bottom}px`
        elem.style.left = `${attributes.left}px`
        elem.style.right = `${attributes.right}px`

        let nextAnimationIn = randomNumber(2000, 5000)

        elem.style.transitionDuration = (nextAnimationIn / 1000) + "s"

        setTimeout(changeAttributes, nextAnimationIn)
    }

    changeAttributes()

}

onMounted(() => {
    document.querySelectorAll(".animated-background").forEach(animateBackground)
})

</script>

<style scoped>
.animated-background {
    transition:
        top 4s cubic-bezier(.33, 0, .66, 1),
        bottom 4s cubic-bezier(.33, 0, .66, 1),
        left 4s cubic-bezier(.33, 0, .66, 1),
        right 4s cubic-bezier(.33, 0, .66, 1);
}

.animate::before {
    --padding: -10px;
    content: "";
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    right: var(--padding);
    bottom: var(--padding);
    border: 3px dashed red;
}

@keyframes opacity {

    from,
    to {
        opacity: .18;
    }

    50% {
        opacity: .07;
    }
}

.animate-opacity {
    animation: opacity 7s ease-in-out infinite;
}
</style>