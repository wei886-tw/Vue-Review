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
  },

  {
    path: '/calculator', name: 'Calculator', component: () => import('../views/Calculator.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;