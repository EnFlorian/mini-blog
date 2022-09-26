<template>
  <div class="categories container-lg">
    <h1 class="categories__title">Categories</h1>
    <ul class="categories__cards">
      <li v-for="(category, index) in Object.entries(categories)" :key="index" class="categories__card">
        <router-link class="categories__card-link" :to="`/categories/${category[0]}`">
          <h2 class="categories__card-title">{{ category[0] }}</h2>
          <p class="categories__card-description">
            {{ `${category[1]} ${category[1] > 1 ? "Posts" : "Post"}` }}
          </p></router-link
        >
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
  padding: 5rem 0;
  color: var(--clr-text-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    position: relative;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--clr-text-1);
    align-self: flex-start;

    &::before {
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      content: "";
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: var(--clr-accent-1);
      margin-top: 0.5rem;
    }
  }

  &__cards {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__card {
    display: flex;
    background-color: var(--clr-bg-2);
    border-radius: 0.2rem;
    width: 100%;
    cursor: pointer;
  }

  &__card-link {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--clr-text-1);
  }

  &__card-description {
    font-size: 1.2rem;
    color: var(--clr-text-2);
  }
}
</style>
