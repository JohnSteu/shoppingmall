<template>
  <swiper class="detailSwiper">
    <swiper-item>
      <img :src="image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  components: { 
    Swiper,
    SwiperItem,
  },
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.detailSwiper {
  height: 200px;
}
</style>