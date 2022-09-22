<template>
  <footer class="bg-red-500 h-14 flex items-center justify-center">
    <p class="text-center text-gray-100 text-xl">{{ copyrightMessage }}</p>
  </footer>
</template>

<script setup lang="ts">
const copyrightMessage = `© ${new Date().getFullYear()} Mini Blog`;
</script>
