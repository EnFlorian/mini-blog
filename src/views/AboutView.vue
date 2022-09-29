<template>
  <section class="about container-lg">
    <header class="about__header">
      <div class="about__left-content">
        <img class="about__image" :src="aboutImage" alt="about" />
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
          <input v-model="formData.name" type="text" id="name" class="about__form-input" placeholder="Name..." />
          <p v-if="$v.name.$error" class="about__form-error">Please enter a Name.</p>
        </div>
        <div class="about__form-group">
          <label for="email" class="about__form-label">Email</label>
          <input v-model="formData.email" type="email" id="email" class="about__form-input" placeholder="Email..." />
          <p v-if="$v.email.$error" class="about__form-error">Please enter a valid Email Address.</p>
        </div>
        <div class="about__form-group">
          <label for="message" class="about__form-label">Message</label>
          <textarea
            v-model="formData.message"
            id="message"
            class="about__form-input about__form-text-area"
            rows="5"
          ></textarea>
          <p v-if="$v.message.$error" class="about__form-error">Please enter a Message.</p>
        </div>
        <button class="about__form-button" @click.prevent="handleSubmit">Send</button>
      </form>
    </section>
    <NotificationModal :show="showModal" :closeModal="toggleModal">
      <div class="about__modal-content">
        <h1 class="about__modal-title">Thank you for your message!</h1>
        <p class="about__modal-description">I will get back to you as soon as possible.</p>
      </div>
    </NotificationModal>
  </section>
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
  message: "Hello World! Hello Friends!",
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
    formData.email = "";
    formData.message = "";
    formData.name = "";

    $v.value.$reset();
    toggleModal();
  }
};
</script>

<style scoped lang="scss">
.about {
  align-items: center;
  color: var(--clr-text-0);
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  &__header {
    align-items: center;
    background-color: var(--clr-bg-2);
    border-radius: 0.3rem;
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    min-height: 20rem;
    overflow: hidden;
    width: 100%;
  }

  &__left-content {
    display: flex;
    flex: 1;
  }

  &__image {
    object-fit: cover;
    width: 100%;
  }

  &__right-content {
    display: flex;
    flex-direction: column;
    flex: 2;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
  }

  &__title {
    color: var(--clr-text-1);
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    position: relative;
    width: fit-content;
  }

  &__description {
    color: var(--clr-text-2);
    font-size: 1.2rem;
    font-weight: 300;
  }

  &__socials {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__socials li {
    font-size: 2.5rem;
    a {
      color: var(--clr-text-2);
      transition: var(--transition-fast);

      &:hover {
        color: var(--clr-accent-1);
      }
    }
  }

  &__content {
    align-items: center;
    background-color: var(--clr-bg-2);
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
  }

  &__form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
    width: 100%;
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
    border-radius: 0.3rem;
    border: 1px solid var(--clr-text-1);
    font-size: 1.2rem;
    font-weight: 300;
    outline: none;
    padding: 0.5rem 1rem;
    transition: var(--transition-fast);

    &:focus {
      border-bottom: 4px solid var(--clr-accent-1);
    }
  }

  &__form-text-area {
    resize: vertical;
  }

  &__form-button {
    background-color: var(--clr-primary);
    border-radius: 0.2rem;
    border: none;
    color: var(--clr-text-0);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 400;
    outline: none;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--clr-primary-1);
    }
  }

  &__form-error {
    color: var(--clr-text-1);
    font-size: 0.9rem;
    font-weight: 300;
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
@media screen and (max-width: 1050px) {
  .about {
    padding: 2rem 0;
    &__header {
      flex-direction: column;
      padding: 2rem;
    }

    &__left-content {
      max-height: 30rem;
      overflow: hidden;
    }

    &__image {
      border-left: 5px solid var(--clr-accent-1);
    }

    &__left-content {
      width: 100%;
    }

    &__right-content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 600px) {
  .about {
    padding: 1rem 0;

    &__right-content {
      align-items: center;
    }

    &__description {
      font-size: 1rem;
      text-align: center;
    }

    &__socials {
      justify-content: center;

      li {
        font-size: 2rem;
      }
    }

    &__content {
      padding: 1rem;
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
</style>
