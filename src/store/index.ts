import { createStore } from 'vuex'

const saveCartListToLocalStorage = (state) => {
  const { cartList } = state
  localStorage.setItem('cartList', JSON.stringify(cartList))
}

const getCartListFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cartList') || '{}')
}

export default createStore({
  state: {
    cartList: getCartListFromLocalStorage(),
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const shopInfo = state.cartList[shopId] || {}
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
      saveCartListToLocalStorage(state)
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.checked = !product.checked
      saveCartListToLocalStorage(state)
    },
    clearCartItems(state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
      saveCartListToLocalStorage(state)
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
      saveCartListToLocalStorage(state)
    },
  },
})
