<template>
  <div class="container-lg">
    <PostsContainer :posts="posts" :pagination="true" :title="(category as string)" />
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "../stores/postsStore";
import { useRoute } from "vue-router";
import PostsContainer from "../components/PostsContainer.vue";

const { category } = useRoute().params;
const postsStore = usePostsStore();

const posts = postsStore.getPostsByCategory(category as string);
</script>

<style scoped lang="scss"></style>
