<template>
  <section class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__description">Page not found</p>
    <router-link to="/" class="not-found__button">Back Home</router-link>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height));

  &__title {
    font-size: 10rem;
    line-height: 1;
    font-weight: 700;
    color: var(--clr-text-1);
  }

  &__description {
    font-size: 3rem;
    color: var(--clr-text-2);
  }

  &__button {
    background-color: var(--clr-accent-1);
    border: none;
    border-radius: 0.5rem;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    transition: var(--transition-base);

    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
