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
              <Icon icon_name="minus" @click="handleChangeCartItemInfo(shopId,item._id,item, -1, shopName)"/>
              <span>{{cartList?.[shopId]?.products[item._id]?.count || 0}}</span>
              <Icon icon_name="add" @click="handleChangeCartItemInfo(shopId,item._id,item, 1, shopName)"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import Icon from "@/components/Icon.vue";
import { get } from "@/utils/request";
import { ref, } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { watchEffect } from '@vue/runtime-core';
import {useCommonCartEffect} from '@/effects/commonCartEffect'

const props = defineProps({
  shopName: String
})

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
      const products = ref<any>([])
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


const {checkedTab, handleTabClick} = useCheckTabEffect()
const route = useRoute()
const shopId = route.params.id as string
const {products} = useGetProductsEffect(checkedTab, shopId)
const { cartList,handleChangeCartItemInfo } = useCommonCartEffect()

</script>
<style lang="scss" scoped>
@import '~@/style/helpers.scss';
  .content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    display: flex;

    .goods {
      padding: 0 0.16rem;
      flex-grow: 1;
      overflow-x: hidden;
      overflow-y: scroll;
        &::-webkit-scrollbar {
          display:none
        }

      > .goods_item {
        display: flex;
        padding-bottom: 0.12rem;
        border-bottom: 0.01rem solid #F1F1F1;
        margin-bottom: 0.12rem;

        .info {
          flex-grow: 1;
          overflow: hidden;
          height: 0.68rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .manipulate_button {
            display: flex;
            gap: 0.1rem;
            align-items: center;
            margin-left: auto;
            :deep(.add) {
              color: $blue-button-color;
              cursor: pointer;
              // background: white;
              > .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }

            :deep(.minus) {
              color: $grey-icon-color;
              cursor: pointer;
              > .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }


          }


          > h2 {
            line-height: 0.2rem;
            font-size: 0.14rem;

            @extend %ellipsis;
          }

          &_sale {
            line-height: 0.16rem;
            font-size: 0.12rem;
          }

          &_bottom {
            display: flex;
            align-items: center;
            .new_price {
              line-height: 0.2rem;
              font-size: 0.16rem;
              color: $red-highlight-color;
            }

            .old_price {
              line-height: 0.2rem;
              font-size: 0.12rem;
              color: #999999;
              text-decoration: line-through;
              margin-left: 0.08rem;
            }
          }
        }
        .img {
          width: 0.68rem;
          height: 0.68rem;
          margin-right: 0.16rem;
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
      width: 0.76rem;
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
        line-height: 0.16rem;
        font-size: 0.14rem;
        padding: 0.12rem 0;
        text-align: center;
        cursor: pointer;
      }
    }
  }
</style>
