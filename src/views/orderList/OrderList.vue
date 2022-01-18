<template>
<Layout>
  <div class="order">
    <h2>我的订单</h2>
   <ul class="order-item">
     <li>
       <div class="title">
         <h3>单号: 1221324123231</h3>
         <span>2022-01-18 12:23:23</span>
       </div>
       <div class="content">
         <div class="imgs">
           <img src="https://img1.baidu.com/it/u=544840061,2614948313&fm=26&fmt=auto" alt="">
           <img src="https://img1.baidu.com/it/u=544840061,2614948313&fm=26&fmt=auto" alt="">
           <img src="https://img1.baidu.com/it/u=544840061,2614948313&fm=26&fmt=auto" alt="">
         </div>
         <div class="detail">
           <span>&yen;66.6</span>
           <span>共3件</span>
         </div>
       </div>
     </li>
   </ul>
  </div>
</Layout>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import Layout from "../../components/Layout.vue";
const store = useStore()

const orderList = store.state.orderList



</script>

<style lang="scss" scoped>
.order {
  flex-grow: 1;
  overflow-y: scroll;
  background: #f8f8f8;

  > h2 {
    line-height: 22px;
    font-size: 16px;
    color: #333;
    padding: 11px 0;
    background: white;
    text-align: center;
  }
  .order-item {
    padding: 18px;
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

      > .title {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        // align-items: end;

        h3 {
          line-height: 22px;
          font-size: 16px;
          color: #333;
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
