<template>
  <div class="top-nav-container">
    <div class="nav-a">
      <div class="nav-box" flex="main:justify">
         <div class="left">
            BAF
         </div>
         <div class="right"> 
            <ul flex="main:right">
              <li class="pointer nav-item" >About Us</li>
              <li class="pointer nav-item" >Portfolio</li>
              <li class="pointer nav-item" >Insights</li>
              <li class="pointer nav-item">News</li>
              <li class="pointer nav-item">News</li>
              <li class="pointer nav-item">Contact</li>
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
      width: 1200px;
      height: 120px;
      line-height: 120px;
      .nav-item {
        color: $nav;
        &:hover {
          color : $nav-hover;
        }
      }
    } 
  }
</style>