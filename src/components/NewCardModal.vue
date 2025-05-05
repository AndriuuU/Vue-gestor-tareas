<template>
    <div class="mt-4">
      <button 
        @click="isOpen = true"
        class="w-full text-gray-500 hover:text-gray-700 flex items-center gap-1"
      >
        <PlusIcon class="w-4 h-4" />
        Añadir tarjeta
      </button>
  
      <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg w-96">
          <h3 class="text-lg font-semibold mb-4">Nueva Tarjeta</h3>
          <input 
            v-model="title"
            type="text" 
            placeholder="Título"
            class="w-full p-2 border rounded mb-2"
          >
          <textarea
            v-model="description"
            placeholder="Descripción"
            class="w-full p-2 border rounded mb-4"
          ></textarea>
          <div class="flex justify-end gap-2">
            <button @click="isOpen = false" class="text-gray-500">Cancelar</button>
            <button @click="createCard" class="bg-blue-500 text-white px-4 py-2 rounded">
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { PlusIcon } from '@heroicons/vue/24/outline';
  import { ref } from 'vue';
  import { useBoardStore } from '../stores/boardStore';
  
  const store = useBoardStore();
  const isOpen = ref(false);
  const title = ref('');
  const description = ref('');
  
  const createCard = () => {
    store.addCard({
      listId: props.listId,
      title: title.value,
      description: description.value
    });
    isOpen.value = false;
    title.value = '';
    description.value = '';
  };
  
  defineProps({
    listId: String
  });
  </script>
  