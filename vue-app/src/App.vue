<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./components/Button.vue";
import Nav from "./components/Nav.vue";
export default defineComponent({
  name: "App",
  components: {
    Button,
    Nav,
  },
  setup() {
    const handleClick = (type: string) => {
      alert(`${type} button clicked!`);
    };

    return {
      handleClick,
    };
  },
});
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
