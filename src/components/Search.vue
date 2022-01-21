<template>
    <div class="search-wrapper">
      <Icon icon_name="search" />
      <input type="text" :placeholder="placeholder">
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  placeholder: String
})
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';

  .search-wrapper {
    display: flex;
    background: $grey-background;
    height: 0.32rem;
    flex-shrink: 0;
    border-radius: 0.32rem;
    align-items: center;
    padding: 0 0.16rem;
    color: $grey-font;

    > :deep(.search ){
      > .icon {
        width: 0.18rem;
        height: 0.18rem;
      }
    }

    > input {
      margin-left: 0.12rem;
      flex-grow: 1;
      font-size: 0.14rem;
      background: none;
      border: none;
      height: 100%;
      outline: none;

      &::placeholder {
        color: $grey-font;
      }
    }
  }
</style>
