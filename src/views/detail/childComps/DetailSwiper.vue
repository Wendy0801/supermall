<template>
  <swiper>
    <swiper-item v-for="item in topImage">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {SwiperItem, Swiper},
  props:{
    topImage:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
