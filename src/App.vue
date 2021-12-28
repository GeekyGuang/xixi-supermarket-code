<template>
<div class="wrapper">
  <div class="front-page">
    <Position />
    <Search placeholder="山姆商店会员优惠" />
  </div>
  <Docker />
</div>


</template>
<script lang="ts">
import Docker from './components/Docker.vue'
import Search from './components/Search.vue'
import Position from './components/Position.vue'
export default {
  components: {
    Docker,
    Search,
    Position
  }
}
</script>

<style lang="scss">
@import './style/helpers.scss';
.wrapper{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color:$content-font-color;

  > .front-page {
    flex-grow: 1;
    padding: 16px 18px 0;

    .position-wrapper {
      margin-bottom: 16px;
    }

  }

}
</style>
