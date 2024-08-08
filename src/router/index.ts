import Error from '@/components/Error.vue'
import Success from '@/components/Success.vue'
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
    {
      path: '/checkout/success',
      name: 'success',
      component: Success
    },
    {
      path: '/checkout/error',
      name: 'error',
      component: Error
    },
  ]
})

export default router
