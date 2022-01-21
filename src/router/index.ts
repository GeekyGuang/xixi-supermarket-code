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
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cartList/CartList.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue'),
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
    path: '/pending',
    name: 'Pending',
    component: () => import('@/views/PendingPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = JSON.parse(localStorage.getItem('isLogin') || '')
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    beforeEnter: (to, from, next) => {
      const isLogin = JSON.parse(localStorage.getItem('isLogin') || '')
      isLogin ? next({ name: 'Home' }) : next()
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin') || '')
  const loginOrRegister = to.name === 'Login' || to.name === 'Register'
  isLogin || loginOrRegister ? next() : next('/login')
})

export default router
