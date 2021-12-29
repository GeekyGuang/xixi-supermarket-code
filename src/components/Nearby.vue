<template>
        <div class="nearby">
        <h1>附近店铺</h1>
        <ul>
          <li v-for="info in infoList" :key="info.id">
            <div class="shop-img">
              <img :src="info.imgUrl" alt="">
            </div>
            <div class="shop-info">
              <h2 class="shop-name">{{info.shopName}}</h2>
              <p class="shop-data">
                <span >月售{{info.shopData.sale}}万+</span>
                <span>起送￥{{info.shopData.start}}</span>
                <span>基础运费￥{{info.shopData.baseFee}}</span>
              </p>
              <p class="discount">{{info.discount}}</p>
            </div>
          </li>
        </ul>
      </div>
</template>

<script lang="ts">
export default {
  setup(){
    const infoList = [
      {id: 1,
      shopName: '沃尔玛',
      imgUrl: require('../assets/images/wowmall.png'),
      shopData: [{sale: '1', start: '0', baseFee: '5'}],
      discount: 'VIP尊享满89元减4元运费券 (每月3张)'},
      {id: 2,
      shopName: '沃尔玛',
      imgUrl: require('../assets/images/wowmall.png'),
      shopData: {sale: '1', start: '0', baseFee: '5'},
      discount: 'VIP尊享满89元减4元运费券 (每月3张)'},
      {id: 3,
      shopName: '沃尔玛',
      imgUrl: require('../assets/images/wowmall.png'),
      shopData: [{sale: '1', start: '0', baseFee: '5'}],
      discount: 'VIP尊享满89元减4元运费券 (每月3张)'},
    ]

    return {
      infoList
    }
  }
}
</script>

<style lang="scss" scoped>
    .nearby {
      padding: 0 18px;

      > h1 {
        font-size: 18px;
        line-height: 25px;
        margin: 16px 0 14px;
      }
      > ul > li {
        display: flex;
        margin-bottom: 12px;

        > .shop-img {
          width: 56px;
          margin-right:  16px;
          > img {
            width: 100%;
          }
        }

        > .shop-info {
          width: 100%;
          border-bottom: 1px solid #F1F1F1;
          h2 {
            line-height: 22px;
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 8px;
          }

          .shop-data {
            line-height: 18px;
            font-size: 13px;
            margin-bottom: 8px;
            > span {
              margin-right: 16px;
            }
          }

          .discount {
            line-height: 18px;
            font-size: 13px;
            color: #E93B3B;
            margin-bottom: 12px;
          }
        }
      }
    }
</style>
