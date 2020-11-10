import Vue from "vue";
import Vuex from "vuex";

import Auth from "../store/modules/auth";
import Classroom from "../store/modules/classroom";
import Message from "../store/modules/message";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Classroom,
    Message,
  },
});
