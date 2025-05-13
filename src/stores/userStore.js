// ✅ Correcto (src/stores/userStore.js)
import { defineStore } from 'pinia';
import { auth } from '../services/firebase';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  
  const init = async () => {
    return new Promise((resolve) => {
      auth.onAuthStateChanged(_user => {
        user.value = _user;
        resolve(_user);
      });
    });
  };

  const logout = async () => {
    await auth.signOut();
    user.value = null;
  };

  return { user, init, logout };
});
