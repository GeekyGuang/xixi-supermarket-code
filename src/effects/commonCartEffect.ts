import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId = '') => {
  const store = useStore()
  const cartList = store.state.cartList
  const handleChangeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  const productList = computed(() => {
    const productList = cartList[`${shopId}`] || []
    return productList
  })

  const count = computed(() => {
    let total = 0
    const productList = cartList[`${shopId}`]
    if (productList) {
      for (const i in productList) {
        total += productList[i].count
      }
    }
    return total
  })

  const total = computed(() => {
    let total = 0
    const productList = store.state.cartList[`${shopId}`]
    if (productList) {
      for (const i in productList) {
        if (productList[i].checked) {
          total += productList[i].count * productList[i].price
        }
      }
    }
    return total.toFixed(2)
  })

  return {
    store,
    handleChangeCartItemInfo,
    cartList,
    productList,
    count,
    total,
  }
}