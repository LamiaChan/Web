import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Detail from '@/views/Detail'
import Reading from '@/views/Reading'
import TagsSelect from '@/views/TagsSelect'
import Tag from '@/views/Tag'
import Auth from '@/views/Auth'
import Register from '@/views/Register'

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
        {
            path: '/tag',
            component: Tag,
            props: true
        },
        {
            path: '/tags/:id',
            component: TagsSelect,
            props: true
        },
        {
            path: '/auth/:type',
            component: Auth
        },
        {
            path: '/register',
            component: Register
        }
    ]
})