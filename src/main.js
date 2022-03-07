import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

// Vue实例可以作为事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
