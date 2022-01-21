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
                  <Icon icon_name="minus" @click="handleChangeCartItemInfo(shopId,item._id,item, -1, shopName)"/>
                  <span>{{item.count || 0}}</span>
                  <Icon icon_name="add" @click="handleChangeCartItemInfo(shopId,item._id,item, 1, shopName)"/>
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
        const productList = store.state.cartList[`${shopId}`]?.products
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
      showToast('还没挑选商品哦！')
      return
    }

    router.push({name: 'Checkout', params: {id: shopId}, query: {shopName:props.shopName}})
  }

</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.checkout {
  position: relative;

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
    bottom: 0.48rem;
    width: 100%;
    max-height: 50vh;
    box-shadow: inset 0 -0.01rem 0.01rem -0.01rem $dark-background;
    background: white;
    overflow: scroll;
    z-index: 2;
    &::-webkit-scrollbar {
          display:none
        }

    .cart-header {
      display: flex;
      padding: 0 0.16rem;
      font-size: 0.14rem;
      line-height: 0.16rem;
      align-items: center;
      height: 0.54rem;
      border-bottom: 0.01rem solid  #F1F1F1;
      width: 100%;
      position: sticky;
      top: 0;
      left: 0;
      background: white;
      .checkAll {
        display: flex;
        align-items: center;
        cursor: pointer;

        span{
          margin-left: -0.1rem;
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
      padding:0 0.18rem 0 0.02rem;

      :deep(.icon) {
        width: 0.23rem;
        height: 0.23rem;
        cursor: pointer;
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
        padding: 0.08rem 0.16rem;
        // border-bottom: 0.01rem solid #F1F1F1;
        // margin-bottom: 0.12rem;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 0.48rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .manipulate_button {
            display: flex;
            gap: 0.1rem;
            align-items: center;
            margin-left: auto;
            :deep(.add) {
              color: $blue-button-color;
              cursor: pointer;
              // background: white;
              > .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }

            :deep(.minus) {
              color: $grey-icon-color;
              cursor: pointer;
              > .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }


          }


          > h2 {
            line-height: 0.2rem;
            font-size: 0.14rem;

            @extend %ellipsis;
          }

          &_sale {
            line-height: 0.16rem;
            font-size: 0.12rem;
          }

          &_bottom {
            display: flex;
            align-items: center;
            .new_price {
              line-height: 0.2rem;
              font-size: 0.16rem;
              color: $red-highlight-color;
            }

            .old_price {
              line-height: 0.2rem;
              font-size: 0.12rem;
              color: #999999;
              text-decoration: line-through;
              margin-left: 0.08rem;
            }
          }
        }
        .img {
          width: 0.48rem;
          height: 0.48rem;
          margin-right: 0.16rem;
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
  height: 0.48rem;
  box-shadow: 0 -0.01rem 0.01rem #F1F1F1;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  position: relative;
  background: white;
  > .checkout-button {
    line-height: 0.2rem;
    font-size: 0.14rem;
    color: white;
    background: $light-blue;
    padding: 0.14rem 0.28rem;
    margin-left: auto;
    cursor: pointer;
  }

  > .total {
    display: flex;
    align-items: center;
    span:nth-of-type(1) {
      font-size: 0.12rem;
      margin-right: 0.05rem;
    }
    span:nth-of-type(2) {
      font-size: 0.18rem;
      color: $red-highlight-color;
    }
  }


  > .basket-wrapper {
    position: relative;
    margin-left: 0.24rem;
    margin-right: 0.32rem;
    cursor: pointer;
    .notice {
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background: $red-highlight-color;
      color: white;
      font-size: 0.16rem;
      border-radius: 0.1rem;
      text-align: center;
      transform: scale(.5);
      transform-origin: left center;
      position: absolute;
      padding: 0 0.05rem;
      left: 0.2rem;
      top: -0.08rem;
    }
    :deep(.basket) > .icon {
      width: 0.28rem;
      height: 0.28rem;
    }
  }
  }




}
</style>
