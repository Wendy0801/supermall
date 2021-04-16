<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type: Number,
      default:0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,  //如果是button无论是否为false,button都可以点击，如果是div/span，只有click为true才可以被点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll', (position) =>{
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollToTop(x, y, time = 300){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
