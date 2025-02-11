import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        federation({
            name: 'angularApp',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/app/app.component.ts'
            },
            shared: ['@angular/core', '@angular/common', '@angular/router']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        outDir: 'dist'
    },
    preview: {
        port: 3003,
        strictPort: true
    },
    base: './',
    root: 'dist/angular-app'
}); 