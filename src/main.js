import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "./services/axios";
import VueSocketIO from "vue-socket.io";
import io from "socket.io-client";
import { serverAPI } from "./utils/constants";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: io(`${serverAPI.BASE_URL}/message`, {
      query: {
        token: store.state.Auth.token,
      },
      autoConnect: false,
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_MSG_",
    },
  })
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
