<template>
        <div class="nearby">
        <h1>附近店铺</h1>
        <router-link :to="`/shop/${info._id}`" v-for="info in nearbyList" :key="info._id">
            <ShopInfo :info="info"  />
        </router-link>
      </div>
</template>

<script lang="ts" setup>
import {get} from '@/utils/request'
import {ref} from 'vue'
import ShopInfo from './ShopInfo.vue'

const useNearbyListEffect = () => {
    const nearbyList = ref<any>([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      nearbyList.value = result.data
    }

    return {
      nearbyList,
      getNearbyList
    }
}


  const { nearbyList, getNearbyList } = useNearbyListEffect();
  getNearbyList();
</script>

<style lang="scss" scoped>
    .nearby {
      padding: 0 0.18rem;

      > h1 {
        font-size: 0.18rem;
        line-height: 0.25rem;
        margin: 0.16rem 0 0.14rem;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
</style>
