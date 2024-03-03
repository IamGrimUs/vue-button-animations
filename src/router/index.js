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
    },
    {
      path: '/texts',
      name: 'texts',
      component: () => import('../views/TextView.vue')
    },
    {
      path: '/socials',
      name: 'socials',
      component: () => import('../views/SocialIconView.vue')
    },
    {
      path: '/backgrounds',
      name: 'backgrounds',
      component: () => import('../views/BackgroundView.vue')
    },
    {
      path: '/clip-masks',
      name: 'clip-masks',
      component: () => import('../views/ClipMasksView.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../views/LoadingView.vue')
    }
  ]
})

export default router
