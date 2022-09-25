import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import CategoryView from "../views/CategoryView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:postId",
      name: "post",
      component: PostView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/categories/:category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
