<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
    }
  },
  props:{
    path: String,
    activeClass:{
      type: String,
      default: '#ff8198'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) == -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeClass} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tar-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}
.tar-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle; /* 图片本身底部有3px,可以通过这个这是去除*/
}
</style>
