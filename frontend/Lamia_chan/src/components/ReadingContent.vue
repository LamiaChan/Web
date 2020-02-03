<template>
    <div id="vue">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="capter__block"> {{ chapter.title }} </h1>
                        <div class="page">
                        <!--<button @click="prevPg()" class="ReadBtn">◄</button>-->
                            <img 
                                :data-id="'http://localhost:8000'+chapter.page_set[pgCount].image"
                                :src="'http://localhost:8000'+chapter.page_set[pgCount].image" 
                                alt="" class="page__img"
                                @click="nextPg()"
                            >
                        <!--<button @click="nextPg()" class="ReadBtn">►</button>-->
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="pgNumber">
                        <span>{{ chapter.page_set[pgCount].number }}</span>
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
            pgCount: 0,
            manga: [],
            chapter: [],
            url: {
                chapterlink: 'http://localhost:8000/api/v1/chapter/' + this.getPageUrl()  + '/?format=json'
            },
        }
    },

    methods: {

        nextPg(){
            if(this.pgCount<this.chapter.page_set.length-1){
                this.pgCount++;
            }
        },
        prevPg(){
            if(this.pgCount>=1){
                this.pgCount--;
            }
        },
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
.page{
    text-align: center;
}
.page__img{
    width: 60%;
}
.ReadBtn{
    display: inline-block;
    background: rgba(255, 255, 255, 0.5);
}
.pgNumber{
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
}
</style>