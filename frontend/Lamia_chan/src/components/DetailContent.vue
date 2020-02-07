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
                        <img :src="manga.preview_image_url" alt="" class="img__block__pic">
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

                        <div v-for="(mangaTags,index) in manga.tags" :key="index" class="tags">
                            <div v-for="(tags,index) in tags" :key="index" class="tags">
                                <router-link v-if="mangaTags == tags.id" v-bind:to="'/tags/' + mangaTags"  class="tag">{{tags.title}}</router-link>
                            </div>
                        </div>

                    </div>
                    <div class="chapter__block">
                        <h3 class="chapter__head">Главы:</h3>
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle dropdownCustom" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Выбрать главу
                            </a>

                            <div class="dropdown-menu dropCustom" aria-labelledby="dropdownMenuLink">
                                <span class="dropdown-item" v-for="(mangaChapter,index) in manga.chapter_set" :key="index">
                                    <router-link v-bind:to="'/reading/'+ manga.id + '/' + mangaChapter.id" class="chapter__link">{{ mangaChapter.title }}</router-link>
                                </span>

                            </div>
                        </div>
                        <!--
                        <ul v-for="(mangaChapter,index) in manga.chapter_set" :key="index">
                            <li><router-link v-bind:to="'/reading/'+ manga.id + '/' + mangaChapter.id" class="chapter__link">{{ mangaChapter.title }}</router-link></li>
                        </ul>
                        -->
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
.img__block__pic{
    width: 400px;
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
.tags{
    display: inline-block;
}
.tag{
    display: inline-block;
    text-align: center;
    padding: 8px;
    font-size: 20px;
    background: #00b09b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #96c93d, #00b09b);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 8px;
    color: #fff;
    transition-duration: .5s;
    margin-right: 10px;
    margin-bottom: 10px

}
.tag:hover{
    background: #00b09b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #96c93d, #00b09b);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    -moz-box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);

}
.dropdownCustom{
    width: 300px;
    background: #11998e;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    -moz-box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);

}
.dropCustom{
    max-height: 500px;
    overflow-y: auto;
}
.chapter__link{
    font-size: 15px;
}
</style>