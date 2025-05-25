import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// Vue mikro frontend uygulaması için Vite konfigürasyonu
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        // Container uygulamasına açılan bileşenler
        "./App": "./src/App.vue",
        "./Button": "./src/components/Button.vue",
        "./RouteList": "./src/router/routeLists.ts",
        "./main": "./src/main.ts",
      },
      shared: ["vue", "vue-router"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
