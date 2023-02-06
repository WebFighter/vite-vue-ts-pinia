import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeVue from '../views/Home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'index',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeVue,
    meta: {
      title: '首页'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;