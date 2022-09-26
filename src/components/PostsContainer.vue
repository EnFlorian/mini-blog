<template>
  <div class="posts-container">
    <h2 class="posts-container__title">{{ title }}</h2>
    <TransitionGroup appear class="posts-container__posts" name="posts" tag="ul">
      <PostCard v-for="post in renderedPosts" :key="post.id" :post="post" />
    </TransitionGroup>
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

<style scoped lang="scss">
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__title {
    width: fit-content;
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    color: var(--clr-text-1);

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

  &__posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__pagination-button {
    background-color: var(--clr-bg-2);
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--clr-text-1);
    cursor: pointer;
    transition: var(--transition-fast);

    &:hover {
      transform: scaleY(1.05);
      color: var(--clr-accent-1);
    }
  }
}

.posts-enter-active,
.posts-leave-active {
  transition: all 0.5s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
