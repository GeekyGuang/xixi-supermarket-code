import { createStore } from 'vuex'

interface OrderItem {
  orderId: number
  createDate: Date
  shopName: string
  products: any[]
}

const saveCartListToLocalStorage = (state) => {
  const { cartList } = state
  localStorage.setItem('cartList', JSON.stringify(cartList))
}

const getCartListFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cartList') || '{}')
}

const saveOrderListToLocalStorage = (state) => {
  const { orderList } = state
  localStorage.setItem('orderList', JSON.stringify(orderList))
}

const getOrderListFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('orderList') || '[]')
}

export default createStore({
  state: {
    cartList: getCartListFromLocalStorage(),
    // {1 : {
    //   shopName: '',
    //   products: {
      //   1: {
      //   _id: 1,
      //   name: '',
      //   price: '',
      //   count: ''
      //   },
      //   2: {
      //     _id: 1,
      //     name: '',
      //     price: '',
      //     count: ''
      //   },
      //  }
      // }
      // }
    orderList: getOrderListFromLocalStorage(),
    // [{
    //  orderId: '',
    //  createDate: '',
    //   shopName: '',
    //   products: [
    //     {
    //       name: '',
    //       url: '',
    //       count: '',
    //       price: ''
    //     }
    // }
    // }],
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num, shopName } = payload
      const shopInfo = state.cartList[shopId] || {}
      const products = shopInfo.products || {}
      let product = products[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += num
      products[productId] = product
      if (product.count > 0) {
        product.checked = true
      } else {
        delete products[productId]
      }

      shopInfo.products = products
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      saveCartListToLocalStorage(state)
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const {products} = state.cartList[shopId]
      const product = products[productId]
      product.checked = !product.checked
      saveCartListToLocalStorage(state)
    },
    clearCartItems(state, payload) {
      const { shopId } = payload
      delete state.cartList[shopId]
      saveCartListToLocalStorage(state)
    },
    setCartItemsAllChecked(state, payload) {
      const { shopId, allChecked } = payload
      const {products} = state.cartList[shopId]
      for (const i in products) {
        const product = products[i]
        if (product.count > 0) {
          product.checked = !allChecked
        }
      }
      saveCartListToLocalStorage(state)
    },
    comfirmOrder(state, payload) {
      const { shopId, shopName } = payload
      const orderId = Math.floor(Math.random() * 1000000000)
      const { orderList } = state
      const {products} = state.cartList[shopId]
      const order: OrderItem = {
        orderId,
        createDate: new Date(),
        shopName,
        products: [],
      }
      const checkedKeys: string[] = []
      for (const i in products) {
        const product = products[i]
        if (product.count > 0 && product.checked) {
          checkedKeys.push(i)
        }
      }

      for (const i of checkedKeys) {
        order.products.push(products[i])
        delete products[i]
      }

      orderList.push(order)

      saveOrderListToLocalStorage(state)
    },
  },
})
