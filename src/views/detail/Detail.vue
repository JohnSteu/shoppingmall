<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :image="image"></detail-swiper>
      <detail-base-info :detailDate="detailDate"></detail-base-info>
      <detail-shop-info :detailDate="detailDate"></detail-shop-info>
      <detail-goods-info :detailDate="detailDate" @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info :detailDate="detailDate"></detail-param-info>
      <detail-comment :detailDate="detailDate"></detail-comment>
      <detail-recommend :detailDate="detailDate"></detail-recommend>
    </scroll>
  </div>
</template>

<script>
// 1、导入方法函数
import { getDetailData } from "@/network/detail.js";

// 2、导入子组件
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailComment from './childComps/DetailComment.vue';
import DetailRecommend from './childComps/DetailRecommend.vue';

// 3、导入公共组件
import Scroll from "../../components/common/sroll/Scroll.vue";





export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailRecommend,

    Scroll,
  },
  data() {
    return {
      id: null,
      detailDate: {},
      image: "",
    };
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    // 1.保存传入的id
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;

    // 2.根据id请求详情数据，请求数据函数封装起来
    // 这里因为跟老师的接口不一样，所以自己根据id值过滤取到数据，根据过滤后的数据进行渲染
    getDetailData(this.id).then((res) => {
      const data = res.filter((item) => {
        return item.id === +this.id;
      });
      this.detailDate = data[0];
      this.image = data[0].firstpicture;

      // 创建商品信息对象
      // 创建店铺信息对象
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
  background-color: #fff;
}
</style>
