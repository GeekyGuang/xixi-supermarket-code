<template>
 <div class="order-commit">
      <div class="total">
        <span>需付金额:</span>
        <span>&yen;{{total}}</span>
      </div>
      <div class="commit-button">
        <router-link to="/home">
          提交订单
        </router-link>
      </div>
 </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'
const route = useRoute()
const shopId = route.params.id as string
const {total} = useCommonCartEffect(shopId)
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.order-commit {
    height: 48px;
    box-shadow: 0 -1px 1px #F1F1F1;
    display: flex;
    align-items: center;
    background: white;
    z-index: 5;

    .total {
      margin-left: 24px;
      display: flex;
      align-items: center;

      span:nth-of-type(1) {
        font-size: 14px;
        color: #333;
      }
      span:nth-of-type(2) {
        font-size: 16px;
        color: $red-highlight-color;
        font-weight: 500;
        margin-left: 4px;
      }
    }
    .commit-button {
      line-height: 20px;
      font-size: 14px;
      color: white;
      background: #4FB0F9;
      padding: 14px 28px;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
