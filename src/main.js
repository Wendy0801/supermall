import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import toast from "components/common/toast"
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//使用图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/back.svg')  //默认占位图片
})

//解决移动端300s延迟
FastClick.attach(document.body);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
