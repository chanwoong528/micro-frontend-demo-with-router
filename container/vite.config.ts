import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// Container uygulaması için Vite konfigürasyonu
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'container',
            remotes: {
                // Mikro frontend uygulamalarının remote entry noktaları
                vueApp: 'http://localhost:3001/remoteEntry.js',
                reactApp: 'http://localhost:3002/remoteEntry.js'
            },
            shared: ['vue', 'vue-router'] // Paylaşılan bağımlılıklar
        })
    ],
    server: {
        port: 3000,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    preview: {
        port: 3000,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                format: 'esm'
            }
        }
    }
}) 