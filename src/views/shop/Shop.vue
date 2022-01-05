<template>
  <div class="shop-wrapper">
    <div class="search">
      <Icon icon_name="left" @click="handleBackClick"/>
      <Search placeholder="请输入商品名称搜索"/>
    </div>
    <div class="shop-info-wrapper">
      <shopInfo :info="shopInfo" v-show="shopInfo.imgUrl"/>
    </div>
    <Content />
    <Cart />
  </div>
</template>

<script lang="ts">
import ShopInfo from '@/components/ShopInfo.vue'
import Search from '@/components/Search.vue'
import Icon from '@/components/Icon.vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '@/utils/request'
import { ref } from '@vue/reactivity'
import Content from '@/views/shop/Content.vue'
import Cart from './Cart.vue'

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

const useBackRouterEffect = () => {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }

    return handleBackClick
}

export default {
  components: { ShopInfo, Search, Icon, Content, Cart },
  setup(){
   const {shopInfo, getShopInfo} = useGetShopInfoEffect()
   getShopInfo()
   const handleBackClick = useBackRouterEffect()

    return {
      shopInfo,
      handleBackClick
    }
  }
  }
</script>

<style lang="scss" scoped>

.shop-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
.shop-info-wrapper {
  padding: 0 18px;

  :deep(.shop-info) {
    border-bottom: none;
  }
}

.search {
  padding: 16px 18px 16px 12px;
  display: flex;
  align-items: center;
  :deep(.left) {
    cursor: pointer;
    > .icon{
    color: #B6B6B6 ;
    height: 22px;
  }
  }

  :deep(.search-wrapper) {
    flex-grow: 1;
    margin-left: 6px;
  }
}
}

</style>
