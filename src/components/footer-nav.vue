<template>
  <div class="footer-nav-container">
    <div class="footer-nav-box" flex="main:justify">
      <div class="footer-left">
        Copyright © 1998 - 2021 BAF Capital. All Rights Reserved.
      </div>
      <div class="footer-right" flex="cross:center">
        <div 
          @mouseover="headleMouseOver" 
          @mouseout="headleMouseOut" 
          class="icon-box over ml-23"
          flex="cross:center">
          <icon class=" icon" name="twitter"></icon>
        </div> 
        <div 
          @mouseover="headleMouseOver" 
          @mouseout="headleMouseOut" 
          class="icon-box over ml-23"
          flex="cross:center">
          <icon class="icon" name="telegram"></icon>
        </div>  
        <div 
          @mouseover="headleMouseOver" 
          @mouseout="headleMouseOut" 
          class="icon-box over ml-23" 
          flex="cross:center">
          <icon class="icon" name="discord"></icon>  
        </div>  
        <div 
          @mouseover="headleMouseOver" 
          @mouseout="headleMouseOut" 
          class="icon-box over ml-23"
          flex="cross:center">
          <icon class="icon" name="instagram"></icon>
        </div>  
         
        <router-link to="/contact"><button class="btn ml-60">Contact Us</button></router-link>
        
      </div>
    </div>
    <!-- <div class="bottom-layer">
      <div class="bottom-box" flex="main:justify cross:center">
         
      </div>
    </div> -->
  </div>
</template>

<script>
export default { 
  methods: {
    headleMouseOver(event) {
      // let list = this.$('.icon-box')  
      // list.addClass('over')
      event.srcElement.classList.add('active')
    },
    headleMouseOut(event) {
      // let list = this.$('.icon-box') 
      // list.removeClass('over') 
      event.srcElement.classList.remove('active')
    }
  }
}
</script>


<style lang="scss">
  .footer-nav-container {
    padding: 105px 0 108px;
    background-color: #000F27;
    .txr {text-align: right;}
    .txl {text-align: left;}
    .footer-nav-box { 
      width: 1300px;
      margin: 0 auto;
      padding: 0 0 25px 0; 
      height: 59px;
      line-height: 59px;
      color: #fff;
      font-size: 18px;
      border-bottom: 1px solid $primary;
      .btn {
        width: 220px;
        height: 59px;
        cursor: pointer;
        background-color: $primary;
        font-size: 18px;
        color: #fff;
        font-weight: 600;
        border: none;
      }
      .icon-box {
        width: 25px;
        height: 25px;
        &.over {
          color: rgba($color: #fff, $alpha: .5);
          transition: all linear 0.2s;
          cursor: pointer;
          &:hover {
            color: rgba($color: #fff, $alpha: 1);
          }
        }
      }
      .icon {
        width: 25px;
        height: 25px;
      }
    }
    .bottom-layer { 
      background-color: #000;
      font-size: 14px;
      color: #fff;
      .bottom-box {
        width: 1200px;
        height: 144px;
        margin: 0 auto;
        line-height: 2em;
        .logo {
          width: 63px;
          margin-right: 28px;
        }
      }
    }
  }
</style>