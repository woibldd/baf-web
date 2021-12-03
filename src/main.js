import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import commonMixins from './mixins/common'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/styles/index.scss'
import '@/styles/mixins.scss'
import '@/styles/flex.css'

import 'swiper/css/swiper.css'
import './modules/swiper/animate.min.css'
 
Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI); 

Vue.mixin(commonMixins) 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
