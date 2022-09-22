<template>
  <section class="navbar">
    <div class="navbar__wrapper container-xl">
      <h1>Mini Blog</h1>
      <ul class="navbar__links">
        <li v-for="(link, index) in links" :key="index">
          <a class="navbar__link" :href="link.path">{{ link.name }}</a>
        </li>
      </ul>
      <button class="navbar__mobile-menu-button"><fa :icon="['fas', 'bars']" /></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from "../mock-api/navigation/data";

// add hover effect to navbar when scrolled down
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-text-1);
    height: var(--navbar-height);
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__mobile-menu-button {
    display: none;
  }
}
</style>
