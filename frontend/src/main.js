import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

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

Vue.use(Vuex)

new Vue({
    store,
    router,
    render: h => h(App),

    methods: {

  },
}

).$mount('#app')