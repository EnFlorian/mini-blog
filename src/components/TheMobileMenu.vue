<template>
  <Transition appear name="fade">
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
  </Transition>
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
    width: 98%;
    position: absolute;
    top: 0;
    left: 1%;
    z-index: 1000;
    transition: var(--transition-base);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }
  &__link {
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
