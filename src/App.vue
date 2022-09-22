<template>
  <TheNavbar />
  <div class="container is-max-desktop px-4 py-4">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
</script>
