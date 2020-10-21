export default [
  {
    path: "/",
    name: "Home",
    component: require("./views/Home.vue").default,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () => import("./views/MainScreen.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./views/LoginScreen.vue"),
  },
  {
    path: "/classes/settings",
    name: "Settings Class",
    component: () => import("./views/SettingsClassScreen.vue"),
  },
  {
    path: "/classes/people",
    name: "People",
    component: () => import("./views/People.vue"),
  },
  {
    path: "/settings/profile",
    name: "Settings Profile",
    component: () => import("./views/SettingsProfileScreen.vue"),
  },
  {
    path: "/settings/notification",
    name: "Settings Notification",
    component: () => import("./views/SettingsNotificationScreen.vue"),
  },
  {
    path: "/settings/message",
    name: "Settings Message",
    component: () => import("./views/SettingsMessageScreen.vue"),
  },
  {
    path: "/comingSoon",
    name: "Coming soon",
    component: () => import("./views/comingSoon.vue"),
  },
];
