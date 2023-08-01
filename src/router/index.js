import Main from '@/views/Main';
import CharacterInfo from '@/views/CharacterInfo';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/character/:id',
    name: 'CharacterInfo',
    component: CharacterInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
