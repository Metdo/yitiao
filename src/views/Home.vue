<template>
  <div class="home">
    <HomeSearch />
    <HomeNav />
    <router-view />
    <!-- <Swipe /> -->

    
  </div>
</template>

<script>

import HomeSearch from '../components/HomeSearch';
import HomeNav from '../components/HomeNav';
// import Swipe from '../components/HomePage/Swipe';



export default {
  name: 'home',
  data() {
    return {
      active: 0
    }
  },
  components: {
    HomeSearch,
    HomeNav,
    // Swipe
  },

  // computed: {
  //   activated() {
  //     window.onscroll = () => {
  //       // 吸顶菜单
  //       console.log(window.scrollY);
  //       // if (window.scrollY >= 270) {
  //       //   this.menuFixed = true;
  //       // } else {
  //       //   this.menuFixed = false;
  //       // }
  //     };
  //   },
  // }


}
</script>

<style scoped>
.home {
  margin-bottom: 1.5625rem; 
}


</style>
