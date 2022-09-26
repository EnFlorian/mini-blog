<template>
  <div class="app">
    <TheNavbarVue />
    <main class="app__main-content">
      <router-view v-slot="{ Component }">
        <transition appear name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
  display: flex;
  flex-direction: column;

  &__main-content {
    min-height: calc(100vh - var(--navbar-height));
  }
}

.route-enter-from {
  opacity: 0;
}

.route-enter-to {
  opacity: 1;
}

.route-leave-from {
  opacity: 1;
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: opacity 0.4s ease-in-out;
}

.route-leave-active {
  transition: opacity 0.3s ease;
}
</style>
