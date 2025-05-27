<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchPostById } from "../api";
import { type IPost } from "@/entities/PostCard";

const route = useRoute();
const post = ref<IPost | null>(null);

onMounted(async () => {
  const id = +route.params.id;
  post.value = await fetchPostById(id);
});
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
