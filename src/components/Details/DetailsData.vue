<template>
  <div class="detailsdata">
    <div class="ProductInfo clearfix">
      <div class="product-info-top paddingLeft30px">
        <div class="product-inforight fr">
          <div
            class="share cn"
            data-log="true"
            data-spm="1.s917.s921.s235"
            data-randomspm="1565145852770879"
          >
            <i class="shareIcon"></i>
            <p>分享</p>
          </div>
        </div>
        <div class="product-infoLeft">
          <p class="info-titleone line-clamp-2">
            <!-- react-text: 30 -->
            <!-- /react-text -->
            <!-- react-text: 77 -->
            十二花神系列团扇
            <!-- /react-text -->
          </p>
          <p class="info-titletwo line-clamp-2">故宫文化珠宝出品，真丝扇面、天然材质扇柄，配色复古典雅、三款可选</p>
        </div>
      </div>
      <div class>
        <div class="info-price">
          <div class="info-priceCn paddingLeft30px">
            <!-- react-text: 35 -->
            ¥
            <!-- /react-text -->
            <!-- react-text: 36 -->
            118
            <!-- /react-text -->
          </div>
          <!-- react-text: 37 -->
          <!-- /react-text -->
        </div>
        <!-- react-text: 78 -->
        <!-- /react-text -->
        <div class="vipPriceArea">
          <div
            data-log="true"
            data-spm="1.s11.m430.s449"
            class="VipPrice"
            data-randomspm="1565144961968715"
          >
            <div class="leftCn">VIP会员可享9.5折，开卡立享200元现金券</div>
            <div class="rightCn hasArr">立即开通</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 优惠券 -->
    <div class="marginTop20">
      <div class="ProductActivity">
        <ul class="listItems">
          <!-- react-text: 83 -->
          <!-- /react-text -->
          <li
            class="items itemsCoupon clearfix"
            data-log="true"
            data-spm="1.s917.s925.s25"
            data-randomspm="1565150254230194"
          >
            <div class="leftTittle fl">优惠券</div>
            <div class="rightCn rightCn1 hasArr">
              <pseudo:before></pseudo:before>
              <div class="listInfo">
                <span class="couponIcon">满399减70元券</span>
                <span class="couponIcon">满199减30元券</span>
              </div>
              <div class="litArrbg"></div>
              <div class="dataimg">
                  <img src="../../assets/advance.png" alt="">
              </div>
              
            </div>
          </li>
        </ul>
      </div>
    </div>

    <p class="logisticsInfo noHaitao">顺丰；北京发货；免运费</p>

    <!-- 一条图片 -->
    <div
      data-log="true"
      data-spm="1.s917.s929.s450"
      class="pro-sologen"
      data-randomspm="1565158943646444"
    >
      <img src="https://asset.yit.com/xcx/icon/yit-banner-20180907.png" alt="slogen" />
    </div>

    <div class="PlatformService" data-spm="1.s917.s930.s450" data-randomspm="156515894364686">
      <ul class="clearfix PlatformServiceCn">
        <li class="serverItem">
          <span class="serviceIcon"></span>
          <!-- react-text: 148 -->
          全球2000家良品直供
          <!-- /react-text -->
        </li>
        <li class="serverItem">
          <span class="serviceIcon"></span>
          <!-- react-text: 151 -->
          全场包税
          <!-- /react-text -->
        </li>
        <li class="serverItem">
          <span class="serviceIcon"></span>
          <!-- react-text: 154 -->
          七天保价
          <!-- /react-text -->
        </li>
      </ul>
    </div>

    <!-- 规格数量选择 -->
    <!-- <ul class="clearfix pro-control-limit">
      <li
        class="item hasArrCommon"
        data-log="true"
        data-spm="1.s917.s933.s934"
        data-randomspm="1565159729810425"
      >规格数量选择
            <span class="clearimg">
                <img src="../../assets/advance.png" alt="">
            </span>
      </li>
      
    
    </ul> -->

    <van-button type="primary" @click="showPopup">
        <ul class="clearfix pro-control-limit">
      <li
        class="item hasArrCommon"
        data-log="true"
        data-spm="1.s917.s933.s934"
        data-randomspm="1565159729810425"
      >规格数量选择
            <span class="clearimg">
                <img src="../../assets/advance.png" alt="">
            </span>
      </li>
      
    
    </ul>
        </van-button>

    <van-popup v-model="show">
        <!-- <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
            :quota-used="quotaUsed"
            :hide-stock="sku.hide_stock"
            :message-config="messageConfig"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
        /> -->
    </van-popup>






  </div>
</template>

<script>
export default {

    data() {
        return {
            show: false,
            sku: {
                // 数据结构见下方文档
            },
            goods: {
                // 数据结构见下方文档
            },
            messageConfig: {
                // 数据结构见下方文档
            }
        }   
    },

    methods: {
        showPopup() {
            this.show = true;
        }
  }


};
</script>

