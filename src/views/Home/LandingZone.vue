<template>
    <div class="">

        <div class="fixed ease-in-out animated-background rounded-full animate-opacity blur-yellow ">
        </div>
        <div class="fixed ease-in-out animated-background rounded-full animate-opacity blur-red ">
        </div>
        <div class="fixed ease-in-out animated-background rounded-full animate-opacity blur-purple">
        </div>
        <div class="fixed ease-in-out animated-background rounded-full animate-opacity blur-green">
        </div>
        <div class="fixed ease-in-out animated-background rounded-full animate-opacity blur-blue">
        </div>
    </div>
</template>

<script setup>

import { onMounted } from "vue"
import { randomNumber } from "@mansartesteban/utils"


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

        elem.style.top = `${attributes.top - size / 2}px`
        elem.style.left = `${attributes.left - size / 2}px`
        elem.style.width = `${size * 2}px`
        elem.style.height = `${size * 2}px`

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
    animation: 5s ease-in-out opacity infinite;
}

.blur-red {
    background: radial-gradient(farthest-side, rgb(255, 0, 0), transparent);
}

.blur-green {
    background: radial-gradient(farthest-side, rgb(0, 255, 0), transparent);
}

.blur-yellow {
    background: radial-gradient(farthest-side, rgb(255, 255, 0), transparent);
}

.blur-blue {
    background: radial-gradient(farthest-side, rgb(0, 0, 255), transparent);
}

.blur-purple {
    background: radial-gradient(farthest-side, rgb(255, 0, 255), transparent);
}
</style>