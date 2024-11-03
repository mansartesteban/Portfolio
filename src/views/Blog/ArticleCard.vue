<template>
    <div class="relative rounded-xl bg-white dark:bg-slate-800 drop-shadow-xl md:m-4 lg:m-8">
        <div
            class=" asbolute text-center text-xl font-bold rounded-xl bg-primary text-white -mx-4 mt-8 md:-mx-8 p-4 md:p-6 lg:-mx-12 lg:p-8 lg:text-2xl">
            {{ title }}</div>
        <div class="flex flex-col lg:flex-row items-center">
            <img v-if="imagePreview" :src="imagePreview" class="lg:w-96 lg:m-8 rounded-xl">
            <div class="flex flex-col  gap-4 p-8 md:p-10 md:gap-6 lg:p-12 lg:gap-8">
                <div class="flex flex-col gap-2">
                    <div class=" text-slate-500">{{ formattedDate }}
                        <div class="flex items-center gap-2 text-slate-500">
                            <i class="mdi mdi-target-account"></i>
                            <div class="">{{ public }}</div>
                        </div>
                        <div class="flex items-center gap-2 text-slate-500">
                            <i class="mdi mdi-target-account"></i>
                            <div class="">{{ readTime }}</div>
                        </div>
                    </div>
                </div>
                <div class="line-clamp-3">{{ contentPreview }}</div>
                <div class="bg-primary cursor-pointer rounded-full text-white text-center px-4 py-2 mt-4" @click="nav">
                    Voir l'article
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import slugify from '@sindresorhus/slugify'
import { useRouter } from 'vue-router'

const props = defineProps({
    title: String,
    date: Date,
    public: String,
    contentPreview: String,
    imagePreview: String,
    link: String,
    readTime: String
})

const formatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' })
const formattedDate = computed(() => formatter.format(props.date))
const router = useRouter()

const nav = () => {
    router.push("/blog/article/" + slugify(props.title))
}
</script>