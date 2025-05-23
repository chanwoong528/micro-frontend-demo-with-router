<template>
    <div ref="angularRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { PropType } from 'vue'

export default defineComponent({
    name: 'AngularWrapper',
    props: {
        component: {
            type: [Function, Object] as PropType<() => Promise<any>>,
            required: true
        }
    },
    setup(props) {
        const angularRoot = ref<HTMLElement | null>(null)
        let moduleRef: any = null

        onMounted(async () => {
            if (angularRoot.value && typeof props.component === 'function') {
                const el = angularRoot.value
                el.innerHTML = '<app-root></app-root>'

                try {
                    const module = await props.component()
                    console.log('Angular on Mount [info]:', 'Yüklenen modül:', module)

                    if (module?.bootstrap) {
                        moduleRef = await module.bootstrap(el)
                    } else {
                        console.error('Angular on Mount [error]:')
                    }
                } catch (error) {
                    console.error('Angular on Mount [error]:', error)
                }
            }
        })

        onUnmounted(() => {
            if (moduleRef) {
                moduleRef.destroy()
            }
            if (angularRoot.value) {
                angularRoot.value.innerHTML = ''
            }
        })

        return {
            angularRoot
        }
    }
})
</script>