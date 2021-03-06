import { debounce } from "./utils";

export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgLister = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgLister)
  }
}