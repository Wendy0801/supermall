<template>
  <div class="goods-item">
    <img :src="goodsItem.image" :key="goodsItem.image" @load="imageLoad">
    <div class="goods-info">
      <span>{{goodsItem.title}}</span>
      <span class="price">{{goodsItem.price | handlePrice}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return []
      }
    }
  },
  filters: {
    handlePrice(price){
      return '￥' + price.toFixed(2);
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    }
  }
}
</script>

<style scoped>
.goods-item{
  width: 48%;
  padding-bottom: 12px;
}
.goods-item img{
  width: 100%;
  border-radius: 4px;
}
.goods-info{
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 8px 0;
}
.goods-info span{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price{
  color: var(--color-tint);
}
</style>
