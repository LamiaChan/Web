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
                <router-link class="nav-item nav-link active" to="/">Манга </router-link><span class="sr-only">(current)</span> 
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/about">О нас </router-link>
              </li>
            </ul>
            

          <form class="form-inline my-2 my-lg-0 dropdown">
            <input class="manga-searcher form-control" type="text" placeholder="Поиск" id="menu1" data-toggle="dropdown"  v-model="searchQuery">
            <ul class="dropdown-menu" role="menu" aria-labelledby="menu1" >
                <div v-for="(item,index) in filteredResources" :key="index">
                  <li role="presentation"><a style="color:black;" role="menuitem" tabindex="-1" v-bind:href="'/detail/'+item.id">{{item.title}}</a></li>
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
      
      url: {
          mangalink: 'http://localhost:8000/api/v1/manga/?format=json',
      },
    }
  },
  
  methods: {
    getHashtags(){
        axios.get(this.url.mangalink).then((response) => {
            this.manga = response.data;
        });
    },
    
  },
    beforeMount(){
      this.getHashtags()
 },

  computed: {
    filteredResources (){
      // это надо улучшить 
      if(this.searchQuery){
      return this.manga.filter((item)=>{
        return item.title.startsWith(this.searchQuery);
      })
      }else{
        return this.manga;
      }
    }
  }
 
}
</script>

