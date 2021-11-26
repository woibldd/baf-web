<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1"> 
          <h5 class="title ">ABOUT US</h5>
          <h1 class="sub-title mt-19">
            Focusing on cutting edge blockchain innovations with global exposure.
          </h1>
          <h6 class="tips mt-19">Founded in 2019, BAF Capital focuses on investing in innovative blockchain infrastructure at the technological level or business model level, from seed round to private sale. The founding partners all joined the blockchain industry in early 2013 (the year was marked by the price of 1BTC>1 ounce of gold), and became life members of the Bitcoin Foundation in the same year. </h6>
        </div>
      </div>
    </div>
    <div class="float-content">
      <div class="float-box">

      </div>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>

<style lang="scss">
.page-container {
  .page-banner {
    height: 700px;
    background-color: #000F27;
    .banner-content { 
      height: 598px;
      background-image: url('../assets/banner-aboutus.png'); 
      background-position: center;
      .banner-box {
        width: 1300px;
        margin: 0 auto;
        text-align: left;
      }
      .title {
        margin-left: 78px;
        margin-top: 123px;
        font-size: 16px;
        color: #ffffff;
      }
      .sub-title {
        margin-left: 78px;
        width: 838px;
        font-weight: 600;
        font-size: 48px;
        line-height: 1.2em;
        color: #ffffff;
      }
      .tips {
        margin-left: 78px;
        line-height: 1.5em;
        width: 838px;
        font-size: 16px; 
        color: #FFFFFF;
        opacity:abs($number: .4)
      }
    }
  }
  .float-content {
    .float-box { 
      position: relative;
      margin: -36px auto;
      width: 1300px;
      height: 200px;
      background-color: pink;
    }
  } 
}
</style>

