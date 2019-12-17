<template>
    <div id="vue">
        <div v-for="(chapter,index) in manga.chapter_set" :key="index">
            <ul v-for="(page,index) in chapter.page_set" :key="index">
                <li v-if="ReturnChapterId() == page.chapter_id">{{page}}</li>
            </ul>
        </div>
    </div>
</template>

<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>
<script>
import axios from 'axios'
export default {
    name: 'app',
            data(){
            return {
            manga: [],
            chapter: [],
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrl()[0]  + '/?format=json'
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

            return [ params[params.length-2], params[params.length-1] ]

        },

        ReturnChapterId(){
            var t = this.getPageUrl()[1];
            return t;
        },

        getHashtags(){
        axios.get(this.url.mangalink).then((response) => {
            this.manga = response.data;
            console.log("done2")
            });
        }
    },

    beforeMount(){
      this.getHashtags()
    },
    
}

</script>

<style scoped>
.title__container{
    text-align:center;
    margin-top: 20px;
    margin-bottom: 40px;
}
.text{
    font-size: 20px;
}
ul{
    list-style-type: none;
}
.chapter__link{
    color: black;
    font-size: 22px;
}
.chapter__link:hover{
    color: black;
    text-decoration: none;
}
</style>