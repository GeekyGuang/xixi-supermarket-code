<template>
 <div class="cart-content" v-if="count > 0">
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
      <Icon icon_name="arrow-down" :class="{down: pulldown}" v-if="keys.length > 2"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  products: {type: Object, required: true},
  count: {type: Number, required: true},
  shopName: {type: String, required: true},
  allowPulldown: {
     type: Boolean,
     default: true
  }
})

const checkedProducts = ref(props.products)
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
  if(!props.allowPulldown) return;
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
    border-radius: 0.04rem;
    margin: 0 0.18rem 0.18rem;
    padding: 0.16rem;

    > .bottom-down {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F5F5F5;
      margin-top: 0.16rem;
      padding: 0.04rem 0;

      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #999;

      .arrow-down {
        margin-left: 0.08rem;
        :deep(.icon) {
          width: 0.14rem;
          height: 0.14rem;
        }

        &.down {
          transform: rotate(180deg);
        }
      }
      }

    .title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: #333;
    }
    .goods {

      > .goods_item {
        display: flex;
        margin-top: 0.16rem;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 0.48rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

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
              margin-right: auto;
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
</style>
