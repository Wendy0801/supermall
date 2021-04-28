# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###一. 开发工具：
```
snipaste  ----截图工具

github 和 stack overflow  ----查询工具

httpbing.org   -----网络请求的模拟
```

## 二： 项目开发流程
```
开始新项目：
1.创建git仓库
创建本地仓库的就是git init
git remote add origin https://github.com/Wendy0801/supermall.git
git push -u origin master
2.划分目录结构
3.应用2个css
4.配置文件vue.config.js 和 .editorconfig
5.项目的模块划分：tabbar   --> 路由映射关系
```

## 三. 解决浏览器跨域问题
```
1.chrome 下添加
--args --disable-web-security --user-data-dir="C:/ChromeDevSession"

2.设置代理 proxy
(1)vue.config.js
(2)
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
  open: true,
  host: 'localhost',
  port: '8080',
  https: false,
  //以上的ip和端口是我们本机的;下面为需要跨域的
  proxy: {//配置跨域
    '/api': {//替换代理地址名称
    target: 'http://localhost:8082', //代理地址，即要跨域请求的地址,这里后台的地址模拟的;应该填写你们真实的后台接口
    ws: true,
    changeOrigin: true, //允许跨域
    pathRewrite: {
    '^/api': '' //请求的时候使用这个api就可以
      }
    }
  }
  }
};
(3)如果请求有设置baseURL的话一定要把baseURL设置为空
(4)axios的请求路径应该是’/api/xxx’
3.服务器添加Access-Control-Allow-Origin（CORS）



## 四.知识点：
1.ref如果绑定在组件中，那么通过this.$refs.refname 获取到的是一个组件对象，如果ref绑定在普通元素中，那么通过this.$refs.refname 获取到的是一个元素对象

2.V-on的修饰符
（1）@click.stop 阻止事件冒泡
（2）@click.prevent  阻止默认事件
（3）@kekup.enter 监听键帽
（4）@click.once 某些事件只监听一次
（5）@click.native 监听一个组件的原生事件事，必须对应事件上加上.native才能监听
 (6）@click.capture：与事件冒泡的方向相反，事件捕获由外到内；
 (7）@click.self：只会触发自己范围内的事件，不包含子元素；

3.原生监听图片的加载 img.onload = function(){},vue中监听图片加载@load = '方法'

4.非父子组件的通信，选择‘事件总线’
（1）在main.js中添加 vue.prototype.$bus = new vue()
（2）this.$bus.$emit('事件名称', 参数) 在组件中发射事件
（3）this.$bus.$on('事件名称', 回到函数) 在组件中接受函数

5. 防抖函数 / 节流函数

6.所有组件都有一个属性：$el, 用于获取组件中的元素 ：this.$refs.组件.$el

7.默认情况下，所有路由管理的对象
  （1）当对象消失的时候，都会被销毁，执行destroyed
  （2）在路由router-view 使用 <keep-alive> 让路由不要随意销毁，不执行destroyed
  （3）使用keep-alive 时，会执行两个函数 ： activated （进来时执行） 和 deactivated （离开时执行）
  （4）使用keep-alive的时候，可以通过exclude属性排除需要重新刷新的组件
8.两种路由的传递方式
      (1).动态路由
      this.$router.push('detail/' + this.goodsItem.id)
      (2).query方式
      this.$router.push({
        path:'detail',
        query:{
          id: this.goodsItem.id
        }
      })
9.判断一个对象是否为空对象： const obj = {} ； Object.key(obj).length === 0


10.mixin 合并代码 (抽取相同代码)

11.$nextTick: 获取数据后，子组件dom元素渲染完后， 会通过下一帧 $nextTick(()=>{}) 回调说明dom 渲染完


12. Number.MAX_VALUE  数字的最大值

13. mapGetters, mapActions 组件和vuex 的映射

14. Action 可以返回一个promise

15.toast 插件的封装

16.vue-lazyload

17.px2vw-css

```

## 四： 生命周期
```
created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
updated: 有数据变化时候执行
```
