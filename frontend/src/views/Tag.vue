<template>
    <div>
        <MainHead></MainHead>
        <TagContent></TagContent>
    

        
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import TagContent from '../components/TagContent'
import axios from 'axios'



export default {
    name: 'app',
            data(){
            return {
            manga: [],
            chapter: [],
            tags: [], 
            url: {
                tagslink: 'http://localhost:8000/api/v1/tag/?format=json'
            },
        }
    },
    components: {
        MainHead,
        TagContent,
    },

    methods: {
        getHashtags(){
        axios.get(this.url.tagslink).then((response) => {
            this.tags = response.data;
            });
        }
    },

    beforeMount(){
        this.getHashtags()
    },
    
}

</script>
