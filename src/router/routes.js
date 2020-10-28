import About from "./views/About.vue";
import Login from "./views/LoginScreen.vue";
import Classes from "./views/MainScreen.vue";
import People from "./views/People.vue";
import Setting_Class from "./views/SettingsClassScreen.vue";

export default [
  {
    path: "/",
    alias: ["/message"],
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
    children: [
      {
        path: "message",
        alias: [""],
        name: "Message",
        component: Setting_Class, //thay bang Message
      },
      {
        path: "files",
        name: "Files",
        component: People, //thay bang Files
      },
      {
        path: "people",
        name: "People",
        component: People,
      },
      {
        path: "information",
        name: "Information",
        component: Setting_Class, //thay bang Information
      },
      {
        path: "settings",
        name: "Settings Class",
        component: Setting_Class,
      },
    ],
  },
];
