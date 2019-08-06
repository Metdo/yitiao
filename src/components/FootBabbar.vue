<template>
  <div class="footbabbar"> 
      <!--  :to="item.url" 声明式导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item,index) in tbabbar"
        :key="index"
        :icon="item.icon"
        @click="navTo(item.url)"
       >
       {{item.title}}
       </van-tabbar-item>

    </van-tabbar>


<!-- <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar> -->

  </div>
</template>

<script>
export default {
    name: 'footbabbar',
    data() {
        return {
            active: 0,
            tbabbar: [
                {
                    title: '首页',
                    url: 'home',
                    icon: 'home-o'
                },
                {
                    title: '分类',
                    url: 'classify',
                    icon: 'orders-o'
                },
                {
                    title: '生活馆',
                    url: 'life',
                    icon: 'friends-o'
                },
                {
                    title: '购物车',
                    url: 'cart',
                    icon: 'shopping-cart-o'
                },
                {
                    title: '我的',
                    url: 'mine',
                    icon: 'user-circle-o'
                },
            ]
        };
     },

     methods: {
         // 编程式导航
         navTo(name) {
             this.$router.push({
                 name
             })
         }
     }
};
</script>

<style>
</style>
