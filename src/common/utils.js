//防抖函数
export function debounce(func, delay=100){
  let timer =null;
  return function (...arg){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg)
    }, delay)
  }
}

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
