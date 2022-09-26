<template>
  <section class="hero-section">
    <div class="hero-section__wrapper container-lg">
      <div class="hero-section__left-content">
        <h1 class="hero-section__title">Hi, I'm <span class="accent">Akira Bauer</span>,</h1>

        <p class="hero-section__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="hero-section__buttons">
          <!-- <routerLink to="/categories" class="hero-section__button">Read More</routerLink> -->
          <routerLink to="/about" class="hero-section__button">Contact Me</routerLink>
        </div>
      </div>
      <div class="hero-section__right-content">
        <div class="hero-section__image-wrapper">
          <img class="hero-section__image" src="../assets/images/person.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  background-color: var(--clr-bg-2);

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 0 5rem 0;
    color: var(--clr-text-1);
  }

  &__left-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--clr-text-1);
  }

  &__description {
    font-size: 1.5rem;
    line-height: 1.5;
    color: var(--clr-text-2);
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  &__button {
    background-color: var(--clr-accent-1);
    border: none;
    border-radius: 10rem;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    transition: var(--transition-fast);

    &:hover {
      transform: scale(1.02);
    }
  }

  &__right-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__image-wrapper {
    border-radius: 50%;
    height: 25rem;
    width: 25rem;
    position: relative;
    // overflow: hidden;

    &::before {
      background-color: var(--clr-accent-1);
      border-radius: 50%;
      content: "";
      height: 105%;
      width: 105%;
      left: 0;
      position: absolute;
      top: 0;
      width: 105%;
      z-index: 1;
    }
  }

  &__image {
    border-radius: 50%;
    height: 25rem;
    position: relative;
    width: 25rem;
    z-index: 2;
  }
}

@media screen and (max-width: 860px) {
  .hero-section {
    overflow: hidden;

    &__wrapper {
      flex-direction: column;
      padding: 3rem 0;
      gap: 3rem;
    }

    &__left-content {
      order: 1;
      margin-bottom: 2rem;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__right-content {
      justify-content: center;
    }

    &__title {
      font-size: 2.5rem;
    }

    &__description {
      font-size: 1.2rem;
    }

    &__image-wrapper {
      transform: scale(0.8);
    }
  }
}

@media screen and (max-width: 450px) {
  .hero-section {
    &__wrapper {
      padding: 2rem 0;
    }

    &__title {
      font-size: 2rem;
    }

    &__description {
      font-size: 1rem;
    }
  }
}
</style>
