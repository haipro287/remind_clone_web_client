import About from "./views/About.vue";
import Login from "./views/LoginScreen.vue";
import Classes from "./views/MainScreen.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/classes",
    redirect: "/classes/0",
  },
  {
    path: "/classes/:code",
    name: "Classes",
    component: Classes,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "message",
        alias: [""],
        name: "Message",
        component: () => import("./views/MessageScreen.vue"), //thay bang Message
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
];
