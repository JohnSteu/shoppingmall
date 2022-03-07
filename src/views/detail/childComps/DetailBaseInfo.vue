<template>
  <div v-if="Object.keys(detailDate).length !== 0" class="base-info">
    <div class="info-title">{{detailDate.description}}</div>

    <div class="info-price">
      <span class="n-price">{{detailDate.view}}</span>
      <span class="o-price">{{detailDate.view}}</span>
      <span class="discount">{{detailDate.title}}</span>
    </div>

    <div class="info-other">
      <span>{{detailDate.title}}</span>
      <span>{{detailDate.title}}</span>
      <span>{{detailDate.title}}</span>
    </div>

    <div class="info-service">
      <span class="info-service-item">
        <img src="" alt="">
        <span>{{detailDate.title}}</span>
      </span>
    </div>
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
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}


.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: aliceblue;
  background-color: var(--color-high-text);
  border-radius: 3px;
  margin-left: 5px;

  /* 让元素上浮一些，使用相对定位 */
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  justify-content: space-around;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>