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
      return onSnapshot(boardRef, (docSnap) => {
        this.currentBoard = { id: docSnap.id, ...docSnap.data() };
      });
    },

    // Añadir nueva lista
    async addList(boardId, listTitle) {
      const boardRef = doc(db, 'boards', boardId);
      const lists = Array.isArray(this.currentBoard?.lists) ? this.currentBoard.lists : [];
      await setDoc(boardRef, {
        lists: [
          ...lists,
          {
            id: Date.now().toString(),
            title: listTitle,
            cards: []
          }
        ]
      }, { merge: true });
    },

    // Eliminar lista
    async removeList(boardId, listId) {
      const boardRef = doc(db, 'boards', boardId);
      const lists = Array.isArray(this.currentBoard?.lists) ? this.currentBoard.lists : [];
      const newLists = lists.filter(list => list.id !== listId);
      await updateDoc(boardRef, { lists: newLists });
    },

    // Añadir tarjeta a una lista
    async addCardToList(boardId, listId, cardTitle, cardDescription = "") {
      const boardRef = doc(db, 'boards', boardId);
      const lists = Array.isArray(this.currentBoard?.lists) ? this.currentBoard.lists : [];
      const newLists = lists.map(list => {
        if (list.id === listId) {
          const cards = Array.isArray(list.cards) ? list.cards : [];
          return {
            ...list,
            cards: [
              ...cards,
              {
                id: Date.now().toString(),
                title: cardTitle,
                description: cardDescription
              }
            ]
          };
        }
        return list;
      });
      await updateDoc(boardRef, { lists: newLists });
    },

    // Eliminar tarjeta de una lista
    async removeCardFromList(boardId, listId, cardId) {
      const boardRef = doc(db, 'boards', boardId);
      const lists = Array.isArray(this.currentBoard?.lists) ? this.currentBoard.lists : [];
      const newLists = lists.map(list => {
        if (list.id === listId) {
          return {
            ...list,
            cards: list.cards.filter(card => card.id !== cardId)
          };
        }
        return list;
      });
      await updateDoc(boardRef, { lists: newLists });
    }
  }
});
