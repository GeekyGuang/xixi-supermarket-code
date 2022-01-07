<template>
  <div class="cart">
    <div class="basket-wrapper">
       <Icon icon_name="basket" />
       <div class="notice">{{count}}</div>
    </div>
    <div class="total">
      <span>合计:</span>
      <span>&yen; {{total}}</span>
    </div>
    <div class="checkout-button">
      去结算
    </div>

  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const useCartEffect = () => {
      const route = useRoute()
      const shopId = route.params.id
      const store = useStore()
      const count = computed(() => {
        let total = 0
        const productList = store.state.cartList[`${shopId}`]
        if(productList){
           for (const i in productList) {
             total += productList[i].count
           }
        }
        return total

      })

      const total = computed(() => {
        let total = 0
        const productList = store.state.cartList[`${shopId}`]
        if(productList){
           for (const i in productList) {
             total += (productList[i].count * productList[i].price)
           }
        }
        return total.toFixed(2)
      })
      return {
        count, total
      }
}

export default {
    components: { Icon },
    setup(){
      const {count, total} = useCartEffect()

      return {
        count,
        total
      }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.cart {
  height: 48px;
  box-shadow: 0 -1px 1px #F1F1F1;
  display: flex;
  align-items: center;

  > .checkout-button {
    line-height: 20px;
    font-size: 14px;
    color: white;
    background: #4FB0F9;
    padding: 14px 28px;
    margin-left: auto;
    cursor: pointer;
  }

  > .total {
    display: flex;
    align-items: center;
    span:nth-of-type(1) {
      font-size: 12px;
      margin-right: 5px;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: #E93B3B;
    }
  }


  > .basket-wrapper {
    position: relative;
    margin-left: 24px;
    margin-right: 32px;
    .notice {
      min-width: 20px;
      height: 20px;
      line-height: 20px;
      background: #E93B3B;
      color: white;
      font-size: 16px;
      border-radius: 10px;
      text-align: center;
      transform: scale(.5);
      transform-origin: left center;
      position: absolute;
      padding: 0 5px;
      left: 20px;
      top: -8px;
    }
    :deep(.basket) > .icon {
      width: 28px;
      height: 28px;
    }
  }



}
</style>
