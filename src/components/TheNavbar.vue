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
        <li class="navbar__switch">
          <TheDarkModeSwitchVue />
        </li>
      </ul>
      <button class="navbar__mobile-menu-button" @click.prevent="toggleMobileMenu">
        <fa :icon="['fas', 'bars']" />
      </button>
    </div>
    <Transition appear name="fade">
      <TheMobileMenuVue v-if="isMobileMenuOpen" :closeMenu="toggleMobileMenu" />
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { links } from "../mock-api/navigation/data";
import TheDarkModeSwitchVue from "./TheDarkModeSwitch.vue";
import TheMobileMenuVue from "./TheMobileMenu.vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

window.onscroll = () => {
  const scrollIndicator = document.querySelector(".navbar");
  if (document.documentElement.scrollTop > 20) {
    scrollIndicator?.classList.add("navbar--scrolled");
  } else {
    scrollIndicator?.classList.remove("navbar--scrolled");
  }
};
</script>

<style scoped lang="scss">
.navbar {
  align-items: center;
  background-color: var(--clr-bg-1);
  display: flex;
  flex-direction: column;
  height: var(--navbar-height);
  position: sticky;
  top: 0;
  transition: var(--transition-base);
  z-index: 100;

  &--scrolled {
    background-color: var(--clr-bg-2);
    box-shadow: var(--box-shadow-1);
  }

  &__wrapper {
    align-items: center;
    color: var(--clr-text-1);
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  &__logo {
    color: var(--clr-text-1);
    font-size: 2rem;
    font-weight: 700;
  }

  &__links {
    align-items: center;
    display: flex;
    gap: 1.5rem;
  }

  &__link {
    color: var(--clr-text-1);
    font-size: 1.2rem;
    font-weight: 400;
    transition: var(--transition-base);

    &:hover {
      color: var(--clr-accent-1);
    }
  }

  &__mobile-menu-button {
    background-color: transparent;
    border: none;
    color: var(--clr-text-1);
    cursor: pointer;
    display: none;
    font-size: 1.5rem;
    transition: var(--transition-base);

    &:hover {
      color: var(--clr-accent-1);
    }
  }
}

.fade-enter-to,
.fade-leave-from {
  transform: translateY(0);
}
.fade-enter-from,
.fade-leave-to {
  transform: translateY(-100%);
}

.fade-enter-active {
  position: absolute;
  transition: transform 0.8s ease;
}
.fade-leave-active {
  transition: transform 1.5s ease;
}

// Media Queries
@media screen and (max-width: 768px) {
  .navbar {
    &__links {
      display: none;
    }

    &__mobile-menu-button {
      display: block;
    }
  }
}
</style>
