import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CommandsView from '../views/CommandsView.vue';
import SoundsView from '../views/SoundsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/commands',
      name: 'commands',
      component: CommandsView
    },
    {
      path: '/sounds',
      name: 'sounds',
      component: SoundsView
    },
  ]
})

export default router
