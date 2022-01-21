<template>
 <div class="login">
    <Icon icon_name='group' />
    <div class="input-item">
      <input type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input-item">
      <input type="password" placeholder="请输入密码" v-model="password" autocomplete="new-password">
    </div>
    <button @click="handleLogin">登录</button>
    <router-link to="/register">立即注册</router-link>
    <Toast :showToast="show" :message="message"/>
 </div>

</template>

<script lang="ts" setup>
import { reactive, toRefs} from 'vue'
import { useRouter } from 'vue-router'
import {post} from '@/utils/request'
import Toast, {useToastEffect} from '@/components/Toast.vue'

const useLoginEffect = (showToast) => {
    const router = useRouter()
    const data = reactive(
      {
        username: 'admin',
        password: '123456',

      }
    )
    const {username, password} = toRefs(data)

    const handleLogin = async () => {
      if(username.value.trim() === '' || password.value.trim() === '') {
        showToast('用户名或密码不能为空')
        return
      }

       if(!/^[\w\u4e00-\u9fa5]{3,15}$/.test(username.value) || !/^.{6,16}$/.test(password.value)){
        showToast('用户名或密码不正确')
        return
      }

      try {
        const result = await post('/user/login', {
          username: username.value,
          password: password.value
        })

        if(result.data.verifySuccess === true) {
          localStorage.isLogin = true
          router.push({name: 'Home'})
        } else {
          showToast('用户名或密码错误')
        }

      } catch(e) {
        showToast('请求失败')
      }

    }

    return {
      username,
      password,
      handleLogin,
    }
}


  const {message,show, showToast} = useToastEffect()
  const {username,password,handleLogin,} = useLoginEffect(showToast)

</script>

<style lang="scss" scoped>
@import '~@/style/helpers.scss';
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.4rem;

  .group {
    margin: 1.2rem auto 0.4rem;
    > :deep(.icon) {
      width: 0.66rem;
      height: 0.66rem;
    }
  }

  > .input-item {
    background: #F9F9F9;
    border: 0.01rem solid rgba(0,0,0,0.10);
    border-radius: 0.06rem;
    width: 100%;
    padding: 0 0.16rem;
    margin-bottom: 0.16rem;

    > input {
      background: none;
      height: 0.48rem;
      border: none;
      width: 100%;
      outline: none;
      line-height: 0.48rem;

      &::placeholder {
        color: #777
      }
    }
  }

  button {
    border: none;
    background: $blue-button-color;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,145,255,0.32);
    border-radius: 0.04rem;
    width: 100%;
    color: white;
    height: 0.48rem;
    margin: 0.16rem 0;
    cursor: pointer;
  }


}

</style>
