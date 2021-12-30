<template>
  <transition name="fade">
     <div class="toast" v-if="showToast">{{message}}</div>
  </transition>

</template>

<script lang="ts">
export default {
  props: ['message', 'showToast']
}
</script>

<style lang="scss" scoped>
  .toast {
    padding: 16px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.35);
    color: white;
    font-size: 16px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 750ms ease;
  }
</style>
