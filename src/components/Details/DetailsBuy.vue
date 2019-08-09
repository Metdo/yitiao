<template>
    <div class="detailsbuy">
        <van-goods-action>
            <van-goods-action-icon
                icon="home-o"
                text="首页"
                @click="onClickIcon"
                to="/home/navSift"
            />
            <van-goods-action-icon
                icon="star-o"
                text="收藏"
                @click="onClickIcon"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                @click="onClickIcon"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="onClickButton"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>

<script>
export default {
    methods: {
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        }
    }
}
</script>

<style scoped>

.detailsbuy {
    position: fixed;
    bottom: 0;
    z-index: 999899;
}

</style>
