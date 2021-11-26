<template>
  <div class="top-nav-container">
    <div class="nav-a">
      <div class="nav-box" flex="main:justify">
         <div class="left" flex="cross:center">
            <img class="logo" src="@/assets/logo-blue.png" alt="">
         </div>
         <div class="right"> 
            <ul flex="main:right">
              <li class="pointer nav-item mr-60" >About Us</li>
              <li class="pointer nav-item mr-60" >Portfolio</li>
              <li class="pointer nav-item mr-60" >Insights</li>
              <li class="pointer nav-item mr-60">News</li>
              <li class="pointer nav-item mr-60">News</li>
              <li class="pointer nav-item mr-60">Contact</li>
              <li class="pointer nav-item">
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
  }
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
        color: $nav;
        font-family: Arial-BoldMT, Arial;
        font-weight: bold;
        &:hover {
          color : $nav-hover;
        }
      }
    } 
  }
</style>