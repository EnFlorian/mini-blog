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
  gap: 5rem;
  padding-bottom: 5rem;
}

// Media Queries
@media screen and (max-width: 768px) {
  .home {
    gap: 2rem;
  }
}
</style>
