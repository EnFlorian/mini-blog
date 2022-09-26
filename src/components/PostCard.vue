<template>
  <section class="post-card">
    <div class="post-card__left-content">
      <img class="post-card__image" :src="post.coverImage.src" :alt="post.coverImage.alt" />
    </div>
    <div class="post-card__right-content">
      <div class="post-card__main-content">
        <router-link :to="`/posts/${post.id}`" class="post-card__title">{{ post.title }}</router-link>
        <p class="post-card__description">{{ shortenText(post.excerpt, 250) }}</p>
      </div>
      <div class="post-card__meta">
        <img class="post-card__author-avatar" :src="post.author.image" alt="author" />
        <span class="post-card__author">{{ post.author.name }}</span>
        <span class="post-card__date">{{ post.date }}</span>
        <span class="post-card__read-time">{{ post.read }} min read</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IPost } from "../types/post";
import { shortenText } from "../utils";

const props = defineProps<{
  post: IPost;
}>();
</script>

<style scoped lang="scss">
.post-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--clr-bg-2);
  box-shadow: var(--box-shadow-1);
  height: 18rem;
  overflow: hidden;

  &__left-content {
    flex: 1;
    width: 100%;
    border-radius: 0.2rem;
    overflow: hidden;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__right-content {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--clr-text-1);
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--clr-text-1);
  }

  &__author-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__author {
    font-weight: 400;
  }

  &__date {
    font-weight: 400;
    font-size: 1rem;
  }

  &__read-time {
    font-weight: 400;
    font-size: 1rem;
  }

  &__description {
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--clr-text-2);
  }

  &__read-more {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--clr-text-0);
    border: 1px solid var(--clr-text-0);
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
}

@media screen and (max-width: 870px) {
  .post-card {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;

    &__left-content {
      width: 100%;
      height: 15rem;
    }

    &__right-content {
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 870px) {
  .post-card {
    &__author-avatar {
      width: 1.5rem;
      height: 1.5rem;
    }

    &__author {
      font-size: 1rem;
    }

    &__date {
      font-size: 0.8rem;
    }

    &__read-time {
      font-size: 0.8rem;
    }

    &__description {
      font-size: 0.9rem;
    }

    &__title {
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: 450px) {
  .post-card {
    &__meta {
      gap: 0.5rem;
    }
    &__author-avatar {
      width: 1.2rem;
      height: 1.2rem;
    }

    &__author {
      font-size: 0.8rem;
    }

    &__date {
      font-size: 0.6rem;
    }

    &__read-time {
      font-size: 0.6rem;
    }

    &__description {
      font-size: 0.8rem;
    }

    &__title {
      font-size: 1rem;
    }
  }
}
</style>
