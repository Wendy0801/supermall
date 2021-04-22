<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImage="detailSwiper"></detail-swiper>
    {{time | showTime}}
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import {getGoodsDetail} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import {formatDate} from "common/utils";

export default {
  name: "Detail",
  components:{
    DetailSwiper,
    DetailNavBar
  },
  data(){
    return{
      id: null,
      detailSwiper: [],
      time: '1535694719' // 秒
    }
  },
  filters:{
    showTime(t){
      //1.将时间戳转化成Date对象
      const date = new Date(t*1000) //毫秒
      //2.将date进行格式
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  created() {
    this.id = this.$route.params.id
    getGoodsDetail(this.id).then(res => {
      this.detailSwiper = res.imageList;
    })
  }

}
</script>

<style scoped>

</style>

<!--滚动到对应的主题：-->
<!--1.获取所有主题的offsetTop-->
<!--2.问题：在哪里才能获取正确的offsetTop-->
<!--  （1）created 肯定不行，html 还没渲染出来-->
<!--  （2）mounted 也是不行， 数据还没有获取到-->
<!--  （3）获取到数据的回调中也不行，子组件Dom还没有渲染完-->
<!--  （4）$nextTick 组件Dom 渲染完 也不行， 因为图片没加载完的高度没有计算在内-->
<!--  （5）在图片加载完成后，获取高度才是正确的-->


<!--滚动到对应的位置，主题指向那个-->
