<template>
    <div class="home">
        <h2>Hoş Geldiniz</h2>
        <p>Bu uygulama, Vue.js ve React mikro frontendlerini bir arada kullanan bir container uygulamasıdır.</p>
        <div class="cards">
            <div class="card" @click="$router.push('/vue')">
                <h3>Vue.js Uygulaması</h3>
                <p>Vue.js ile oluşturulmuş mikro frontend'i görüntülemek için tıklayın.</p>
            </div>
            <div class="card" @click="$router.push('/react')">
                <h3>React Uygulaması</h3>
                <p>React ile oluşturulmuş mikro frontend'i görüntülemek için tıklayın.</p>
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