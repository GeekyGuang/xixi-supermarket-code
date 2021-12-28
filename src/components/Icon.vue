<template>
    <div :class="icon_name">
      <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#' + icon_name"></use>
      </svg>
    </div>
</template>

<script lang="ts">
  // eslint-disable-next-line no-undef
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}

  export default {
    props: {
      'icon_name': {
        type: String,
        require: true
      }
    },
  }
</script>


<style lang="scss" scoped>
.icon {
  width: .24rem;
  height: .24rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
