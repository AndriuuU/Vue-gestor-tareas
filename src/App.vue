<template>
  <NavBar />
  <router-view />

</template>

<script setup>
import { useUserStore } from './stores/userStore';
import NavBar from './components/NavBar.vue';
const userStore = useUserStore();
const user = userStore.user;
const logout = userStore.logout;
</script>

<style>

</style>
