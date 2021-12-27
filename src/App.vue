<template>
<div class="wrapper">
  <div class="front-page">
    <div class="position">
      <Icon icon_name="position" class="position"/>
      <span class="address">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span>
      <Icon icon_name="bell" class="bell" />
    </div>
  </div>
  <Docker />
</div>


</template>
<script lang="ts">
import Docker from './components/Docker.vue'
export default {
  components: {
    Docker
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

    > .position {
      .icon {
        width: 18px;
        height: 18px;
      }
      display: flex;
      align-items: center;
      > .bell {
        margin-left: auto;
      }
      .address {
        margin: 0 8px;
        @extend %ellipsis;
        // @include ellipsis;
      }
    }
  }
}
</style>
