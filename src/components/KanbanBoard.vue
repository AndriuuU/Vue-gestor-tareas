<template>
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="flex gap-4 overflow-x-auto pb-4">
        <KanbanList
          v-for="list in store.currentBoard.lists"
          :key="list.id"
          :list="list"
        />
        <button
          @click="addNewList"
          class="h-fit bg-white/50 hover:bg-white rounded-lg p-4 w-72 min-w-[300px] transition-all"
        >
          + Añadir lista
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import KanbanList from './KanbanList.vue';
  import { useBoardStore } from '../stores/boardStore';
  
  const store = useBoardStore();
  store.fetchBoard();
  
  const addNewList = () => {
    store.addList('Nueva lista');
  };
  </script>
  