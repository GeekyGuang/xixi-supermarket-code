<template>
 <div class="order-commit">
      <div class="total">
        <span>需付金额:</span>
        <span>&yen;{{total}}</span>
      </div>
      <div class="commit-button" @click="toggleShowConfirmPanel">
          提交订单
      </div>
      <div class="mask" v-if="showConfirmPanel" @click="toggleShowConfirmPanel">
        <div class="confirm-panel" @click.stop>
          <h2>确认要离开收银台？</h2>
          <p>请尽快完成支付，否则将被取消</p>
          <div class="buttons">
            <button @click="toggleShowConfirmPanel">取消支付</button>
            <button @click="handleConfirm">确认支付</button>
          </div>
        </div>
      </div>
      <div class="payment-mask" v-if="paymentSuccess">
        <div class="payment-success">
          <Icon icon_name="hook" />
          <P><b>支付成功，等待配送</b></P>
          <div class="close-button" @click="handleClosePaymentMask"></div>
        </div>
      </div>
 </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect'
import { useStore } from 'vuex'
const route = useRoute()
const shopId = route.params.id as string
const shopName = route.query.shopName
const {total} = useCommonCartEffect(shopId)
const showConfirmPanel = ref(false)
const paymentSuccess = ref(false)
const toggleShowConfirmPanel = (e) => {
  // if(e.target.className.includes('nohandle')) return;
  showConfirmPanel.value = !showConfirmPanel.value
}
const router = useRouter()
const store = useStore()
const handleConfirm = () => {
  store.commit('comfirmOrder', {shopId, shopName})
  showConfirmPanel.value = false
  paymentSuccess.value = true
}

const handleClosePaymentMask = () => {
  router.push('/order')
}
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

    .payment-mask, .mask {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.50);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .payment-mask {
      > .payment-success {
        background:  white;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        padding: 32px 70px;
        position: relative;

        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 14px;
          height: 14px;
          // border: 1px solid red;

          &::after, &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            background: #333;
            left: 0;
            top: 50%;
          }

          &::before{
            transform: rotate(45deg);
          }

          &::after{
            transform: rotate(-45deg);
          }
        }



        .hook {
          :deep(.icon) {
            width: 48px;
            height: 48px;
          }
        }

        p {
          font-size: 18px;
          line-height: 25px;
          color: #333;
          margin-top: 24px;
          // font-weight: 500;
        }

      }
    }

    .mask {

      > .confirm-panel {
        width: 300px;
        background: white;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 0;

        h2 {
          line-height: 22px;
          font-size: 18px;
          color: #333;
          margin-bottom: 8px;
        }

        p {
          line-height: 20px;
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
        }

        .buttons {
          button {
            background: none;
            line-height: 20px;
            font-size: 14px;
            padding: 6px 12px;
            border-radius: 16px;
            border: 1px solid $light-blue;
          }

          button:nth-of-type(1) {
            color: #0091FF;
            background: white;
            margin-right: 24px;
          }

          button:nth-of-type(2) {
            color: white;
            background: $light-blue;
          }
        }

      }
    }

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
      background: $light-blue;
      padding: 14px 28px;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
