<template>
  <div class="mine">
    <div class="unLogin">
      <div class="unlogin-wrapper">
        <div class="tools">
          <i data-spm="1.s6.s79.s0" data-log="true" data-randomspm="1565008945731180"></i>
        </div>
        <div class="register">
          <div class="login">
            <p data-spm="1.s6.s451.s964" data-log="true" data-randomspm="1565008945731813">
              <i></i>
              <span>
                  <router-link to="/reg">注册</router-link>
                  /
                  <router-link to="/login">登录</router-link>
                </span>
            </p>
          </div>
          <div class="myCode">
            <i data-spm="1.s6.s451.s207" data-log="true" data-randomspm="1565008945731659"></i>
            <div class="GuidesPopOver GuidesPopOverCenter-UserImage"></div>
          </div>
        </div>
        <ul class="entry">
          <li data-spm="1.s6.s451.s191" data-log="true" data-randomspm="1565008945731869">
            <i>0</i>
            <span>收藏</span>
          </li>
          <li data-spm="1.s6.s451.s199" data-log="true" data-randomspm="1565008945731864">
            <i>0</i>
            <span>足迹</span>
          </li>
          <li data-spm="1.s6.s451.s962" data-log="true" data-randomspm="1565008945731400">
            <i>0</i>
            <span>签到领积分</span>
          </li>
        </ul>
        <div
          class="memberClub"
          data-spm="1.s6.m451.s100"
          data-biz_params="vip_level="
          data-randomspm="1565008945731536"
        >
          <span>一条会员</span>
          <i>会员俱乐部</i>
        </div>
      </div>
      <div class="persuade">
        <span>开卡立享200元现金券</span>
        <span
          class="openVip"
          data-spm="1.s6.m451.s452"
          data-biz_params="vip_level="
          data-randomspm="1565008945731152"
        >立即开通</span>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
* {
  list-style: none;
}
ul,
li {
  margin: 0;
  padding: 0;
}

.mine {
  background-color: #f9f9f9;
  /* padding: 0 0 2rem; */
}

.unlogin-wrapper {
  padding: 0.15rem 0.45rem 0;
  background: url("http://asset.yit.com/h5/image/normal_bg_20180814.png") center
    center no-repeat;
}

.unlogin-wrapper .tools {
  text-align: right;
}
.tools i {
  width: 0.666562rem;
  height: 0.666562rem;
  text-indent: -99.99rem;
  display: inline-block;
  background: url(data:image/png;base64,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)
    center center/0.32rem 0.28rem no-repeat #fff;
  border-radius: 50%;
  overflow: hidden;
}
i {
  font-style: normal;
  font-weight: normal;
}

.register {
  display: flex;
  white-space: nowrap;
  width: 100%;
  padding: 0.03rem 0.45rem;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
}

.register .login {
  width: 3.9375rem;
  height: 1.5625rem;
}

.register .login p {
  line-height: 0.5rem;
  font-size: 0.4rem;
  color: #333;
}

.login i {
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
  background: url(data:image/png;base64,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)
    center center/1.2rem 1.2rem no-repeat #fff;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 0.45rem 0 0;
}

/* .register .myCode { */
  /* position: relative; */
  /* float: right; */
  /* position: fixed;
  right: 0.9375rem; */
/* } */

