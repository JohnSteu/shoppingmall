<template>
  <div v-if="Object.keys(detailDate).length !== 0">
    <table>
      <tr>
        <td></td>
      </tr>
    </table>

    <table>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
    <ul>
      <li>参数数据1</li>
      <li>参数数据2</li>
      <li>参数数据3</li>
      <li>参数数据4</li>
      <li>参数数据5</li>
      <li>参数数据6</li>
      <li>参数数据7</li>
      <li>参数数据8</li>
      <li>参数数据9</li>
      <li>参数数据10</li>
    </ul>
    <div>
      <img src="" alt="">
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

</style>