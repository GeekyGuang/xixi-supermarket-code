<template>
        <div class="nearby">
        <h1>附近店铺</h1>
        <router-link :to="`/shop/${info._id}`" v-for="info in nearbyList" :key="info._id">
            <ShopInfo :info="info"  />
        </router-link>
      </div>
</template>

<script lang="ts">
import {get} from '@/utils/request'
import {ref} from 'vue'
import ShopInfo from './ShopInfo.vue'
import { useRouter } from 'vue-router'
const useNearbyListEffect = () => {
    const nearbyList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      nearbyList.value = result.data
    }

    return {
      nearbyList,
      getNearbyList
    }
}

export default {
    setup() {
        const { nearbyList, getNearbyList } = useNearbyListEffect();
        getNearbyList();
        return {
            nearbyList
        };
    },
    components: { ShopInfo }
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
      a {
        text-decoration: none;
        color: inherit;
      }
    }
</style>
