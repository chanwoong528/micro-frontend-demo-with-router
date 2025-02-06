<template>
  <div class="app">
    <nav>
      <router-link to="/">Ana Sayfa</router-link> |
      <router-link to="/about">Hakkında</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

nav {
  padding: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b983;
}
</style> 