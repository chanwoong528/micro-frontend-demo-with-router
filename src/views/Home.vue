<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data() {
    return {
      title: 'Vue Microfrontend Ana Sayfa',
      description: 'Bu bir Vue 3 + TypeScript microfrontend uygulamasıdır.'
    }
  }
})
</script> 