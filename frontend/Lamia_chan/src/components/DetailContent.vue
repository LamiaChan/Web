<template>
    <div id="vue">
        <h1>KEK</h1>
        <button v-on:click="getPageUrl()">+1</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            manga: [],
            chapter: [],
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrl()  + '/?format=json',
                chapterlink: 'http://localhost:8000/api/v1/chapter/?format=json',
            },
        }
    },
    methods: {
      getPageUrl(){
        var currentUrl = window.location.pathname;

        var params = currentUrl.split('/');

        for (let i = 0; i < params.length; i++) {
            var element = params[i];
        }
        if (element == 4){
            alert(params[params.length-1])
            return params[params.length-1]
        } 
      },
      getHashtags(){
        axios.get(this.url.mangalink).then((response) => {
            this.manga = response.data;
            });
        },
        getChapters(){
        axios.get(this.url.chapterlink).then((response) => {
            this.chapter = response.data;
            });
        },
      beforeMount(){

      }
  },
}

</script>