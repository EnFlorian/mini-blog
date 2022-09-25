<template>
  <section class="about">
    <header class="about__header">
      <div class="about__left-content">
        <img :src="aboutImage" alt="about" />
      </div>
      <div class="about__right-content">
        <h1 class="about__title">Who Am I?</h1>
        <p class="about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptate quae
          voluptatem quibusdam necessitatibus voluptatum quidem quas quos. Quisquam, quae. Quisquam voluptates, quod,
          quia, voluptate quae voluptatem quibusdam necessitatibus voluptatum quidem quas quos. Quisquam, quae.
        </p>
        <ul class="about__socials">
          <li v-for="(social, index) in socials" :key="index">
            <a :href="social.path" target="_blank" rel="noopener noreferrer">
              <fa :icon="social.icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
    <section class="about__content">
      <h1 class="about__title">Lets Talk?</h1>
      <form class="about__form">
        <div class="about__form-group">
          <label for="name" class="about__form-label">Name</label>
          <input v-model="formData.name" type="text" id="name" class="about__form-input" />
          <p v-if="$v.name.$error" class="about__form-error">Please enter a Name.</p>
        </div>
        <div class="about__form-group">
          <label for="email" class="about__form-label">Email</label>
          <input v-model="formData.email" type="email" id="email" class="about__form-input" />
          <p v-if="$v.email.$error" class="about__form-error">Please enter a valid Email Address.</p>
        </div>
        <div class="about__form-group">
          <label for="message" class="about__form-label">Message</label>
          <textarea v-model="formData.message" id="message" class="about__form-input" rows="5"></textarea>
          <p v-if="$v.message.$error" class="about__form-error">Please enter a Message.</p>
        </div>
        <button class="about__form-button" @click.prevent="handleSubmit">Send</button>
      </form>
    </section>
  </section>
  <!-- Modal -->
  <NotificationModal :show="showModal" :closeModal="toggleModal">
    <div class="about__modal-content">
      <h1 class="about__modal-title">Thank you for your message!</h1>
      <p class="about__modal-description">I will get back to you as soon as possible.</p>
    </div>
  </NotificationModal>
</template>

<script setup lang="ts">
import aboutImage from "../assets/images/person.jpg";
import { socials } from "../mock-api/socials/data";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import NotificationModal from "../components/NotificationModal.vue";

let showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const formData = reactive({
  email: "demo.user@email.com",
  message: "",
  name: "Demo User",
});

const rules = {
  email: { required, email },
  message: { required },
  name: { required },
};

const $v = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const result = await $v.value.$validate();
  if (result) {
    toggleModal();
  }
};
</script>

<style scoped lang="scss">
.about {
  padding: 5rem 0;
  color: var(--clr-text-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    border-radius: 0.3rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    background-color: var(--clr-bg-2);
  }

  &__left-content {
    width: 100%;
    max-width: 500px;
    height: 500px;
    border-radius: 0.2rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__right-content {
    flex: 1;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 400;
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 300;
  }

  &__content {
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--clr-bg-2);
    width: 100%;
    padding: 2rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;
  }

  &__form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  &__form-label {
    font-size: 1.2rem;
    font-weight: 400;
  }

  &__form-input {
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-text-1);
    border-radius: 0.2rem;
    outline: none;
    font-size: 1.2rem;
    font-weight: 300;
  }

  &__form-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.2rem;
    outline: none;
    font-size: 1.2rem;
    font-weight: 400;
    background-color: var(--clr-primary);
    color: var(--clr-text-0);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--clr-primary-1);
    }
  }
}
</style>
