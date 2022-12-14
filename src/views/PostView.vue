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
        <li class="post__social-icon" v-for="(social, index) in socials" :key="index">
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
  background-color: var(--clr-bg-2);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-1);
  color: var(--clr-text-1);
  margin-bottom: 5rem;
  margin-top: 5rem;
  padding: 1rem;

  &__header {
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__meta {
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
  }

  &__author-avatar {
    border-radius: 50%;
    height: 2rem;
    margin-right: 0.5rem;
    width: 2rem;
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
    border-radius: 0.8rem;
    height: 100%;
    margin-bottom: 3rem;
    object-fit: cover;
    width: 100%;
  }

  &__content {
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 3rem;
  }

  &__footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__category {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--clr-text-1);
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
    background-color: var(--clr-accent-1);
    transition: var(--transition-fast);

    &:hover {
      transform: scale(1.02);
    }
  }

  &__socials {
    display: flex;
    gap: 0.5rem;
  }

  &__social-icon {
    font-size: 2rem;
  }
}

// Media Queries
@media (max-width: 768px) {
  .post {
    margin-bottom: 2rem;
    margin-top: 2rem;

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
      height: 1.5rem;
      width: 1.5rem;
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

    &__socials {
      gap: 0.25rem;
    }

    &__social-icon {
      font-size: 1.5rem;
    }

    &__category {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }
  }
}
</style>
