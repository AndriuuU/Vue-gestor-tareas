import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'
import { storeToRefs } from 'pinia'

// Vistas
const HomeView = () => import('../views/HomeView.vue')
const AuthView = () => import('../views/AuthView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
    meta: { public: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Guardia de navegación
router.beforeEach(async (to) => {
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  
  await userStore.init()

  // Redirige a login si la ruta no es pública y no está autenticado
  if (!to.meta.public && !user.value) return '/auth'
  
  // Redirige al home si está autenticado y trata de acceder a auth
  if (to.name === 'auth' && user.value) return '/'
})

export default router
