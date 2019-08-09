<template>
  <div>
    <div id="my-services">
      <h2>我的服务</h2>
      <ul class="service-list">
        <li class="borderTop" v-for="(item,index) in data" :key="index">
          <div class="service-item">
            <i>
              <img :src="item.imgurl" alt />
            </i>
            <span class="serverText" style="color: rgb(102, 102, 102);">{{item.title}}</span>
            <span>
              <!-- react-text: 147 -->
              <!-- /react-text -->
            </span>
            <!-- react-text: 148 -->
            <!-- /react-text -->
          </div>
        </li>
      </ul>
    </div>

    <div class="yit-advertiserment">
      <div class="adv-flex-box">
        <div class="adv-img-box" data-exposuremonitorlink>
          <img
            src="https://asset.yit.com/URDM/bac086badee8aee3be7c01bed390c324_750X270.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_750"
            alt="个人中心-VIP页面"
            data-spm="1.s6.m3276.0.urdmmaterialid-190626000921"
            data-randomspm="156507864655614"
          />
        </div>
      </div>
    </div>

    <div class="yit-advertiserment">
      <div class="adv-flex-box">
        <div class="adv-img-box" data-exposuremonitorlink>
          <img
            src="https://asset.yit.com/URDM/5929bbd624054732ab0c7bd29890784d_375X290.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_750"
            alt="电器-剃须刀+美护-马香膏"
            data-spm="1.s6.m3290.0.urdmmaterialid-190805001441"
            data-randomspm="1565079079936290"
          />
        </div>
        <div class="adv-img-box" data-exposuremonitorlink>
          <img
            src="https://asset.yit.com/URDM/436102156a671adf1d53f277bdf8557d_375X290.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_750"
            alt="电器-剃须刀+美护-马香膏"
            data-spm="1.s6.m3290.1.urdmmaterialid-190805001442"
            data-randomspm="1565079079936709"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "我的卡卷",
          imgurl: "service1.png"
        },
        {
          title: "积分明细",
          imgurl: "service2.png"
        },
        {
          title: "我的拼团",
          imgurl: "service3.png"
        },
        {
          title: "我的试用",
          imgurl: "service4.png"
        },
        {
          title: "我的讲座",
          imgurl: "service5.png"
        },
        {
          title: "我的发布",
          imgurl: "service6.png"
        },
        {
          title: "一条实体店",
          imgurl: "service7.png"
        },
        {
          title: "分享有礼",
          imgurl: "service8.png"
        },
        {
          title: "我的9元购",
          imgurl: "service9.png"
        },
        {
          title: "我的地址",
          imgurl: "service10.png"
        },
        {
          title: "清关信息",
          imgurl: "service11.png"
        },
        {
          title: "客服帮助",
          imgurl: "service12.png"
        }
      ]
    };
  },

  beforeMount() {
    this.data.map(item => {
      item.imgurl = require("../../assets/MineImg/" + item.imgurl);
    });
  }
};
</script>

<style scoped>
#my-services {
  background: #fff;
  margin: 0.3rem 0;
  overflow: hidden;
}
#my-services h2 {
  font-size: 0.4rem;
  color: #333;
  line-height: 0.45rem;
  padding: 0.4rem;
  border-bottom: 0.03rem solid #ededed;
}
h2 {
  font-weight: 600;
}

#my-services .service-list {
  display: flex;
  flex-wrap: wrap;
}

.service-list .borderTop {
  border-bottom: 1px solid #ededed;
}

.service-list li {
  text-align: center;
  width: 25%;
  padding: 0 0 0.075rem;
}

.service-list li .service-item {
  padding: 0.3rem 0;
  display: block;
  position: relative;
  z-index: 1;
}

i {
  font-style: normal;
  font-weight: normal;
}

#my-services .service-list li .service-item i {
  width: 0.666562rem;
  height: 0.666562rem;
  display: inline-block;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  position: absolute;
  top: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
}

i img {
  width: 100%;
  height: 100%;
}

.service-list li .service-item .serverText {
  margin-top: 0.666562rem;
}

.service-list li span {
  display: block;
}

/* 一条vip 图片----------------------------- */

.yit-advertiserment {
  position: relative;
}

.adv-flex-box {
  display: flex;
}

.adv-flex-box .adv-img-box {
  -webkit-box-flex: 1;
  flex: 1;
}

.yit-advertiserment .adv-img-box {
  height: 100%;
}

.yit-advertiserment img {
  width: 100%;
  height: 3.59375rem;
}

img {
  border: 0 none;
  vertical-align: middle;
}
</style>
