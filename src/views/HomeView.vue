<template>
  <div v-if="boardStore.currentBoard" class="board">
    <KanbanList
      v-for="list in boardStore.currentBoard.lists || []"
      :key="list.id"
      :list="list"
    />
    <AddListButton />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useBoardStore } from '../stores/boardStore';
import KanbanList from '../components/KanbanList.vue';
import AddListButton from '../components/AddListButton.vue';

const boardStore = useBoardStore();
const boardId = "tu_board_id";

let unsubscribe;

onMounted(() => {
  unsubscribe = boardStore.subscribeToBoard(boardId);
});
onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});
</script>

<style scoped>
.board {
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  padding: 1rem;
}
</style>
