import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('../views/ImageView.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardView.vue')
    }
  ]
})

export default router
