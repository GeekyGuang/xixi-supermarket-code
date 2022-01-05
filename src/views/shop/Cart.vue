<template>
  <div class="cart">
    <div class="basket-wrapper">
       <Icon icon_name="basket" />
       <div class="notice">1</div>
    </div>
    <div class="total">
      <span>合计:</span>
      <span>&yen;288元</span>
    </div>
    <div class="checkout-button">
      去结算
    </div>

  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default {
    components: { Icon }
}
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.cart {
  height: 48px;
  box-shadow: 0 -1px 1px #F1F1F1;
  display: flex;
  align-items: center;

  > .checkout-button {
    line-height: 20px;
    font-size: 14px;
    color: white;
    background: #4FB0F9;
    padding: 14px 28px;
    margin-left: auto;
    cursor: pointer;
  }

  > .total {
    display: flex;
    align-items: center;
    span:nth-of-type(1) {
      font-size: 12px;
      margin-right: 5px;
    }
    span:nth-of-type(2) {
      font-size: 18px;
      color: #E93B3B;
    }
  }


  > .basket-wrapper {
    position: relative;
    margin-left: 24px;
    margin-right: 32px;
    .notice {
      width: 20px;
      height: 20px;
      line-height: 20px;
      background: #E93B3B;
      color: white;
      font-size: 16px;
      border-radius: 50%;
      text-align: center;
      transform: scale(.5);
      position: absolute;
      right: -8px;
      top: -8px;
    }
    :deep(.basket) > .icon {
      width: 28px;
      height: 28px;
    }
  }



}
</style>
