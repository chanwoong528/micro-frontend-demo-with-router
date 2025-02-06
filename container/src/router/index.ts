import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// @ts-ignore
const VueApp = () => import('vueApp/App')
// @ts-ignore
const ReactApp = () => import('reactApp/App')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/vue',
            name: 'vue',
            component: VueApp
        },
        {
            path: '/react',
            name: 'react',
            component: ReactApp
        }
    ]
})

export default router 