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
    path: "/people",
    name: "People",
    component: () => import("./views/People.vue"),
  },
];