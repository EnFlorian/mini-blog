<template>
  <div class="mobile-menu" @click.prevent.self="closeMenu">
    <!-- close button -->
    <div class="mobile-menu__container">
      <button class="mobile-menu__close-button" @click="closeMenu">
        <fa :icon="['fas', 'times']" />
      </button>
      <!-- Links -->
      <ul class="mobile-menu__links">
        <li class="mobile-menu__link" v-for="(link, index) in links" :key="index" @click="closeMenu">
          <router-link :to="link.path" class="link">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { links } from "../mock-api/navigation/data";

const props = defineProps<{
  closeMenu: () => void;
}>();
</script>

<style scoped lang="scss">
.mobile-menu {
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: var(--transition-base);

  &__container {
    background-color: var(--clr-bg-2);
    color: var(--clr-text-1);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: var(--transition-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--box-shadow-1);
    border-radius: 0 0 1rem 1rem;
    border: 3px solid var(--clr-accent-1);
    border-top: none;
  }

  &__close-button {
    background-color: var(--clr-accent-1);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    color: var(--clr-text-1);
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    transition: var(--transition-base);
    cursor: pointer;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }
  &__link {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.1;
  }
}
</style>
