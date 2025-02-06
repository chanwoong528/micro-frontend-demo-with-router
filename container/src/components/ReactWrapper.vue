<template>
  <div ref="reactRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

export default defineComponent({
  name: 'ReactWrapper',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const reactRoot = ref<HTMLElement | null>(null)
    let root: ReactDOM.Root | null = null

    onMounted(() => {
      if (reactRoot.value) {
        root = ReactDOM.createRoot(reactRoot.value)
        root.render(React.createElement(props.component))
      }
    })

    onUnmounted(() => {
      if (root) {
        root.unmount()
      }
    })

    return {
      reactRoot
    }
  }
})
</script> 