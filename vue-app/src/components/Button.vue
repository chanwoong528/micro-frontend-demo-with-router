<template>
    <button :class="['vue-button', variant]" @click="onClick">
        <slot>{{ text }}</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Button',
    props: {
        text: {
            type: String,
            default: 'Click'
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value)
        }
    },
    emits: ['click'],
    setup(_, { emit }) {
        const onClick = () => {
            emit('click')
        }

        return {
            onClick
        }
    }
})
</script>

<style scoped>
.vue-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.vue-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.primary {
    background-color: #42b883;
    color: white;
}

.secondary {
    background-color: #2c3e50;
    color: white;
}

.danger {
    background-color: #e74c3c;
    color: white;
}
</style>