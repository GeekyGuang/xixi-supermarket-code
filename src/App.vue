<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <Icon icon_name="shouye" class="docker-item__icon" />
      <div class="docker-item__title">首页</div>
    </div>
    <div class="docker__item">
      <Icon icon_name="cart" class="docker-item__icon" />
      <div class="docker-item__title">购物车</div>
    </div>
    <div class="docker__item">
      <Icon icon_name="dingdan" class="docker-item__icon" />
      <div class="docker-item__title">订单</div>
    </div>
    <div class="docker__item">
      <Icon icon_name="wode" class="docker-item__icon" />
      <div class="docker-item__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  box-shadow: 0 -0.01rem 0.01rem 0 #F1F1F1;
  padding: 0 0.18rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;

  &__item {
    padding: 0.07rem 0 0.06rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &--active {
      color: #1FA4FC;
    }
  }

  &-item__icon > svg {
    width: 0.24rem;
    height: 0.24rem;
    margin-bottom: .02rem;
  }

  &-item__title {
    font-size: .12rem;
  }
}
</style>
