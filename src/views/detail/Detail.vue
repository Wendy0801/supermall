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
