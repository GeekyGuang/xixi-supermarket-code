import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/orderList/OrderList.vue'),
  },
  {
    path: '/checkout/:id',
    name: 'Checkout',
    component: () => import('@/views/checkout/CheckOut.vue'),
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('@/views/shop/Shop.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
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
