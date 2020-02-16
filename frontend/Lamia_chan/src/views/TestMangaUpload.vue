<template>
    <div>
        <MainHead></MainHead>
        <TestMangaUploadContent></TestMangaUploadContent>
    

        
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import TestMangaUploadContent from '../components/TestMangaUploadContent'
import axios from 'axios'



export default {
    name: 'app',
            data(){
            return {
            manga: [],
            chapter: []
        }
    },
    components: {
        MainHead,
        TestMangaUploadContent,
    },

    methods: {

    },

    beforeMount(){
    },
    
}

</script>
