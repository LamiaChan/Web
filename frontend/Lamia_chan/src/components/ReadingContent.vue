<template>
    <div id="vue">
        <div v-if="manga.chapter_set" class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div v-for="(chapterone,index) in chapter.page_set" :key="index" class="capter__block">
                        <h2 class="chapter__title">Глава: {{ chapterone.number }}</h2>
                        <div class="page">
                            <img :src="'http://localhost:8000'+chapterone.image" alt="" class="page__img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="notFound">
            <h1>404</h1>
            <h2>Sorry, this page in progress</h2>
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
                chapterlink: 'http://localhost:8000/api/v1/chapter/' + this.getPageUrl()  + '/?format=json'
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

            return params[params.length-1]

        },

        getHashtags(){
        axios.get(this.url.chapterlink).then((response) => {
            this.chapter = response.data;
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
.capter__block{
    text-align: center;
}
.page__img{
    width: 60%;
}
</style>