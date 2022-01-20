<template>
<Layout>
  <div class="cart">
   <h2>我的全部购物车<span v-if="cartCount > 0">({{cartCount}})</span></h2>
   <ul class="content" v-if="totalCount > 0">
     <li v-for="(item, key) in cartListCopy" :key="key">
      <router-link :to="`/shop/${key}`">
       <CartContent :shop-name="item.shopName" :allow-pulldown="false" :count="item.count" :products="item.products"/>
       </router-link>
     </li>

   </ul>
   <div class="empty" v-else>
      <Icon icon_name="emptyPage" />
      <span>购物车是空的，快去选购商品吧~</span>
   </div>
  </div>
</Layout>
</template>

<script lang="ts" setup>
import { useCommonCartEffect } from "@/effects/commonCartEffect";
import { deepClone } from "@/lib/helper";
import { ref } from "vue";
import { useStore } from "vuex";
import Layout from "../../components/Layout.vue";
import CartContent from "../checkout/CartContent.vue";

const store = useStore()
const {cartList} = store.state
const cartCount = Object.keys(cartList).length
console.log(cartList)
const cartListCopy = deepClone(cartList)
const totalCount = ref(0)
for(const i in  cartListCopy) {
  const {count} = useCommonCartEffect(i)
  cartListCopy[i].count = count.value
  totalCount.value += count.value
}


</script>

<style lang="scss" scoped>
.cart {
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: scroll;
  background: #f8f8f8;
  &::-webkit-scrollbar {
      display:none
  }

  .content {
    flex-shrink: 1;
    padding-top: 18px;
    margin-top: 44px;

    // li + li {
    //   margin-top: 16px;
    // }
  }
  .empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    .emptyPage {
      :deep(.icon) {
        width: 64px;
        height: 64px;
      }
    }
  }

    > h2 {
    line-height: 22px;
    font-size: 16px;
    color: #333;
    padding: 11px 0;
    background: white;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
