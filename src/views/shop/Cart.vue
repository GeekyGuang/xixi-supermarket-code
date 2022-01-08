<template>
  <div class="checkout">
    <div class="cart-detail" v-if="showCartDetail">
    <ul class="goods">
      <template v-for="item in productList" :key="item._id">
        <li class="goods_item"  v-if="item.count">
          <div class="img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="info">
            <h2 clas="info_name">{{item.name}}</h2>
            <div class="info_bottom">
              <div class="new_price">&yen;{{item.price}}
              </div>
              <div class="old_price">&yen;{{item.oldPrice}}
              </div>
              <div class="manipulate_button">
                <Icon icon_name="minus" @click="handleChangeCartItemInfo(shopId,item._id,item, -1)"/>
                <span>{{item.count || 0}}</span>
                <Icon icon_name="add" @click="handleChangeCartItemInfo(shopId,item._id,item, 1)"/>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
    </div>
    <div class="basket-wrapper" @click="handleCartIconClick">
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
import { computed, ref } from '@vue/reactivity';
import {useCommonCartEffect} from './commonCartEffect'

const useCartEffect = () => {
      const route = useRoute()
      const shopId = route.params.id
      const store = useStore()
      const cartList = store.state.cartList

      const productList = computed(() => {
        const productList = cartList[`${shopId}`] || []
         return productList
      })

      const count = computed(() => {
        let total = 0
        const productList = cartList[`${shopId}`]
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
        count, total,productList,shopId
      }
}

export default {
    components: { Icon },
    setup(){
      const showCartDetail = ref(false)
      const handleCartIconClick = () => {
        showCartDetail.value = !showCartDetail.value;
      }
      const {count, total,productList,shopId} = useCartEffect()
      const {handleChangeCartItemInfo} = useCommonCartEffect()

      return {
        count,
        total,
        productList,
        handleChangeCartItemInfo,
        shopId,
        handleCartIconClick,
        showCartDetail
      }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.checkout {
  height: 48px;
  box-shadow: 0 -1px 1px #F1F1F1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  position: relative;

  .cart-detail {
    position: absolute;
    left: 0;
    bottom: 48px;
    width: 100%;
    max-height: 50vh;
    box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, .5);
    background: white;
    overflow: scroll;
    &::-webkit-scrollbar {
          display:none
        }
     .goods {
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: scroll;
        &::-webkit-scrollbar {
          display:none
        }

      > .goods_item {
        display: flex;
        padding: 8px 16px;
        // border-bottom: 1px solid #F1F1F1;
        // margin-bottom: 12px;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .manipulate_button {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-left: auto;
            :deep(.add) {
              color: $blue-button-color;
              // background: white;
              > .icon {
                width: 20px;
                height: 20px;
              }
            }

            :deep(.minus) {
              color: #666666;
              > .icon {
                width: 20px;
                height: 20px;
              }
            }


          }


          > h2 {
            line-height: 20px;
            font-size: 14px;

            @extend %ellipsis;
          }

          &_sale {
            line-height: 16px;
            font-size: 12px;
          }

          &_bottom {
            display: flex;
            align-items: center;
            .new_price {
              line-height: 20px;
              font-size: 16px;
              color: $red-highlight-color;
            }

            .old_price {
              line-height: 20px;
              font-size: 12px;
              color: #999999;
              text-decoration: line-through;
              margin-left: 8px;
            }
          }
        }
        .img {
          width: 48px;
          height: 48px;
          margin-right: 16px;
          flex-shrink: 0;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

    }
  }
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
