<template>
    <div class="relative rounded-xl bg-white dark:bg-slate-800 drop-shadow-xl md:m-4 lg:m-8">
        <div class="flex flex-col gap-4 p-8 md:p-10 md:gap-6 lg:p-12 lg:gap-8">
            <div
                class=" asbolute text-center  text-xl font-bold rounded-xl h-[calc(10%)] bg-primary text-white -mx-12 md:-mx-16 p-4 md:p-6 lg:-mx-20 lg:p-8 lg:text-2xl">
                {{ title }}</div>
            <div class="text-slate-500">{{ formattedDate }}</div>
            <div class="flex items-center gap-2 text-slate-500">
                <i class="mdi mdi-target-account"></i>
                <div class="">{{ public }}</div>
            </div>
            <div class="line-clamp-3">{{ contentPreview }}</div>
            <div class="bg-primary rounded-full text-white text-center px-4 py-2 mt-4">Voir l'article</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    date: Date,
    public: String,
    contentPreview: String,
    link: String
})

const formattedDate = computed(() => props.date.toUTCString())
</script>