import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Detail from '@/views/Detail'
import Reading from '@/views/Reading'

Vue.use(Router)

export default new Router({
    props: ['testapi'],
    mode:'history',
    routes: [
        
        {
            path: '/',
            component: Home
        },
        
        {
            path: '/about',
            component: About
        },
        {
            path: '/detail/:id',
            component: Detail,
            props: true
        },
        {
            path: '/reading/:id/:chapter',
            component: Reading,
            props: true
        },
    ]
})