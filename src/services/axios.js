import axios from "axios";
import { serverAPI as api } from "@/utils/constants";
import store from "../store";
import { AUTH_LOGOUT } from "../store/actions/auth";
import router from "../router";

const instance = axios.create({
  baseURL: api.BASE_URL,
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.status === 401) {
      store.dispatch(AUTH_LOGOUT);
      router.push({
        name: "Login",
        query: {
          redirect: router.currentRoute.path,
        },
      });
    }
    return Promise.reject();
  }
);

export default instance;
