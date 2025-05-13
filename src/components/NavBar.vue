<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="navbar-brand">Gestor de Tareas</router-link>
    </div>
    <div class="navbar-right">
      <button @click="toggleTheme" class="theme-btn" :title="dark ? 'Modo claro' : 'Modo oscuro'">
        <span v-if="dark">🌙</span>
        <span v-else>☀️</span>
      </button>
      <template v-if="user">
        <span class="user-email">{{ user.email }}</span>
        <button @click="logout" class="btn-logout">Cerrar sesión</button>
      </template>
      <template v-else>
        <button @click="goToAuth" class="btn-login">Login / Registro</button>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useThemeStore } from '../stores/themeStore';

// Usuario
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// Tema
const themeStore = useThemeStore();
const { dark } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;

// Router
const router = useRouter();

const goToAuth = () => {
  router.push('/auth');
};

const logout = async () => {
  await userStore.logout();
  router.push('/auth');
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2d3748;
  color: #fff;
  padding: 1rem 2rem;
}
.navbar-brand {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}
.user-email {
  margin-right: 1rem;
  font-weight: 500;
}
.btn-logout, .btn-login {
  background: #e53e3e;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.btn-login {
  background: #3182ce;
}
.btn-logout:hover, .btn-login:hover {
  opacity: 0.85;
}
.theme-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
