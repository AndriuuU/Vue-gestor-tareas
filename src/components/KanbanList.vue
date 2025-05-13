<template>
    <div class="kanban-list">
      <h3>{{ list.title }}</h3>
      
      <div class="cards">
        <KanbanCard 
          v-for="card in list.cards"
          :key="card.id"
          :card="card"
        />
      </div>
  
      <NewCardModal :listId="list.id" />
    </div>
  </template>
  
  <script setup>
  import KanbanCard from './KanbanCard.vue';
  import NewCardModal from './NewCardModal.vue';
  
  defineProps({
    list: {
      type: Object,
      required: true
    }
  });
  </script>
  