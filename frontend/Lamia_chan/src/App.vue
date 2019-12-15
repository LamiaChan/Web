<template>
  <div id="app">
    <MainHead></MainHead>
    <button type="button" @click="getHashtags()">Грузи города</button>
    <TestApi :testapi="testapi"> </TestApi>
  </div>
</template>

<!-- INCLUDE CDN -->
<script src="https://unpkg.com/axios@0.19.0/dist/axios.min.js"></script>

<script>
import TestApi from './components/TestApi.vue'
import MainHead from './components/MainHead.vue'
import axios from 'axios'


export default {
  name: 'app',
    data(){
    return {
      todos: ['Ремонт', 'Уборка'],
      testapi: [],
      url: {
          testapilink: 'http://localhost:8000/api/v1/manga/?format=json',
      },
    }
  },
  components: {
    TestApi,
    MainHead
  },
  methods: {
    getHashtags(){
        axios.get(this.url.testapilink).then((response) => {
            this.testapi = response.data;
            console.log("done")
        });
    },
  }
}
</script>

<style>

</style>
