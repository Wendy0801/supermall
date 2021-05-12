//防抖函数： 在一定时间内，如果监听到一个动作发生，就把定时器清除重新计时
export function debounce(func, delay=100){
  let timer =null;
  return function (...arg){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg)
    }, delay)
  }
}
// 函数节流：在 一定时间 之内，限制 一个动作 只 执行一次 。
// function throttle(fn,wait){
//   var timer = null;
//   return function(){
//     var context = this;
//     var args = arguments;
//     if(!timer){
//       timer = setTimeout(function(){
//         fn.apply(context,args);
//         timer = null;
//       },wait)
//     }
//   }
// }

// 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

export function formatDate(date, fmt) {
  //1.获取年份
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
  }

  //2.
  //M+  正则匹配一个或多个M
  let o = {
    'M+': date.getMonth() +1,
    'd+':date.getDate(),
    'h+': date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
  }
  for (let k in o){
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k]+ '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1 ) ? str : padleftZero(str))
    }
  }
  return fmt;
}
function padleftZero(str){
  return('00' + str).substr(str.length);
}
