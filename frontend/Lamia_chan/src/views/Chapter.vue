<template>
    <div>
        <MainHead></MainHead>

        
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import axios from 'axios'



export default {
    name: 'app',
            data(){
            return {
            chapter: [],
            url: {
                chapterlink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrlPrevious() + '/' + this.getPageUrl()  + '/?format=json'
            },
        }
    },
    components: {
        MainHead
    },

    methods: {

        getPageUrl(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }

              return params[params.length-1]


        },

        getPageUrlPrevious(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }

              return params[params.length-2]


        },

        getHashtags(){
        axios.get(this.url.chapterlink).then((response) => {
            this.chapter = response.data;
            console.log("done")
            });
        }
    },

    beforeMount(){
        alert(this.url.chapterlink)
        this.getHashtags()
    },
    
}

</script>
