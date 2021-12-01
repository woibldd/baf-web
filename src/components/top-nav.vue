<template>
  <div class="top-nav-container">
    <div class="nav-a">
      <div class="nav-box" flex="main:justify">
         <div class="left" flex="cross:center">
            <img class="logo" src="@/assets/logo-blue.png" alt="">
         </div>
         <div class="right"> 
            <ul flex="main:right">
              <li class="pointer nav-item mr-60" ><router-link to="/home">About Us</router-link></li>
              <li class="pointer nav-item mr-60" ><router-link to="/portfolio">Portfolio</router-link></li>
              <li class="pointer nav-item mr-60" ><router-link to="/insights">Insights</router-link></li>
              <li class="pointer nav-item mr-60"><router-link to="/news">News</router-link></li> 
              <li class="pointer nav-item mr-60"><router-link to="/contact">Contact</router-link></li>
              <li class="pointer nav-item lang">
                <span>简</span> / <span>EN</span>
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
}
</script>

<style lang="scss">
  .top-nav-container { 
    font-size: 18px;  
    .nav-box {
      margin: 0 auto;
      width: 1300px;
      height: 120px;
      line-height: 120px;
      .left {
        .logo {
          width: 157px;
          height: 45px;
        }
      }
      .nav-item {
        a {
          color: $nav;
          font-family: Arial-BoldMT, Arial;
          font-weight: bold;
          &:hover {
            color : $nav-hover;
          }
        }
        &.lang {
          font-size: 16px;
          font-weight: 400;
        } 
      }
    } 
  }
</style>