import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // shopId
      // 1: {
      //   // productId
      //   1: {
      //     _id: 1,
      //     name: '番茄250g/份',
      //     imgUrl: 'https://img1.baidu.com/it/u=544840061,2614948313&fm=26&fmt=auto',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 0,
      //   },
      // },
    },
  },
  mutations: {
    addToCart(state, payload) {
      const { shopId, productInfo } = payload
      const productId = productInfo._id
      if (!state.cartList[shopId]) {
        state.cartList[shopId] = {}
      }
      if (!state.cartList[shopId][productId]) {
        state.cartList[shopId][productId] = productInfo
        state.cartList[shopId][productId].count = 1
      } else {
        state.cartList[shopId][productId].count += 1
      }
    },
  },
  actions: {},
  modules: {},
})
