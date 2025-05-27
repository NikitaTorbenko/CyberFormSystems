<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  total: number;
  perPage: number;
}>();

const emit = defineEmits(["change"]);

const totalPages = computed(() => Math.ceil(props.total / props.perPage));
</script>

<template>
  <div class="pagination">
    <button
      @click="emit('change', currentPage - 1)"
      :disabled="currentPage === 1"
    >
      Назад
    </button>
    <span>Страница {{ currentPage }} из {{ totalPages }}</span>
    <button
      @click="emit('change', currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Вперед
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 20px 0;
}
</style>
