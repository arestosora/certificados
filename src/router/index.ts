import Home from '@/views/Home.vue'
import Solicitud from '@/views/Solicitud.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/solicitud',
      name: 'solicitud',
      component: Solicitud
    },
  ]
})

export default router
