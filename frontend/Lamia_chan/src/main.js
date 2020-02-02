import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false



//import About from './components/About.vue'


new Vue({
    router,
    render: h => h(App),

    methods: {

  },
}

).$mount('#app')