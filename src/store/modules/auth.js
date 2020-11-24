import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_SUCCESS, GET_USER } from "../actions/auth";
import axios from "../../services/axios";

const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  status: "",
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user,
};

const actions = {
  [AUTH_LOGIN]: ({ commit }, { user, keepSignedIn }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGIN);
      axios
        .post("/api/user/auth/login", user)
        .then(res => {
          commit(AUTH_SUCCESS, res.data);
          console.log(keepSignedIn);
          if (keepSignedIn === true) {
            localStorage.setItem("token", res.data.data.token);
            console.log(1);
          }
          resolve(res);
        })
        .catch(err => {
          commit(AUTH_ERROR);
          reject(err);
        });
    });
  },
  [AUTH_SUCCESS]: () => {},
  [AUTH_ERROR]: () => {},
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("token");
      resolve();
    });
  },
  [GET_USER]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      if (getters.isAuthenticated) {
        axios
          .get("/api/user/profile")
          .then(res => {
            const user = res.data.data;
            commit(GET_USER, user);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      }
      resolve();
    });
  },
};

const mutations = {
  [AUTH_LOGIN]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, response) => {
    state.status = "success";
    state.user = response.data.user;
    state.token = response.data.token;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.user = {};
    state.status = "";
  },
  [GET_USER]: (state, user) => {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
