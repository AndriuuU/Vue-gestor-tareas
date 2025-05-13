<template>
    <div v-if="boardStore.currentBoard">
      <div class="board">
        <KanbanList 
          v-for="list in boardStore.currentBoard.lists"
          :key="list.id"
          :list="list"
        />
        <AddListButton />
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useBoardStore } from '../stores/boardStore';
  import KanbanList from '../components/KanbanList.vue';
  import AddListButton from '../components/AddListButton.vue';
  
  const boardStore = useBoardStore();
  
  // Ejemplo: ID del tablero hardcodeado (luego puedes pasarlo por URL)
  const boardId = "tu_board_id"; 
  
  onMounted(() => {
    const unsubscribe = boardStore.subscribeToBoard(boardId);
    onUnmounted(unsubscribe);
  });
  </script>
  