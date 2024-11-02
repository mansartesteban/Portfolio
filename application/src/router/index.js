
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '', name: "home", component: () => import("@/views/Home/Index.vue") },
    { path: '/blog', name: "blog", component: () => import("@/views/Blog/Index.vue") },
    { path: '/career', name: "career", component: () => import("@/views/Career/Index.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default (app) => {
    app.use(router)
}