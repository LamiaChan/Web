<template>
    <div class="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <router-link class="navbar-brand" to="/">Lamia Chan</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-item nav-link active" to="/">Каталог Манги</router-link><span class="sr-only">(current)</span> 
              </li>

              <li>
                <router-link class="nav-link" to="/tag">Тэги </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">О нас </router-link>
              </li>
              <li v-if="user.username" class="nav-item">
                <router-link class="nav-link" to="/mypage">{{user.username}}</router-link>
              </li>
                <li v-else class="nav-item">
                <router-link class="nav-link" to="/auth">Войти</router-link>
              </li>
            </ul>
            

          <form class="form-inline my-2 my-lg-0 dropdown">
            <input class="manga-searcher form-control" type="text" placeholder="Поиск" id="menu1" data-toggle="dropdown"  v-model="searchQuery">
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1" >
                <div v-for="(item,index) in filteredResources.slice(0, 10)" :key="index">
                  <li role="presentation" style="padding:5px;">
                    <div class="d-flex justify-content-start bd-highlight mb-3">
                    <div class="">
                      <img class="search__img" :src="item.preview_image_url">
                    </div>
                     <div class="">
                    <a style="color:black;" class="search__link" role="menuitem" tabindex="-1" v-bind:href="'/detail/'+item.id">{{item.title}}</a>
                    </div>
                    </div>
                  </li>
                  <div class="dropdown-divider"></div>
                  
                </div>
            </ul>
        </form>

      
      </div>
    </nav>



    </div>
</template>




<script>
import axios from 'axios'
export default {
  name: 'app',
    data(){
    return {
      manga: [],
      searchQuery:'',
      token: "",
      user: [],
      
      url: {
          mangalink: 'http://localhost:8000/api/v1/manga/?format=json',
          getUserInfo: 'http://localhost:8000/api/v1/userinfo/'
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.mangalink).then((response) => {
            this.manga = response.data;
        });
    },
        takeTag(){

            this.token = localStorage.getItem('token_access');

            if (this.token != 'empty'){

                axios.get(this.url.getUserInfo, {
                    
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                })
                .then((response) => {
                     console.log("Answer:")
                     console.log(response);
                     this.user = response.data;
                      console.log(this.user.username)
                })
                .catch(error => {
                    //console.log(error.response);
                    if (error.response.statusText == "Unauthorized"){
                        // перенапроавить на страницу аунтификациии 
                        this.$router.push('/auth');
                    }

                });

            }
        }
    
  },
    beforeMount(){
      this.getHashtags(),
      this.takeTag()
 },

  computed: {
    filteredResources (){
      // оганичить вывод до 10
      if(this.searchQuery && this.searchQuery.length >= 1){
      return this.manga.filter((item)=>{
        return item.title.toLowerCase().match(this.searchQuery.toLowerCase());
      })
      }else{
        return '';
      }
    }
  }
 
}
</script>

<style scoped>
  .search_description_block{

  }
  .search__img{
    width: 30px;
  }
</style>

