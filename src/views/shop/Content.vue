<template>
  <div class="content">
    <ul class="categories">
       <li :class="{categories__active: checkedTab === item.tab}"
           v-for="item in CATEGORIES"
           :key="item.tab"
           @click="handleTabClick(item.tab)"
           >{{item.name}}</li>
    </ul>
    <ul class="goods">
      <li class="goods_item" v-for="item in products" :key="item._id">
        <div class="img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="info">
          <h2 clas="info_name">{{item.name}}</h2>
          <div class="info_sale">月售 {{item.sales}} 件</div>
          <div class="info_bottom">
            <div class="new_price">&yen;{{item.price}}
            </div>
            <div class="old_price">&yen;{{item.oldPrice}}
            </div>
            <div class="manipulate_button">
              <Icon icon_name="minus" @click="handleChangeCartItemInfo(shopId,item._id,item, -1)"/>
              <span>{{cartList?.[shopId]?.[item._id]?.count || 0}}</span>
              <Icon icon_name="add" @click="handleChangeCartItemInfo(shopId,item._id,item, 1)"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/Icon.vue";
import { get } from "@/utils/request";
import { ref, } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { watchEffect } from '@vue/runtime-core';
import {useCommonCartEffect} from './commonCartEffect'

const CATEGORIES = [
  {
    name: '全部商品',
    tab: 'all'
  },
  {
    name: '秒杀',
    tab: 'seckill'
  },
  {
    name: '新鲜水果',
    tab: 'fruit'
  },
  {
    name: '休闲食品',
    tab: 'snacks'
  },
  {
    name: '时令蔬菜',
    tab: 'vegetables'
  }
]

const useGetProductsEffect = (checkedTab, shopId) => {
      const products = ref([])
      const getProducts = async () => {
        const result = await get(`/api/shop/${shopId}/products`, {tab: checkedTab.value})
        products.value = result.data
      }
      watchEffect(() => getProducts())

      return {
        products
      }
}

const useCheckTabEffect = () => {
      const checkedTab = ref(CATEGORIES[0].tab)
      const handleTabClick = (tab:string) => {
        checkedTab.value = tab
      }

      return {
        checkedTab,
        handleTabClick
      }
}

export default {
    components: { Icon },
    setup(){
      const {checkedTab, handleTabClick} = useCheckTabEffect()
      const route = useRoute()
      const shopId = route.params.id
      const {products} = useGetProductsEffect(checkedTab, shopId)
      const { cartList,handleChangeCartItemInfo } = useCommonCartEffect()

      return {
        products,
        CATEGORIES,
        checkedTab,
        handleTabClick,
        handleChangeCartItemInfo,
        shopId,
        cartList
      }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/style/helpers.scss';
  .content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    display: flex;

    .goods {
      padding: 0 16px;
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: scroll;
        &::-webkit-scrollbar {
          display:none
        }

      > .goods_item {
        display: flex;
        padding-bottom: 12px;
        border-bottom: 1px solid #F1F1F1;
        margin-bottom: 12px;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 68px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .manipulate_button {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-left: auto;
            :deep(.add) {
              color: $blue-button-color;
              // background: white;
              > .icon {
                width: 20px;
                height: 20px;
              }
            }

            :deep(.minus) {
              color: #666666;
              > .icon {
                width: 20px;
                height: 20px;
              }
            }


          }


          > h2 {
            line-height: 20px;
            font-size: 14px;

            @extend %ellipsis;
          }

          &_sale {
            line-height: 16px;
            font-size: 12px;
          }

          &_bottom {
            display: flex;
            align-items: center;
            .new_price {
              line-height: 20px;
              font-size: 16px;
              color: $red-highlight-color;
            }

            .old_price {
              line-height: 20px;
              font-size: 12px;
              color: #999999;
              text-decoration: line-through;
              margin-left: 8px;
            }
          }
        }
        .img {
          width: 68px;
          height: 68px;
          margin-right: 16px;
          flex-shrink: 0;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

    }

    .categories {
      width: 76px;
      height: 100%;
      background:  $grey-background;
      overflow-y: scroll;
      flex-shrink: 0;

      &::-webkit-scrollbar {
            display:none
      }

      &__active {
        background: white;
      }

      > li {
        line-height: 16px;
        font-size: 14px;
        padding: 12px 0;
        text-align: center;
      }
    }
  }
</style>
