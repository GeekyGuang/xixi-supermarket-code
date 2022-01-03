<template>
  <div class="shop-wrapper">
    <shopInfo :info="item"/>
  </div>

</template>

<script lang="ts">
import ShopInfo from '@/components/ShopInfo.vue'
export default {
  components: { ShopInfo },
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
    return {
      item
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
</style>
