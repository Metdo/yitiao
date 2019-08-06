<template>
  <div class="orders">
    <h3 data-spm="1.s6.s74.s89" data-log="true" data-randomspm="1565056961315400">
      <span>我的订单</span>
      <i>查看全部订单</i>
    </h3>
    <ul class="orders-type flex-wrap">
      <li class="flex4" data-spm="1.s6.s74.s90" data-log="true" data-randomspm="1565056961316903">
        <div class="ico-waitpay">
          <i>
            <!-- react-text: 41 -->
            <!-- /react-text -->
            <!-- react-text: 42 -->
            <!-- /react-text -->
          </i>
          <span>待付款</span>
        </div>
      </li>
      <li class="flex4" data-spm="1.s6.s74.s91" data-log="true" data-randomspm="1565056961316534">
        <div class="ico-waitsend">
          <i>
            <!-- react-text: 47 -->
            <!-- /react-text -->
            <!-- react-text: 48 -->
            <!-- /react-text -->
           
          </i>
          <span>待发货</span>
        </div>
      </li>
      <li class="flex4" data-spm="1.s6.s74.s92" data-log="true" data-randomspm="156505696131657">
        <div class="ico-waitconfirm">
          <i>
            <!-- react-text: 53 -->
            <!-- /react-text -->
            <!-- react-text: 54 -->
            <!-- /react-text -->
            
          </i>
          <span>待收货</span>
        </div>
      </li>
      <li class="flex4" data-spm="1.s6.s74.s1418" data-log="true" data-randomspm="1565056961316546">
        <div class="ico-waitevaluate">
          <i>
            <!-- react-text: 59 -->
            <!-- /react-text -->
            <!-- react-text: 60 -->
            <!-- /react-text -->
            
          </i>
          <span>待评价</span>
        </div>
      </li>
      <li class="flex4" data-spm="1.s6.s74.s1570" data-log="true" data-randomspm="156505696131613">
        <div class="ico-aftersale">
          <i></i>
          <span>退款/售后</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            randomspm: [
                {
                    title: '',
                    
                },
            ]
        }
    }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul,li {
    list-style: none;
}



.Center .orders {
  margin: 0.3rem 0;
     
}

.orders {
  margin: 0.3rem 0;
     
}

.orders h3 {
    display: block;
    width: 100%;
    height: 1.2rem;
    background: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0.45rem;
    display: flex;
    white-space: nowrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.45rem;
    color: #333;
    border-bottom: 1PX solid #ededed;
}

 i {
    font-style: normal;
    font-weight: normal;
}

h3 i {
    color: #999;
    font-size: .375rem;
    position: relative;
    padding: 0 0.45rem 0 0;
}


.orders h3 i:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.16rem;
    height: 0.16rem;
    border-top: 0.02rem solid #666;
    border-right: 0.02rem solid #666;
    transform: rotate(45deg) translate(-50%, 0);
}

.orders .orders-type {
    width: 100%;
    padding: 0.45rem 0;
    background: #fff;
}
.flex-wrap {
    display: flex; 
}

.orders .orders-type li {
    text-align: center;
    padding: 0.15rem 0;
    position: relative;
}

