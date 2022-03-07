<template>
  <div v-if="Object.keys(detailDate).length !== 0">
    <ul>
      <li>{{1535694719 | showDate}}</li>
      <li>评论信息2</li>
      <li>评论信息3</li>
      <li>评论信息4</li>
      <li>评论信息5</li>
      <li>评论信息6</li>
      <li>评论信息7</li>
      <li>评论信息8</li>
      <li>评论信息9</li>
      <li>评论信息10</li>
    </ul>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
  props: {
    detailDate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //1.将时间戳转化为Date对象
      const date = new Date(value * 1000)

      //2.将date进行格式化
      return formatDate(date, 'yyyy-MM-dd hh-mm-ss')
    }
  }
}
</script>

<style>

</style>