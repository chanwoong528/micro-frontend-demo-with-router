import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import { routeLists } from "./routeLists";
const router = createRouter({
  history: createWebHistory(),
  routes: routeLists,
});

export default router;
