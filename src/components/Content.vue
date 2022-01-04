<template>
  <div class="content">
    <ul class="categories">
       <li class="categories__active">全部商品</li>
       <li>秒杀</li>
       <li>新鲜水果</li>
       <li>休闲食品</li>
       <li>时令蔬菜</li>
       <li>肉蛋家禽</li>
    </ul>
    <div class="goods">

    </div>
  </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="scss" scoped>
  .content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;

    .categories {
      width: 76px;
      height: 100%;
      background:  #F5F5F5;
      overflow-y: scroll;

      &__active {
        background: white;
      }

      > li {
        line-height: 16px;
        font-size: 14px;
        padding: 12px 0;
        text-align: center;
      }
    }
  }
</style>
