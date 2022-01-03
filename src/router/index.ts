import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '@/views/Shop.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  const loginOrRegister = to.name === 'Login' || to.name === 'Register'
  isLogin || loginOrRegister ? next() : next('/login')
})

export default router
