<template>
    <div class="sidebar">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="(item,index) in sidebar" :key="index" :to="item.url" :title="item.title" />
            <!-- <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" /> -->
        </van-sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeKey: 0,
            sidebar: [
                {
                    title: '日用美物',
                    url: 'classifyDaily',
                },
                {
                    title: '夏日专区',
                    url: 'classifySummer',
                },
                {
                    title: '精品新选',
                    url: 'classifyBoutique',
                },
                {
                    title: '热销榜单',
                    url: 'classifySummer',
                },
                {
                    title: '居家生活',
                    url: 'classifySummer',
                },
                {
                    title: '美食厨房',
                    url: 'classifySummer',
                },
                {
                    title: '服饰珠宝',
                    url: 'classifySummer',
                },
                {
                    title: '美妆洗护',
                    url: 'classifySummer',
                },
                {
                    title: '数码家电',
                    url: 'classifySummer',
                },
                {
                    title: '运动健康',
                    url: 'classifySummer',
                },
                {
                    title: '图文书创',
                    url: 'classifySummer',
                }
               
                
            ]
        };
    },
    
}
</script>

<style lang="scss" scoped>

.van-sidebar-item {
    padding: 10px 12px 13px 8px;
    /* border-left: 3px solid transparent; */   
    color: #555;
}

.van-sidebar-item__text {
    border-left: 2PX solid #AD0E11;
}

.van-sidebar-item__text {
    border-left: 2PX solid #AD0E11;
}
.van-sidebar{
    float: left;
   
}

.sidebar {
    margin-top: 54px;
    // position: fixed;
    // left: 0;
}

</style>
