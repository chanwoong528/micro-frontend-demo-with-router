import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// Vue mikro frontend uygulaması için Vite konfigürasyonu
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'vueApp',
            filename: 'remoteEntry.js',
            exposes: {
                // Container uygulamasına açılan bileşenler
                './App': './src/App.vue',
                './Button': './src/components/Button.vue'
            },
            shared: ['vue', 'vue-router'] // Paylaşılan bağımlılıklar
        })
    ],
    server: {
        port: 3001,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    preview: {
        port: 3001,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
}) 