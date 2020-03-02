<template>
    <div id="vue">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="readingInfo">
                        <div class="row">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-3">
                                <div class="dropdown">
                                <a class="btn btn-secondary dropdown-toggle dropBlock_chapters" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Выбрать главу
                                </a>

                                <div class="dropdown-menu dropCustom" aria-labelledby="dropdownMenuLink">
                                    <span class="dropdown-item" v-for="(mangaChapter,index) in manga.chapter_set" :key="index" v-bind:class="{ active: (mangaChapter.id == getPageUrl(1)) }">
                                        <a v-bind:href="'/reading/'+ manga.id + '/' + mangaChapter.id" class="chapter__link">{{ mangaChapter.title }}</a>
                                    </span>

                                </div>
                                </div>
                               </div>
                                <div class="col-sm-1"></div>
                                <div class="col-sm-2">
                                    <div class="dropdown">
                                            <a class="btn btn-secondary dropdown-toggle dropBlock_pages" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Страница
                                            </a>

                                        <div class="dropdown-menu dropCustom" aria-labelledby="dropdownMenuLink">
                                            <span class="dropdown-item small_link" v-for="(pages,index) in chapter.page_set" :key="index" v-bind:class="{ active: (pgCount == pages.number-1) }">
                                                <a @click="pgCount = pages.number-1" class="chapter__link small_link">{{ pages.number }}</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            <div class="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </div>
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
import Vue from 'vue';
import axios from 'axios'
export default {
    name: 'app',
            data(){
            return {
            pgCount: 0,
            manga: [],
            chapter: [],
            nextPgStatus: 0,
            url: {
                chapterlink: this.$store.getters.takeChapterLink1 + this.getPageUrl(1)  + this.$store.getters.takeEndLink,
                mangalink: this.$store.getters.takeMangaLink1 + "/" + this.getPageUrl(2) + this.$store.getters.takeEndLink,
                nextlink: this.$store.getters.takeChapterLink1 + (Number(this.getPageUrl(1))+1) + this.$store.getters.takeEndLink
            },
        }
    },

    methods: {
        // Эта функция служит для того, чтобы перелистывать страницы, а когда заканчивается глава
        // и пользователь нажимает, чтобы перейти на следующую страницу,
        // его перекидовало на следующую главу, если она есть
        
        nextPg(){
            if(this.pgCount<this.chapter.page_set.length-1){
                this.pgCount++;
                console.log(this.getNextPage());
            }
            else if (this.nextPgStatus == 1){ // проверяем есть ли следующая глава
                this.nextPgStatus = 0; // переменная, отвечающая за статус следующей главы (0 - нету, 1 - есть)
                let nextPg = Number(this.getPageUrl(1)) + 1;
                window.location = '/reading/' + this.getPageUrl(2) + '/' + nextPg; // формируем ссылку на следующую главу
            }

        },
        /*
            Функция, которая перелистывает на страницу назад (возможно не нужна)
            prevPg(){
                if(this.pgCount>=1){
                    this.pgCount--;
                }
        
            },
        */
        getPageUrl(a){

          var currentUrl = window.location.pathname;

          var params = currentUrl.split('/');

          for (let i = 0; i < params.length; i++) {
              var element = params[i];
          }
            return params[params.length-a]

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
        getHashtagsManga(){
            axios.get(this.url.mangalink).then((response) => {
                this.manga = response.data;
                /*
                    console.log("done2")
                    this.chapter.page_set.forEach(chapterone => console.log(chapterone));
                */
                });
        },
        getNextPage(){
            // Данная функция проверяет, есть ли следующая глава и обновляет статус
            console.log(this.url.nextlink)
            axios.get(this.url.nextlink).then((response) => {
                this.nextPgStatus = 1;
            })
            .catch(error => {
                this.nextPgStatus = 0;
            });
        }

    },

    beforeMount(){
      this.getHashtags(),
      this.getHashtagsManga()
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
    font-size: 15px;
    display: inline-block;
    width: 250px;
}
.chapter__link:hover{
    color: black;
    text-decoration: none;
}
.small_link{
    width: 160px;
}
.capter__block{
    text-align: center;
}
.page{
    text-align: center;
}
.page__img{
    /*width: 90%;*/
    max-width: 1000px;
    min-height: 300px;
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
.dropBlock_chapters{
    width: 300px;
}
.dropBlock_pages{
    width: 160px;
}
.dropdown{
    margin-bottom: 30px;
    margin-top: 20px;
}
.active{
    background: grey;
}
</style>