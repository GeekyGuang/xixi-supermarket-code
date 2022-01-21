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
    height: 0.48rem;
    box-shadow: 0 -0.01rem 0.01rem #F1F1F1;
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
        border-radius: 0.04rem;
        padding: 0.32rem 0.7rem;
        position: relative;

        .close-button {
          position: absolute;
          top: 0.12rem;
          right: 0.12rem;
          width: 0.14rem;
          height: 0.14rem;
          // border: 0.01rem solid red;

          &::after, &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 0.01rem;
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
          color: #0091FF;
          :deep(.icon) {
            width: 0.48rem;
            height: 0.48rem;
          }
        }

        p {
          font-size: 0.18rem;
          line-height: 0.25rem;
          color: #333;
          margin-top: 0.24rem;
          // font-weight: 500;
        }

      }
    }

    .mask {

      > .confirm-panel {
        width: 3rem;
        background: white;
        border-radius: 0.04rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.24rem 0;

        h2 {
          line-height: 0.22rem;
          font-size: 0.18rem;
          color: #333;
          margin-bottom: 0.08rem;
        }

        p {
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #666;
          margin-bottom: 0.24rem;
        }

        .buttons {
          button {
            background: none;
            line-height: 0.2rem;
            font-size: 0.14rem;
            padding: 0.06rem 0.12rem;
            border-radius: 0.16rem;
            border: 0.01rem solid $light-blue;
          }

          button:nth-of-type(1) {
            color: #0091FF;
            background: white;
            margin-right: 0.24rem;
          }

          button:nth-of-type(2) {
            color: white;
            background: $light-blue;
          }
        }

      }
    }

    .total {
      margin-left: 0.24rem;
      display: flex;
      align-items: center;

      span:nth-of-type(1) {
        font-size: 0.14rem;
        color: #333;
      }
      span:nth-of-type(2) {
        font-size: 0.16rem;
        color: $red-highlight-color;
        font-weight: 500;
        margin-left: 0.04rem;
      }
    }
    .commit-button {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: white;
      background: $light-blue;
      padding: 0.14rem 0.28rem;
      margin-left: auto;
      cursor: pointer;
    }
  }
</style>