<style scoped>

.dataimg {
    width: .48rem;
    height: .57rem;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
}
.dataimg img {
    width: 100%;
    height: 100%;
}

.clearimg {
    width: .48rem;
    height: .57rem;
    float: right;
    position: absolute;
    top: .36rem;
    right: .36rem;
}
.clearimg img {
    width: 100%;
    height: 100%;
}



.ProductInfo {
  background: #fff;
  width: 100%;
  padding: 0.4rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ProductInfo .paddingLeft30px {
  padding-left: 0.42rem;
}

.ProductInfo .product-inforight {
  text-align: center;
  font-size: 0.3rem;
  color: #666666;
  border-left: 1px solid #ededed;
  float: right;
}

.product-inforight .cn {
  display: inline-block;
  width: 1.875rem;
  text-align: center;
  position: relative;
  padding-top: 0.05rem;
}

.product-inforight .shareIcon {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWxJREFUSA3tlrtKA0EYRlexUBG0UFDQwkIbxWeI6AvY+Ra2lmInVuLj2KmQXsRCRQsRC4tg4Q3xco5slhAym2QvNusPJzOZ+b/vy24mS6IoW00iO4ZTmMpm0b9qGsk5fMdcMM5AqTWL+yU0Q5vjFWtzZSXPY3wThx4yXsMbHMRrt4z2FFqLuN2BV7gfO3uVBlt74J499hZSS7g8gMa7LY6twS7vgD32qslVC6gfQcPtNqf2YLftsVeN2sy1ifIDtjo4dAq2zV41anPVSEAdCrY9pEmsBpNZePIa3grudNUMIV2GJ/BE/kX5ex83qAE+/vqttFud5mVWw1s9EZPWXOTeb14v33GRoYnXf3ByK8qeVO9W+wDJWv7+x7KK8wRvENr1mRz6YHmC70OmvaxX73BV84rfOQzDvRyIgnrMMjOqwyes+qbkMsOs+gAva3AEX3AGL1BGjWK6Ap6r9WZAjckJPIN/T8tAbzNqEP0AiL5ej+3BLBkAAAAASUVORK5CYII=);
}

