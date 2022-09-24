<template>
  <section class="post-card">
    <div class="post-card__left-content">
      <img class="post-card__image" :src="post.coverImage.src" :alt="post.coverImage.alt" />
    </div>
    <div class="post-card__right-content">
      <router-link :to="`/posts/${post.id}`" class="post-card__title">{{ post.title }}</router-link>
      <div class="post-card__meta">
        <img class="post-card__author-avatar" :src="post.author.image" alt="author" />
        <span class="post-card__author">{{ post.author.name }}</span>
        <span class="post-card__date">{{ post.date }}</span>
        <span class="post-card__read-time">{{ post.read }} min read</span>
      </div>
      <p class="post-card__description">{{ post.excerpt }}</p>
      <router-link :to="`/posts/${post.id}`" class="post-card__read-more">Read more</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IPost } from "../types/post";

const props = defineProps<{
  post: IPost;
}>();
</script>
