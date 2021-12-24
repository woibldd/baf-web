<template>
  <div class="top-nav-container">
    <div ref="nav" style="transition: all 0.5s ease 0s;" class="nav-a">
      <div class="nav-box" flex="main:justify">
        <div class="left">
          <div @click="gotoPath('/')"  style="height: 45px; margin-top: 32px; cursor:pointer;" flex="cross:top;">  
            <icon  style="width: 157px; height: 45px;" name="logo" /> 
          </div> 
        </div>
        <div class="right"> 
          <ul flex="main:right">
            <li class="pointer nav-item mr-60" ><router-link to="/home">About Us</router-link></li>
            <li class="pointer nav-item mr-60" ><router-link to="/portfolio">Portfolio</router-link></li>
            <li class="pointer nav-item mr-60" ><router-link to="/insights">Insights</router-link></li>
            <li class="pointer nav-item mr-60"><router-link to="/news">News</router-link></li> 
            <li class="pointer nav-item mr-60"><router-link to="/contact">Contact</router-link></li>
            <li class="pointer nav-item lang">
              <label @click="handleChangeLang('zh-CN')">简</label> / <label @click="handleChangeLang('en')">EN</label>
            </li>
          </ul>
        </div>
      </div>
    </div> 
  </div>
</template>

<script> 

export default { 
  props: {
    banner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollY: 0,
    }
  },
  methods: {
    handleScroll() { 
      let nav = this.$refs['nav']
      let docSrollTop = document.scrollingElement.scrollTop
      if (docSrollTop >= this.scrollY && docSrollTop > 100) {
        
        nav.style.transform = 'translate3d(0px, -100px, 0px)' 
        
      } else {
        nav.style.transform = 'translate3d(0px, 0px, 0px)' 
      }
      this.scrollY = docSrollTop
    },
    handleChangeLang(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('changeLang', lang)
    }
  }, 
  mounted() { 
    // this.handleScroll()
    window.addEventListener('scroll',this.handleScroll)
 
  }
}
</script>

<style lang="scss">
  .top-nav-container {
    position: relative ;
    height: 100px;
    font-size: 18px;  
    .nav-a {
      border-bottom: 1px solid #ccc;
      background-color: #fff;
      backface-visibility: hidden;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 100;
    }
    .nav-box {
      margin: 0 auto;
      width: 1300px;
      height: 100px;
      line-height: 100px;
      .left {
        .logo {
          width: 157px;
          height: 45px;
        }
      }
      .nav-item {
        a {
          color: $nav;
          font-family: Arial;
          font-weight: bold;
          &:hover {
            color : $nav-hover;
          }
        }
        &.lang {
          font-size: 14px;
          font-weight: 400;
          color: $nav; 
          label {
            font-size: 16px;
          }
        } 
      }
    } 
  }
</style>