.product-inforight i {
  display: inline-block;
  width: 0.4375rem;
  height: 0.4375rem;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

/* 111111111111 */

.ProductInfo .product-infoLeft {
  margin-right: 2.8rem;
}

.info-titleone {
  font-size: 0.44rem;
  color: #000000;
  line-height: 0.525rem;
  max-height: 1rem;
  word-break: break-all;
}

.ProductInfo .line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ProductInfo .info-titletwo {
  padding-top: 0.15rem;
  font-size: 0.32rem;
  line-height: 0.4rem;
  color: #666666;
  max-height: 0.75rem;
  word-break: break-all;
}

.ProductInfo .info-price {
  font-size: 0.5rem;
  line-height: 1;
  color: #c13b38;
  padding-top: 0.375rem;
  display: flex;
  width: 100%;
}

.ProductInfo .info-priceCn {
  flex-shrink: 0;
  margin-right: 0.3rem;
}

.ProductInfo .vipPriceArea {
  margin: 0.38rem 0.42rem 0;
}

.VipPrice {
  background: #fffcef;
  border-radius: 0.06rem;
  font-family: PingFangSC-Light;
  font-size: 0.32rem;
  color: #ac8849;
  line-height: 0.375rem;
  padding: 0.22rem 0.28rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.VipPrice .leftCn {
  padding-right: 0.25rem;
  text-align: left;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  word-break: break-all;
}

.VipPrice .rightCn.hasArr {
  padding-right: 0.25rem;
  flex-shrink: 0;
  position: relative;
  left: 0;
  white-space: nowrap;
  display: inline-block;
}

.VipPrice .rightCn.hasArr::before {
  right: 0;
  border-left: 0.17rem solid #ac8849;
  border-top: 0.17rem dashed transparent;
  border-bottom: 0.17rem dashed transparent;
}

.VipPrice .rightCn.hasArr::after {
  right: 1px;
  border-left: 0.17rem solid #fffcef;
  border-top: 0.17rem dashed transparent;
  border-bottom: 0.17rem dashed transparent;
}

.rightCn.hasArr::before,
.rightCn.hasArr::after {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  height: 0;
  width: 0;
}

/* 优惠券 ———————————————————————————————————————————————— */

.Product .marginTop20 {
  margin-top: 0.28rem;
}

.ProductActivity {
  background: #ffffff;
  padding-left: 0.42rem;
}

.ProductActivity .items {
  padding: 0.36rem 0;
}

.ProductActivity .leftTittle {
  font-size: 0.375rem;
  color: #666666;
  width: 1.875rem;
  line-height: 1;
  padding-top: 0.15rem;
  display: inline-block;
  vertical-align: middle;
}

.fl {
  float: left;
}
.fr {
  float: right;
}

.ProductActivity .itemsCoupon .rightCn1 {
  position: relative;
}

.ProductActivity .hasArr {
  padding-right: 0.36rem;
}

.ProductActivity .rightCn1 {
  margin-right: 0.42rem;
}

.ProductActivity .rightCn {
  margin-left: 1.875rem;
}

.rightCn1 .listInfo {
  white-space: nowrap;
  overflow-x: scroll;
}

.ProductActivity .rightCn1 .couponIcon {
  margin-right: 0.28rem;
}

.couponIcon {
  border-radius: 0.06rem;
  font-size: 0.28rem;
  color: #c13b38;
  background: #fff7f5;
  display: inline-block;
  line-height: 1;
  padding: 0.15rem 0.19rem;
  white-space: nowrap;
  position: relative;
}

.ProductActivity .litArrbg {
  position: absolute;
  display: inline-block;
  width: 0.5625rem;
  height: 0.625rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABeCAMAAABl7KirAAAAP1BMVEX///////////////////////////////////////////////////////////////////////////////////81m6ZbAAAAFHRSTlPymYNYTEAoHBAEbdvGNK+w3MU1buZwKy0AAACJSURBVFjD7dTJDcAgDERRsu8JxOm/1iDTgn2w9ClgNBrhl7Z1ma9pHPa+e84jfSZPU9+WepdsmKpdpXY1T9WuZgs47yraNc4CxadrNt3VbQFx+wPFfoFYt1VTwyyAr/iKr/ga6bbwFV/xFV/xNcR/xVd8xVd8xVd8xVd8xVd8xVd8xVd8xdcgvv7YWSvL0LUGFgAAAABJRU5ErkJggg==);
  right: 0.2rem;
  top: 0;
}

/* 顺丰———————————————— */

.logisticsInfo.noHaitao {
  border: none;
  margin-top: 0.28rem;
}

.logisticsInfo {
  font-size: 0.33rem;
  line-height: 0.35rem;
  color: #666666;
  padding: 0.28rem 0.42rem;
  background-color: #ffffff;
  border-top: 1px solid #ededed;
}

/* 一条图片—————————————— */

.pro-sologen {
  text-align: center;
  background-color: #f9f9f9;
}

.pro-sologen img {
  width: auto;
  max-width: 100%;
  border: 0 none;
  vertical-align: middle;
}

/* 分割线+++++++++++++++ */

.PlatformService .PlatformServiceCn {
  font-size: 0.3rem;
  color: #333333;
  line-height: 0.42rem;
  padding: 0.35rem 0;
  background-color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.clearfix:before {
  content: "";
  display: table;
}

.PlatformServiceCn .serverItem:first-child {
  max-width: 3.5rem;
  padding-left: 0.35rem;
  text-align: left;
}

.PlatformServiceCn .serverItem {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 2.5rem;
  font-size: 0.3rem;
  text-align: center;
  margin-right: 0.22rem;
}

.PlatformService .PlatformServiceCn .serviceIcon {
  display: inline-block;
  width: 0.425rem;
  height: 0.4rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAeCAMAAADjLDWuAAAATlBMVEUAAADCOznCPTnEOznCOzjDPDnRRkbYYmLCOzjBOzjCOznCPDnCPDjFPzrMQUHBOzjCPDjBOznCOznCOznBPDrDPDrCPTnGPjnBPj7BOzj1L7OaAAAAGXRSTlMA9kJE8jkLBPrduaV3NBHo1c6/jnxhUC0dsZAyzgAAAGRJREFUKM/tzMkNwCAMRFEghB2yL9N/oxHyEeIGkn8a6VkWf/1sYbmss2X48nJg+NQs7+DYRJbvpccpGhrjBKnanxo+13G4ym2DhEvCbiBuUxIIgbib0gDxS6MmZg4qM2UlvtYDc1IDt4XSks0AAAAASUVORK5CYII=)
    no-repeat;
  background-size: 100% auto;
  vertical-align: middle;
  margin-bottom: 0.028rem;
  margin-right: 0.055rem;
}


/* 规格数量选择—————————————————————————— */

.pro-control-limit, .Product .pro-bandInfo {
    font-size: 0.35rem;
    color: #666666;
    line-height: .5rem;
    /* background-color: #ffffff; */
}

.pro-control-limit .item:first-child {
    border: none;
    margin-top: .25rem;
    padding-right: 0;
    position: relative;
    display: block;
    clear: both;
}

.pro-control-limit .item {
    padding: 0.38rem 0.65rem 0.38rem 0;
    background-color: #ffffff;
}

.pro-control-limit .hasArrCommon {  
    padding-left: 0.42rem !important;
}











</style>
