<template>
  <div class="home_nav">
    <!-- <van-tabs  swipeable @click="no" v-for="(item,index) in navigation" :key="index" v-text="item.title">
            <van-tab    >
            <router-view/>
        

            </van-tab>
    </van-tabs> -->

  

    <ul :class="{position:iscolor}">
      <li>
        <router-link to="/" active-class="active" exact>精选</router-link>
      </li>
      <li>
        <router-link to="/home/navPalace" active-class="active">故宫专区</router-link>
      </li>
      <li>
        <router-link to="/home/navFamily" active-class="active">居家生活</router-link>
      </li>
      <li>
        <router-link to="/home/NavCate" active-class="active">美食厨房</router-link>
      </li>
      <li>
        <router-link to="/home/navPalace" active-class="active">服饰宝珠</router-link>
      </li>
      <li>
        <router-link to="1" active-class="active">美妆洗护</router-link>
      </li>
      <li>
        <router-link to="1" active-class="active">数码家电</router-link>
      </li>
      <li>
        <router-link to="1" active-class="active">图书文创</router-link>
      </li>
      <li>
        <router-link to="1" active-class="active">运动健康</router-link>
      </li>
      
    </ul>
    </div>
 
</template>

<script>

export default {
  data(){
    return{
iscolor:false,
    }
  },

  // data() {
  //   return {
  //     active: 1,
  //     navigation: [
  //       {
  //         // title: ['精选','故宫专区','居家生活','美食厨房','服饰珠宝','美妆洗护','数码家电','图书文创','运动健康']
  //         title: "精选",
  //         url: "navSift"
  //       },
  //       {
  //         title: "故宫专区",
  //         url: "aaa"
  //       },
  //       {
  //         title: "母婴",
  //         url: "navFamily"
  //       }
  //     ]
  //   };
  // },
  // methods: {
  //   // 编程式导航
  //   nameTo(name) {
  //     console.log(6666);
  //     //  this.$router.push(name)
  //   },
  //   no() {
  //     console.log(98);
  //   }
  // }

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


mounted() {
  window.onscroll = () => {
  
      if (window.scrollY > 50) {
          this.iscolor = true;
        
      } else {
          this.iscolor = false;
      }
    };
  },





};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.home_nav {
  // width: 1000px;
  height: 44px;
  background: #fff;
  border-bottom: #ddd 1px solid;
  overflow: auto;
  margin-top: 50px; 
  z-index: 999;
  ul {
    height: 44px;
    width: 728px;
    li {
      float: left;
      // position: relative;
      width: auto;
      // padding: 13px;
      text-align: center;
      height: 44px;
      margin: 0 14px;
      a {
        display: inline-block;
        line-height: 44px;
        // padding: 0 0;
        font-size: 14px;
        color: #666;
        &.active {
          border-bottom: 2px solid #fe4070;
          color: #fe4070;
        }
      }
    }
  }
}
.position{
  position: fixed;
  top: 0px;
  background: #fff;
  color: white;
  z-index:9999;
}
</style>

