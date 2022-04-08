import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/main/home.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
