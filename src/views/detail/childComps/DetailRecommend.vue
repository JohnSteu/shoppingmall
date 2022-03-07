<template>
  <div id="recommend" v-if="Object.keys(detailDate).length !== 0">
    <ul>
      <li>推荐列表1</li>
      <li>推荐列表2</li>
      <li>推荐列表3</li>
      <li>推荐列表4</li>
      <li>推荐列表5</li>
      <li>推荐列表6</li>
      <li>推荐列表7</li>
      <li>推荐列表8</li>
      <li>推荐列表9</li>
      <li>推荐列表10</li>
    </ul>
    <input type="text" v-model.number="value" />
    <div>{{ value }}</div>
    <div
      @click="clickEvent(2)"
      style="width: 300px; height: 100px; background: red"
    >
      <button @click.once="clickEvent(1)">click</button>
    </div>
    <a href="#" @click="clickEvent(1)">dianow</a>
    <button @click.middle="clickEvent(1)" @click.left="clickEvent(2)" @click.right="clickEvent(3)">点我</button>
  </div>
</template>

<script>
export default {
  props: {
    detailDate: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      value: "222",
    };
  },
  methods: {
    clickEvent(num) {
      console.log(num);
    },
  },
};
</script>

<style></style>
