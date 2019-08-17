<template>
  <div v-if="detas.length>0">
    <div class="shoppingBox" v-if="shop">
      <span>商品已成功添加购物车!</span>
      <span @click="toShopping">继续购物</span>
      <span @click="toCart">去购物车</span>
    </div>
    <div class="errBox" v-if="display">
      <p class="p1">请先登录</p>
    </div>
    <!-- 头部 -->
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />
    <!-- 图片 -->
    <van-swipe class="box" @change="onChange">
      <van-swipe-item>
        <img :src="imgfe" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/60.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/60.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/60.jpg" alt />
      </van-swipe-item>
      <!-- 索引 -->
      <div class="custom-indicator" slot="indicator">
        <span class="size1" v-text="current*1+1"></span>
        <span class="size2">/4</span>
      </div>
    </van-swipe>
    <!-- 商品名/价格 -->
    <p class="title">宝路 牛奶+蔬菜+谷物配方幼犬粮 4Kg</p>
    <p class="remark">营养健康 均衡配比 口感极佳</p>
    <div class="priceBox">
      <span class="price_font" ref="cost">{{detas[0].price}}</span>
      <span class="line-through">￥120.80</span>
      <img
        class="quality"
        src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png"
        alt
      />
    </div>
    <!-- 分割线 -->
    <div class="cutOff"></div>
    <!-- 超值套配 -->
    <div class="overflowTo">
      <span class="overflow">超值搭配</span>
      <span class="ValueThat">9.9元起购爱宠生活大礼包</span>
    </div>
    <!-- 分割线 -->
    <div class="cutOff"></div>
    <!-- 已选 -->
    <div class="selectedBox">
      <div class="box1">
        <span>已选:</span>
        <span ref="h1Ele">1.5kg</span>
      </div>
      <div class="box2">
        <span>规格</span>
        <ul>
          <li
            v-for="(i,index) in lilist"
            :key="index"
            v-text="i.des"
            :class="{color:index===cur}"
            @click="change(index,$event)"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cutOff"></div>
    <!-- 数量的加减 -->
    <div class="numberBox">
      <span class="number">购买数量</span>
      <ul>
        <li @click="sub($event)">-</li>
        <li ref="num">1</li>
        <li @click="add($event)">+</li>
      </ul>
    </div>
    <!-- 分割线 -->
    <div class="cutOff"></div>
    <!-- 配送地址 -->
    <div class="distribution">
      <div class="box1">
        <span>送至</span>
        <img src="//static.epetbar.com/static_wap/epetapp/pages/goods_detail/images/dress.png" alt />
        <span>广州</span>
        <span>天河区</span>
        <span>E宠西部中仓</span>
      </div>
      <!-- 质量保证 -->
      <div class="box2">
        <ul>
          <li>
            <img
              src="https://static.epetbar.com/static_wap/appmall/lib/goods/qualityassurance.png"
              alt
            />
            <span>正品保证</span>
          </li>
          <li>
            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/freeshipping.png" alt />
            <span>99元包邮</span>
          </li>
          <li>
            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/thirtydays.png" alt />
            <span>30天包退</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="cutOff"></div>
    <div class="send"></div>
    <!-- 提交栏目 -->

    <div class="submitBox">
      <ul>
        <li>
          <img src="@/assets/s1.png" alt />
          <span>收藏</span>
        </li>
        <li>
          <img src="@/assets/car.png" alt />
          <span>购物车</span>
          <span ref="number" class="number">1</span>
        </li>
      </ul>
      <!-- 加入购物车 -->
      <span @click="onSubmit()" class="car">加入购物车</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      cur: 0,
      imgUrl: "",
      detas: [],
      imgfe: "",
      price: 0,
      innerHTML: 0,
      display: false,
      shop: false,
      name:'',
      lilist: [
        {
          des: "1.5kg"
        },
        {
          des: "2.5kg"
        },
        {
          des: "3.5kg"
        }
      ]
    };
  },

  //接收id,请求数据
  async created() {
    let { params } = this.$route;
    // console.log(this.$route);
    
    // 发送请求
    await this.$axios("http://localhost:1905/list").then(({ data }) => {
      let datas = data.data.filter(item => item.id == params.ids);
      this.detas = datas;
      // console.log(this.detas)
      this.imgfe = "../assets/" + this.detas[0].imgUrl;
    });
  },

  // 轮播图
  methods: {
    //索引跟随
    onChange(index) {
      this.current = index;
    },
    // 回退
    onClickLeft() {
      this.$router.go(-1);
    },
    //减法
    sub(e) {
      if (e.target.nextElementSibling.innerHTML-- <= 1) {
        e.target.nextElementSibling.innerHTML = 1;
      }
      // 计算总价
      this.$refs.cost.innerHTML * e.target.nextElementSibling.innerHTML;
      this.$refs.number.innerHTML = e.target.nextElementSibling.innerHTML;
    },
    //加法
    add(e) {
      if (e.target.previousElementSibling.innerHTML++ >= 10) {
        e.target.previousElementSibling.innerHTML = 10;
      }
      // 计算总价
      this.$refs.cost.innerHTML * e.target.previousElementSibling.innerHTML;
      this.$refs.number.innerHTML = e.target.previousElementSibling.innerHTML;
    },
    //规格选择
    change(index, e) {
      this.cur = index;
      // 更新数据
      this.$refs.h1Ele.innerHTML = e.target.innerHTML;
    },
    // 点击继续购物跳入列表页
    toShopping() {
      let id = this.detas[0].id;
    
      this.$router.push({
        name: "list",
        params: {
          ids: id
        }
      });
    },
    // 点击进入购物车
    toCart() {
      let id = this.detas[0].id;
      this.$router.push({
        name: "cart",
        params: {
          ids: id
        }
      });
    },


    //提交加入购物车
     async onSubmit() {
      //获取token值
      let token = localStorage.getItem("uphone");
    //   console.log(token)
      if (token) {
        this.shop = true;
        //获取客户操作的商品详细信息
           let name = localStorage.getItem("uphone");
         let id = this.detas[0].id;
           let title = this.detas[0].title;
           let imgUrl = this.detas[0].imgUrl;
           let price = this.detas[0].price;
           let size=this.$refs.h1Ele.innerHTML;
           let num= this.$refs.num.innerHTML;
          await this.$axios.post("http://localhost:1905/goodsDB",{name,price,title,imgUrl,num,id,size}).then(({ data }) => {
    });

      } else {
        //显示错误提示信息
        this.display = true;
        //进入登录页面
        let time = setInterval(() => {
          clearInterval(time);
          this.$router.push({
            name: "login",
            params: {
              // ids: id
            }
          });
        }, 2000);
      }
    }
  }
};
</script>
