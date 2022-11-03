import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Relatorios from '../views/Relatorios.vue'
import Tarefas from '../views/Tarefas.vue'
import Configuracoes from '../views/configuracoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: Tarefas
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: Relatorios
    },
    {
      path: '/configuracoes',
      name: 'configuracoes',
      component: Configuracoes
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
