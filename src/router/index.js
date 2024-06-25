import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
   
    component: () => import( '../views/PostsView.vue')
  },
  {
    path: '/about',
    name: 'about',
   
    component: () => import( '../components/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
   
    component: () => import( '../components/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
