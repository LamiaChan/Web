<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="news__title__container">
                        <h1 class="news__title">{{news.title}}</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <p v-html="news.body"></p>
                </div>
                <div class="col-lg-6">
                    <div class="news__img"><img :src="news.image"   alt="" class="news__img__pict"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            news:[],
            url:{
                newslink: this.$store.getters.takeNewsLink + "/" + this.getPageUrl()  + this.$store.getters.takeEndLink
            }
        }
    },
    methods: {
        getPageUrl(){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }
            console.log(params[params.length-1])
            return params[params.length-1];
        },
        getNews(){
            axios.get(this.url.newslink).then((response) => {
                this.news = response.data;
            });
        }
    },
    beforeMount(){
        this.getNews()
    }
}
</script>

<style scoped>
.news__title__container{
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
}
.news__title{
    font-size: 50px;
}
</style>