<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="leftClick">
        <img src="~@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, index) in titles"
          :key="item.index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    leftClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.left img{
  vertical-align: middle;
}
.center {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text)
}
</style>
