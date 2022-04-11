<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted, watchEffect,ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const showHeight = ref(window.document.documentElement.clientHeight)
const docHeight = window.document.documentElement.clientHeight
onMounted(()=>{
  window.onresize = () => {
    showHeight.value = window.document.documentElement.clientHeight
  }
})

watchEffect(() => {
  if(showHeight.value < docHeight) {
    store.commit('changeHidden', {hidden: false})
  } else {
    store.commit('changeHidden', {hidden: true})
  }
})
</script>

<style lang="scss">
  @media(min-width: 576px) {
    html {
      font-size: 130px !important;
    }
    body {
      background: #0d1117;
    }
    #app {
      max-width: 3.75rem;
      margin: 0 auto;
      background: white;
    }
  }
</style>
