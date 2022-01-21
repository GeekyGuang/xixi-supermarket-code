<template>
 <div class="top">
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
</template>

<script lang="ts" setup>
import { useBackRouterEffect } from '@/lib/helper'
const handleBackClick = useBackRouterEffect()
</script>

<style lang="scss" scoped>
  .top{
    background-size: 100% 76%;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 55%);
    background-repeat: no-repeat;
    padding: 0.24rem 0.18rem 0.16rem;

    .address-wrapper {
      padding: 0.16rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border-radius: 0.04rem;

      .address {
        color: #333;
        h2 {
          line-height: 0.22rem;
          font-size: 0.16rem;
          margin-bottom: 0.14rem;
        }

        p:nth-of-type(1) {
          line-height: 0.2rem;
          font-size: 0.14rem;
          margin-bottom: 0.06rem;
        }

        p:nth-of-type(2) {
          color: #666;
          font-size: 0.12rem;
          line-height: 0.17rem;

          span:nth-of-type(1){
            margin-right: 0.06rem;
          }
        }

      }

      .left {
        transform: rotate(180deg);
        color: #666;
        :deep(.icon) {
          height: 0.16rem;
          width: 0.16rem;
        }
      }
    }
    .header {
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.22rem;
      .left {
        :deep(.icon) {
          height: 0.22rem;
          width: 0.22rem;
        }
      }

      .title {
        line-height: 0.22rem;
        font-size: 0.16rem;
      }

      .space-block {
        width: 0.22rem;
        height: 0.22rem;
      }
    }
  }
</style>
