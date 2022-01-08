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
      if (product.count > 0) {
        product.checked = true
      }
      if (product.count < 0) {
        product.count = 0
        product.checked = false
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.checked = !product.checked
    },
    clearCartItems(state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    setCartItemsAllChecked(state, payload) {
      const { shopId, allChecked } = payload
      const products = state.cartList[shopId]
      for (const i in products) {
        const product = products[i]
        if (product.count > 0) {
          product.checked = !allChecked
        }
      }
    },
  },
  actions: {},
  modules: {},
})
