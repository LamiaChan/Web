<template>
    <div class="content">
        <section class="mainManga">
            <div class="container">
                <h2>Недавно обновленные</h2>
                <div class="row">
                    
                    <!-- добавить сортировку по дате обнавления (testapione.updated) 
                    .sort( (a,b) => b.chapter_set.updated.localeCompare(a.chapter_set.updated) )-->

                    <!-- <div class="col-md-3" v-for="(testapione,index) in testapi" :key="index">
                        <router-link v-bind:to="'/detail/'+ testapione.id">
                            <div class="manga">
                                <div class="manga__img">
                                    <img :src="testapione.preview_image_url"   alt="" class="manga__img__pict">
                                    <span class="manga__title">{{ testapione.title }}</span>
                                </div>
                            </div>
                        </router-link>
                    </div> -->



                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div v-for="(page,index) in manga.length" :key="index">
                            <span><router-link v-bind:to="'/?page='+ page">{{page}}</router-link></span>
                        </div>
                    </div>
                </div>

                <h2>Новости</h2>
                <div class="row">
                    
                    <!-- добавить сортировку по дате обнавления (testapione.updated) 
                    .sort( (a,b) => b.chapter_set.updated.localeCompare(a.chapter_set.updated) )-->

                    <div class="col-md-3" v-for="(report,index) in reports" :key="index">
                        <router-link v-bind:to="'/news/'+ report.id">
                            <div class="news">
                                <div class="news__img">
                                    <img :src="report.image"   alt="" class="news__img__pict">
                                    <span>{{ report.title }}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    
                    
                </div>

            </div>
        </section>
    </div>
</template>




<script>
import axios from 'axios'
export default {
        data(){
    return {
        testapi: [],
        reports: [],
        manga: [],
        url: {
          mangaPages_link: this.$store.getters.takeMangaLink1 + "/?page=1"
        },
    }
  },
  methods:{
        getHashtags(){
            axios.get(this.url.mangaPages_link).then((response) => {
                this.manga = response.data.results;
                console.log(this.manga.results)
            });
        },
        getPageUrl(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }
            console.log(params[params.length-1])
            return params[params.length-1];
        },
  },
  beforeMount(){
      this.getHashtags(),
      this.getPageUrl()
  }
}
</script>

<style scoped>
    .mainManga{
        margin-top: 40px;
    }
    .manga{
        text-align: center;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .news{
        text-align: center;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .manga__img__pict{
        width: 80%;
        max-height: 290px;
    }
    .news__img__pict{
        max-height: 400px; 
        width: 100%;
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
    .news__img{
        display:inline-block;
        position: relative;
    }
</style>
<!-- Global styles -->
<style>
.notFound{
    text-align: center;
    margin-top: 50px;
}
</style>