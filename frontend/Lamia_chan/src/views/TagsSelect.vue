<template>
    <div>
        <MainHead></MainHead>
        <TagsSelectContent></TagsSelectContent>
    

        
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import TagsSelectContent from '../components/TagsSelectContent'
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
        TagsSelectContent,
    },

    methods: {

    },

    beforeMount(){
    },
    
}

</script>
