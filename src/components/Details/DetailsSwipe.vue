<template>
    <div>
        <van-swipe @change="onChange">
            <van-swipe-item>
                <img src="https://img01.yit.com/media/897dc6f7-4d47-4abb-8829-b6bf13391af6.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://img01.yit.com/media/6e380ba1-b4dd-412b-80a8-01b19f2edfd7.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://img01.yit.com/media/3798c845-d7af-485e-95a4-253ab366d2cd.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://img01.yit.com/media/1e0f2c5a-0204-453c-96a3-b022a827bdfd.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://img01.yit.com/media/9a50cc7b-e722-4db0-84f4-5d8ca107bcf5.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://img01.yit.com/media/db21b6dc-a206-4562-ab08-36018c34dd5f.jpg?imageMogr2/thumbnail/640x" alt="">
            </van-swipe-item>

            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/6
            </div>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
        current: 0
        }
    },

    methods: {
        onChange(index) {
        this.current = index;
        }
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 100%;
}

.custom-indicator {
    position: absolute;
    bottom: .5rem;
    right: .6rem;
    border-radius: 0.18rem;
        background: rgba(0, 0, 0, 0.2);
            line-height: 0.5rem;
    font-size: .25rem;
    width: .7rem;
    height: .5rem;
    text-align: center;
}

</style>
