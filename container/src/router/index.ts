import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import Home from '../views/Home.vue'
import VueApp from 'vueApp/App'
import ReactWrapper from '../components/ReactWrapper.vue'
import ReactApp from 'reactApp/App'

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
            component: () => h(ReactWrapper, { component: ReactApp })
        }
    ]
})

export default router 