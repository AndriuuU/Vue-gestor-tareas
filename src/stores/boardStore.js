import { defineStore } from 'pinia';
import { db } from '../services/firebase';
import { doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';

export const useBoardStore = defineStore('board', {
  state: () => ({
    currentBoard: null,
  }),
  actions: {
    // Escuchar cambios en el tablero
    subscribeToBoard(boardId) {
      const boardRef = doc(db, 'boards', boardId);
      
      return onSnapshot(boardRef, (doc) => {
        this.currentBoard = { id: doc.id, ...doc.data() };
      });
    },

    // Añadir nueva lista
  
    async addList(boardId, listTitle) {
      const boardRef = doc(db, 'boards', boardId);
      const lists = Array.isArray(this.currentBoard?.lists) ? this.currentBoard.lists : [];

      await setDoc(boardRef, {
        lists: [...lists, { 
          id: Date.now().toString(),
          title: listTitle,
          cards: [] 
        }]
      }, { merge: true }); // ¡Aquí está la clave!
    }

    
  }});
