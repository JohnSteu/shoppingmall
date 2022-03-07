import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}

export function getHomeGoods() {
  return request({
    url: 'http://www.blogry.cn/test/index'
  })
}