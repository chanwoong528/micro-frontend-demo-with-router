import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: 'src/main.ts',
            name: 'VueMicrofrontend',
            fileName: (format) => `vue-microfrontend.${format}.js`
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter'
                }
            }
        }
    }
}) 