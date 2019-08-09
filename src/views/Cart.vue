<template>
  <div>
    <div class="selectAddress">
      <sapn class="no-address">购物车</sapn>
      <span class="manage-button">管理</span>
      <i></i>
    </div>

    <!-- 购物车商品 -->
    <div class="pro-list">
        <div style="background-color: gray;">
          <div class="am-swipe">
            <div class="am-swipe-content" style="touch-action: pan-y;">
              <div class="cart-product">
                <div class="select-item">
                  <span class="Icon icon-radious" style="color: rgb(255, 255, 255);"></span>
                </div>
                <!-- <div class="cart-pro">
                  <a
                    class="cart-pro-item"
                    href="https://h5.yit.com/r/product?product_id=687032"
                  >
                    <div class="pro-img">
                      <div>
                        <div class="LazyLoad is-visible">
                          <img
                            alt="纯银手杯"
                            src="https://img01.yit.com/media/73bf71dd-76a5-4078-a3e1-748cb36a3a57.jpeg?imageMogr2/thumbnail/!112x112r/gravity/Center/crop/112x112"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="pro-desc">
                      <div class="pro-info">
                        <div class="pro-price-coupon">
                          <p class="pro-name line-clamp-2">
                           
                            纯银手杯
                            
                          </p>
                        </div>
                        <div
                          class="property"
                          data-spm="1.s13.s1230.0"
                          data-log_actiontype="3"
                          style="background-color: rgb(247, 247, 247); color: rgb(153, 153, 153);"
                          data-randomspm="1565255037930846"
                        >
                          <span>和熙粉;现货/2个工作日发货</span>
                          <i></i>
                        </div>
                      
                        <div class="pro-price">
                          <div class="price">
                            <div class="original-price">
                              <i>
                               
                                ¥
                                
                                328.00
                               
                              </i>
                            </div>
                          </div>
                          <div class="cart-control">
                            <div class="control">
                              <span
                                class="icon-control minus disabled"
                                data-spm="1.s13.s1230.0"
                                data-log_actiontype="4"
                                data-randomspm="1565255037931630"
                              >
                                <i>-</i>
                              </span>
                              <input
                                type="tel"
                                value="1"
                                class="item-num"
                                data-spm="1.s13.s1230.0"
                                data-log_actiontype="6"
                                data-randomspm="1565255037931626"
                              />
                              <span
                                class="icon-control plus"
                                data-spm="1.s13.s1230.0"
                                data-log_actiontype="5"
                                data-randomspm="1565255037931330"
                              >
                                <i>+</i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </div>

      <!-- react-empty: 61 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.selectAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  // max-width: 7.5rem;
  margin: 0 auto;
  z-index: 100;
  height: 1rem;
  background: #fff;
  line-height: 1.0625rem;
  padding: 0 0.375rem;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .no-address {
    -webkit-box-flex: 1;
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 0.41rem;
    color: #333333;
  }
  .manage-button {
    width: 1.4rem;
    height: 0.44875rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 0.46875rem;
    border-left: 1px solid #ededed;
    font-family: PingFangSC-Regular;
    font-size: 0.41rem;
    color: #333333;
    line-height: 0.46875rem;
  }
  i {
    position: absolute;
    bottom: -0.09rem;
    left: 0;
    width: 100%;
    height: 0.09rem;
    background: #fff
      url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzU0Rjg5Nzk2MDczMTFFN0EyQkU4MjRCODkxNzZCMDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzU0Rjg5N0E2MDczMTFFN0EyQkU4MjRCODkxNzZCMDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTRGODk3NzYwNzMxMUU3QTJCRTgyNEI4OTE3NkIwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNTRGODk3ODYwNzMxMUU3QTJCRTgyNEI4OTE3NkIwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAAwA0gMBEQACEQEDEQH/xAB1AAEAAgMBAQAAAAAAAAAAAAAAAQYDBAUCCAEBAAMBAAAAAAAAAAAAAAAAAAECBAMQAAECBQEHAwUAAAAAAAAAAAABAhEhURIDBDFBkUJSExQ0BQZhwdEyQxEBAAMAAQUAAAAAAAAAAAAAAAERAiFhgRIDBP/aAAwDAQACEQMRAD8A+n/cNa3S4Y7crpMb9wK4973uV7li5yxVQIioCK1ARWoE3LUCLnVUCbnVUBc6qgL39S8QNjRabNqsyMRyoxJvdRALJjY3GxGNSDWpBEAkDHnz48GJ2XIsGt2/hBMpzmZmoVXW6zLqs65XyTY1tEocpm2/GIzFMEVIWIrUBctVAXOqoE3OqoC51VAXu6l4govf1LxJKe8SZ8uRuPGqq9ywRIhE1HK06HSN0uBMcbnrN7l3qdIimHe/KWwSoAVr3LyPLf3/ANuWlu6AGsAAAAEgEgEgEgEgLD7R4/iN7W3+kdtwG6AA4XyHye4yPp+WHVviU01eiq6uOUaAAAASASASASASA7Px7xrskfUcsen6F8s/0X2dwuygAD//2Q==)
      left bottom repeat-x;
    background-size: 1.1rem 0.09rem;
  }
}

