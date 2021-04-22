
import {debounce} from "./utils";

export const itemImageLoadMixin = {  //混入, 抽取公共代码
  data(){
    return{
      itemImageListener: null
    }
  },
  mounted(){
   //监听子组件图片加载
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImageListener = () =>{
      refresh();
    }
    this.$bus.$on('itemImageLoad',  this.itemImageListener)
    console.log("我是混入代码");
  }
}
