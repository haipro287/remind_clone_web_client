import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_SUCCESS,
} from "../actions/auth";
import axios from "../../services/axios";

const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  status: "",
};

const getters = {
  isAuthenticated: state => {
    !!state.token;
  },
  authStatus: state => {
    state.status;
  },
};

const actions = {
  [AUTH_LOGIN]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGIN);
      axios
        .post("/api/user/auth/login", user)
        .then(res => {
          commit(AUTH_SUCCESS, res.data);
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
  [AUTH_LOGOUT]: () => {},
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
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
