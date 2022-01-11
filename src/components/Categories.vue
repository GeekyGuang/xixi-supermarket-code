<template>
  <ul class="categories">
    <li v-for="item in categories" :key="item.name">
      <Icon :icon_name="item.name" />
      <div>{{item.title}}</div>
    </li>
  </ul>
</template>

<script lang="ts" setup>

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

</script>

<style lang="scss" scoped>
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      padding: 16px 18px;

      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        gap: 6px;
         :deep(.icon) {
            width: 40px;
            height: 40px;
          }

        }

      }
</style>