.unLogin .unlogin-wrapper .register .myCode i {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABWJJREFUaAXtm19oHEUcx3OXg8tDioUgQmJ8KL7ZB9u75EWUGCHQJ9H0sC+CjYoVDL4USimF5MW3KqUg2Bf/4IvEgC20FCU0SiBt/mgD1TeFVIx/QLRcuBpK7vr5hZ1jdnbPnb2bvebILmxm5je/+X1/3/nNzszuXDLFYvFIV1fXxVqt9jhpIlcmkylzn19eXj5rAoyMjOwvl8tfUD+KDzmz3lG5iv0b+Xy+1N3f3389SbKew3kwnhsYGJjd2Nj4SyfR19d3kvKb3Fld7jifwd7g9vZ2PtsGsrrvg3pB8vR8YiPLxKI86BtCq6ur0hNOLx6Zq3SqPDaRF+RPrKysfBSpGEMB/BfB/0o1SXIYKYxdlaaEd1U4EnAmjXACnbqrTO65CPuWpahQFAqFR7LZ7Emm+QK6d1hGLrB7+jGqnct6fCiBO47NHOmVpaWlT0hrthjWhIUshr+vVqsHlHGIvzY0NDQG6e+ULMkUH97D/mlwd2BIx8F/lsKELa71kPYiWyfrAeTpgPdtwVrRg+wTtD9l2oD08eHh4aIpb1S2JoxhGcaBi6g/XSqVugMVjgXgHMJkqL90eqhvYS6EGghTRHYnTE5H/DYzM7MdVudSBuH1Rvb+r85sY00YoxdovGUaoHwuROZcxOS0hg9zpmFkt4hwQG7qqbI1YZmNeY7HaLgKiERUIv4um33piMQvMGs9PT0yQ38M2F3uTfJfch/hpee+rQPWs7QY9GbjojyzahgDaIvVst7CwsI/GJngMXp9eno6MzU1VY1rNBZhZVyRVeV2p3SyrEvWa6/un/WQ1ht1cj4l3MnRs/E9jbBNL3Wyjm+Wlg9ursmwhFjvc8GelI9uLn0A/zHdnrxilRHuEyGp1ddF3UCcPPbLpr4uI/8U9XIndZWzED6flHXD7g3KNw2ZfJf+FNm/ptx1GZx77BQv7myTGEYHARh0DaLseVG82WgLyOtdH/vhw+j7HjHVvtUUolV8WGOn+EerttL2aQ+kPfBweyDjnc++wyyW2CmeTFoyG/PufDuMLh/iXkZnlLpmJ61ZbH+j2+Yb2PNgviIybMv58CKT1uc5OYxGNoZQ13eex/4bzMZP8uXib924kGWGntVlcfOQ+Zk2PsKUD4L5lrJF/m3w98k6LD3bjmu/t/T4sHCkXfgS6dEcf+rDCPInfN64KUyCoXZPdSzNdJhMq3aazfnAXB9Gi6ve3lgRdup9M8bS18Nmeq2T2qQR7qRoNePrnouwb5a26TE5xWP5OsS97h1/ON+xYFt2ZD8Y/hxgeXvGkKniYVaDV1XBS4fQN0Qxt3Le+ewpDMkP2rrYJc2xNT06Pz/v+gX+MkvkGd1bj1AoYXw5hq7ckZf1kIZsCWunuettAHphc3OzLefDkUwsFerOR+kzzMbDdCAtG//2HTCFORFDZk0Ym42e92452IqB+VBVG5EIOEWErxDJQJSRX2vmFC8AECEA+0+wvo1Qi6q+bU1Yfi0jPyAB+LiyigO3uCdVOcmUD4BfY1/uli5rwhCTOX6Cd8oPec0rUF4nnWM2vd+SB21ubE1Y+UWkV8jL3ZFXnEmrIwmaTseOsGmgXWU2OL2VSuVRHY+f9P/Hs/27LkMvh17ooQKPYaVjCLPBeYkJ8zOdHARk1h7RZUKWjvhFl6k8+pf23JDec4R9Q9r7/qRGgJOUYeg7n3VitAUjQlh+67QTaZyr//dHCzYbNpVTPLMSzIDM1HFVFiz5Li3ntolf4NwDcM0EQr5oypIqC1ZO/j1ta2tLXvtCp3JH4GU5jGbTEjifleMPORGgM0bB2nnEcOynENxfkV8y5IGjG3Qqpp5EFtlib2/vBw8AMfHi1vZo814AAAAASUVORK5CYII=)
    center/100% auto no-repeat;
}

.GuidesPopOver.GuidesPopOverCenter-UserImage {
  position: absolute;
  right: -0.2rem;
  z-index: 20;
  top: 0.9rem;
}

/* 1232312--------------------------- */

.unlogin-wrapper .entry {
  padding: 0.45rem 0 0.42rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 1.799688rem;
}

.entry li {
  font-size: 0.4rem;
  color: #333;
  text-align: center;
  -webkit-box-flex: 3;
  flex: 3;
  border-right: 0.015rem solid #cccfd2;
  box-sizing: border-box;
}
.entry li i {
  display: block;
  width: 100%;
  font-size: 0.5rem;
}
.entry li span {
  color: #333;
}
.entry li:last-child {
  border-right: none;
}

/* 1433223=================== */

.unLogin .unlogin-wrapper .memberClub {
  width: 100%;
  height: 1.066563rem;
  background: #fff;
  border-radius: 0.3rem 0.3rem 0 0;
  padding: 0 0.45rem;
  display: flex;
  white-space: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  box-sizing: border-box;
  -webkit-box-align: center;
  justify-content: space-between;
  align-items: center;
  font-size: 0.35rem;
  color: #333;
  justify-content: space-between;
}
.memberClub i {
  display: block;
  color: #666;
  font-size: 0.35rem;
  position: relative;
  padding: 0 0.43rem 0 0;
  /* position: fixed;
  right: 0.625rem; */
}
.memberClub i:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 0.16rem;
  height: 0.16rem;
  border-top: 1px solid #666;
  border-right: 1px solid #666;

  transform: rotate(45deg) translate(-50%, 0);
}

/* 分割线----------------------------- */

.unLogin .persuade {
  box-shadow: 0 -0.01rem 0.05rem rgba(218, 206, 177, 0.3);
  display: flex;
  white-space: nowrap;
  -webkit-box-pack: justify;
  align-items: center;
  height: 1.2rem;
  padding: 0 0.45rem;
  box-sizing: border-box;
  background: #fcfaf1;
  font-size: 0.375rem;
  color: #ab8b51;
  justify-content: space-between;
}
.persuade .openVip {
  background: #ac8849;
  border-radius: 0.06rem;
  line-height: 0.55rem;
  font-size: 0.34375rem;
  color: #fff;
  padding: 0 0.2rem;
}

/* dsdasdassad=========== */















</style>
                                          
