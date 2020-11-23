import Home from "./views/Home.vue";
import Login from "./views/LoginScreen.vue";
import Classes from "./views/MainScreen.vue";
import Register from "./views/Register.vue";
import store from "../store";

export default [
  {
    path: "/",
    name: "Home",
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        return next({
          path: "/classes",
        });
      } else {
        return next({
          path: "/login",
        });
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    component: Home,
  },
  {
    path: "/classes",
    name: "ClassStart",
    beforeEnter(to, from, next) {
      store
        .dispatch("FETCH_CLASSES")
        .then(() => {
          const firstClass = Object.values(store.state.Classroom.classrooms)[0];
          // console.log(firstClass);
          if (firstClass) {
            return next({
              name: "MessageStart",
              params: {
                code: firstClass.code,
              },
            });
          } else {
            return next({ name: "About" });
          }
        })
        .catch(() => {
          next(false);
        });
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/classes/:code",
    component: Classes,
    meta: {
      requiresAuth: true,
    },
    beforeEnter(to, from, next) {
      store
        .dispatch("FETCH_CLASSES")
        .then(() => {
          next();
        })
        .catch(() => {
          next(false);
        });
    },
    children: [
      {
        path: "",
        name: "MessageStart",
        alias: "message",
        component: () => import("./views/MessageScreen.vue"),
      },
      {
        path: "message/:convoId",
        name: "Message",
        component: () => import("./views/MessageScreen.vue"),
      },
      {
        path: "files",
        name: "Files",
        component: () => import("./views/Files.vue"),
      },
      {
        path: "people",
        name: "People",
        component: () => import("./views/People.vue"),
      },
      {
        path: "information",
        name: "Information",
        component: () => import("./views/ClassInformation.vue"),
      },
      {
        path: "settings",
        name: "Settings Class",
        component: () => import("./views/SettingsClassScreen.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "Coming soon",
    component: () => import("./views/comingSoon.vue"),
  },
  {
    path: "/settings",
    redirect: "/settings/profile",
  },
  {
    path: "/settings",
    alias: ["/settings/profile"],
    name: "SettingsAccountScreen",
    component: () => import("./views/SettingsAccountScreen.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "profile",
        name: "SettingsProfileScreen",
        component: () => import("./views/SettingsProfileScreen.vue"),
      },
      {
        path: "message",
        name: "SettingsMessage",
        component: () => import("./views/SettingsMessageScreen.vue"),
      },
      {
        path: "notifications",
        name: "SettingsNotification",
        component: () => import("./views/SettingsNotificationScreen.vue"),
      },
    ],
  },
];
