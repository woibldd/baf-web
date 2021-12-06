<template>
  <div id="app">  
    <mnav v-if="showNav" 
      ref="nav"
      style="transition: all 0.5s ease 0s;"
      :banner="showBanner"/>
    <router-view></router-view>
    <mfooter-nav v-if="showFooter"/>
  </div>
</template>

<script> 

import mnav from '@/components/top-nav.vue'
import mfooterNav from '@/components/footer-nav.vue' 

export default {
  name: 'app',
  data() {
    return {
      scrollY: 0,
    }
  },
  components: {
    mnav,
    mfooterNav,
  },
  computed: {
    showNav() {
      if (!this.$route.name) {
        return false
      } 
      return this.$route.meta.nav!==false
    },
    showFooter() {
      if (!this.$route.name) {
        return false
      } 
      return this.$route.meta.footer!==false 
    },
    showBanner() {
      if (!this.$route.name) {
        return false
      } 
      return this.$route.meta.banner!==false 
    }
  },
  methods: { 
    handleScroll() { 
    }
  },
  mounted() {  
    // window.addEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary; 
  height: 100%;
}
</style>