/* 购物车商品列表——————————————————————————————————————————  */ 

.pro-list {
    width: 100%;
    background: #fff;
    font-family: PingFangSC-Regular;
    background-color: gray;
    // margin: 0.27rem 0 0;
    margin: 1.4rem 0 0;
    touch-action: pan-y;

}

.am-swipe {
    overflow: hidden;
    position: relative;
        .am-swipe-content {
            transition: all 250ms;
            position: relative;
            background-color: #fff;
                .cart-product {
                    padding: 0.42rem 0;
                    display: flex;
                        .select-item {
                            width: 1.00625rem;
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            padding: 0.5333rem 0 0;
                            -webkit-box-pack: center;
                            -webkit-justify-content: center;
                            -ms-flex-pack: center;
                            justify-content: center;
                                .icon-radious {
                                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAyJJREFUWAnNmM1KG1EYhmdGEwJduCkFA8WFazE1WXkDraVQwUXRixCKJYtqXdS2i1IpeBGRLgQXxdgbcJWkBtdZlIKF0o2LwpDfvs/xjMykaY2SGT0wOfnO3/vk/Hznm7jOFVK9Xr/Tbrcf9nq9x+o2rSfrum6WIVR2qoynobKD8fHxL7Ozs7+pGya5wzQ6Pj5+0Ol0XklsQe0zw/RRG19A5bGxsa1cLvf1sj7/BanValMSf6tBVpRrXLer/Ej2vgSqsk9TqRSz4LRarazqsgLOy1xU3bxsT3lPdkn5+tzc3DfaDkr/BBHEQrfb3VWnCT38uh1N97am++eggfrLtIz3tIxrgllVHbN45nnesmDK/W2xB4JUKpU1Cb+3v2gvnU4/n5mZ+T5ogMvKTk5O7jebzY8aa0ljMqPFQqGw3d/vLxAg1OiDOjGlG/l8/l1/p+vY1Wr1pfq9EQiaL/phIiAshxp+VkPKlwXxSfnIkmCeaTCWmw33JLxMXqDCxmRPCIQyZmKkEOjYMTfQQAvNQP8CRJWcjgmR7o1qOQKRcM7YaKBlNU21AcFPyFrR47MxTU2MH1bDR9NqOwZEx2xTdAJ1d657Oq7CjQZaaOIo6evituWMfqkiLT8xOayfuIrwoLbWz/wQTFNO8a7H3aGGGRUcJQUBGFpoog2DJ4MLjLR/niX6aTRhYI9wizrcHYkiRDWnATHXuPaIubyShAlpZrkdDUhwiyYJEmjCYI4v4lqaiLtPAiisyWY1S+L7/mQS4mGNQBMGZsSAyDBLFG4Y9/eQpgFpIGgjq7i1I+NLs2ALGmzWA2ssRlolYzxFBgaPaFvfCQXncbvJ6DsOWmiiDYMnV0vIf6j1wt0TnSWS0EJTMGUYzPEV0WsVqLy3SowZNwkaaKGpI7yFngGx7x0l2RkC3bhBrAaRfSl457lwaKJbV8WZSJdsoBsLD2OjgZbVNDoRb3orgmewiKpFW9QD4O4oZ8aORXDOZiyGI3i0IzNCAelWvGCdozgOy3Tjr5whmClN482+hAcw5IT8ckCb+vpIT/J/SwARTkT8BLqapZH/UfMHKC7rYEAebDgAAAAASUVORK5CYII=) center/100% auto no-repeat;
                                    width: .53125rem;
                                    height: .53125rem;
                                    border-radius: 100%;
                                    // text-indent: -99.99rem;
                                    background: #fff;
                                    -webkit-box-sizing: border-box;
                                    box-sizing: border-box;
                                }
                                .Icon {
                                    display: inline-block;
                                    white-space: nowrap;
                                    line-height: 0.42rem;
                                    overflow: hidden;
                                    font-size: 0.27rem;
                                    vertical-align: middle;
                                }
                        }
                }
        }
}


</style>
