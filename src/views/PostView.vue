<template>
  <section class="post container-lg" v-if="post">
    <header class="post__header">
      <h1 class="post__title">{{ post.title }}</h1>
      <div class="post__meta">
        <img class="post__author-avatar" :src="post.author.image" alt="author" />
        <span class="post__author">{{ post.author.name }}</span>
        <span class="post__date">{{ post.date }}</span>
        <span class="post__read-time">{{ post.read }} min read</span>
      </div>

      <img class="post__image" :src="post.coverImage.src" :alt="post.coverImage.alt" />
    </header>
    <div class="post__content markdown" v-html="markdownToHtml" />
    <footer class="post__footer">
      <router-link :to="`/categories/${post.category}`" class="post__category">{{
        post.category.toLowerCase()
      }}</router-link>
      <ul class="post__socials">
        <li v-for="(social, index) in socials" :key="index">
          <a :href="social.path" target="_blank" rel="noopener noreferrer">
            <fa :icon="social.icon" />
          </a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { marked } from "marked";
import { useRoute } from "vue-router";
import { socials } from "../mock-api/socials/data";
import { usePostsStore } from "../stores/postsStore";

const { postId } = useRoute().params;
const postsStore = usePostsStore();

const post = postsStore.getPostById(postId as string);

const markdownToHtml = computed(() => {
  return marked.parse(post?.content || "");
});
</script>

<style scoped lang="scss">
.post {
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: var(--clr-bg-2);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--clr-text-1);
  box-shadow: var(--box-shadow-1);

  &__header {
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__meta {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  &__author-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  &__author {
    font-size: 0.875rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  &__date {
    font-size: 0.875rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  &__read-time {
    font-size: 0.875rem;
    font-weight: 700;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
    margin-bottom: 3rem;
  }

  &__content {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 3rem;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__category {
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--clr-accent-1);
    background-color: var(--clr-accent-2);
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
  }

  &__socials {
    display: flex;
    gap: 1rem;
  }

  &__socials-item {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .post {
    margin-top: 2rem;
    margin-bottom: 2rem;

    &__title {
      font-size: 2rem;
    }
  }
}

@media (max-width: 400px) {
  .post {
    padding: 0.5rem;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    &__meta {
      margin-bottom: 0.5rem;
    }

    &__author-avatar {
      width: 1.5rem;
      height: 1.5rem;
    }

    &__author {
      font-size: 0.75rem;
    }

    &__date {
      font-size: 0.75rem;
      font-weight: 300;
    }

    &__read-time {
      font-size: 0.75rem;
      font-weight: 300;
    }

    &__image {
      margin-bottom: 2rem;
    }
  }
}
</style>
