import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'
import Home from '../views/Home.vue'
import ReactWrapper from '../components/ReactWrapper.vue'
import AngularWrapper from '../components/AngularWrapper.vue'

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
            component: () => import('vueApp/App')
        },
        {
            path: '/react',
            name: 'react',
            component: async () => {
                const ReactApp = await import('reactApp/App')
                return h(ReactWrapper, { component: ReactApp.default })
            }
        },
        {
            path: '/angular',
            name: 'angular',
            component: () => h(AngularWrapper, {
                component: () => import('angularApp/Module').then(m => m.default || m)
            })
        }
    ]
})

export default router 