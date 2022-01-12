<template>
<div class="wrapper">
 <div class="top-wrapper">
   <div class="header">
     <Icon icon_name="left" @click="handleBackClick"/>
     <div class="title">确认订单</div>
     <div class="space-block"></div>
   </div>
   <div class="address-wrapper">
     <div class="address">
       <h2>收货地址</h2>
       <p>北京理工大学国防科技园2号楼10层</p>
       <p><span>瑶妹 (先生)</span><span>18911024266</span></p>
     </div>
     <Icon icon_name="left" />
   </div>
 </div>
</div>


</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useBackRouterEffect } from '@/lib/helper'
const route = useRoute()
const shopId = route.params.id
const shopName = route.query.shopName
const handleBackClick = useBackRouterEffect()

</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: #f8f8f8;
  .top-wrapper {
    background-size: 100% 76%;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 55%);
    background-repeat: no-repeat;
    padding: 24px 18px 16px;

    .address-wrapper {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border-radius: 4px;

      .address {
        color: #333;
        h2 {
          line-height: 22px;
          font-size: 16px;
          margin-bottom: 14px;
        }

        p:nth-of-type(1) {
          line-height: 20px;
          font-size: 14px;
          margin-bottom: 6px;
        }

        p:nth-of-type(2) {
          color: #666;
          font-size: 12px;
          line-height: 17px;

          span:nth-of-type(1){
            margin-right: 6px;
          }
        }

      }

      .left {
        transform: rotate(180deg);
        color: #666;
        :deep(.icon) {
          height: 16px;
          width: 16px;
        }
      }
    }
    .header {
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 22px;
      .left {
        :deep(.icon) {
          height: 22px;
          width: 22px;
        }
      }

      .title {
        line-height: 22px;
        font-size: 16px;
      }

      .space-block {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
