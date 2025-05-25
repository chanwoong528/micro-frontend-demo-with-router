declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "reactApp/App";
declare module "angularApp/Module";
declare module "vueApp/App";
declare module "vueApp/RouteList";
