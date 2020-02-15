<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">

                <div v-for="(needTag,index) in $store.getters.takeChosenTags" :key="index">
                    <h1>{{needTag}}</h1>
                </div>
                
                <h2 class="tag__title">Выбранный тэг: {{ tags.title }}</h2>
               
                <div class="row">
                    <!-- добавить сортировку по дате обнавления (testapione.updated) -->
                     
                    <div v-for="(testapione,index) in manga" :key="index">
                        <div v-for="(ch, index) in testapione.tags" :key="index">
                            <div v-for="(needTag,index) in $store.getters.takeChosenTags" :key="index">
                            <div class="col-md-3" v-if="ch == needTag">
                                <router-link v-bind:to="'/detail/'+ testapione.id">
                                    <div class="manga">
                                        <div class="manga__img">
                                            <img :src="testapione.preview_image_url"   alt="" class="manga__img__pict">
                                            <span class="manga__title">{{ testapione.title }}</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="">
                    <h3>Извините, но по данному тэгу пока нет манги ;(</h3>
                </div>
            </div>
        </section>
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
            coincidences: 0,
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/?format=json',
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
                console.log(this.manga)
            });
        },
        getTags(){          
            axios.get(this.url.tagslink).then((response) => {
                this.tags = response.data;
                console.log(this.tags)
                console.log(this.$store.getters.takeChosenTags)
            });
        },
        tagsCheck(){
            var coincidences = 0;
            for (let i = 0; i < this.manga.length; i++) {
                for (let j = 0; j < this.manga[i].tags.length; j++) {
                    if (this.manga[i].tags[j] == this.tags.id) {
                        coincidences++;
                        break
                    }
                }
            }
            return coincidences
        },
        kek(){
            console.log('kek')
        }
    },

    beforeMount(){
      this.getHashtags(),
      this.getTags()
     
    }
    
}

</script>
<style scoped>
    .tag__title{
        margin-bottom: 30px;
        font-size: 35px;
    }
    .mainManga{
        margin-top: 40px;
    }
    .manga{
        text-align: center;
    }
    .manga__img__pict{
        width: 200px;
        height: 290px;
    }
    .manga__title{
        font-size: 15px;
        color: #fff;
        display:inline-block;
        width: 200px;
        height: 49px;
        padding: 3px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.7);
        position:absolute;
        top:83%;

    }
    .manga__img{
        display:inline-block;
        position: relative;
    }
</style>
<style>
.notFound{
    text-align: center;
    margin-top: 50px;
}
</style>