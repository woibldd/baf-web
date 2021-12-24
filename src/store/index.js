import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: 'en',
    i18n: null
  },
  mutations: {
    SET_LANG: (state, lang) => {
      state.lang = lang
    }
  },
  actions: {
    changeLang ({}, lang) { 
      this.commit('SET_LANG', lang)
    }
  },
  modules: {
  }, 
})
