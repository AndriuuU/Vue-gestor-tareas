<template>
  <router-view />
</template>

<script setup>

</script>

<style>
/* Estilos personalizados para KanbanBoard */
.kanban-board {
  @apply min-h-screen bg-gray-100 p-8;
}

/* Estilos personalizados para KanbanList */
.kanban-list {
  @apply bg-white rounded-lg shadow p-4 w-72 min-w-[300px] h-fit;
}

/* Estilos personalizados para KanbanCard */
.kanban-card {
  @apply bg-gray-50 p-3 rounded shadow-sm hover:shadow transition cursor-pointer;
}
</style>
