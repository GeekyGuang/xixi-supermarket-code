import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
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
