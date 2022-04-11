<template>
  <div class="shop-wrapper">
    <div class="search">
      <Icon icon_name="left" @click="handleBackClick"/>
      <Search placeholder="请输入商品名称搜索"/>
    </div>
    <div class="shop-info-wrapper">
      <ShopInfo :info="shopInfo" v-show="shopInfo.imgUrl"/>
    </div>
    <Content :shopName="shopInfo.name"/>
    <Cart :shopName="shopInfo.name" v-show="store.state.hidden"/>
  </div>
</template>

<script lang="ts" setup>
import ShopInfo from '@/components/ShopInfo.vue'
import Search from '@/components/Search.vue'
import Icon from '@/components/Icon.vue'
import { useRoute } from 'vue-router'
import { get } from '@/utils/request'
import { ref } from '@vue/reactivity'
import Content from '@/views/shop/Content.vue'
import Cart from './Cart.vue'
import {useBackRouterEffect} from '@/lib/helper'
import { useStore } from 'vuex'

const useGetShopInfoEffect = () => {
    const route = useRoute()
    const shopInfo = ref<any>({})
    const getShopInfo = async () => {
      const result = await get(`/api/shop/${route.params.id}`)
      shopInfo.value = result.data.shopInfo
    }
    getShopInfo()

    return {
      shopInfo,
      getShopInfo
    }
}

const {shopInfo, getShopInfo} = useGetShopInfoEffect()
getShopInfo()
const handleBackClick = useBackRouterEffect()
const store = useStore()

</script>

<style lang="scss" scoped>

.shop-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
.shop-info-wrapper {
  padding: 0 0.18rem;

  :deep(.shop-info) {
    border-bottom: none;
  }
}

.search {
  padding: 0.16rem 0.18rem;
  display: flex;
  align-items: center;
  :deep(.left) {
    cursor: pointer;
    > .icon{
    color: #B6B6B6 ;
    height: 0.22rem;
  }
  }

  :deep(.search-wrapper) {
    flex-grow: 1;
    // margin-left: 6px;
  }
}
}

</style>
