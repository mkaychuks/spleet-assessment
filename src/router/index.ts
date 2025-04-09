import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/event/:id",
      name: "details",
      component: () => import("../views/EventDetailsView.vue"),
    },
    {
      path: "/events",
      name: "all-events",
      component: () => import("../views/AllEventsView.vue"),
    },
  ],
});

export default router;
