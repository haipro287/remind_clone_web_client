export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () => import("./views/MainScreen.vue"),
    meta: {
      requiresAuth: true,
    },
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
    path: "*",
    name: "Coming soon",
    component: () => import("./views/comingSoon.vue"),
  },
];
