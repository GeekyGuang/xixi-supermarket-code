<template>
        <div class="nearby">
        <h1>附近店铺</h1>
        <ul>
          <li v-for="info in nearbyList" :key="info._id">
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
          </li>
        </ul>
      </div>
</template>

<script lang="ts">
import {get} from '@/utils/request'
import {ref} from 'vue'
export default {
  setup(){
    const nearbyList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      nearbyList.value = result.data
    }
    getNearbyList()

    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
    .nearby {
      padding: 0 18px;

      > h1 {
        font-size: 18px;
        line-height: 25px;
        margin: 16px 0 14px;
      }
      > ul > li {
        display: flex;
        margin-bottom: 12px;

        > .shop-img {
          width: 56px;
          margin-right:  16px;
          > img {
            width: 100%;
          }
        }

        > .shop-info {
          width: 100%;
          border-bottom: 1px solid #F1F1F1;
          h2 {
            line-height: 22px;
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 8px;
          }

          .shop-data {
            line-height: 18px;
            font-size: 13px;
            margin-bottom: 8px;
            > span {
              margin-right: 16px;
            }
          }

          .discount {
            line-height: 18px;
            font-size: 13px;
            color: #E93B3B;
            margin-bottom: 12px;
          }
        }
      }
    }
</style>
