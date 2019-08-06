<template>
    <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white">
            <!-- <van-swipe-item v-for="(image, index) in images" :key="index">{{image.img}}</van-swipe-item> -->
            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/3bfe4bfa05a0c5eb07c2ad95df00eb31_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>
            
            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/2308f2b7457ff52a9d9e6415bcce0b80_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/b26032afffa852e1ae53519931a32648_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/dcb5fdfac4bb0ab61a831057d1af84d4_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/47163a098dfb5c5501a0673d6df083da_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>

            <van-swipe-item>
                <img src="https://img01.yit.com/CMSRESQN/ada38fb23d6b7abf23411e24de48a2d8_750X420.jpeg?imageMogr2/thumbnail/750x" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>

</template>

<script>
export default {
    data() {
    return {

      images: [
        //   imgUrl:require("");
            
          
            
          
          
        
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe {
    width: 100%;
    height: 2.386667rem;
    // background: pink; 
        img {
            width: 100%;
            height: 100%;
        }
}



</style>
