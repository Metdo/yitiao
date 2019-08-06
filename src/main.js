import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from './routers/index';
// 引入 vuex 状态管理
import store from './stores/index';
import './registerServiceWorker';

import axios from 'axios';
// Vue继承axios
Vue.prototype.$axios = axios
Vue.prototype.$author = () => {
  return 'jian'
}

// 引入rem px 移动端适配
// import 'lib-flexible';
// import './routers/rem';

Vue.config.productionTip = false

// 引入vant的组件
import Vant from './vants/index'
Vant()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
