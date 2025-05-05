<template>
    <div class="bg-white rounded-lg shadow p-4 w-72 min-w-[300px] h-fit">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-semibold text-lg">{{ list.title }}</h3>
        <button @click="deleteList" class="text-red-500">
          <TrashIcon class="w-5 h-5" />
        </button>
      </div>
      
      <draggable 
        v-model="list.cards"
        group="cards"
        item-key="id"
        class="space-y-2"
      >
        <template #item="{ element }">
          <KanbanCard :card="element" />
        </template>
      </draggable>
  
      <NewCardModal :listId="list.id" />
    </div>
  </template>
  
  <script setup>
  import { TrashIcon } from '@heroicons/vue/24/outline';
  import draggable from 'vuedraggable';
  import KanbanCard from './KanbanCard.vue';
  import NewCardModal from './NewCardModal.vue';
  
  const props = defineProps({
    list: Object
  });
  </script>
  