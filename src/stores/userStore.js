import { defineStore } from 'pinia';
import { ref } from 'vue';
import { auth } from '../services/firebase';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  
  const init = () => {
    auth.onAuthStateChanged(_user => {
      user.value = _user;
    });
  };

  const logout = async () => {
    await auth.signOut();
    user.value = null;
  };

  return { user, init, logout };
});
