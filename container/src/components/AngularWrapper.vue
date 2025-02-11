<template>
    <div ref="angularRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: 'AngularWrapper',
    props: {
        component: {
            type: [Object, Function],
            required: true
        }
    },
    setup(props) {
        const angularRoot = ref<HTMLElement | null>(null)

        onMounted(() => {
            if (angularRoot.value && props.component) {
                // Angular bileşenini mount et
                const mountPoint = document.createElement('app-root')
                angularRoot.value.appendChild(mountPoint)
            }
        })

        return {
            angularRoot
        }
    }
})
</script> 