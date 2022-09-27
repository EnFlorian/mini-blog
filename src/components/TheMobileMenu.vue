<template>
  <div class="mobile-menu" @click.prevent.self="closeMenu">
    <div class="mobile-menu__container">
      <button class="mobile-menu__close-button" @click="closeMenu">
        <fa :icon="['fas', 'times']" />
      </button>
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
  left: 0;
  position: fixed;
  top: 0;
  transition: var(--transition-base);
  width: 100%;
  z-index: 1000;

  &__container {
    align-items: center;
    background-color: var(--clr-bg-2);
    border-radius: 0 0 1rem 1rem;
    border-top: none;
    border: 3px solid var(--clr-accent-1);
    box-shadow: var(--box-shadow-1);
    color: var(--clr-text-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    transition: var(--transition-base);
    width: 100%;
    z-index: 1000;
  }

  &__close-button {
    background-color: var(--clr-accent-1);
    border-radius: 50%;
    border: none;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.5rem;
    height: 2.5rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: var(--transition-base);
    width: 2.5rem;
    z-index: 1000;
  }

  &__links {
    align-items: center;
    display: flex;
    flex-direction: column;
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
