<template>
<div class="wrapper">
  <div class="front-page">
    <Position />
    <Search placeholder="山姆商店会员优惠" />
    <div class="main">
      <div class="banner">
        <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
      </div>
      <Categories />
      <div class="gap">
      </div>
      <div class="nearby">
        <h1>附近店铺</h1>
        <ul>
          <li>
            <div class="shop-img">
              <img src="./assets/images/wowmall.png" alt="">
            </div>
            <div class="shop-info">
              <h2 class="shop-name">沃尔玛</h2>
              <p class="shop-data">
                <span>月售1万+</span>
                <span>起送￥0</span>
                <span>基础运费￥5</span>
              </p>
              <p class="discount">VIP尊享满89元减4元运费券 (每月3张)</p>
            </div>
          </li>
          <li>
            <div class="shop-img">
              <img src="./assets/images/wowmall.png" alt="">
            </div>
            <div class="shop-info">
              <h2 class="shop-name">沃尔玛</h2>
              <p class="shop-data">
                <span>月售1万+</span>
                <span>起送￥0</span>
                <span>基础运费￥5</span>
              </p>
              <p class="discount">VIP尊享满89元减4元运费券 (每月3张)</p>
            </div>
          </li>
                  <li>
            <div class="shop-img">
              <img src="./assets/images/wowmall.png" alt="">
            </div>
            <div class="shop-info">
              <h2 class="shop-name">沃尔玛</h2>
              <p class="shop-data">
                <span>月售1万+</span>
                <span>起送￥0</span>
                <span>基础运费￥5</span>
              </p>
              <p class="discount">VIP尊享满89元减4元运费券 (每月3张)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Docker />
</div>


</template>
<script lang="ts">
import Docker from './components/Docker.vue'
import Search from './components/Search.vue'
import Position from './components/Position.vue'
import Categories from './components/Categories.vue'

export default {
  components: {
    Docker,
    Search,
    Position,
    Categories
}
}
</script>

<style lang="scss">
@import './style/helpers.scss';
.wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  color:$content-font-color;

  > .front-page {
    flex-grow: 1;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    overflow: auto;

    .main {
      flex-shrink: 1;
      overflow-x: auto;
      overflow-y: auto;

      &::-webkit-scrollbar {
            display:none
        }
    }

    .position-wrapper {
      margin-bottom: 16px;
    }

    .banner {
      margin-top: 12px;
      height: 0;
      overflow: hidden;
      padding:0 18px 86px;
      > img {
        width: 100%;
      }
    }

    .gap {
      height: 10px;
      background: #f1f1f1;
    }

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

  }


}
</style>
