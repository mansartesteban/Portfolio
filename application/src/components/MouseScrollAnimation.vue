<template>
    <div
        class="mouse h-10 w-6 border-2 border-gray-900 dark:border-gray-200 border-solid rounded-full flex flex-col items-center pt-2">
        <div class="wheel pl-1 py-1 bg-gray-900 dark:bg-white rounded-full"></div>
        <div class="arrows flex flex-col mt-6">
            <div
                class="arrow rounded-sm w-3 h-3 animate-bounce border-solid border-gray-900 dark:border-gray-200 border-b-4 border-r-4 rotate-45">
            </div>
            <div
                class="arrow rounded-sm w-3 h-3 animate-bounce border-solid border-gray-900 dark:border-gray-200 border-b-4 border-r-4 rotate-45">
            </div>
            <div
                class="arrow rounded-sm w-3 h-3 animate-bounce border-solid border-gray-900 dark:border-gray-200 border-b-4 border-r-4 rotate-45">
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes swipe-down {
    from {
        opacity: 0;
        transform: translateY(-.7rem) rotate(45deg);
    }

    20% {
        opacity: 1;
        transform: translateY(0) rotate(45deg);
    }

    50% {
        opacity: 0;
        transform: translateY(-.7rem) rotate(45deg);
    }

    to {
        opacity: 0;
        transform: translateY(-.7rem) rotate(45deg);
    }
}

.arrow {
    animation: swipe-down 4s ease-in-out infinite;
}

.arrow:nth-child(2) {
    animation-delay: .2s;
}

.arrow:nth-child(3) {
    animation-delay: .4s;
}
</style>