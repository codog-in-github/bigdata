import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import { router } from '@/router/main'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
