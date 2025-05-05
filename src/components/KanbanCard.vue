<template>
    <div class="bg-gray-50 p-3 rounded shadow-sm hover:shadow transition cursor-pointer">
      <p class="text-gray-800">{{ card.title }}</p>
      <div v-if="card.description" class="mt-2 text-sm text-gray-500">
        {{ card.description }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    card: Object
  });
  </script>
  