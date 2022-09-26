<template>
  <Transition name="fade">
    <section v-if="show" class="notification-modal" @click.prevent.self="closeModal">
      <div class="notification-modal__container">
        <slot></slot>
        <footer class="notification-modal__footer">
          <button class="notification-modal__button" @click="closeModal">Close</button>
        </footer>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean;
  closeModal: () => void;
}>();
</script>

<style scoped lang="scss">
.notification-modal {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  &__container {
    background-color: var(--clr-bg-2);
    border-radius: 0.5rem;
    color: var(--clr-text-0);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    left: 50%;
    padding: 1.5rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__button {
    background-color: var(--clr-accent-1);
    border-radius: 0.2rem;
    border: none;
    color: var(--clr-text-1);
    cursor: pointer;
    font-size: 1.1rem;
    padding: 0.4rem 1.5rem;
    transition: var(--transition-base);

    &:hover {
      transform: scale(1.02);
    }
  }
}

// Media Queries
@media screen and (max-width: 768px) {
  .notification-modal {
    &__container {
      width: 90%;
    }

    &__button {
      width: 100%;
    }
  }
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
