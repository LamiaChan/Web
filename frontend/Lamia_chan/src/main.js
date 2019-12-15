import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router';
Vue.use(VueRouter) 


//import About from './components/About.vue'

var router = new VueRouter({
  routes: [
    { path: '/about', component:() => import('./components/About.vue').default }
  ]
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
