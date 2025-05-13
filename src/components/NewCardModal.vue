<template>
  <div>
    <button @click="showModal = true">+ Añadir tarjeta</button>
    <div v-if="showModal" class="modal">
      <input v-model="title" placeholder="Título de la tarjeta" />
      <textarea v-model="description" placeholder="Descripción"></textarea>
      <button @click="createCard">Crear</button>
      <button @click="showModal = false">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useBoardStore } from '../stores/boardStore';

const props = defineProps({
  listId: {
    type: String,
    required: true
  }
});

const showModal = ref(false);
const title = ref('');
const description = ref('');

const boardStore = useBoardStore();

const createCard = async () => {
  if (!title.value.trim()) return;
  await boardStore.addCardToList(
    boardStore.currentBoard.id,
    props.listId,
    title.value,
    description.value
  );
  title.value = '';
  description.value = '';
  showModal.value = false;
};
</script>

<style scoped>
.modal {
  background: #fff;
  padding: 1rem;
  border: 1px solid #ccc;
  position: absolute;
  z-index: 10;
}
</style>
