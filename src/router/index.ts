import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project/:id',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectId.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log('FROM', from.path, 'TO', to.path, 'SAVED', savedPosition)
    if (to.path === '/' && from.path.startsWith('/project')) {
      console.log('in')
      return {
        el: '#projet', behavior: 'smooth'
      }
    }
    else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})






export default router
