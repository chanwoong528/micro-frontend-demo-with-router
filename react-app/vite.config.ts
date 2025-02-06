import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// React mikro frontend uygulaması için Vite konfigürasyonu
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'reactApp',
            filename: 'remoteEntry.js',
            exposes: {
                // Container uygulamasına açılan bileşenler
                './App': './src/App.tsx',
                './Button': './src/components/Button.tsx'
            },
            shared: ['react', 'react-dom'] // Paylaşılan bağımlılıklar
        })
    ],
    server: {
        port: 3002,
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    preview: {
        port: 3002,
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