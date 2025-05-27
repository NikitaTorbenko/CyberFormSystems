<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { PostCard, type IPost } from "@/entities/PostCard";
import { Pagination } from "@/shared/ui/Pagination";
import { SearchPosts } from "@/features/SearchPosts";
import { useRouter } from "vue-router";
import { fetchPosts } from "../api";

const posts = ref<IPost[]>([]);
const search = ref("");
const page = ref(1);

onMounted(async () => {
  posts.value = await fetchPosts();
});

const filteredPosts = computed(() => {
  const query = search.value.trim().toLowerCase();
  if (!query) return posts.value;

  return posts.value.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
  );
});

const paginatedPosts = computed(() => {
  const start = (page.value - 1) * 10;
  return filteredPosts.value.slice(start, start + 10);
});

const router = useRouter();
const goToPost = (id: number) => router.push(`/post/${id}`);
</script>

<template>
  <div v-if="posts.length">
    <SearchPosts v-model="search" />
    <PostCard
      v-for="post in paginatedPosts"
      :key="post.id"
      :post="post"
      @click="goToPost(post.id)"
    />
    <Pagination
      :current-page="page"
      :total="filteredPosts.length"
      :per-page="10"
      @change="page = $event"
    />
  </div>
</template>