.flex4 {
    -webkit-box-flex: 4;
    flex: 4;
}
.orders .orders-type li .ico-waitpay i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAABGdBTUEAALGPC/xhBQAAA9NJREFUeAHtm7+LE0EUxy8/OCMhIFa6IAfBgIV6aBIiicLVFuLV/ijE6iq18EfhH6CdYKkcqKlSaGEpGMGEC0lABEFQLBQveoUoGEiOkPh9e7vceuwkM9lZbpO8wLqzb968+c5nZ3Zn55y5Of4xASbABJgAE2ACTIAJMAEmwASYwKwTCI0DYDAYhHK5XKrf7xvjlPerTDgcXq/Vap9CodDAjzqUYaXT6asQcw/A9vshyGtMaPsFbbeazeYjr7F2lo/sNAy7BqjbyH+AY+8wv13OI23nDMPotlqttzq1SPesbDZ7CMPuMyqfx1GMxWI3K5XKuk4xXmMVCgWj0+ncR5wLODYxLA/X6/VvXuPa5cN2YtQZXfs0fAjURjKZvBI0UKSfNJE20ohj3tJMWVp+0rDwLEhRjTh/LJVKm1pq9yEIaSONllZTs65qpGHhLtm+vrxpdDXIimNqdGjWEt4GoCXYtAdhWAp3mGExLAUCCq7csxRgSU9KMXt/jbhLCrGD6tqCsDVMWO9iwvpBReQs9qyDALSMr5FmJpM5qwIrKuuMid47zFuW4E+fPA9ly+2mH3rPD2j+6dSAawNtuYPzUdgfY8QcwUf3H6ePKC0NCwHMgKjoe6PRoI/pif3l8/lX3W73C4AdiEQiZ9CQlzKNmcVhOFetVjdw098TIAA7JgOKfGYSlgXH/L4FrD0MS5aAgt8s9ywFTFuuDEsBGcNiWAoEFFy5ZynAUpmUDg2LT4cneA1fGurkYybmTU8xWb7sYxX65lkAlfZTqETskxI+nly09axEIpFrt9tpQJNeyfCk3FEYvWoQj8ebDpMvSW2wyuXyXyh844vKgATlB7zCjWBYCrC0DUOFOn1zxRv5BJ6Zq6hgAc+xVbwdb+isbKp6lgVqEYD2IX0dC3vnGZaYwIIzCyul/10788ZJT1XPoqHngPAb6+zPHdeek1MFy3pGLaNHXQOZRaytf/VMyBFgqh7w1C4AeuFon9bkVPUsrWRcgjEsFygiE8MSkXGxMywXKCITwxKRcbEzLBcoIhPDEpFxsTMsFygiE8MSkXGxMywXKCITwxKRcbEzLBcoIpM0LCx/mJuasKgWqD2GooaNstvtsNs1yp/ypWFh2WPNCpjCDrEVmeBB9bH0m/t6HO0aKVfpb3xYpn2GiLQ9jX60YzRQW+i2ZA3/1+pR9gaoIpZ0Lg4vsZ2rtJ4VjUZXer0elSZgKVRsV7odcXJSRWqPilylnmUHxv7o41iyPWWPe9s+CWcaDTT0sJfa/D+lk6CZNTIBJsAEmAATYAJMgAkwASYwDoF/a/7uUzTdZ4kAAAAASUVORK5CYII=);
}
.orders-type li .ico-waitsend i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAABGdBTUEAALGPC/xhBQAAA9hJREFUeAHtm81rE0EYxvMh/gEq+IFCQyP0oCCkaQ8FjdIKggc91KN6FTxYP46iiCdB24J/gIKn9g8QrNK0F6FNoVLsSQwePCotqARJGp8nzpbShmaepbuJ9h2YTmbmeeed97ezk91tNpGwZASMgBEwAkbACBgBI2AEjIARMAK7nUAyDIDh4eF0uVy+U6/Xr8D+JPLeMOPEbPMb/paSyeREJpN5Ojk5WVP9y7AcqLcAVVCddYoewIoANqgC26MG4FZUAQ5rADYK+yl85lHzSrC5BuF15E/Iz5HVdBMGWeQX8PvS1xh+ufqHYDPCA804UH/ia0+dDAuOeOolUI4uLCzc42cl9fb2FmCbwKS/lkqlccWWWthfhn0W9l9gXxTt3+RyOZrcdXFIsFKiM8q5RzFN/S3+ub/BvIM4vAMIA6uxmePIep963rOJQbhh3vKXUhhYMYTUmS4MlnBcDJbBEggIUltZBksgIEhtZRksgYAgtZUlwJLvDYOxcW817e6zgiavEnZFL2ELEcY5A//1FrIt3bDb0ubbYCvLlxR0oVcWbG+lUqlFwVdDiiN7Cbmg2m3W4x5vEfnh5vZW9bW1tVPQjLXSNesPDQsT/TA/Pz/TbNDt2vCI5ex2/ULfakj/ybCnop2GwtExWAZLICBIbWUZLIGAIA39bSj4kKR9fX378fX+DJclt+fm5r5JxhGLO+o07O/vPwhQRXy1X2XJesTxS8N3DKyBgYEj1WqVoE4wApass12KKEJxR8DK5/PHKpUKL3B7cLFbQfnIlT1sZ3+EDLyHbjss7FEZnHKzmHEW+RcgXcQ/bx+wZJ3t7KcOn9ua2goLe9JxB6oLFH5gU7+AW5h3JMKSdbYjd1FHPfvalWKHhb2oxmBRHq3VarMsUV1Np9PnAYgrbD2xznY0rFKHPWzG6WnfGGddHMOH2GHh9Cq5uLoR8CHUvwPIIC4T3jeLl+3spw79h5G7qdswDquxpNhh4cccrxHZfQRbRjmN8jSABACbBs1+6pz+M+3dOE31UTW25aIUG/hjBMTsnXBKfoT4nLdBBMLYV1YEMcQ2pMESUBssgyUQEKS2sgyWQECQ2soyWAIBQWory2AJBASprSyDJRAQpGFWVuNlATxekX90L8wrMumGecsvPYSBteQiGYosomgHDuYdxOHtTX5Eg+dKEzg6OZQj7sds0lth3jPbYaFbUcFbYXx4OKG6SKoGu/l9w7QKa3l5uY7/5b1aWVn5Cdt9yAeQ5XFUvzug5x7FH8CN48XMG+qLmTvg34YwAkbACBgBI2AEjIARMAJGwAgYgf+AwB+F21KJm5rbrAAAAABJRU5ErkJggg==);
}
.orders-type li .ico-waitconfirm i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAABGdBTUEAALGPC/xhBQAABeNJREFUeAHtml1oHFUUx+/mYxuNYhN9sAqS5EUfkhaSTUyWiFmjEMQ+pBDBhxJB6FsoYm3ZgK7xIaIUSvNS6VtjgmDAgJ+BFrMPYVOSTVGDgpIPwYdV0bQhpGYNm/V/xplhdrMzc++wk5rdc2H2fpxzv3577r1nPoTgwASYABNgAkyACTABJsAEmAATYAJMgAkwASZwjwkEvPQ/MDBQub6+/kY2m30Z9VtwBb20I1EnBZ2bFRUVby0uLv4goe+rijIsHdQNgOrxdWS5jacDgcCpZDL5VW7xweaUYYVCofMA9T4Gn0F8CcO9jvQ/fgwb7T+GtqOImxH/hvippaWlTT/6kmmzSkbJqoMB09ITiC9h4G9aZX6kw+HwjXQ6vYb+Hq2srHwGfXzhRz8ybVbIKOXp0B5F4fp/kb+/iUTiD1jV99QLgBl9+9upTeteYGmbuV9Lz2ac2jIHrCM28gMp9gLrQAb2f+yEYSn8KwxLAZbyaajQdtFUsVedoMYQx9ra2mJuDUNvD3tqBnp3Ed+CU3tlYWFhyq2em7wkLQuAaF7VuB4CuEgmk/mktbV1Az7iaTcgTvJDYVmWCXwLEK9b8gWTAHQZguPQ/R3pOqSDSNchfQ3QXoN/GEE+W7CyQ+Fhg3UHtzxxh/loIljQbYCh9IcA8057e/u5vb29EeTvB6RnIf8Ft21NU1NTtFSlQ0kuw/zZ4yb84ubmZj3KNecW8ROrq6s38/Xc8mUBiyCsrKykYWUnsNlrkGBhIVjcu26ArPKygWVMuqGhoRvpPymPjf88Tlc6CKRC2cGifQo35K+CThbWRbdPF3FJhbKDRVTgc32JiB4sCgA7RbFMKEtYBAaQPqcYp+bj9ECT0m6hbGEB0qc6nAA2/2Y3UCQvW1g4FQ03QlRVVUnBOmxOqYwBmDqwHtt7STipph7Sj5gZh0TZWpYDE1tRSVoWlthZWNVR21nrAlhUXE+uuOmSvCRhwTX4TmbycEg1NZyM2zL6vAxlKOk6DIthKRBQUGXLYlgKBBRU2bIYlgIBBVW2LAVYvjqlcPpa4fCFMZ4ncf0ErzqBR7u3FMbnqtrT03N0e3v7OXjjIVKG956sra39Jh6P33GtrKjgBRZ9pBHExG2/9uvu7q7b2dm5DJ3TuHKGhDcrH9XU1Jydm5u7nSPwkOno6Hhpa2vrKqoeM6rTDTLKUpCdgSdv+3kSnmEF19bWtGoAnDbqO8VeluGy3uALhRqmB2kANUOgSN7U1CR6e3u1mPJUTnLZB25Up1DAy4aTeIZOD/COwZJEZ2endlGaykhGMAvVpTKAMsZPj5elPsEs+pd/+GdfQedn8Jw7OzIyEujr6zPHOzMzI2KxWBYTCQDaVfyjH5tChwR0CcoDuLSXrKhXizauIf8wLFWMjo6K+np60yXExsaGiEajAsudsn9hHIMYk3nvh7YCqH8c8du46jHWr/Eu8kVSdgvKsMgi8PGt6zelg4ODYmhoaF//Y2NjYnx8fF+5lwKyounpaROU0QYB6+/vF9jLjCK7OAVwT+O94q92CtZy5WVIb0caGxufxz9yAQ3R36d9aGZtlNLYePOLtHwkEilY7qWwpaVlHyhqh6yMZDaBlt3PkF0JBoPNsqCoLS8bvNBfe3+A+nSZoaur677d3d0tmLfrCwAMOFNdXf3g/Pz832YDkgmcsqNQjUqqv4clOSyp66imbFlOrdHEAepH0sHRXVB1dnZWKyc9L6CoMpZOkuLl5WVtj6K0NdAyJBkFQ9cq95ouKix9EJMUT0xMZGlDtwbKT05Oar4ELGvCKlNJkx8F/RTtScPDwznAjA1e369Suq5K87a6yhu8bUu6QD8AErCcDioi1wF7nMChQMe1pgVQCygLq37FonehReQ64JT7jDK00Rt7FFmUsbHjJDzp5GtZ25NJFx0WdWp1SvMHAVBFdUrhQuQ4pXp/KYBydErzxyWT9wWW0XGp3e4Y8+KYCTABJsAEmAATYAJMgAkwASbABJgAE2ACTOCeEfgXHLRA/axOZOEAAAAASUVORK5CYII=);
}
.orders-type li .ico-waitevaluate i {
    background-image: url("https://asset.yit.com/h5/image/daipingjia.png");
}
.orders-type li .ico-aftersale i {
    background-image: url(data:image/png;base64,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);
}

.orders .orders-type li div i {
    width: .666562rem;
    height: .666562rem;
    margin: 0 auto;
    display: block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    text-align: center;
    position: relative;
}



</style>



