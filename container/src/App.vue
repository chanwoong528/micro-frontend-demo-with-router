<template>
    <div class="container">
        <h1>Mikro Frontend Container</h1>
        <nav>
            <router-link to="/">Ana Sayfa</router-link> |
            <router-link to="/vue">Vue Uygulaması</router-link> |
            <router-link to="/react">React Uygulaması</router-link>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

nav {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}

nav a {
    margin: 0 10px;
    color: #2c3e50;
    text-decoration: none;
}

nav a.router-link-active {
    color: #42b883;
    font-weight: bold;
}
</style>