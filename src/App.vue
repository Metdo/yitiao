<template>
  <div id="app">
    
    <router-view/>
    <!-- <Details /> -->
    <FootBabbar />
  </div>
</template>
<script>

import FootBabbar from './components/FootBabbar';

// import DetailsSwipe from './components/Details/DetailsSwipe';
// import Details from './views/Details';

import './assets/yitiao.css'

export default {
  name: 'app',
  components: {
    // Details,
    FootBabbar,
    // DetailsSwipe
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// html {
//   font-size: 32px;
// }

*{
  margin: 0;
  padding: 0;
}

ul,li {
  list-style: none;
}

div,html {
  text-decoration: none;
}
a:hover {
    text-decoration: none;
}

baby {
  font-size: 16px;
}



</style>
