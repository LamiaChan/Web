<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <h2>Выбранный тэг: {{ tags.title }}</h2>
                <div class="row">
                    <!-- добавить сортировку по дате обнавления (testapione.updated) -->
                    <div class="col-md-3" v-for="(testapione,index) in manga" :key="index">
                        <div v-for="(ch, index) in testapione.tags" :key="index">
                            <!-- дороботать это -->
                            <div v-if="tags.id == ch">
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
            url: {
                mangalink: 'http://localhost:8000/api/v1/manga/?format=json',
                tagslink: 'http://localhost:8000/api/v1/tag/' + this.getPageUrl()  + '/?format=json'
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
    .mainManga{
        margin-top: 40px;
    }
    .manga{
        text-align: center;
    }
    .manga__img__pict{
        width: 80%;
        max-height: 290px;
    }
    .manga__title{
        font-size: 15px;
        color: #fff;
        display:inline-block;
        width: 80%;
        height: 49px;
        padding: 3px;
        left: 10%;
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