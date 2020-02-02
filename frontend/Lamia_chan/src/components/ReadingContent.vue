<template>
    <div id="vue">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="capter__block"> {{ chapter.title }} </h1>
                    <div v-for="(chapterone,index) in chapter.page_set" :key="index" class="capter__block">
                        
                            <h2 class="chapter__number">Страница: {{ chapterone.number }}</h2>
                            <div class="page">
                                <img 
                                    :data-id="'http://localhost:8000'+chapterone.image"
                                    :src="'http://localhost:8000'+chapterone.image" 
                                    alt="" class="page__img"
                                >
                            </div>
                    </div>
                </div>
            </div>
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
                /*
                    console.log("done2")
                    this.chapter.page_set.forEach(chapterone => console.log(chapterone));
                */
                });
        },



        /* 
            TODO:
                Добавить метод выгрузки картинок
                типо событие onClick и когда оно соверщается мы переходим на след
                изоброжение тем самым меня src картинки и добавить if
                если это последняя картинка то переход на след главу +
                надо сделать проверку если это последняя глава то переадресация на 
                страницу с мангой :)
        */
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