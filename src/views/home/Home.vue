<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="istabControlShow"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-rec-view :recommends="recommends"></home-rec-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//函数导入
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { debounce } from "@/common/utils.js";

//公共组件导入
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/sroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

//子组件导入
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecView from "./childComps/HomeRecView.vue";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      istabControlShow: false,
      saveY: 0
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    this.getHomeGoods();
  },
  mounted() {
    // 1、监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 1.func = this.$refs.scroll.refresh(), 延迟500s
    // 2.调用refresh()，timer不为空，清除timer，func = this.$refs.scroll.refresh(), 延迟500s
    // 3...
    // 4...
    // 30.调用refresh()，timer不为空，清除timer，func = this.$refs.scroll.refresh(), 延迟500s
    this.$bus.$on("itemImageLoad", () => {
      // this.$refs.scroll && this.$refs.scroll.refresh()
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed() {
    console.log('home destroyed');
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /**
     *事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // console.log(this.$refs);
      // console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 1、判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2、决定tabControl是否吸顶(position: fixed),这种方法行不通,fixed会让组件突然消失,而且下面的组件会突然往上蹭
      // this.istabControlFixed = -position.y > this.tabOffsetTop;

      // 2.决定tabControl是否显示
      this.istabControlShow = -position.y > this.tabOffsetTop
    },
    loadMore() {
      console.log("上拉加载更多");
      // 针对类型加载更多数据，这里没有接口，因此请求的是一样的数据，vue会报错，因为加载的数据ID是一样的，实际不一样，这个不用管，但加载数据和刷新与老师教学思想一致
      this.getHomeGoods(this.currentType), this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      //获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     *网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods() {
      getHomeGoods().then((res) => {
        //将res数组成员解析出来（一个一个取出来）再添加到新数组
        this.goods["pop"].list.push(...res);
        this.goods["news"].list.push(...res);
        this.goods["sell"].list.push(...res);

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;

  /* 使用浏览器原生滚动时，为了导航不跟随滚动设置的 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content {
  /* height: 300px; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
