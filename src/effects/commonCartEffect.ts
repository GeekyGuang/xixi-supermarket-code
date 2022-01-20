import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId = '') => {
  const store = useStore()
  const { cartList } = store.state

  const handleChangeCartItemInfo = (shopId, productId, productInfo, num, shopName) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num, shopName })
  }

  const productList = computed(() => {
    const productList = cartList[`${shopId}`]?.products || {}
    return productList
  })

  const checkedProducts = computed(() => {
    const productList = cartList[`${shopId}`]?.products
    const result = {}
    if (productList) {
      for (const i in productList) {
        if (productList[i].checked) result[i] = productList[i]
      }
    }
    return result
  })

  const checkedCount = computed(() => {
    let total = 0
    const productList = cartList[`${shopId}`]?.products
    if (productList) {
      for (const i in productList) {
        if (productList[i].checked) total += productList[i].count
      }
    }
    return total
  })

  const count = computed(() => {
    let total = 0
    const productList = cartList[`${shopId}`]?.products
    if (productList) {
      for (const i in productList) {
        total += productList[i].count
      }
    }
    return total
  })

  const total = computed(() => {
    let total = 0
    const productList = cartList[`${shopId}`]?.products
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
    checkedProducts,
    checkedCount,
  }
}
