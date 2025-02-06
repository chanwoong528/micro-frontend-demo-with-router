import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.vue',
                './Button': './src/components/Button.vue'
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