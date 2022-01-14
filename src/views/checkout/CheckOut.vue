<template>
<div class="wrapper">
  <div class="content-wrapper">
    <TopInfo />
    <CartContent />
  </div>
  <OrderCommit />
</div>


</template>

<script lang="ts" setup>

import TopInfo from './TopInfo.vue'
import CartContent from './CartContent.vue'
import OrderCommit from './OrderCommit.vue';


</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.wrapper {
  height: 100vh;
  background: #f8f8f8;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content-wrapper {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display:none
    }
    flex-grow: 1;
  }


}
</style>
