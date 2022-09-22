<template>
  <div class="app">
    <TheNavbarVue />
    <main class="content">
      <RouterView />
    </main>
    <TheFooterVue />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { TheNavbarVue, TheFooterVue } from "./components";
</script>

<style scoped lang="scss">
.app {
  background-color: var(--clr-bg-1);
}
.content {
  min-height: calc(100vh - var(--navbar-height));
}
</style>
