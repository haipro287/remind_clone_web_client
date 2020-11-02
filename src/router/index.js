import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import axios from "../services/axios";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.Auth.token}`;
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.path,
        },
      });
    }
  } else {
    next();
  }
});

export default router;
