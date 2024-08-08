import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import Error from '@/components/Error.vue'
import Success from '@/components/Success.vue'
import Home from '@/views/Home.vue'
import Solicitud from '@/views/Solicitud.vue'

const routes = [
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
    component: Success,
    meta: { requiresCookie: true }
  },
  {
    path: '/checkout/error',
    name: 'error',
    component: Error,
    meta: { requiresCookie: true }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresCookie)) {
    const formData = Cookies.get('formData')
    if (!formData) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
