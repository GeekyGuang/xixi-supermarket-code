<template>
<Layout>
  <div class="order">
    <h2>我的订单</h2>
   <ul class="order-item" v-if="newOrderList.length > 0">
     <li v-for="order in newOrderList" :key="order.orderId">
       <h2 class="shop">{{order.shopName}}</h2>
       <div class="title">
         <h3>单号: O{{order.orderId}}</h3>
         <span>运送中</span>
       </div>
       <div class="content">
         <div class="imgs">
           <img v-for="(item, index) in order.shortProducts" :src="item.imgUrl" alt="" :key="index">
         </div>
         <div class="detail">
           <span>&yen;{{order.totalPrice}}</span>
           <span>共 {{order.totalCount}} 件</span>
         </div>
       </div>
       <p class="date">{{order.createDate}}</p>
     </li>
   </ul>
   <div class="empty-page" v-else>
      <Icon icon_name="loading" />
      <span>还没有购物记录哦~</span>
   </div>
  </div>
</Layout>
</template>

<script lang="ts" setup>
import { deepClone } from "@/lib/helper";
import { useStore } from "vuex";
import Layout from "../../components/Layout.vue";
import dayjs from 'dayjs'
const store = useStore()

const orderList = store.state.orderList
const newOrderList = deepClone(orderList).sort((a, b) => dayjs(b.createDate).valueOf() - dayjs(a.createDate).valueOf())

newOrderList.forEach(item => {
  item.createDate = dayjs(item.createDate).format('YYYY-MM-DD HH:mm:ss')
  item.totalCount = item.products.reduce((sum, item) => sum + item.count, 0)
  item.totalPrice = item.products.reduce((sum, item) => sum + (item.count * item.price) ,0).toFixed(2)
  item.shortProducts = item.products.slice(0, 4)
  })
</script>

<style lang="scss" scoped>
.order {
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: scroll;
  background: #f8f8f8;
  &::-webkit-scrollbar {
      display:none
  }

  .empty-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.24rem;
    .loading {
      :deep(.icon) {
        width: 0.64rem;
        height: 0.64rem;
      }
    }
  }

  > h2 {
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: #333;
    padding: 0.11rem 0;
    background: white;
    text-align: center;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
  .order-item {
    flex-shrink: 1;
    padding: 0.18rem;
    // margin-top: 0.44rem;

    li + li {
      margin-top: 0.16rem;
    }
    > li {
      background:  white;
      padding: 0.16rem;

      .content {
        display: flex;
        justify-content: space-between;
        margin-top: 0.16rem;

        > .imgs {
          img {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.12rem;
          }
        }

        > .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          span {
            text-align: right;
          }

          span:nth-of-type(1) {
            line-height: 0.2rem;
            font-size: 0.14rem;
            color:#E93B3B;
          }

          span:nth-of-type(2) {
            line-height: 0.14rem;
            font-size: 0.12rem;
            color:#333;
          }
        }
      }

      .shop {
        line-height: 0.2rem;
        font-size: 0.16rem;
        color: #333;
        padding-bottom: 0.12rem;
      }

      > .date {
        color: #999;
        text-align: right;
        line-height: 0.2rem;
        font-size: 0.12rem;
        padding-top: 0.12rem;
      }

      > .title {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h3 {
          line-height: 0.2rem;
          font-size: 0.14rem;
          color: #666;
        }

        span {
          color: #999;
          // text-align: right;
          line-height: 0.2rem;
          font-size: 0.14rem;
        }
      }
    }
  }
}
</style>
