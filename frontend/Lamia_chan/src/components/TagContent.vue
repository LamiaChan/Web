<template>
    <div class="content">
        <div class="row" >
            <div v-for="(tagsItem,index) in tags" :key="index" class="tags">
                <router-link v-bind:to="'/tags/' + tagsItem.id"  class="tag">{{tagsItem.title}}</router-link>
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
            tags: [],
            url: {
                tagslink: 'http://localhost:8000/api/v1/tag/?format=json'
            },
        }
    },

    methods: {

        getHashtags(){
            
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