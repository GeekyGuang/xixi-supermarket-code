<template>
  <div class="search">
    <Icon icon_name="left" @click="handleBackClick"/>
    <Search placeholder="请输入商品名称搜索"/>
  </div>
  <div class="shop-wrapper">
    <shopInfo :info="item"/>
  </div>

</template>

<script lang="ts">
import ShopInfo from '@/components/ShopInfo.vue'
import Search from '@/components/Search.vue'
import Icon from '@/components/Icon.vue'
import { useRouter } from 'vue-router'
export default {
  components: { ShopInfo, Search, Icon },
  setup(){
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: require('@/assets/images/wowmall.png'),
      sales: "10000",
      expressLimit: "0",
      expressPrice: "5",
      slogan: "VIP尊享满89减4元运费券"
    }
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return {
      item,
      handleBackClick
    }
  }
  }
</script>

<style lang="scss" scoped>
.shop-wrapper {
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
</style>
