import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    props: ['testapi'],
    mode:'history',
    routes: [
        
        {
            path: '/',
            component: () => import('@/views/Home')
        },

        {
            path: '/about',
            component: () => import('@/views/About')
        },
        {
            path: '/detail/:id',
            component: () => import('@/views/Detail'),
            props: true
        },
        {
            path: '/reading/:id/:chapter',
            component: () => import('@/views/Reading'),
            props: true
        },
        {
            path: '/tag',
            component: () => import('@/views/Tag'),
            props: true
        },
        {
            path: '/tags',
            component: () => import('@/views/TagsSelect'),
            props: true
        },
        {
            path: '/auth',
            component: () => import('@/views/Auth')
        },
        {
            path: '/register',
            component: () => import('@/views/Register')
        },
        {
            // need to refactor 
            path: '/mypage',
            component: () => import('@/views/UserPage')
        },
        {
            path:'/testupload',
            component: () => import('@/views/TestMangaUpload')
        }
    ]
})