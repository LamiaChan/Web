<template>
  <div>
    <MainHead></MainHead>
    <MainContent :testapi="testapi" :reports="reports"> </MainContent>
    <!--<button type="button" @click="getHashtags()">Грузи города</button>-->
    <TestApi :testapi="testapi"> </TestApi>
    <Reports :reports="reports"> </Reports>
  </div>
</template>

<!-- INCLUDE CDN -->
<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import TestApi from '../components/TestApi'
import MainHead from '../components/MainHead.vue'
import axios from 'axios'
import MainContent from '../components/MainContent'


export default {
  name: 'app',
    data(){
    return {
      testapi: [],
      reports: [],
      url: {
          testapilink: this.$store.getters.takeMangaLink1 + this.$store.getters.takeEndLink,
          newslist: this.$store.getters.takeNewsLink + this.$store.getters.takeEndLink,
      },
    }
  },
  components: {
    TestApi,
    MainHead,
    MainContent
  },
  methods: {
    getHashtags(){
        axios.get(this.url.testapilink).then((response) => {
            this.testapi = response.data.results;
        });

        axios.get(this.url.newslist).then((response) => {
            this.reports = response.data;
        });

    },
  },
    beforeMount(){
      
 },
}
</script>

<style>

</style>