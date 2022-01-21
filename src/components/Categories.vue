<template>
  <ul class="categories">
    <li v-for="item in categories" :key="item.name" @click="handleClick(item.name)">
      <Icon :icon_name="item.name" />
      <div>{{item.title}}</div>
    </li>
  </ul>
</template>

<script lang="ts" setup>import { useRouter } from 'vue-router';


    const categories = [
      {name: 'supermarket', title: '超市便利'},
      {name: 'vegetable', title: '菜市场'},
      {name: 'fruit', title: '水果店'},
      {name: 'flower', title: '鲜花绿植'},
      {name: 'health', title: '医药健康'},
      {name: 'furniture', title: '家居时尚'},
      {name: 'cakes', title: '烘培蛋糕'},
      {name: 'checkin', title: '签到'},
      {name: 'bigbrand', title: '大牌免运'},
      {name: 'redenvolope', title: '红包套餐'},
    ]

    const router = useRouter()

    const handleClick = (tag: string) => {
      const arr = ['supermarket', 'vegetable', 'fruit']
      if(arr.includes(tag)){
        router.push('/shop/0')
      } else {
        router.push('/pending')
      }
    }

</script>

<style lang="scss" scoped>
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 0.16rem;
      justify-content: space-between;
      padding: 0.16rem 0.18rem;

      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.14rem;
        gap: 0.06rem;
        cursor: pointer;
         :deep(.icon) {
            width: 0.4rem;
            height: 0.4rem;
          }

        }

      }
</style>
