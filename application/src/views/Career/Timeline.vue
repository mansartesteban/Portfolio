<template>
    <div v-for="(item, index) in items" class="flex pt-4 h-full">
        <div class="flex flex-col items-center animate__animated animate__fadeInLeft"
            :style="`animation-delay: ${index * 700 + 500}ms`">
            <div class="rounded-full p-[.25rem] bg-slate-700 border-slate-700 border-4">
                <component v-if="item.icon" :is="item.icon" class="w-4 h-4 text-slate-500"></component>
                <div v-else class="rounded-full w-4 h-4 border-slate-500 border-4 border-dotted"></div>

            </div>
            <div class="border-l-4 border-solid border-slate-700 flex-1 mt-4"></div>
        </div>


        <div class="relative flex flex-col rounded-xl bg-slate-700 ml-4 p-4 flex-1 transition-transform animate__animated animate__fadeInRight"
            :style="`animation-delay: ${index * 700 + 500}ms`">
            <div class="absolute bg-slate-700 w-4 h-4 top-2 -left-1 rotate-45 rounded-sm"></div>
            <div class="flex items-center justify-between">
                <div class="text-xl font-bold title">{{ item.title }}</div>
                <div
                    class="flex flex-col align-center justify-center rounded-xl bg-white h-10 md:h-12 lg:h-16 w-16 md:w-20 lg:w-32">
                    <img :src="item.image" class="object-contain m-2 md:m-4 lg:m-6">
                </div>
            </div>
            <div class="text-lg font-bold title mt-4 mb-2 text-slate-500">{{ item.subtitle }}</div>
            <div class="w-full">
                <slot name="item-content" v-bind="{ item }"></slot>
                <div v-if="item.subitems" class="mt-4 ">
                    <div class="font-bold my-4">Mes fiertés</div>
                    <div v-for="subitem in item.subitems" class="ml-4">
                        <li>{{ subitem }}</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: Array
})
</script>
