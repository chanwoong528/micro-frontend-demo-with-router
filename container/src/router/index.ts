import { createRouter, createWebHistory } from 'vue-router'
import { h, defineAsyncComponent } from 'vue'
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
            component: defineAsyncComponent(() => import('vueApp/App'))
        },
        {
            path: '/react',
            name: 'react',
            component: defineAsyncComponent(async () => {
                const ReactApp = await import('reactApp/App')
                return h(ReactWrapper, { component: ReactApp.default })
            })
        },
        {
            path: '/angular',
            name: 'angular',
            component: defineAsyncComponent(async () => {
                const AngularApp = await import('angularApp/Module')
                return h(AngularWrapper, { component: AngularApp.AppModule })
            })
        }
    ]
})

export default router 