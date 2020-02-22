<template>
    <div>
        <MainHead></MainHead>
        <NewsContent />
    </div>
</template>

<script>
import MainHead from '../components/MainHead.vue'
import NewsContent from '../components/NewsContent'
import axios from 'axios'

export default {
    name: "news",
    components:{
        MainHead,
        NewsContent
    }
}
</script>