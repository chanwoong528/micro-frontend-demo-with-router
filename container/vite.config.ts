import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'host',
            remotes: {
                vueApp: "http://localhost:3001/assets/remoteEntry.js",
                reactApp: "http://localhost:3002/assets/remoteEntry.js"
            },
            shared: ['vue']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})