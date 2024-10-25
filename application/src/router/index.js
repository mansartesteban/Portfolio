
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '', name: "home", component: () => import("@/views/Home.vue") },
    { path: '/test', name: "test", component: () => import("@/views/Test.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default (app) => {
    app.use(router)
}