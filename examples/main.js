import Vue from 'vue'
import App from './App.vue'

import YUi from '../packages/index'
Vue.use(YUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
