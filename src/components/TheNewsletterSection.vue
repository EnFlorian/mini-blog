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
        <button class="newsletter-section__form-button" @click.prevent="handleSubmit">Subscribe</button>
      </form>
      <p v-if="$v.email.$error" class="newsletter-section__form-error">Please enter a valid Email Address.</p>
    </div>
  </section>
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
  background-color: var(--clr-accent-1);
  border-radius: 0.8rem;
  min-height: 50vh;

  &__wrapper {
    align-items: center;
    color: var(--clr-text-0);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 5rem 1rem;
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
    max-width: 50rem;
    width: 100%;
  }

  &__form-input {
    background-color: var(--clr-bg-0);
    border-radius: 0.5rem;
    border: none;
    color: var(--clr-bg-2);
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    padding: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--clr-text-2);
    }
  }

  &__form-error {
    color: var(--clr-bg-1);
    font-size: 1rem;
    font-weight: 400;
  }

  &__form-button {
    background-color: var(--clr-bg-2);
    border-radius: 0.5rem;
    border: none;
    color: var(--clr-text-0);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    padding: 1rem;
    transition: var(--transition-base);

    &:hover {
      transform: scale(1.02);
    }
  }

  &__modal-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  &__modal-title {
    color: var(--clr-text-1);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
  }

  &__modal-description {
    color: var(--clr-text-2);
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
}

// Media Queries
@media screen and (max-width: 768px) {
  .newsletter-section {
    &__wrapper {
      padding: 3rem 1rem;
    }

    &__title {
      font-size: 1.5rem;
    }

    &__description {
      font-size: 1rem;
    }

    &__form {
      max-width: 30rem;
    }

    &__form-input {
      font-size: 0.8rem;
    }

    &__modal-title {
      font-size: 1.2rem;
      text-align: center;
    }

    &__modal-description {
      font-size: 1rem;
      text-align: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .newsletter-section {
    &__title {
      font-size: 1.5rem;
      text-align: center;
    }

    &__description {
      font-size: 1rem;
      text-align: center;
    }

    &__form {
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    &__form-input {
      margin-bottom: 0.5rem;
      width: 100%;
    }

    &__form-button {
      width: 100%;
    }
  }
}
</style>
