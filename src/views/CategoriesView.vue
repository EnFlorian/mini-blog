<template>
  <!-- render card with catgory name and number -->
  <div class="categories">
    <h1>Categories</h1>
    <ul class="categories__cards">
      <li v-for="(category, index) in Object.entries(categories)" :key="index" class="categories__card">
        <router-link :to="{ name: 'category', params: { categoryId: category[0].toLowerCase() } }">
          <h2 class="categories__card-title">{{ category[0] }}</h2>
          <h2 class="categories__card-title">{{ category[0] }}</h2>
          <p class="categories__card-description">{{ category[1] }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { fetchPosts } from "../mock-api/posts/api";

const posts = fetchPosts();

const categories = posts.reduce((acc, post) => {
  const category = post.category;
  if (acc[category]) {
    acc[category] += 1;
  } else {
    acc[category] = 1;
  }
  return acc;
}, {} as Record<string, number>);
</script>

<style scoped lang="scss">
.categories {
  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__card {
    background-color: var(--clr-bg-2);
    border-radius: var(--border-radius-base);
    padding: 1rem;
    width: 100%;
  }

  &__card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &__card-description {
    font-size: 1.2rem;
  }
}
</style>
