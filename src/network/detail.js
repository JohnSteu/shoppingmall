import { request } from "./request"

export function getDetailData(id) {
  return request({
    url: 'http://www.blogry.cn/test/index',
    params: {
      id
    }
  })
}

class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cShells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

class GoodsParam {
  constructor(info, rule) {
    // 注：images可能没有值（某些商品有值，某些没有值）
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}