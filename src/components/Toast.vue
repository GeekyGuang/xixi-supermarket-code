<template>
  <div class="toast">{{message}}</div>
</template>

<script lang="ts">
export default {
  props: ['message']
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
</style>
