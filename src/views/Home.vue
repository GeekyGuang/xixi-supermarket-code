<template>
<Layout>
  <div class="front-page">
    <Position />
    <Search placeholder="山姆商店会员优惠" />
    <div class="main">
      <div class="banner">
        <img :src="banner" alt="banner">
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
const banner = require('@/assets/images/banner.png')
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';

 .front-page {
    flex-grow: 1;
    padding-top: 0.16rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    overflow: hidden;

    :deep(.search-wrapper) {
        margin: 0 0.18rem 0.12rem;
    }

    .main {
      flex-shrink: 1;
      overflow-y: scroll;

      &::-webkit-scrollbar {
            display:none
        }
    }

    .position-wrapper {
      margin-bottom: 0.16rem;
      flex-shrink: 0;
    }

    .banner {
      // background-image: url('https://s6.jpg.cm/2022/01/03/LtOxlW.jpg');
      // background-size: cover;
      // background-repeat: no-repeat;
      // margin: 0 0.18rem;
      padding: 0 0.18rem;
      img {
        border-radius: 0.05rem;
        width: 100%;
        height: 0.86rem;
        object-fit: cover;
        object-position:center 75%;
      }
    }

    .gap {
      height: 0.1rem;
      background: #f1f1f1;
    }

  }
</style>
