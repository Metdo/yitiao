<template>
  <!--  src="https://img01.yit.com/media/65b75c16-9b1a-4925-ae07-3b7f781b69b1.jpeg?imageMogr2/thumbnail/!345x345r/gravity/Center/crop/345x345" -->
  <div>
    <div class="products" >
      <div class="product-wrap" v-for="(item,index) in palacelist" :key="index" @click="navTo(item.entity.id)" >
        <a
          href="/r/product?product_id=644798&amp;_spm=1.7461.38-45-0-107888.0.pr-644798"
          data-randomspm="1565103632130808"
        >
          <div class="comp-cms-product">
            <div class="image-wrap" style="padding-bottom: 100%;">
              <div class="LazyLoad is-visible">
                <img
                 
                  :src="item.entity.imgUrl"
                  
                  alt
                />
              </div>
            </div>
            <div class="detail">
              <div class="title line-clamp-2" v-text="item.entity.name">
                <!-- react-text: 81839 -->
                <!-- {{item.name}} -->
                <!-- /react-text -->
              </div>
              <div class="sub-name line-clamp-2">{{item.entity.subName}}</div>
              <div class="price">
                <div class="money">
                  <span class="coin">￥</span>
                  <!-- react-text: 81844 -->
                  <!-- /react-text -->
                  <!-- react-text: 81845 -->
                  189
                  <!-- /react-text -->
                </div>
                <del>
                  <!-- react-text: 81847 -->
                  ￥
                  <!-- /react-text -->
                  <!-- react-text: 81848 -->
                  199
                  <!-- /react-text -->
                </del>
              </div>
              <!-- <div class="tags">
                <div class="tag" style="background-color: rgb(216, 118, 114);">限时特惠</div>
              </div> -->
            </div>
          </div>
        </a>
      </div>
      <div class="product-wrap">
        <a
          href="/r/product?product_id=644502&amp;_spm=1.7461.38-45-0-107888.1.pr-644502"
          data-randomspm="1565103632130950"
        >
          <div class="comp-cms-product">
            <div class="image-wrap" style="padding-bottom: 100%;">
              <div class="LazyLoad is-visible">
                <img
                  src="https://img01.yit.com/media/af0a080d-9e0d-42e0-bba4-5de4bfd2a1d3.jpeg?imageMogr2/thumbnail/!345x345r/gravity/Center/crop/345x345"
                  alt
                />
              </div>
            </div>
            <div class="detail">
              <div class="title line-clamp-2">
                <span class="Icon icon-video" style="color: rgb(255, 255, 255);">
                  <span class>标签</span>
                  <!-- react-text: 81860 -->
                  <!-- /react-text -->
                </span>
                <!-- react-text: 81861 -->
                故宫口红礼盒
                <!-- /react-text -->
              </div>
              <div class="sub-name line-clamp-2">精致的中国风包装，集合6款故宫口红，取色于故宫馆藏文物，显白滋润不拔干</div>
              <div class="price">
                <div class="money">
                  <span class="coin">￥</span>
                  <!-- react-text: 81866 -->
                  <!-- /react-text -->
                  <!-- react-text: 81867 -->
                  1199
                  <!-- /react-text -->
                </div>
              </div>
              <div class="tags"></div>
            </div>
          </div>
        </a>
      </div>
      <div class="product-wrap">
        <a
          href="/r/product?product_id=693650&amp;_spm=1.7461.38-45-0-107888.2.pr-693650"
          data-randomspm="1565104235533274"
        >
          <div class="comp-cms-product">
            <div class="image-wrap" style="padding-bottom: 100%;">
              <div class="LazyLoad is-visible">
                <img
                  src="https://img01.yit.com/media/79ba27c6-6c4b-482d-8e6b-c94ba889469a.jpeg?imageMogr2/thumbnail/!345x345r/gravity/Center/crop/345x345"
                  alt
                />
              </div>
            </div>
            <div class="detail">
              <div class="title line-clamp-2">
                <span class="Icon icon-video" style="color: rgb(255, 255, 255);">
                  <span class>标签</span>
                  <!-- react-text: 81878 -->
                  <!-- /react-text -->
                </span>
                <!-- react-text: 81879 -->
                故宫限量高清化妆镜礼盒
                <!-- /react-text -->
              </div>
              <div class="sub-name line-clamp-2">化妆镜+放大镜+化妆刷套装，模拟自然光、显色度好，让妆容精致完美</div>
              <div class="price">
                <div class="money">
                  <span class="coin">￥</span>
                  <!-- react-text: 81884 -->
                  <!-- /react-text -->
                  <!-- react-text: 81885 -->
                  899
                  <!-- /react-text -->
                </div>
              </div>
              <div class="tags"></div>
            </div>
          </div>
        </a>
      </div>
      <div class="product-wrap">
        <a
          href="/r/product?product_id=113673&amp;_spm=1.7461.38-45-0-107888.3.pr-113673"
          data-randomspm="1565104235533644"
        >
          <div class="comp-cms-product">
            <div class="image-wrap" style="padding-bottom: 100%;">
              <div class="LazyLoad is-visible">
                <img
                  src="https://img01.yit.com/media/eb326a46-db1d-4912-88f0-cc685265773c.jpg?imageMogr2/thumbnail/!345x345r/gravity/Center/crop/345x345"
                  alt
                />
              </div>
            </div>
            <div class="detail">
              <div class="title line-clamp-2">
                <!-- react-text: 81894 -->
                十二花神系列团扇
                <!-- /react-text -->
              </div>
              <div class="sub-name line-clamp-2">故宫文化珠宝出品，真丝扇面、天然材质扇柄，配色复古典雅、三款可选</div>
              <div class="price">
                <div class="money">
                  <span class="coin">￥</span>
                  <!-- react-text: 81899 -->
                  <!-- /react-text -->
                  <!-- react-text: 81900 -->
                  118
                  <!-- /react-text -->
                </div>
              </div>
              <div class="tags"></div>
            </div>
          </div>
        </a>
      </div>

      <div class="product-wrap">
        <a
          href="/r/product?product_id=644798&amp;_spm=1.7461.38-45-0-107888.0.pr-644798"
          data-randomspm="1565103632130808"
        >
          <div class="comp-cms-product">
            <div class="image-wrap" style="padding-bottom: 100%;">
              <div class="LazyLoad is-visible">
                <img
                  src="https://img01.yit.com/media/65b75c16-9b1a-4925-ae07-3b7f781b69b1.jpeg?imageMogr2/thumbnail/!345x345r/gravity/Center/crop/345x345"
                  alt
                />
              </div>
            </div>
            <div class="detail">
              <div class="title line-clamp-2">
                <!-- react-text: 81839 -->
                故宫口红
                <!-- /react-text -->
              </div>
              <div class="sub-name line-clamp-2">取色于故宫馆藏文物，显白滋润不拔干，6种颜色，中国风造型、火遍美妆圈</div>
              <div class="price">
                <div class="money">
                  <span class="coin">￥</span>
                  <!-- react-text: 81844 -->
                  <!-- /react-text -->
                  <!-- react-text: 81845 -->
                  189
                  <!-- /react-text -->
                </div>
                <del>
                  <!-- react-text: 81847 -->
                  ￥
                  <!-- /react-text -->
                  <!-- react-text: 81848 -->
                  199
                  <!-- /react-text -->
                </del>
              </div>
              <!-- <div class="tags">
                <div class="tag" style="background-color: rgb(216, 118, 114);">限时特惠</div>
              </div> -->
            </div>
          </div>
        </a>
      </div>

    </div>

     

  </div>
