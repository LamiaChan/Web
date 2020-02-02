<template>
    <div id="vue">
        <div v-if="manga.chapter_set" class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title__container">
                        <h1>{{ manga.title }}</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                <div  class="img__block">
                        <img :src="manga.preview_image_url" alt="">
                </div>
                
            </div>
                <div class="col-lg-6">
                    <div class="text__block">
                        <p class="text">
                            {{ manga.description }}
                        </p>
                    </div>
                    <div class="tags__block">
                        <h3 class="tags__head">Тэги:</h3>
                        
                        <ul v-for="(tags,index) in tags" :key="index">
                            <div v-for="(mangaTags,index) in manga.tags" :key="index">
                                <li><a v-if="mangaTags == tags.id">{{tags.title}}</a></li>
                            </div>
                        </ul>

                    </div>
                    <div class="chapter__block">
                        <h3 class="chapter__head">Главы:</h3>
                        <ul v-for="(mangaChapter,index) in manga.chapter_set" :key="index">
                            <li><router-link v-bind:to="'/reading/'+ manga.id + '/' + mangaChapter.id" class="chapter__link">{{ mangaChapter.title }}</router-link></li>
                        </ul>
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
            tags: [],
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrl()  + '/?format=json',
                tagslink: 'http://localhost:8000/api/v1/tag/?format=json'
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

            return params[params.length-1];
        },

        getHashtags(){
            axios.get(this.url.mangalink).then((response) => {
                this.manga = response.data;
            });
            
            axios.get(this.url.tagslink).then((response) => {
                this.tags = response.data;
            });
        },


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