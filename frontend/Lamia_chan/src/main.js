import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import jwt_decode from 'jwt-decode'
  import Vuex from 'vuex'

  Vue.use(Vuex);
  Vue.use(VueAxios, axios);
  Vue.config.productionTip = false

*/

//import About from './components/About.vue'


new Vue({
    router,
    render: h => h(App),

    methods: {

  },
}

).$mount('#app')