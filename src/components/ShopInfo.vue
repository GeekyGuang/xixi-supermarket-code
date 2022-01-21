<template>
<div class="shop">
    <div class="shop-img">
      <img :src="info.imgUrl" alt="">
    </div>
    <div class="shop-info">
      <h2 class="shop-name">{{info.name}}</h2>
      <p class="shop-data">
        <span >月售{{info.sales}}</span>
        <span>起送￥{{info.expressLimit}}</span>
        <span>基础运费￥{{info.expressPrice}}</span>
      </p>
      <p class="discount">{{info.slogan}}</p>
    </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  info: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.shop {
  display: flex;
  padding-bottom: 0.12rem;
}
.shop-img {
  width: 0.56rem;
  margin-right:  0.16rem;
  > img {
    width: 100%;
  }
}
.shop-info {
  width: 100%;
  border-bottom: 0.01rem solid #F1F1F1;
  h2 {
    line-height: 0.22rem;
    font-size: 0.16rem;
    font-weight: normal;
    margin-bottom: 0.08rem;
  }

  .shop-data {
    line-height: 0.18rem;
    font-size: 0.13rem;
    margin-bottom: 0.08rem;
    > span {
      margin-right: 0.16rem;
    }
  }

  .discount {
    line-height: 0.18rem;
    font-size: 0.13rem;
    color: $red-highlight-color;
    margin-bottom: 0.12rem;
  }
}
</style>
