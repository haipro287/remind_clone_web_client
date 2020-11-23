import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import axios from "../services/axios";
import { GET_USER } from "../store/actions/auth";

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
      store.dispatch(GET_USER);
      return next();
    } else {
      return next({
        name: "Login",
        query: {
          redirect: to.path,
        },
      });
    }
  } else {
    return next();
  }
});

export default router;
