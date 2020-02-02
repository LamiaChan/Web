<template>
    <div>
        <MainHead></MainHead>
        <DetailContent></DetailContent>
    

        
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import DetailContent from '../components/DetailContent'
import axios from 'axios'



export default {
    name: 'app',
            data(){
            return {
            manga: [],
            chapter: [],
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrl()  + '/?format=json'
            },
        }
    },
    components: {
        MainHead,
        DetailContent,
    },

    methods: {

        getPageUrl(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }

          if (element == 4){
              return params[params.length-1]
          } 

        },

        getHashtags(){
        axios.get(this.url.mangalink).then((response) => {
            this.manga = response.data;
            });
        }
    },

    beforeMount(){
    },
    
}

</script>
