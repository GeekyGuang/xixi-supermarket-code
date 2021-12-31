<template>
 <div class="login">
    <Icon icon_name='group' />
    <div class="input-item">
      <input type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input-item">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <button @click="handleLogin">登录</button>
    <router-link to="/register">立即注册</router-link>
    <Toast :showToast="show" :message="message"/>
 </div>

</template>

<script lang="ts">
import { reactive, toRefs} from 'vue'
import { useRouter } from 'vue-router'
import service from '@/utils/request'
import Toast, {useToastEffect} from '@/components/Toast.vue'

export default {
  components: {
    Toast
  },
  setup(){
    const router = useRouter()
    const data = reactive(
      {
        username: '',
        password: '',

      }
    )
    const {username, password} = toRefs(data)

    const {message,show, showToast} = useToastEffect()


    const handleLogin = async () => {
      try {
        const result = await service.post('/user/login', {
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
      message,
      show
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background: #0091FF;
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
