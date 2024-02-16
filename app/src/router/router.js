import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'info',
    component: () => import(/* webpackChunkName: "InfoPage" */ '@/modules/info/pages/InfoPage.vue')
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
    path: '/donki',
    name: 'donki',
    component: () => import(/* webpackChunkName: "DonkiPage" */ '@/modules/donki/pages/DonkiPage.vue')
  },
  {
    path: '/earth',
    name: 'earth',
    component: () => import(/* webpackChunkName: "EarthPage" */ '@/modules/earth/pages/EarthPage.vue')
  },
  {
    path: '/eonet',
    name: 'eonet',
    component: () => import(/* webpackChunkName: "EonetPage" */ '@/modules/eonet/pages/EonetPage.vue')
  },
  {
    path: '/epic',
    name: 'epic',
    component: () => import(/* webpackChunkName: "EpicPage" */ '@/modules/epic/pages/EpicPage.vue')
  },
  {
    path: '/exoplanet',
    name: 'exoplanet',
    component: () => import(/* webpackChunkName: "ExoplanetPage" */ '@/modules/exoplanet/pages/ExoplanetPage.vue')
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
