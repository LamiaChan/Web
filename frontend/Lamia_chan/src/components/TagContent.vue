<template>
    <div class="">
        <section class="allTags">
            <div class="container">
                <div class="row" >
                    <div v-for="(tagsItem,index) in tags" :key="index" class="tags">
                        <!--<router-link v-bind:to="'/tags/' + tagsItem.id"  class="tag">{{tagsItem.title}}</router-link> -->
                        <span class="tag" @click="$event.target.classList.toggle('red'), getClickedTag(tagsItem.id)">{{tagsItem.title}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <button @click="sendTags()" class="btn btn-success">Показать</button>
                    </div>
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
            takenTags: [],
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
        getClickedTag(takenTag){
            let haveTag = 0;
            for (let i = 0; i < this.takenTags.length; i++) {
                if (this.takenTags[i] == takenTag){
                    haveTag = 1;
                    this.takenTags.splice(i, 1);
                    break
                } 
            }
            if (haveTag == 0){
                this.takenTags.push(takenTag);
                haveTag = 0;
            }
            console.log(this.takenTags);
        },
        sendTags(){
            this.$store.dispatch('writeChosenTags', this.takenTags)
            this.$router.push('/tags')
        },


    },

    beforeMount(){
      this.getHashtags()
    },
    
}

</script>
<style scoped>
.allTags{
    padding-top: 30px;
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
    text-decoration: none;

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
.red{
    transition-duration: .5s;
    background: #22c1c3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fdbb2d, #22c1c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    text-decoration: none;
}
.red:hover{
    background: #22c1c3;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fdbb2d, #22c1c3);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fdbb2d, #22c1c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: 0px 0px 29px 1px rgba(0,255,102,0.92);
    text-decoration: none;
}
</style>