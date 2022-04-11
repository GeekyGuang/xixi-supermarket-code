<template>
<div class="wrapper">
   <slot />
  <Docker v-show="store.state.hidden"/>
</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import Docker from './Docker.vue';
const store = useStore()
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
