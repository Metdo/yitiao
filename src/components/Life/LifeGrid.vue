<template>
    <div header-entry>
        <van-grid :column-num="4" class="van-grid-item__icon">
            <van-grid-item
                v-for="(item,index) in grid"
                style="font-size: 20px;"
                :key="index"
                :icon="item.icon"
                :text="item.title"
            />
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grid:[
                {
                    title: '建筑',
                    icon: 'bar-chart-o'
                },
                {
                    title: '民宿',
                    icon: 'wap-home'
                },
                {
                    title: '住宅',
                    icon: 'hotel-o'
                },
                {
                    title: '腾讯',
                    icon: 'chart-trending-o'
                },
                {
                    title: '职人',
                    icon: 'hotel-o'
                },
                {
                    title: '小店',
                    icon: 'shop-o'
                },
                {
                    title: '讲座',
                    icon: 'cashier-o'
                },
                {
                    title: '精选视频',
                    icon: 'play-circle-o'
                },
            ]
        }
    }
}
</script>

<style lang="scss" >

    .header-entry {
        padding: 0.4rem 0 0.1rem;
        margin-bottom: 0.2rem;
        font-size: 19PX;
    }
.van-grid-item__icon {
    padding: 0.4rem 0 0.1rem;
    margin-bottom: 0.2rem;
        font-size: 19px;
        .entry-item {
            align-items: center;
            width: 25%;
            margin-bottom: 0.3rem;
            flex-direction: column;
                .icon {
                    width: 0.7rem;
                    height: 0.7rem;
                }
                span {
                    font-size: 0.2rem;
                    color: #000;
                    text-align: center;
                }
        }
}

.van-grid-item__icon {
    font-size: 20px;
}

.van-grid-item__content {
        padding: 0px 8px;
}
</style>
