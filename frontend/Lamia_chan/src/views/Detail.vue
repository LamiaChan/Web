<template>
    <div>
        <MainHead></MainHead>
        <DetailContent></DetailContent>
        <!--
        <div class="col-md-3" v-for="(mangaone,index) in manga" :key="index">
            {{ mangaone }}
        </div>
        <br>
        <div class="col-md-3" v-for="(chapterone,index) in chapter" :key="index">
            <div v-if="chapterone.manga_id == getPageUrl()">
                {{ chapterone }}
            </div>
            <div v-else>
                <h1>Пиздуй учить уроки мелкий пидор</h1>
            </div>
        </div>
        -->
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
                mangalink: 'http://localhost:8000/api/v1/manga/' + this.getPageUrl()  + '/?format=json',
                chapterlink: 'http://localhost:8000/api/v1/chapter/?format=json',
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
            console.log("done")
            });
        },
        getChapters(){
        axios.get(this.url.chapterlink).then((response) => {
            this.chapter = response.data;
            console.log("done")
            });
        },
    },

    beforeMount(){
      this.getHashtags(),
      this.getChapters()
    },
    
}

</script>
