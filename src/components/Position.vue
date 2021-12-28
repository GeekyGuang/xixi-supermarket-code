<template>
    <div class="position-wrapper">
      <Icon icon_name="position"/>
      <span class="address">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</span>
      <Icon icon_name="bell"/>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/helpers.scss';
    .position-wrapper {
      :deep(.icon) {
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
</style>
