<template>
<div class="wrapper">
   <slot />
  <Docker />
</div>
</template>

<script lang="ts" setup>
import Docker from './Docker.vue';
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  color:$content-font-color;

}

</style>
