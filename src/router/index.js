
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '', name: "home", component: () => import("@/views/Home/Index.vue") },
    {
        path: '/blog',
        name: "blog", component: () => import("@/views/Blog/Index.vue"),
        children: [
            {
                name: "ViewList",
                path: "",
                component: () => import("@/views/Blog/ViewList.vue")
            },
            {
                name: "ViewArticle",
                path: "article/:slug",
                component: () => import("@/views/Blog/ViewArticle.vue")
            },
        ]
    },
    { path: '/career', name: "career", component: () => import("@/views/Career/Index.vue") },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default (app) => {
    app.use(router)
}