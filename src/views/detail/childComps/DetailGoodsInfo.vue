<template>
  <div id="detailgoods" v-if="Object.keys(detailDate).length !== 0">
    <p>{{detailDate.description}}</p>
    <img :src="detailDate.firstpicture" alt="" @load="imgLoad">
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
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.counter === this.imagesLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailDate.firstpicture.length
    }
  }
}
</script>

<style>
#detailgoods img {
  width: 320px;
}
</style>