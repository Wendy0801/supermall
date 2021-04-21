import {request} from "./request";

export function getGoodsDetail(id){
  return request({
    url: '/api/api/custom/txt/ZGF0YS5qc29u',
  }).then(res =>{
    let r = {};
    r = res.data.goods.list.filter((item)=> item.id === id)[0]
    return r;
  })
}
