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
  align-items: center;
  color: var(--clr-text-0);
  display: flex;
  flex-direction: column;
  padding: 5rem 0;

  &__title {
    align-self: flex-start;
    color: var(--clr-text-1);
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    position: relative;

    &::before {
      background-color: var(--clr-accent-1);
      bottom: -0.5rem;
      content: "";
      display: block;
      height: 0.3rem;
      left: 0;
      margin-top: 0.5rem;
      position: absolute;
      width: 100%;
    }
  }

  &__cards {
    display: grid;
    flex-wrap: wrap;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
  }

  &__card {
    background-color: var(--clr-bg-2);
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    transition: var(--transition-base);
    width: 100%;

    &:hover {
      transform: scale(1.02);
    }
  }

  &__card-link {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  &__card-title {
    color: var(--clr-text-1);
    font-size: 1.3rem;
  }

  &__card-description {
    color: var(--clr-text-2);
    font-size: 1.1rem;
  }
}

// Media Queries
@media screen and (max-width: 768px) {
  .categories {
    padding: 2rem 0;
  }
}
</style>
