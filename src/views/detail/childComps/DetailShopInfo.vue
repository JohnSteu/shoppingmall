<template>
  <div class="shop-info" v-if="Object.keys(detailDate).length !== 0">
    <div class="shop-top">
      <img src="" alt="">
      <span></span>
    </div>

    <div class="shop-middle">

      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr></tr>
        </table>
      </div>
    </div>
    <ul>
      <li>liebiao1</li>
      <li>liebiao2</li>
      <li>liebiao3</li>
      <li>liebiao4</li>
      <li>liebiao5</li>
      <li>liebiao6</li>
      <li>liebiao7</li>
      <li>liebiao8</li>
      <li>liebiao9</li>
      <li>liebiao10</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    detailDate: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

</style>