</template>

<script>
// import { close } from 'fs';
export default {
  data(){
    return{
      palacelist:[]
      
    }
  },
  methods: {
    // async getpalace() {
    //   let data = await this.$axios(
    //     "https://www.easy-mock.com/mock/5d400b1f2c0fb9351245b95b/example/palacelist"
    //   );
    //   this.list=data;
    //   console.log(this.list);
    // }
  },

  //点击存储
  navTo(id){
      this.$router.push({name:'details',params:{ids:id}})
  },

  async created(){
    let data = await this.$axios(
        "https://www.easy-mock.com/mock/5d400b1f2c0fb9351245b95b/example/palacelist"
      );
      // this.list=data.data;
      this.palacelist = data.data[0].entityList;
     
      console.log( this.palacelist)

  },

  
    
};


</script>

<style >

.products {
    margin-bottom: 0rem;
    background-color: rgb(244, 238, 231);
    display: flex;
    flex-wrap: wrap;
}

.product-wrap {
    width: 4.59375rem;
    margin-bottom: 0.15rem;
    margin-left: 0.3rem;
}

a {
    color: #000;
    background: transparent;
    text-decoration: none;
    outline: none;
}

.comp-cms-product {
    height: 100%;
    background-color: #fff;
}

.comp-cms-product .image-wrap {
    width: 100%;
    height: 0;
    overflow: hidden;
    border-radius: 0.06rem;
    position: relative;
    background-color: #f2f2f2;
}

.image-wrap img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

/* 文字------------------------ */

.detail {
    padding: 0.3rem 0.15rem 0.15rem;
}

.detail .title {
    -webkit-line-clamp: 1;
    font-family: PingFangSC-Regular;
    font-size: .375rem;
    color: #333333; 
    letter-spacing: 0;
    line-height: .53125rem;
    white-space: initial;
}

.detail .sub-name {
    -webkit-line-clamp: 3;
    height: 1.34375rem;
    font-family: PingFangSC-Regular;
    font-size: .35rem;
    color: #999999;
    letter-spacing: 0;
    line-height: .53125rem;
    margin-top: 0.085rem;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.comp-cms-product .detail .sub-name {
    -webkit-line-clamp: 3;
    height: 1.52rem;
}


.detail .price {
    letter-spacing: 0;
    margin-top: 0.15rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
    font-family: "Avenir Next", "pingfang-regular";
}

.detail .price .money {
    font-size: .4rem;
    color: #ad0e11;
}

.price .money .coin {
    font-size: .35rem;
    letter-spacing: -0.1rem;
}

 .detail .price del {
    font-size: 0.3rem;
    color: #999;
    margin-left: 0.15rem;
}








</style>
