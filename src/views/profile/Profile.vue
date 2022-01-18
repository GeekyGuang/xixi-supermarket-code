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
  </div>
</Layout>
</template>

<script lang="ts" setup>
import Layout from "../../components/Layout.vue";
const coupons = [{name: '红包', count: 218}, {name: '优惠券', count: '12张'}, {name: '鲜豆', count: 88}, {name: '白条', count: 1000}]
const avatar = require('@/assets/images/avatar.png')

</script>

<style lang="scss" scoped>
.profile {
  flex-grow: 1;

  .blue-bg {
    height: 240px;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .info {
    margin: -140px 18px 0;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 6px 15px -6px rgba(0,0,0, .2);
    padding-top: 59px;
    z-index: 10;
    position: relative;

    > img {
      display: block;
      width: 94px;
      height: 94px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%)
    }

    .coupon {
      border-top: 1px solid  #F1F1F1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 28px 16px;
      > li {
        span {
          display: block;
          text-align: center;
        }

        span:nth-of-type(1) {
          line-height: 17px;
          font-size: 12px;
          color: #C1C0C9;
        }

        span:nth-of-type(2) {
          line-height: 28px;
          font-size: 20px;
          color: #262628;
          margin-top: 3px;
        }
      }
    }

    > p {
      line-height: 17px;
      font-size: 14px;
      color: #C1C0C9;
      text-align: center;
      padding: 2px 0 12px;
    }

    .info-name {
      z-index: 10;

      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        line-height: 36px;
        font-size: 24px;
        color: #262628;
        letter-spacing: 0.19px;
        font-weight: normal;
        margin: 0 12px;
      }

      .placeholder {
        height: 30px;
        width: 60px;
      }
      .star-wrapper {
        background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
        border-radius: 7.5px;
        height: 30px;
        width: 60px;
        display: flex;
        align-items: center;
        padding: 4px;
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
