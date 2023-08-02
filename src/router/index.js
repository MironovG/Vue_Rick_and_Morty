import Main from '@/views/Main';
import CharacterInfo from '@/views/CharacterInfo';
import Episodes from '@/views/Episodes';
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
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
