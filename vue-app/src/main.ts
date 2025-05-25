import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const mount = (el) => {
  createApp(App).use(router).mount(el);
};

// const app = createApp(App);
// app.use(router);
// app.mount("#app");

if (process.env.NODE_ENV === "development") {
  const rootNode = document.querySelector("#app");
  if (rootNode) {
    mount(rootNode);
  }
}

export { mount };
