<template>
  <div class="dark-mode-switch">
    <fa class="dark-mode-switch__icon" :icon="['fas', 'moon']" v-if="!isDarkMode" @click="toggleDarkMode" />
    <fa class="dark-mode-switch__icon" :icon="['fas', 'sun']" v-if="isDarkMode" @click="toggleDarkMode" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDarkMode = ref(true);

const toggleDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.removeAttribute("data-theme");
    isDarkMode.value = false;
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    isDarkMode.value = true;
  }
};
</script>

<style scoped lang="scss">
.dark-mode-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    color: var(--clr-accent-1);
  }

  &__icon {
    font-size: 1.2rem;
  }
}
</style>
