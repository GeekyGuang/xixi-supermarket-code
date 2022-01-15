<template>
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
      <span>总计 {{checkedCount}} 件</span>
      <Icon icon_name="arrow-down" :class="{down: pulldown}" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'
import { ref } from 'vue'

const route = useRoute()
const shopId = route.params.id as string
const shopName = route.query.shopName
const {checkedProducts,checkedCount} = useCommonCartEffect(shopId)

const keys = Object.keys(checkedProducts.value)
const products = ref<any>({})
if (keys.length > 2) {
  const subkeys = keys.slice(0, 2)
  for(const i of subkeys) {
    products.value[i] = checkedProducts.value[i]
  }
} else {
  products.value = checkedProducts.value
}
const pulldown = ref(false)
const toggleShowAllProducts = () => {
  pulldown.value = !pulldown.value

  if (pulldown.value) {
    products.value = checkedProducts.value
  } else {
    if (keys.length > 2) {
      products.value = {}
      const subkeys = keys.slice(0, 2)
      for(const i of subkeys) {
        products.value[i] = checkedProducts.value[i]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
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
</style>
