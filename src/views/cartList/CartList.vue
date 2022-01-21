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
  // position: relative;

  .content {
    flex-shrink: 1;
    padding-top: 0.18rem;
    // margin-top: 0.44rem;

    // li + li {
    //   margin-top: 0.16rem;
    // }
  }
  .empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.24rem;
    .emptyPage {
      :deep(.icon) {
        width: 0.64rem;
        height: 0.64rem;
      }
    }
  }

    > h2 {
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: #333;
    padding: 0.11rem 0;
    background: white;
    text-align: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
