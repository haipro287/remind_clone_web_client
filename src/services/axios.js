const axios = require("axios");
const { serverAPI: api } = require("@/utils/constants");
const { default: store } = require("../store");
const { AUTH_LOGOUT } = require("../store/actions/auth");
const { default: router } = require("../router");

const instance = axios.create({
  baseURL: api.BASE_URL,
});

instance.interceptors.request.use(
  request => {
    if (instance.defaults.headers.common["Authorization"]) {
      return request;
    }
    throw { message: "the token is not available" };
  },
  error => {
    return Promise.reject(error);
  }
);

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

module.exports = instance;
