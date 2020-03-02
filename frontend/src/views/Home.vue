<template>
  <div>
    <MainHead></MainHead>
    <MainContent> </MainContent>
    <!--<button type="button" @click="getHashtags()">Грузи города</button>-->
  </div>
</template>

<!-- INCLUDE CDN -->
<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import MainHead from '../components/MainHead.vue'
import axios from 'axios'
import MainContent from '../components/MainContent'

export default {
  name: 'app',
    data(){
    return {
    }
  },
  components: {
    MainHead,
    MainContent
  },
  methods: {

  },
    beforeMount(){
      
 },
}
</script>

<style>

</style>