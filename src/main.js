import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import commonMixins from './mixins/common'

import '@/styles/index.scss'
import '@/styles/default.scss'
import '@/styles/flex.css'

Vue.mixin(commonMixins) 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
