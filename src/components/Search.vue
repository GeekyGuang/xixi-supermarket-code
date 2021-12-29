<template>
    <div class="search-wrapper">
      <Icon icon_name="search" />
      <input type="text" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  $grey-font: #B7B7B7;
  .search-wrapper {
    display: flex;
    background: #F5F5F5;
    height: 32px;
    border-radius: 32px;
    align-items: center;
    padding: 0 16px;
    margin: 0 18px 12px;
    color: $grey-font;

    > :deep(.search ){
      > .icon {
        width: 18px;
        height: 18px;
      }
    }

    > input {
      margin-left: 12px;
      flex-grow: 1;
      font-size: 14px;
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
