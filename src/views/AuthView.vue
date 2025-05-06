<template>
    <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <div class="tabs mb-6">
        <button @click="isLogin = true" :class="{'tab-active': isLogin}">Login</button>
        <button @click="isLogin = false" :class="{'tab-active': !isLogin}">Registro</button>
      </div>
  
      <input v-model="email" type="email" placeholder="Email" class="input mb-4">
      <input v-model="password" type="password" placeholder="Contraseña" class="input mb-4">
      
      <p v-if="errorMsg" class="text-red-500 mb-4">{{ errorMsg }}</p>
      
      <button @click="handleAuth" class="btn-primary">
        {{ isLogin ? 'Iniciar sesión' : 'Registrarse' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { auth } from '../services/firebase';
  import { useRouter } from 'vue-router';
  import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
  } from 'firebase/auth';
  
  const router = useRouter();
  const isLogin = ref(true);
  const email = ref('');
  const password = ref('');
  const errorMsg = ref('');
  
  const handleAuth = async () => {
    try {
      if (isLogin.value) {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } else {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
      }
      router.push('/');
    } catch (error) {
      switch(error.code) {
        case 'auth/email-already-in-use':
          errorMsg.value = 'El email ya está registrado';
          break;
        case 'auth/invalid-email':
          errorMsg.value = 'Email inválido';
          break;
        case 'auth/weak-password':
          errorMsg.value = 'La contraseña debe tener al menos 6 caracteres';
          break;
        default:
          errorMsg.value = 'Error en la autenticación';
      }
    }
  };
  </script>
  