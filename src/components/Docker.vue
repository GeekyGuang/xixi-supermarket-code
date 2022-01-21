<template>
    <div class="docker">
    <router-link to="/" class="docker__item">
      <Icon icon_name="shouye"  />
      <div class="docker-item__title">首页</div>
    </router-link>
    <router-link to="/cart" class="docker__item">
      <Icon icon_name="cart"  />
      <div class="docker-item__title">购物车</div>
    </router-link>
    <router-link to="/order" class="docker__item">
      <Icon icon_name="dingdan"  />
      <div class="docker-item__title">订单</div>
    </router-link>
    <router-link to="/profile" class="docker__item">
      <Icon icon_name="wode"  />
      <div class="docker-item__title">我的</div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.docker {
  box-shadow: 0 -0.01rem 0.01rem 0 #F1F1F1;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  z-index: 99;

  .router-link-exact-active {
      color: #1FA4FC;
  }

  &__item {
    padding: 0.07rem 0 0.06rem;
    display: flex;
    flex-direction: column;
    align-items: center;


  }

  &-item__title {
    font-size: .12rem;
  }
}
</style>
