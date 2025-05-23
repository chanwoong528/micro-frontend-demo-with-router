import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.tsx',
                './Button': './src/components/Button.tsx'
            },
            shared: ['react', 'react-dom', 'react-router-dom']
            // shared: {
            //     react: {
            //         singleton: true,
            //         requiredVersion: '^18.2.0', // 실제 사용하는 버전으로 맞추세요
            //         strictVersion: true,
            //         eager: false, // 일반적으로 false
            //     },
            //     'react-dom': {
            //         singleton: true,
            //         requiredVersion: '^18.2.0',
            //         strictVersion: true,
            //         eager: false,
            //     },
            // }
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})