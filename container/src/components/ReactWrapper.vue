<template>
  <div ref="reactRoot"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import React from 'react'
import ReactDOM from 'react-dom/client'

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
        root.render(React.createElement(props.component as React.ComponentType))
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