<template>
<Layout>
  <div class="cart">
   <h2>我的全部购物车(2)</h2>
   <ul class="content" v-if="true">
     <li v-for="(item, key) in cartList" :key="key">
       <CartContent :shop-name="item.shopName" :allow-pulldown="false" :count="0" :products="item.products"/>
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
import { useStore } from "vuex";
import Layout from "../../components/Layout.vue";
import CartContent from "../checkout/CartContent.vue";

const store = useStore()
const {cartList} = store.state
console.log(cartList)


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
