import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/modules/info/pages/HomePage.vue')
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
    path: '/marsRoverPhotos',
    name: 'marsRoverPhotos',
    component: () => import(/* webpackChunkName: "MarsRoverPhotosPage" */ '@/modules/marsRoverPhotos/pages/MarsRoverPhotosPage.vue')
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
