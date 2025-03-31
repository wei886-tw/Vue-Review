import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/todoList', name: 'TodoList', component: () => import('../views/TodoList.vue')

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;