import { defineStore } from 'pinia';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

export const useBoardStore = defineStore('board', {
  state: () => ({
    currentBoard: {
      lists: []
    }
  }),
  actions: {
    async fetchBoard() {
      const unsub = onSnapshot(collection(db, 'lists'), (querySnapshot) => {
        this.currentBoard.lists = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          cards: doc.data().cards || []
        }));
      });
      return unsub;
    },
    async addList(title) {
      // Implementar conexión a Firestore
    }
  }
});
