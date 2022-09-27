<template>
  <section class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__description">Page not found</p>
    <router-link to="/" class="not-found__button">Back Home</router-link>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - var(--navbar-height));

  &__title {
    color: var(--clr-text-1);
    font-size: 10rem;
    font-weight: 700;
    line-height: 1;
  }

  &__description {
    color: var(--clr-text-2);
    font-size: 3rem;
  }

  &__button {
    background-color: var(--clr-accent-1);
    border-radius: 0.5rem;
    border: none;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 2rem;
    padding: 1rem 2rem;
    transition: var(--transition-base);

    &:hover {
      transform: scale(1.02);
    }
  }
}

//Media queries
@media screen and (max-width: 768px) {
  .not-found {
    &__title {
      font-size: 8rem;
    }

    &__description {
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 450px) {
  .not-found {
    &__title {
      font-size: 6rem;
    }

    &__description {
      font-size: 1.5rem;
    }
  }
}
</style>
