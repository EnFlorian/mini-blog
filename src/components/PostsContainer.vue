<template>
  <div class="posts-container">
    <h2 class="posts-container__title">{{ title }}</h2>
    <ul class="posts-container__posts">
      <PostCard v-for="post in renderedPosts" :key="post.id" :post="post" />
    </ul>
    <button
      v-if="pagination && posts.length > renderedPosts.length"
      class="posts-container__pagination-button"
      @click="addMorePosts"
    >
      More
    </button>
  </div>
</template>

<script setup lang="ts">
import {} from "@vue/reactivity";
import { ref } from "vue";
import { IPost } from "../types/post";
import PostCard from "./PostCard.vue";

const props = defineProps<{
  title: string;
  posts: IPost[];
  pagination?: boolean;
  amount?: number;
}>();

let renderedPosts = ref(props.amount ? props.posts.slice(0, props.amount) : props.posts.slice(0, 3));

const addMorePosts = () => {
  if (props.amount) {
    renderedPosts.value = [
      ...renderedPosts.value,
      ...props.posts.slice(renderedPosts.value.length, renderedPosts.value.length + props.amount),
    ];
  } else {
    renderedPosts.value = [
      ...renderedPosts.value,
      ...props.posts.slice(renderedPosts.value.length, renderedPosts.value.length + 3),
    ];
  }
};
</script>

<style scoped lang="scss"></style>
