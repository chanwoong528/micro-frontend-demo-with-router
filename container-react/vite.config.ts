import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container-app-react",
      remotes: {
        vueApp: "http://localhost:3001/assets/remoteEntry.js",
        reactApp: "http://localhost:3002/assets/remoteEntry.js",
        angularApp: {
          external: "http://localhost:3003/remoteEntry.js",
          format: "esm",
          from: "webpack",
          externalType: "url",
        },
      },

      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 3000,
    },
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
