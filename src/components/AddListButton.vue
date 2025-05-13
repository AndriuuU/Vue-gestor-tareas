<template>
    <button @click="showInput = true" v-if="!showInput" class="add-list-btn">
      + Añadir lista
    </button>
    
    <div v-else class="add-list-input">
      <input 
        v-model="listTitle"
        placeholder="Nombre de la lista"
        @keyup.enter="handleAddList"
        ref="input"
      />
      <button @click="handleAddList">Añadir</button>
    </div>
  </template>
  
  <script setup>
  import { ref, nextTick } from 'vue';
  import { useBoardStore } from '../stores/boardStore';
  
  const boardStore = useBoardStore();
  const listTitle = ref('');
  const showInput = ref(false);
  
  const handleAddList = async () => {
    if (!listTitle.value.trim()) return;
    
    await boardStore.addList(boardStore.currentBoard.id, listTitle.value.trim());
    listTitle.value = '';
    showInput.value = false;
  };
  
  // Autofocus al input
  nextTick(() => {
    if (showInput.value) {
      input.value.focus();
    }
  });
  </script>
  
  <style scoped>
  .add-list-btn {
    background: #ebecf0;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    min-width: 250px;
  }
  
  .add-list-input {
    background: #ebecf0;
    padding: 10px;
    border-radius: 4px;
    min-width: 250px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
  }
  </style>
  