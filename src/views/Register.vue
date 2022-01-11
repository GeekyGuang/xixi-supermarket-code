<template>
 <div class="login">
    <Icon icon_name='group' />
    <div class="input-item">
      <input type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input-item">
      <input type="password" placeholder="请输入密码" autocomplete="new-password" v-model="password">
    </div>
    <div class="input-item">
      <input type="password" placeholder="确认密码" autocomplete="new-password" v-model="checkpassword">
    </div>
    <button @click="handleRegister">注册</button>
    <router-link to="/login">已有账号去登录</router-link>
    <Toast :showToast="show" :message="message"/>
 </div>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Toast, {useToastEffect} from '@/components/Toast.vue'
import { reactive, toRefs } from '@vue/reactivity'
import {post} from '@/utils/request'

const useRegisterEffect = (showToast) => {
      const router = useRouter()
    const userData = reactive({
      username: '',
      password: '',
      checkpassword: ''
    })

    const {username, password, checkpassword} = toRefs(userData)
    const handleRegister = async () => {
      if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(username.value)){
        showToast('用户名必须3~15个字符\n(仅限于字母数字下划线和中文)')
        return
      }

      if(!/^.{6,16}$/.test(password.value)){
        showToast("密码长度必须6~16位")
        return
      }

      if(checkpassword.value.trim() === ''){
        showToast("请确认密码")
        return
      }

      if(password.value !== checkpassword.value) {
        showToast("两次密码输入不一致")
        return
      }

      try {
        const result = await post('/user/login', {
          username: username.value,
          password: password.value
        })

        if(result.data.verifySuccess === true) {
          router.push({name: 'Login'})
        } else {
          showToast('注册失败')
        }

      } catch(e) {
        showToast('请求失败')
      }

    }

    return {
       username, password, checkpassword,handleRegister
    }
}

const {message,show, showToast} = useToastEffect()
const {username, password, checkpassword,handleRegister} = useRegisterEffect(showToast)
</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  .group {
    margin: 120px auto 40px;
    > :deep(.icon) {
      width: 66px;
      height: 66px;
    }
  }

  > .input-item {
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    width: 100%;
    padding: 0 16px;
    margin-bottom: 16px;

    > input {
      background: none;
      height: 48px;
      border: none;
      width: 100%;
      outline: none;
      line-height: 48px;

      &::placeholder {
        color: #777
      }
    }
  }

  button {
    border: none;
    background: $blue-button-color;
    box-shadow: 0 4px 8px 0 rgba(0,145,255,0.32);
    border-radius: 4px;
    width: 100%;
    color: white;
    height: 48px;
    margin: 16px 0;
    cursor: pointer;
  }


}

</style>
