<template>
<div class="wrapper">
  <div class="content-wrapper">
    <TopInfo />
    <CartContent :products="checkedProducts"
                 :count="checkedCount"
                 :shop-name="shopName"/>
  </div>
  <OrderCommit />
</div>


</template>

<script lang="ts" setup>

import TopInfo from './TopInfo.vue'
import CartContent from './CartContent.vue'
import OrderCommit from './OrderCommit.vue';

import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'
const route = useRoute()
const shopId = route.params.id as string
const shopName = route.query.shopName as string
const {checkedProducts,checkedCount} = useCommonCartEffect(shopId)


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


}
</style>
