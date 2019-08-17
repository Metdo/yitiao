import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

import axios from 'axios';

import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Life from '../views/Life.vue';
import Cart from '../views/Cart.vue';
import Mine from '../views/Mine.vue';

// import NavFamily from '../components/HomeNav/NavFamily.vue';
// import Aaa from '../components/HomeNav/Aaa.vue';

// export default new Router({
let router = new Router ({
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
      component: Cart,
      // 本组件需要登录权限才可访问
      meta: { requiresAuth: true }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import(/* webpackChunkName: "about" */ '../views/Reg.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    // 详情页
    {
      path: '/details/:id',
      name: 'details',
      component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'),
    },

    // 重定向，默认打开为首页
    {
      path: '/',
      redirect: '/home/navSift'
    },
    {
      path: '/home',
      redirect: '/home/navSift'
    },
    {
      path: '/r/:id',
      redirect: 'details/:id'
    },
    
  ]
});


// 全局路由守卫
// 所有的路由切换都会执行，
router.beforeEach((to,from,next)=>{
  // console.log('全局：beforeEach',to);
  // 判断目标路由是否需要登录权限才可访问
  if(to.matched.some(item=>item.meta.requiresAuth)){
      let token = localStorage.getItem('Authorization');
      axios.get('/verify')
      // 用户已登录
      if(token){
          next();
      }

      // 用户未登录
      else{
          next({
              path:'/login',
              query:{
                  redirectTo:to.fullPath
              }
          })
      }
  }else{
      next();
  }
})

// router.afterEach((to,from)=>{
//   // console.log('全局：afterEach');
// })

export default router;
