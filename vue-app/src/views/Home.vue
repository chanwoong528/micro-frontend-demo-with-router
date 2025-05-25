<template>
  <Layout>
    <h1>Vue Micro Frontend</h1>
    <p>This component is created with Vue.js</p>
    <div class="buttons">
      <Button
        text="Primary Button"
        variant="primary"
        @click="handleClick('primary')"
      />
      <Button
        text="Secondary Button"
        variant="secondary"
        @click="handleClick('secondary')"
      />
      <Button
        text="Danger Button"
        variant="danger"
        @click="handleClick('danger')"
      />
    </div>
  </Layout>
</template>
<script setup lang="ts">
import Button from "../components/Button.vue";
import Layout from "./Layout.vue";

const handleClick = (type: string) => {
  alert(`${type} button clicked!`);
};
</script>
