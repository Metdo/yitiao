import Vue from 'vue';

import { 
    // 底部标签栏
    Tabbar, TabbarItem ,
    // 图标
    Icon,
    // 搜索
    Search,
    // 导航标签
    Tab, Tabs,
    // 轮播图
    Swipe, SwipeItem,
    // Lazyload 图片懒加载
    Lazyload, 

// 分类
    // 侧边导航
    Sidebar, SidebarItem,

// 生活贴 
    // 宫格
    Grid, GridItem,




} from 'vant';



export default () => {
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Icon);
    Vue.use(Search);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(Grid).use(GridItem);
}
