<template>
  <footer class="footer">
    <p class="footer__copyright-message">{{ copyrightMessage }}</p>
  </footer>
</template>

<script setup lang="ts">
const copyrightMessage = `© ${new Date().getFullYear()} Mini Blog`;
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--clr-bg-2);
  color: var(--clr-text-1);
  padding: 1rem 0;
  text-align: center;

  &__copyright-message {
    font-size: 0.9rem;
  }
}
</style>
