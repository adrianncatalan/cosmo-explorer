import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/modules/home/pages/HomePage.vue')
  },
  {
    path: '/apod',
    name: 'apod',
    component: () => import(/* webpackChunkName: "ApodPage" */ '@/modules/apod/pages/ApodPage.vue')
  },
  {
    path: '/neows',
    name: 'neows',
    component: () => import(/* webpackChunkName: "NeowsPage" */ '@/modules/neows/pages/NeowsPage.vue')
  },
  {
    path: '/epic',
    name: 'epic',
    component: () => import(/* webpackChunkName: "EpicPage" */ '@/modules/epic/pages/EpicPage.vue')
  },
  {
    name: 'NoPageFound',
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router