<template>
    <div class="home">
        <h2>Welcome</h2>
        <p>This application is a container application that uses Vue.js and React micro frontends together.</p>
        <div class="cards">
            <div class="card" @click="$router.push('/vue')">
                <h3>Vue.js Application</h3>
                <p>Click to view the micro frontend created with Vue.js</p>
            </div>
            <div class="card" @click="$router.replace({path: '/react/about'})">
                <h3>React Application</h3>
                <p>Click to view the micro frontend created with React</p>
            </div>
            <div class="card" @click="$router.push('/angular/about')">
                <h3>Angular Application</h3>
                <p>Click to view the micro frontend created with Angular</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home'
})
</script>

<style scoped>
.home {
    padding: 20px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h3 {
    margin-top: 0;
    color: #2c3e50;
}
</style>