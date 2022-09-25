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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  &__container {
    background-color: var(--clr-bg-2);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    color: var(--clr-text-0);
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__button {
    background-color: var(--clr-accent-1);
    color: var(--clr-text-0);
    border: none;
    border-radius: 0.2rem;
    padding: 0.4rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition-base);

    &:hover {
      background-color: var(--clr-accent-1);
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
