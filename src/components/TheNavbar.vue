<template>
  <section class="bg-red-500 h-16 flex items-center sticky top-0 w-full">
    <div class="w-full m-auto max-w-6xl flex justify-between items-center text-white">
      <!-- Logo -->
      <h1 class="text-5xl font-semibold">Mini Blog</h1>
      <!-- Links -->
      <ul class="gap-2 hidden md:flex">
        <li v-for="(link, index) in links" :key="index">
          <a class="text-xl" :href="link.path">{{ link.name }}</a>
        </li>
      </ul>
      <!-- Mobile Menu Button -->
      <button class="md:hidden">
        <svg
          class="w-8 h-8 text-white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from "../mock-api/navigation/data";
</script>
