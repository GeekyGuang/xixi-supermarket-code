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
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
  },
  actions: {},
  modules: {},
})
