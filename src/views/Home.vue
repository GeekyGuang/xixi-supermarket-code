<template>
<div class="wrapper">
  <div class="front-page">
    <Position />
    <Search placeholder="山姆商店会员优惠" />
    <div class="main">
      <div class="banner">
        <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <Categories />
      <div class="gap">
      </div>
      <Nearby />
    </div>
  </div>
  <Docker />
</div>


</template>
<script lang="ts">
import Docker from '@/components/Docker.vue'
import Search from '@/components/Search.vue'
import Position from '@/components/Position.vue'
import Categories from '@/components/Categories.vue'
import Nearby from '@/components/Nearby.vue'

export default {
  components: {
    Docker,
    Search,
    Position,
    Categories,
    Nearby
}
}
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  color:$content-font-color;

  > .front-page {
    flex-grow: 1;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    overflow: auto;

    .main {
      flex-shrink: 1;
      overflow-x: auto;
      overflow-y: auto;

      &::-webkit-scrollbar {
            display:none
        }
    }

    .position-wrapper {
      margin-bottom: 16px;
      flex-shrink: 0;
    }

    .banner {
      height: 0;
      overflow: hidden;
      padding:0 18px 86px;
      > img {
        width: 100%;
      }
    }

    .gap {
      height: 10px;
      background: #f1f1f1;
    }

  }


}
</style>
