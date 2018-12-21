import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routers = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            meta: {
                title: '首页'
            },
            component: () => import('./views/Index.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/home',
            component: () => import('./views/Home.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('./views/HomeIndex.vue'),
                },
                {
                    path: '/info',
                    component: () => import('./views/Info.vue'),
                },
                {
                    path: '/blogs',
                    component: () => import('./views/Blogs.vue'),
                },
                {
                    path: '/public',
                    component: () => import('./views/Public.vue'),
                },
                {
                    path: '/commons',
                    component: () => import('./views/Commons.vue'),
                },
            ]
        },
    ]
})
routers.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title + "-数据库实验论坛";
    next()
})
export default routers
