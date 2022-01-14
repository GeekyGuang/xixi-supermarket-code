<template>
<div class="wrapper">
  <div class="content-wrapper">
 <div class="top">
   <div class="header">
     <Icon icon_name="left" @click="handleBackClick"/>
     <div class="title">确认订单</div>
     <div class="space-block"></div>
   </div>
   <div class="address-wrapper">
     <div class="address">
       <h2>收货地址</h2>
       <p>北京理工大学国防科技园2号楼10层</p>
       <p><span>瑶妹 (先生)</span><span>18911024266</span></p>
     </div>
     <Icon icon_name="left" />
   </div>
 </div>
 <div class="cart-content">
   <h2 class="title">{{shopName}}</h2>
    <ul class="goods">
      <template v-for="item in products" :key="item._id">
        <li class="goods_item"  v-if="item.count">
          <div class="img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="info">
            <h2 clas="info_name">{{item.name}}</h2>
            <div class="info_bottom">
              <div class="new_price">&yen;{{item.price}} × {{item.count}}
              </div>
              <div class="total_price">&yen;{{(item.price * item.count).toFixed(2)}}
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <div class="bottom-down" @click="toggleShowAllProducts">
      <span>总计 {{count}} 件</span>
      <Icon icon_name="arrow-down" :class="{down: pulldown}" />
    </div>
  </div>

 </div>
 <div class="order-commit">

 </div>
</div>


</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useBackRouterEffect } from '@/lib/helper'
import { useCommonCartEffect } from '@/effects/commonCartEffect'
import { ref } from 'vue'
const route = useRoute()
const shopId = route.params.id as string
const shopName = route.query.shopName
const handleBackClick = useBackRouterEffect()
const {productList,count, total} = useCommonCartEffect(shopId)

const keys = Object.keys(productList.value)
const products = ref<any>({})
if (keys.length > 2) {
  const subkeys = keys.slice(0, 2)
  for(const i of subkeys) {
    products.value[i] = productList.value[i]
  }
} else {
  products.value = productList.value
}
const pulldown = ref(false)
const toggleShowAllProducts = () => {
  pulldown.value = !pulldown.value

  if (pulldown.value) {
    products.value = productList.value
  } else {
    if (keys.length > 2) {
      products.value = {}
      const subkeys = keys.slice(0, 2)
      for(const i of subkeys) {
        products.value[i] = productList.value[i]
      }
    }
  }
}


</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.wrapper {
  height: 100vh;
  background: #f8f8f8;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content-wrapper {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display:none
    }
    flex-grow: 1;
  }

  .order-commit {
    height: 48px;
    background: pink;
  }
  .top{
    background-size: 100% 76%;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 55%);
    background-repeat: no-repeat;
    padding: 24px 18px 16px;

    .address-wrapper {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border-radius: 4px;

      .address {
        color: #333;
        h2 {
          line-height: 22px;
          font-size: 16px;
          margin-bottom: 14px;
        }

        p:nth-of-type(1) {
          line-height: 20px;
          font-size: 14px;
          margin-bottom: 6px;
        }

        p:nth-of-type(2) {
          color: #666;
          font-size: 12px;
          line-height: 17px;

          span:nth-of-type(1){
            margin-right: 6px;
          }
        }

      }

      .left {
        transform: rotate(180deg);
        color: #666;
        :deep(.icon) {
          height: 16px;
          width: 16px;
        }
      }
    }
    .header {
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
      .left {
        :deep(.icon) {
          height: 22px;
          width: 22px;
        }
      }

      .title {
        line-height: 22px;
        font-size: 16px;
      }

      .space-block {
        width: 22px;
        height: 22px;
      }
    }
  }

  .cart-content {
    background: white;
    border-radius: 4px;
    margin: 0 18px 18px;
    padding: 16px;

    > .bottom-down {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F5F5F5;
      margin-top: 16px;
      padding: 4px 0;

      line-height: 20px;
      font-size: 14px;
      color: #999;

      .arrow-down {
        margin-left: 8px;
        :deep(.icon) {
          width: 14px;
          height: 14px;
        }

        &.down {
          transform: rotate(180deg);
        }
      }
      }

    .title {
      line-height: 22px;
      font-size: 16px;
      color: #333;
    }
    .goods {
      // flex-grow: 1;
      // overflow-x: hidden;
      // overflow-y: scroll;
      //   &::-webkit-scrollbar {
      //     display:none
      //   }

      > .goods_item {
        display: flex;
        margin-top: 16px;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

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
              margin-right: auto;
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
}
</style>
