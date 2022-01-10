<template>
<div>
  结算
  {{shopId}}
  {{shopName}}
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
