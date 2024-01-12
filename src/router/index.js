import { createRouter, createWebHashHistory } from 'vue-router'
import { ClientsList, CreateProduct, CreateClient } from '../views'
const routes = [
  {
    path: '/',
    name: 'create-product',
    component: CreateProduct
  },
  {
    path: '/create',
    name: 'create-client',
    component: CreateClient
  },
  {
    path: '/clients-list',
    name: 'clients-list',
    component: ClientsList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
