import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Life from '../views/Life.vue';
import Cart from '../views/Cart.vue';
import Mine from '../views/Mine.vue';

// import NavFamily from '../components/HomeNav/NavFamily.vue';
// import Aaa from '../components/HomeNav/Aaa.vue';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
        children:
        [
          {
            path: 'navSift',
            name: 'navSift',
            component: () => import(/* webpackChunkName: "about" */ '../components/Navigation/NavSift.vue')
          },
          {
            path: 'navPalace',
            name: 'navPalace',
            component: () => import(/* webpackChunkName: "about" */ '../components/Navigation/NavPalace.vue'),
          },
          {
            path: 'navFamily',
            name: 'navFamily',
            component: () => import(/* webpackChunkName: "about" */ '../components/Navigation/NavFamily.vue'),
            // component: NavFamily
          },
          {
            path: 'navCate',
            name: 'navCate',
            component: () => import(/* webpackChunkName: "about" */ '../components/Navigation/NavCate.vue'),
            // component: NavFamily
          }
        ]
    },
    

    {
      path: '/classify',
      name: 'classify',
      component: Classify,
        children: [
          {
            path: '/classifyDaily',
            naem: 'classifyDaily',
            component: () => import(/* webpackChunkName: "about" */ '../components/Classify/ClassifyDaily.vue'),
          },
          {
            path: '/classifySummer',
            naem: 'classifySummer',
            component: () => import(/* webpackChunkName: "about" */ '../components/Classify/ClassifySummer.vue'),
          },
          {
            path: '/classifyBoutique',
            naem: 'classifyBoutique',
            component: () => import(/* webpackChunkName: "about" */ '../components/Classify/ClassifyBoutique.vue'),
          },
        ]
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    // 重定向，默认打开为首页
    {
      path: '/',
      redirect: '/home/navSift'
    },
    
  ]
})
