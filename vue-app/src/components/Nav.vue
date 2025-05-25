<template>
  <nav>
    <ul>
      <li>
        <router-link to="/vue">Home</router-link>
      </li>
      <li>
        <router-link to="/vue/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav",
});
</script>
