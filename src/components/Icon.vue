<template>
    <div>
      <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#icon-' + icon_name"></use>
      </svg>
    </div>
</template>

<script lang="ts">
  export default {
    props: {
      'icon_name': {
        type: String,
        require: true
      }
    },
  }
</script>
