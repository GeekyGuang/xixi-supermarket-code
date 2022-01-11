<template>
  <transition name="fade">
     <div class="toast" v-if="showToast">{{message}}</div>
  </transition>

</template>
<script lang="ts">
import { reactive, toRefs } from "vue"
export const useToastEffect = () => {
  const toastData = reactive(
    {
        message: '',
        show: false
    }
  )

  const {message, show} = toRefs(toastData)

  const showToast = (msg: string) => {
       show.value = true
       message.value = msg
       setTimeout(() => {
          show.value = false
          message.value = ''
       }, 2000)
    }

  return {
    message,
    show,
    showToast
  }
}
</script>
<script lang="ts" setup>
const props = defineProps({
  message: String,
  showToast: Boolean
})
</script>

<style lang="scss" scoped>
  .toast {
    padding: 16px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.35);
    color: white;
    font-size: 16px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    white-space: pre;
    text-align: center;
    line-height: 1.5;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 750ms ease;
  }
</style>
