<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <div class="row">
                    <!-- добавить сортировку по дате обнавления (testapione.updated) -->
                    <div v-for="(testapione,index) in manga" :key="index">
                        <!--{{ mangaRepeat(0)}} -->
                        {{ clearCoincidences()}}
                        <div v-for="(ch, index) in testapione.tags" :key="index">
                            <div v-for="(needTag,index) in $store.getters.takeChosenTags" :key="index">
                            <div class="col-md-3" v-if="((ch == needTag)&&(repeatStatus==0))">
                                {{ AddCoincidences() }}
                                <div v-if="coincidences == $store.getters.takeChosenTags.length">
                                    {{ hasManga()}}
                                    <router-link v-bind:to="'/detail/'+ testapione.id">
                                        <div class="manga">
                                           <!-- {{ mangaRepeat(1)}} -->
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
                    
                </div>
                <div v-if="noManga == 0" class="">
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
            repeatStatus: 0,
            noManga: 0,
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
            });
        },
        getTags(){          
            axios.get(this.url.tagslink).then((response) => {
                this.tags = response.data;
            });
        },
        mangaRepeat(a){
            // Даннаяфункция отвечает за то, что если выбранно несколько тэгов, которые одновременно есть
            // У одной манги, то она не будет выводиться несколько раз ; )
            this.repeatStatus = a;
            // Если noManga будет равна 0, товыведется сообщения об отсутствии манги по этому тэгу
            if (a == 1){
                this.noManga = 1;
            }
            else if (a == 0){
                this.coincidences = 0;
            }
        },
        AddCoincidences(){
            this.coincidences++;
        },
        clearCoincidences(){
            this.coincidences = 0;
        },
        hasManga(){
            this.noManga = 1;
        }
        
    },

    beforeMount(){
      this.getHashtags(),
      this.getTags(),
      console.log(this.$store.getters.takeChosenTags)
     
    },
    beforeDestroy(){
        this.$store.dispatch('writeChosenTags', [])
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
        margin-bottom: 15px;
        margin-top: 15px;
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