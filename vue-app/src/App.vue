<template>
    <div class="vue-app">
        <h1>Vue Mikro Frontend</h1>
        <p>Bu bileşen Vue.js ile oluşturulmuştur.</p>
        <div class="buttons">
            <Button text="Primary Button" variant="primary" @click="handleClick('primary')" />
            <Button text="Secondary Button" variant="secondary" @click="handleClick('secondary')" />
            <Button text="Danger Button" variant="danger" @click="handleClick('danger')" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './components/Button.vue'

export default defineComponent({
    name: 'App',
    components: {
        Button
    },
    setup() {
        const handleClick = (type: string) => {
            alert(`${type} butona tıklandı!`)
        }

        return {
            handleClick
        }
    }
})
</script>

<style>
.vue-app {
    padding: 20px;
    border: 2px solid #42b883;
    border-radius: 8px;
    margin: 20px;
}

h1 {
    color: #42b883;
    margin-bottom: 16px;
}

.buttons {
    display: flex;
    gap: 12px;
    margin-top: 20px;
}
</style>
