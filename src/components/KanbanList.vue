<template>
  <div v-if="list" class="kanban-list">
    <div class="list-header">
      <h3>{{ list.title }}</h3>
      <button @click="removeList" title="Eliminar lista">🗑️</button>
    </div>
    <div class="cards">
      <KanbanCard
        v-for="card in list.cards || []"
        :key="card.id"
        :card="card"
        :listId="list.id"
      />
    </div>
    <NewCardModal :listId="list.id" />
  </div>
</template>

<script setup>
import KanbanCard from './KanbanCard.vue';
import NewCardModal from './NewCardModal.vue';
import { useBoardStore } from '../stores/boardStore';

const props = defineProps({
  list: {
    type: Object,
    required: true
  }
});

const boardStore = useBoardStore();

const removeList = () => {
  boardStore.removeList(boardStore.currentBoard.id, props.list.id);
};
</script>

<style scoped>
.kanban-list {
  background: #f4f5f7;
  border-radius: 6px;
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cards {
  margin-bottom: 1rem;
}
</style>
