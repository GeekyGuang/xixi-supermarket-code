<template>
<Layout>
  <div class="order">
    <h2>我的订单</h2>
   <ul class="order-item">
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

  > h2 {
    line-height: 22px;
    font-size: 16px;
    color: #333;
    padding: 11px 0;
    background: white;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .order-item {
    flex-shrink: 1;
    padding: 18px;
    margin-top: 44px;

    li + li {
      margin-top: 16px;
    }
    > li {
      background:  white;
      padding: 16px;

      .content {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        > .imgs {
          img {
            width: 40px;
            height: 40px;
            margin-right: 12px;
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
            line-height: 20px;
            font-size: 14px;
            color:#E93B3B;
          }

          span:nth-of-type(2) {
            line-height: 14px;
            font-size: 12px;
            color:#333;
          }
        }
      }

      .shop {
        line-height: 20px;
        font-size: 16px;
        color: #333;
        padding-bottom: 12px;
      }

      > .date {
        color: #999;
        text-align: right;
        line-height: 20px;
        font-size: 12px;
        padding-top: 12px;
      }

      > .title {
        display: flex;
        // flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h3 {
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }

        span {
          color: #999;
          // text-align: right;
          line-height: 20px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
