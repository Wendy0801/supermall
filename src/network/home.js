import {request} from "./request";

// export function getHomeMultidata(){
//   return request({
//     url: '/home/multidata'
//   })
// }
//
// export function getHomeGoods(type, page){
//   return request({
//     url: '/home/data',
//     params: { type,page }
//   })
// }

export function getHomeMultidata(){
  return request({
    url: '/api/api/custom/txt/bXVsdGlkYXRhLmpzb24=',
  })
}

export function getHomeGoods(type, page){
  return request({
    url: '/api/api/custom/txt/ZGF0YS5qc29u',
    params: { type,page },
  }).then(res =>{
    let r = [];
    r = res.data.goods.list.filter((item)=> item.type === type)
    return r;
  })
}


// <!--函数调用 --> 压入函数栈（保存函数调用过程中所有变量）-->
// <!--函数调用结束 &ndash;&gt; 弹出函数栈-->
// function test(){
//   const name = ['why']
// }

