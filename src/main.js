import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'
import en from '@/languages/en.js'
import zhCN from '@/languages/zh-CN.js' 

import commonMixins from './mixins/common'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VueAwesomeSwiper from 'vue-awesome-swiper' 

import Icon from '@/components/Icon'

import '@/styles/index.scss'
import '@/styles/mixins.scss'
import '@/styles/flex.css'

import 'swiper/css/swiper.css'
import './modules/swiper/animate.min.css'
import $ from 'jquery'

Vue.use(VueI18n)
Vue.prototype.$ = $
Vue.use(VueAwesomeSwiper) 
Vue.use(ElementUI); 

const i18n = new VueI18n({
  locale: store.state.lang,
  silentFallbackWarn: true,
  messages: {
    en: {...en},
    'zh-CN': {...zhCN}
  }
})
// Vue.prototype.$i18n = i18n



//加载svg到页面
const request = require.context('./assets/svg', true, /\.svg$/)
request.keys().forEach(request)
Vue.component('icon', Icon)

Vue.mixin(commonMixins) 
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
