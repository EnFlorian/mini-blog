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
    <div class="post__content" v-html="markdownToHtml" />
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

<style scoped lang="scss"></style>
