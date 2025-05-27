<script setup lang="ts">
import type { IPost } from "../types";
defineProps<{ post: IPost }>();
defineEmits(["click"]);
</script>

<template>
  <div class="post-card" @click="$emit('click')">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<style scoped lang="scss">
.post-card {
  border: 1px solid #ddd;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
