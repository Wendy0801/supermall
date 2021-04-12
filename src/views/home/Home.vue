<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">蘑菇街</div></nav-bar>
    <Home-swiper :banner="banner"></Home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";


export default {
  name: "home",
  components:{
    HomeRecommend,
    NavBar,
    HomeSwiper
  },
  data(){
    return{
      banner: [],
      recommend:[]
    }
  },
  created() {
    getHomeMultidata().then(res =>{
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }

}
</script>

<style scoped>
.home-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>

