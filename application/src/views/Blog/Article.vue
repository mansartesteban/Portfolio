<template>
    <div class="blog-article__full">
        <div class="blog-article__full__content" v-html="content"></div>
    </div>
</template>

<script setup>



const props = defineProps({
    article: {
        type: String
    }
})

const content = ref("")

onMounted(() => {
    fetch(props.article)
        .then(response => response.text())
        .then(text => {
            content.value = parse(text)
        })
})
</script>