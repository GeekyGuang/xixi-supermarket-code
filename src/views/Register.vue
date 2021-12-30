<template>
 <div class="login">
    <Icon icon_name='group' />
    <div class="input-item">
      <input type="text" placeholder="请输入手机号">
    </div>
    <div class="input-item">
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="input-item">
      <input type="password" placeholder="请确认密码">
    </div>
    <button >注册</button>
    <router-link to="/login">已有账号去登录</router-link>
 </div>

</template>

<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({name: 'Home'})
    }

    return {
      handleLogin
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
