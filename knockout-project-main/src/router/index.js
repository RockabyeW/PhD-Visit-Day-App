import { createRouter, createWebHistory } from 'vue-router'
import ExplorationDetail from '../views/ExplorationDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/explore/:type/:place',
      name: 'ExplorationDetail',
      component: ExplorationDetail,
    },

    {
      path:'/navigation/:event',
      name:'navigation',
      component: Navigation,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('@/views/ScheduleView.vue')
    },
    {
      path: '/reimbursement',
      name: 'reimbursement',
      component: () => import('@/views/Reimbursement.vue')
    },
    {
      path: '/networking',
      name: 'networking',
      component: () => import('@/views/Networking.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/question/:q_num',
      name: 'question-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Questionview.vue')
    },

  ]
})


export default router
