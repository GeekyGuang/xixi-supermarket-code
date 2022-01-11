<template>
 <div class="top-wrapper">
   <div class="header">
     <Icon icon_name="left" />
     <div class="title">确认订单</div>
   </div>
 </div>

</template>

<script lang="ts">
import { useRoute } from 'vue-router'
export default {
  setup(){
    const route = useRoute()
    const shopId = route.params.id
    const shopName = route.query.shopName

    return {
      shopId,
      shopName
    }
  }
}
</script>
