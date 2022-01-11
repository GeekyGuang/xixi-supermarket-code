<template>
 <div class="top-wrapper">
   <div class="header">
     <Icon icon_name="left" />
     <div class="title">确认订单</div>
   </div>
   {{shopId}}
   {{shopName}}
 </div>

</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const shopId = route.params.id
const shopName = route.query.shopName

</script>
