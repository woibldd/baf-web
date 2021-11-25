<template>
  <div class="footer-nav-container">
    <div class="footer-nav-box">
  
    </div>
    <div class="bottom-layer">
      <div class="bottom-box" flex="main:justify cross:center">
         
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  .footer-nav-container {
    .txr {text-align: right;}
    .txl {text-align: left;}
    .footer-nav-box {
      width: 1200px;
      margin: 0 auto;
      padding: 50px 0;
      dl {
        dt {
          padding-bottom: 64px;
          color: #F8413A;
        }
        dd {
          padding-bottom: 27px;
          color: #7C7C7C;
          &:last-child {
             padding-bottom: 0;
          }
        }
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