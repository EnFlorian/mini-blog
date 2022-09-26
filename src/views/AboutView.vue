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
    min-height: 20rem;
    gap: 2rem;
    margin-bottom: 2rem;
    background-color: var(--clr-bg-2);
    overflow: hidden;
  }

  &__left-content {
    flex: 1;
    display: flex;
  }

  &__image {
    width: 100%;
    object-fit: cover;
  }

  &__right-content {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  &__title {
    width: fit-content;
    line-height: 1;
    position: relative;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--clr-text-1);
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--clr-text-2);
  }

  &__socials {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
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
    border-radius: 0.3rem;
    outline: none;
    font-size: 1.2rem;
    font-weight: 300;
    transition: var(--transition-fast);

    &:focus {
      border-bottom: 4px solid var(--clr-accent-1);
    }
  }

  &__form-text-area {
    resize: vertical;
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

  &__form-error {
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--clr-text-1);
  }

  &__modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__modal-title {
    color: var(--clr-text-1);
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 700;
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
      padding: 2rem;
      flex-direction: column;
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
