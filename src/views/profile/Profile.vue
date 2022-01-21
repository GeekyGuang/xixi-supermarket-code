<template>
<Layout>
  <div class="profile">
   <div class="blue-bg">
   </div>
   <div class="info">
     <div class="info-name">
      <div class="placeholder"></div>
      <h2>野原新之助</h2>
      <div class="star-wrapper">
        <Icon icon_name="star" />
        <span>16</span>
      </div>
     </div>
     <p>ID: 155568751</p>
     <ul class="coupon">
        <li v-for="item in coupons" :key="item.name">
          <span>{{item.name}}</span>
          <span>{{item.count}}</span>
        </li>
     </ul>
     <img :src="avatar" alt="">

   </div>
   <ul class="others">
     <li>
       <Icon icon_name="wallet" />
       <span>我的钱包</span>
       <Icon icon_name="left" />
     </li>
     <li>
       <Icon icon_name="address" />
       <span>我的地址</span>
       <Icon icon_name="left" />
     </li>
     <li>
       <Icon icon_name="waitress" />
       <span>客服与帮助</span>
       <Icon icon_name="left" />
     </li>
   </ul>
   <div class="logout" @click="handleLogout">
     退出登录
   </div>
  </div>
</Layout>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import Layout from "../../components/Layout.vue";
const coupons = [{name: '红包', count: 218}, {name: '优惠券', count: '12张'}, {name: '鲜豆', count: 88}, {name: '白条', count: 1000}]
const avatar = require('@/assets/images/avatar.png')

const router = useRouter()
const handleLogout = () => {
  localStorage.isLogin = false
  router.push('/login')
}

</script>

<style lang="scss" scoped>
.profile {
  flex-grow: 1;
  overflow-y: scroll;
  &::-webkit-scrollbar {
      display:none
  }

  .logout {
    text-align: center;
    background: white;
    box-shadow: 0rem 0.03rem 0.15rem -0.06rem rgba(0,0,0, .2);
    font-size: 0.14rem;
    color: #e93b3b;
    line-height: 0.2rem;
    padding: 0.08rem 0;
    margin: 0.16rem 0.18rem 0;
  }

  .others {
    z-index: 11;
    margin: 0.16rem 0.18rem 0;
    background: white;
    box-shadow: 0rem 0.03rem 0.15rem -0.06rem rgba(0,0,0, .2);
    padding: 0.16rem;
    position: relative;

    > li + li {
      margin-top: 0.24rem;
    }

    > li {
      display: flex;
      align-items: center;

      > span {
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #262626;
        margin-left: 0.12rem;
      }

      .wallet, .address, .waitress {
        :deep(.icon) {
          width: 0.22rem;
          height: 0.22rem;
        }
      }

      .left {
        transform: rotate(180deg);
        margin-left: auto;
        :deep(.icon) {
          width: 0.12rem;
          height: 0.12rem;
        }
      }

    }
  }

  .blue-bg {
    height: 2.1rem;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .info {
    margin: -1.1rem 0.18rem 0;
    background: white;
    border-radius: 0.04rem;
    box-shadow: 0rem 0.03rem 0.15rem -0.06rem rgba(0,0,0, .2);
    padding-top: 0.59rem;
    z-index: 10;
    position: relative;

    > img {
      display: block;
      width: 0.94rem;
      height: 0.94rem;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%)
    }

    .coupon {
      border-top: 0.01rem solid  #F1F1F1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.12rem 0.28rem 0.16rem;
      > li {
        span {
          display: block;
          text-align: center;
        }

        span:nth-of-type(1) {
          line-height: 0.17rem;
          font-size: 0.12rem;
          color: #C1C0C9;
        }

        span:nth-of-type(2) {
          line-height: 0.28rem;
          font-size: 0.2rem;
          color: #262628;
          margin-top: 0.03rem;
        }
      }
    }

    > p {
      line-height: 0.17rem;
      font-size: 0.14rem;
      color: #C1C0C9;
      text-align: center;
      padding: 0.02rem 0 0.12rem;
    }

    .info-name {
      z-index: 10;

      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        line-height: 0.36rem;
        font-size: 0.24rem;
        color: #262628;
        letter-spacing: 0.0019rem;
        font-weight: normal;
        margin: 0 0.12rem;
      }

      .placeholder {
        height: 0.3rem;
        width: 0.6rem;
      }
      .star-wrapper {
        background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
        border-radius: 0.075rem;
        height: 0.3rem;
        width: 0.6rem;
        display: flex;
        align-items: center;
        padding: 0.04rem;
        transform: scale(.5);
        transform-origin: left center;

        span {
          flex-grow: 1;
          color: white;
          text-align: center;
        }
      }
    }
  }
}
</style>
