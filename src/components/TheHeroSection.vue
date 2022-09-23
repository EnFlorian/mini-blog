<template>
  <section class="hero-section">
    <div class="hero-section__left-content">
      <h1 class="hero-section__title">Hey, I'm Akira</h1>
      <p class="hero-section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae
        voluptatem quibusdam necessitatibus quidem voluptatum quos nesciunt.
      </p>
      <!-- horizontal subscribe form and submit button -->
      <form class="hero-section__subscribe-form">
        <input class="hero-section__subscribe-form-input" type="email" placeholder="Enter your email address" />
        <button class="hero-section__subscribe-form-button">Subscribe</button>
      </form>
    </div>
    <div class="hero-section__right-content">
      <div class="hero-section__image-wrapper">
        <img class="hero-section__image" src="../assets/images/person.jpg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;
  color: var(--clr-text-1);

  &__left-content {
    flex: 1;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__description {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  &__subscribe-form {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  &__subscribe-form-input {
    border: 1px solid var(--clr-accent-1);
    background-color: var(--clr-bg-2);
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
  }

  &__subscribe-form-button {
    background-color: var(--clr-accent-1);
    border: none;
    border-radius: 0.5rem;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1rem 2rem;
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
    position: relative;
    width: 25rem;

    &::before {
      background-color: var(--clr-accent-1);
      border-radius: 50%;
      content: "";
      height: 105%;
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
</style>
