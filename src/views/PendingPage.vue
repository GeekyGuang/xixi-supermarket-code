<template>
    <div class="wrapper">
        <div class="back" @click="handleBack">
            <Icon icon_name="left" />
            <span>返回</span>
        </div>
        <div class="loading"></div>
        <p>页面正在开发中，去其他地方逛逛吧~</p>
    </div>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const handleBack = () => {
    router.back()
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #f8f8f8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.16rem;

    .back{
        display: flex;
        padding: 0 0.18rem;
        align-items: center;
        height: 0.48rem;
        width: 100%;
        background: white;

    }

    .loading {
    position: relative;
    width: 2rem;
    height: 2rem;
    }

    .loading::before, .loading::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #4fb0f9;
    border-radius: 50%;
    animation: wave 1.5s infinite linear;
    }

    .loading::after {
    animation-direction: reverse;
    }

    @keyframes wave {
    0% {width: 0; height: 0; opacity: 1;}
    100% {width: 1rem; height: 1rem; opacity: 0.5;}
    }
}
</style>