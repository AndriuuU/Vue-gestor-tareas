<template>
  <div class="card">
    <div class="card-content">
      <strong>{{ card.title }}</strong>
      <p v-if="card.description">{{ card.description }}</p>
    </div>
    <button @click="removeCard" title="Eliminar tarjeta">🗑️</button>
  </div>
</template>

<script setup>
import { useBoardStore } from '../stores/boardStore';

const props = defineProps({
  card: { type: Object, required: true },
  listId: { type: String, required: true }
});

const boardStore = useBoardStore();

const removeCard = () => {
  boardStore.removeCardFromList(boardStore.currentBoard.id, props.listId, props.card.id);
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-content {
  flex: 1;
}
</style>
