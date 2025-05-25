import { createRouter, createWebHistory } from "vue-router";
import { h } from "vue";
import Home from "../views/Home.vue";
import ReactWrapper from "../components/ReactWrapper.vue";
import AngularWrapper from "../components/AngularWrapper.vue";
import { routeLists as VueRouteLists } from "vueApp/RouteList";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/vue/:pathMatch(.*)*",
      name: "vue",
      children: VueRouteLists,
      //   component: async () => {
      //     const VueApp = await import("vueApp/RouteList");
      //     console.log("VueApp on Mount [info]:", VueApp);

      //     return h(await VueApp.default.render());
      //   },
    },
    {
      path: "/react/:pathMatch(.*)*",
      name: "react",
      component: async () => {
        const ReactApp = await import("reactApp/App");
        console.log("ReactApp on Mount [info]:", ReactApp);

        return h(ReactWrapper, { component: ReactApp.default });
      },
    },
    {
      path: "/angular/:pathMatch(.*)*",
      name: "angular",
      component: async () =>
        h(AngularWrapper, {
          component: async () => {
            const angularApp = await import("angularApp/Module").then(
              (m) => m.default || m
            );
            console.log("Angular on Mount [info]:", angularApp);
            return angularApp;
          },
        }),
    },
  ],
});

export default router;
