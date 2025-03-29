import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "", name: "home", component: () => import("@/views/Home/Index.vue") },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/Blog/Index.vue"),
    children: [
      {
        name: "ViewList",
        path: "",
        component: () => import("@/views/Blog/ViewList.vue"),
      },
      {
        name: "ViewArticle",
        path: "article/:slug",
        component: () => import("@/views/Blog/ViewArticle.vue"),
      },
    ],
  },
  {
    path: "/career",
    name: "career",
    component: () => import("@/views/Career/Index.vue"),
  },
  {
    path: "/showcase",
    name: "showcase",
    component: () => import("@/views/Showcase/Index.vue"),
    children: [
      {
        name: "sc_home",
        path: "",
        component: () => import("@/views/Showcase/Home.vue"),
      },
      {
        name: "sc_sorts",
        path: "sorts",
        component: () => import("@/views/Showcase/Sorting/index.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFoundComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default (app) => {
  app.use(router);
};
