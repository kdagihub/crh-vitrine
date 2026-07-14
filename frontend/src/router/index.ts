import { createRouter, createWebHistory } from 'vue-router'

import PublicLayout from '@/layouts/PublicLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: 'la-region', name: 'region', component: () => import('@/views/RegionView.vue') },
        { path: 'agenda', name: 'agenda', component: () => import('@/views/AgendaView.vue') },
        { path: 'actions-publiques', name: 'policy', component: () => import('@/views/PolicyView.vue') },
        { path: 'mediatheque', name: 'media', component: () => import('@/views/MediaView.vue') },
        { path: 'equipe', name: 'team', component: () => import('@/views/TeamView.vue') },
      ],
    },
  ],
})

export default router
