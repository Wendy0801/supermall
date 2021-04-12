import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}


// <!--函数调用 --> 压入函数栈（保存函数调用过程中所有变量）-->
// <!--函数调用结束 &ndash;&gt; 弹出函数栈-->
// function test(){
//   const name = ['why']
// }

