<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:{
      type: Array,
      default() {
        return [];
      }
    }

  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  padding-bottom: 10px;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.recommend-item img{
  width: 100%;
  padding: 10px 10px;

}
</style>
