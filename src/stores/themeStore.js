import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const dark = ref(false);

  function toggleTheme() {
    dark.value = !dark.value;
    if (dark.value) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      dark.value = true;
      document.body.classList.add('dark-mode');
    } else {
      dark.value = false;
      document.body.classList.remove('dark-mode');
    }
  }

  return { dark, toggleTheme, initTheme };
});
