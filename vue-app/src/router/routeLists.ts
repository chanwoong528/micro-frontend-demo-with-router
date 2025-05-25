import Home from "../views/Home.vue";
import About from "../views/About.vue";

export const routeLists = [
  {
    path: "/vue/",
    name: "rmoteHome",
    component: Home,
  },
  {
    path: "/vue/about",
    name: "remoteAbout",
    component: About,
  },
];
