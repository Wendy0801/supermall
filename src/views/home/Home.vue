<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">蘑菇街</div></nav-bar>
    <!--      1.子组件中probeType是驼峰式，父组件传入的时候要用probe-type-->
    <!--      2.传入具体的一个类型的时候需要用v-on绑定，不然会被当作字符串传入-->
    <tab-control :title="['流行','新款', '精选']" class="tab-control"  @tabClick="tabClick" ref="tabControl1" v-show="isFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <Home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></Home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <tab-control :title="['流行','新款', '精选']"  @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import Goods from "components/content/goods/Goods";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";


import {getHomeMultidata, getHomeGoods} from "network/home";
import {itemImageLoadMixin} from "common/mixins";

export default {
  name: "home",
  components:{
    BackTop,
    Scroll,
    Goods,
    NavBar,
    TabControl,

    HomeSwiper,
    HomeRecommend

  },
  data(){
    return{
      banner: [],
      recommend:[],
      goods:{
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell':{page: 0, list:[]}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlTop: 0,
      isFixed: false,
      saveY: 0
    }
  },
  destroyed() {
    console.log("销毁")
  },
  activated(){
    this.$refs.scroll.scrollToTop(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();


    //取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    console.log("mounted");
  },
  mixins: [itemImageLoadMixin],
  computed:{
    showGoods(){
      return  this.goods[this.currentType].list
    }
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res =>{
        this.goods[type].list.push(...res);
        this.goods[type].page = page;
        this.$refs.scroll.finishPullUp();
      })
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;

      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop(){
      this.$refs.scroll.scrollToTop(0, 0);
    },
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 600;
      this.isFixed = (-position.y) > this.tabControlTop;
    },
    loadMore(){
      console.log('加载更多');
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad(){
      // 所有组件都有一个属性：$el, 用于获取组件中的元素
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop
    }
  },



}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: calc(100vh - 49px);
  position: relative;
}
.home-bar{
  background-color: var(--color-tint);
  color: #fff;

  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
  /*position: fixed;*/
  /*left: 0;*/
  /*top: 0;*/
  /*right: 0;*/
}

/*吸顶效果，better-scroll导致不可用*/
/*.tab-control{*/
/*  position: sticky;*/
/*  top: 44px;*/
/*}*/
.tab-control{
  position: relative;
  z-index: 9;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;

}
/*.content{*/
/*  height: calc(100% - 93px);*/
/*}*/
</style>

