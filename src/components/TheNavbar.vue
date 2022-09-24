<template>
  <section class="navbar">
    <div class="navbar__wrapper container-lg">
      <router-link to="/">
        <h1 class="navbar__logo">Mini Blog</h1>
      </router-link>
      <ul class="navbar__links">
        <li v-for="(link, index) in links" :key="index">
          <router-link class="navbar__link" :to="link.path">{{ link.name }}</router-link>
        </li>
        <li>
          <TheDarkModeSwitchVue />
        </li>
      </ul>
      <button class="navbar__mobile-menu-button"><fa :icon="['fas', 'bars']" /></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from "../mock-api/navigation/data";
import TheDarkModeSwitchVue from "./TheDarkModeSwitch.vue";

const hideScrollIndicator = () => {
  const scrollIndicator = document.querySelector(".navbar");
  if (document.documentElement.scrollTop > 20) {
    scrollIndicator?.classList.add("navbar--scrolled");
  } else {
    scrollIndicator?.classList.remove("navbar--scrolled");
  }
};

window.onscroll = hideScrollIndicator;
</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--clr-bg-1);
  position: sticky;
  top: 0;
  transition: var(--transition-base);

  &--scrolled {
    background-color: var(--clr-bg-2);
  }

  &__wrapper {
    align-items: center;
    color: var(--clr-text-1);
    display: flex;
    height: var(--navbar-height);
    justify-content: space-between;
  }

  &__logo {
    font-size: 2rem;
    font-weight: 700;
    color: var(--clr-text-0);
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__link {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--clr-text-1);
    transition: var(--transition-base);

    &:hover {
      color: var(--clr-accent-1);
    }
  }

  &__mobile-menu-button {
    display: none;
  }
}
</style>
