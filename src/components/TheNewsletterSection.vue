<template>
  <section class="newsletter-section container-lg">
    <div class="newsletter-section__wrapper">
      <fa :icon="['fas', 'envelope']" class="newsletter-section__icon" />
      <h2 class="newsletter-section__title">Subscribe to our Newsletter</h2>
      <p class="newsletter-section__description">Subscribe to our newsletter to get the latest news and updates.</p>
      <form class="newsletter-section__form">
        <input
          class="newsletter-section__form-input"
          type="email"
          placeholder="Enter your email address"
          v-model="formData.email"
        />
        <p v-if="$v.email.error" class="newsletter-section__form-error">Please enter a valid Email Address.</p>

        <button class="newsletter-section__form-button" @click.prevent="handleSubmit">Subscribe</button>
      </form>
    </div>
  </section>
  <!-- Modal -->
  <NotificationModal :show="showModal" :closeModal="closeModal">
    <div class="newsletter-section__modal-content">
      <h1 class="newsletter-section__modal-title">Thank you for subscribing!</h1>
      <p class="newsletter-section__modal-description">You have successfully subscribed to our newsletter.</p>
    </div>
  </NotificationModal>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import NotificationModal from "./NotificationModal.vue";

const formData = reactive({
  email: "demo.user@email.com",
});

const rules = {
  email: { required, email },
};

const $v = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const result = await $v.value.$validate();
  if (result) {
    showModal.value = true;
  }
};

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped lang="scss">
.newsletter-section {
  min-height: 50vh;
  background-color: var(--clr-accent-1);
  border-radius: 0.8rem;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 5rem 0;
    color: var(--clr-text-0);
  }

  &__icon {
    font-size: 3rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 400;
  }

  &__form {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 50rem;
  }

  &__form-input {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    color: var(--clr-text-2);
    background-color: var(--clr-text-1);
  }

  &__form-button {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: var(--clr-text-0);
    background-color: var(--clr-bg-2);
    cursor: pointer;
    transition: var(--transition-base);

    &:hover {
      background-color: var(--clr-bg-1);
    }
  }

  &__modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__modal-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__modal-description {
    font-size: 1.5rem;
    font-weight: 400;
  }
}
</style>
