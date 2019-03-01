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
            path: '/post',
            name: 'post',
            meta: {
                title: '帖子详情'
            },
            component: () => import('./views/Post.vue')
        },
        {
            path: '/public',
            meta: {
                title: '发布帖子'
            },
            component: () => import('./views/Public.vue'),
        },
    ]
})
routers.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title + "-113A实验室论坛";
    next()
})
export default routers
