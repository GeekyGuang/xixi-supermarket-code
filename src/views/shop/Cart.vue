<template>
  <div class="checkout">
    <div class="mask" v-if="showCartDetail && count > 0" @click="handleCartIconClick"></div>
    <div class="cart-detail" v-if="showCartDetail && count > 0">
    <div class="cart-header" v-if="count > 0">
      <div class="checkAll" @click="setCartItemsAllChecked(shopId, allChecked)">
          <div class="check-button">
            <Icon :icon_name="allChecked ? 'checked':'check-circle' " />
          </div>
          <span v-if="allChecked">取消</span>
          <span v-else>全选</span>
      </div>
      <div class="clear" @click="clearCartItems(shopId)">清空购物车</div>
    </div>
    <ul class="goods">
      <template v-for="item in productList" :key="item._id">
        <li class="goods_item"  v-if="item.count">
          <div class="check-button" @click="changeCartItemChecked(shopId, item._id)">
            <Icon :icon_name="item.checked ? 'checked':'check-circle' " />
          </div>
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
    <div class="bottom-wrapper">
      <div class="basket-wrapper" @click="handleCartIconClick">
        <Icon icon_name="basket" />
        <div class="notice" v-if="count > 0">{{count}}</div>
      </div>
      <div class="total" v-if="count > 0">
        <span>合计:</span>
        <span>&yen; {{total}}</span>
      </div>
      <div class="total" v-else>
        <span>购物车是空的</span>
      </div>
      <div class="checkout-button" @click="handleCheckoutButtonClick" v-show="checkedCount">
          去结算
      </div>
    </div>

    <Toast :showToast="show" :message="message"/>
  </div>
</template>

<script lang="ts" setup>
import Icon from "@/components/Icon.vue";
import { useRoute,useRouter } from 'vue-router';
import { computed, ref } from '@vue/reactivity';
import {useCommonCartEffect} from '@/effects/commonCartEffect'
import Toast, { useToastEffect } from "@/components/Toast.vue";

const {message, show, showToast} = useToastEffect()

const props = defineProps({
  shopName: String
})

const useCartEffect = () => {
      const route = useRoute()
      const shopId = route.params.id as string

      const {store, productList, handleChangeCartItemInfo, count, total, checkedCount} = useCommonCartEffect(shopId)

      const changeCartItemChecked = (shopId, productId) => {
        store.commit('changeCartItemChecked', {shopId, productId})
      }

      const showCartDetail = ref(false)
      const handleCartIconClick = () => {
        if(count.value > 0){
          showCartDetail.value = !showCartDetail.value;
        } else {
          showCartDetail.value = false
        }

      }

      const clearCartItems = (shopId) => {
        store.commit('clearCartItems', {shopId})
        showCartDetail.value = false
      }

      const allChecked = computed(() => {
        let result = true
        const productList = store.state.cartList[`${shopId}`]
        if(productList){
           for (const i in productList) {
             if(productList[i].count > 0 && !productList[i].checked){
                result = false
             }
           }
        }

        return result
      })

      const setCartItemsAllChecked = (shopId, allChecked) => {
        store.commit('setCartItemsAllChecked', {shopId, allChecked})
      }

      return {
        count, total,productList,shopId,changeCartItemChecked,clearCartItems,
        allChecked,setCartItemsAllChecked,handleCartIconClick,showCartDetail,handleChangeCartItemInfo,checkedCount
      }
}



  const {count, total,productList,shopId,changeCartItemChecked,clearCartItems,
      allChecked,setCartItemsAllChecked,handleCartIconClick,
    showCartDetail,handleChangeCartItemInfo, checkedCount} = useCartEffect()

  const router = useRouter()

  const handleCheckoutButtonClick = () => {
    if (count.value === 0) {
      console.log('cart is empty')
      showToast('还没挑选商品哦！')
      return
    }

    router.push({name: 'Checkout', params: {id: shopId}, query: {shopName:props.shopName}})
  }

</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.checkout {

  .mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: $dark-background;
    z-index: 1;
  }
  .cart-detail {
    position: absolute;
    left: 0;
    bottom: 48px;
    width: 100%;
    max-height: 50vh;
    box-shadow: inset 0 -1px 1px -1px $dark-background;
    background: white;
    overflow: scroll;
    z-index: 2;
    &::-webkit-scrollbar {
          display:none
        }

    .cart-header {
      display: flex;
      padding: 0 16px;
      font-size: 14px;
      line-height: 16px;
      align-items: center;
      height: 54px;
      border-bottom: 1px solid  #F1F1F1;
      .checkAll {
        display: flex;
        align-items: center;

        span{
          margin-left: -10px;
        }
      }

      .clear {
        margin-left: auto;
        cursor: pointer;
      }
    }

    .check-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding:0 18px 0 2px;

      :deep(.icon) {
        width: 23px;
        height: 23px;
      }

      :deep(.check-circle) {
        color: $grey-icon-color;
      }
      :deep(.checked) {
        color: $blue-button-color;
      }
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
              color: $grey-icon-color;
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

  > .bottom-wrapper {
  height: 48px;
  box-shadow: 0 -1px 1px #F1F1F1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  position: relative;
  background: white;
  > .checkout-button {
    line-height: 20px;
    font-size: 14px;
    color: white;
    background: $light-blue;
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
      color: $red-highlight-color;
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
      background: $red-highlight-color;
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




}
</style>
