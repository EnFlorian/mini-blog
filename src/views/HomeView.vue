<template>
  <div class="home">
    <TheHeroSectionVue />
    <ThePostsSectionVue />
    <TheNewsletterSectionVue />
  </div>
</template>

<script setup lang="ts">
import { TheNewsletterSectionVue, ThePostsSectionVue, TheHeroSectionVue } from "../components";
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  gap: 5rem;
}
</style>
