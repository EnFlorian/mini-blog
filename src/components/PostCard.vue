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
  background-color: var(--clr-bg-2);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-1);
  display: flex;
  gap: 1rem;
  height: 18rem;
  overflow: hidden;
  padding: 1rem;

  &__left-content {
    border-radius: 0.2rem;
    flex: 1;
    overflow: hidden;
    width: 100%;
  }

  &__image {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &__right-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
    justify-content: space-between;
    width: 100%;
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    color: var(--clr-text-1);
    font-size: 1.4rem;
    font-weight: 400;
  }

  &__meta {
    align-items: center;
    color: var(--clr-text-1);
    display: flex;
    font-size: 1.2rem;
    font-weight: 300;
    gap: 1rem;
  }

  &__author-avatar {
    border-radius: 50%;
    height: 2rem;
    object-fit: cover;
    width: 2rem;
  }

  &__author {
    font-weight: 400;
  }

  &__date {
    font-size: 1rem;
    font-weight: 400;
  }

  &__read-time {
    font-size: 1rem;
    font-weight: 400;
  }

  &__description {
    color: var(--clr-text-2);
    font-size: 1rem;
    font-weight: 400;
  }

  &__read-more {
    border-radius: 0.5rem;
    border: 1px solid var(--clr-text-0);
    color: var(--clr-text-0);
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    width: fit-content;
  }
}

// Media Queries
@media screen and (max-width: 870px) {
  .post-card {
    flex-direction: column;
    gap: 0.5rem;
    height: auto;

    &__left-content {
      height: 15rem;
      width: 100%;
    }

    &__right-content {
      height: auto;
      width: 100%;
    }
  }
}

@media screen and (max-width: 870px) {
  .post-card {
    &__author-avatar {
      height: 1.5rem;
      width: 1.5rem;
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
      height: 1.2rem;
      width: 1.2rem;
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
