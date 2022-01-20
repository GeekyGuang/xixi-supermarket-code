<template>
<Layout>
  <div class="front-page">
    <Position />
    <Search placeholder="山姆商店会员优惠" />
    <div class="main">
      <div class="banner">
        <img src="https://s4.ax1x.com/2022/01/20/7cIkan.jpg" alt="">
      </div>
      <Categories />
      <div class="gap">
      </div>
      <Nearby />
    </div>
  </div>
</Layout>


</template>
<script lang="ts" setup>
import Search from '@/components/Search.vue'
import Position from '@/components/Position.vue'
import Categories from '@/components/Categories.vue'
import Nearby from '@/components/Nearby.vue'
import Layout from '@/components/Layout.vue'
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';

 .front-page {
    flex-grow: 1;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    overflow: hidden;

    :deep(.search-wrapper) {
        margin: 0 18px 12px;
    }

    .main {
      flex-shrink: 1;
      overflow-y: scroll;

      &::-webkit-scrollbar {
            display:none
        }
    }

    .position-wrapper {
      margin-bottom: 16px;
      flex-shrink: 0;
    }

    .banner {
      // background-image: url('https://s6.jpg.cm/2022/01/03/LtOxlW.jpg');
      // background-size: cover;
      // background-repeat: no-repeat;
      // margin: 0 18px;
      padding: 0 18px;
      img {
        border-radius: 5px;
        width: 100%;
        height: 86px;
        object-fit: cover;
        object-position:center 25%;
      }
    }

    .gap {
      height: 10px;
      background: #f1f1f1;
    }

  }
</style>
