import { defineStore } from 'pinia';

export const useBoardStore = defineStore('board', {
  state: () => ({
    boards: [],
    currentBoard: {
      id: 1,
      name: 'Proyecto Principal',
      lists: [
        { id: 1, title: 'Pendiente', cards: [] },
        { id: 2, title: 'En Progreso', cards: [] },
        { id: 3, title: 'Completado', cards: [] }
      ]
    }
  }),
  actions: {
    addList(title) {
      this.currentBoard.lists.push({
        id: Date.now(),
        title,
        cards: []
      });
    }
  }
});
