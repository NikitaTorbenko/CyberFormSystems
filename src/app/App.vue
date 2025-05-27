<script setup lang="ts">
import { ref, computed } from "vue";
import { Queue } from "./utils";

const newItem = ref("");
const queue = new Queue<string>();

const queueItems = computed(() => queue.toArray());

function addItem() {
  if (newItem.value.trim()) {
    queue.enqueue(newItem.value.trim());
    newItem.value = "";
  }
}

function removeItem() {
  queue.dequeue();
}
</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <h1 class="text-xl font-bold mb-4">Очередь</h1>

    <div class="mb-2">
      <input
        v-model="newItem"
        class="border p-2 w-full"
        placeholder="Введите элемент"
      />
    </div>

    <div class="flex gap-2 mb-4">
      <button
        @click="addItem"
        class="bg-green-500 text-white px-4 py-2 rounded"
      >
        Добавить
      </button>
      <button
        @click="removeItem"
        class="bg-red-500 text-white px-4 py-2 rounded"
        :disabled="queue.isEmpty()"
      >
        Удалить
      </button>
    </div>

    <div>
      <h2 class="font-semibold">Текущая очередь:</h2>
      <ul class="list-disc list-inside">
        <li v-for="(item, index) in queueItems" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
