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
  }
}
</script>
