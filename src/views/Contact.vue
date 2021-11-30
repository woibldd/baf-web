<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content"> 
          <h1 class="title">
            Contact Us.
          </h1>  
      </div>
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-pd">
          <div class="panel-tips">
            For general inquiries, please fill out the contact form. If you would like BAF to consider your project, please send a summary of your project along with a BP and/or white paper to Business@baf.vc
          </div>
          <div class="panel-tabs">
            <el-tabs  v-model="activeName" @tab-click="handleClick" flex>
              <el-tab-pane label="INVESTORS" name="INVESTORS" style="width: 300px;"></el-tab-pane>
              <el-tab-pane label="ENTREPRENEURS" name="ENTREPRENEURS" flex-box="1"></el-tab-pane>
              <el-tab-pane label="CAREERS" name="CAREERS" flex-box="1"></el-tab-pane>
            </el-tabs>
          </div> 
        </div> 
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      activeName: 'ENTREPRENEURS',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>


<style lang="scss" scoped>
.page-container {
  .page-banner {
    position: relative;
    height: 700px;
    background-image: url('~@/assets/banner-contact.png'); 
    background-position: center 0;
    background-color: #000F27;
    background-repeat: repeat-x;
    text-align: left;
    .banner-content { 
      height: 600px;
      width: 1140px;
      margin: 0 auto;
      .title {  
        padding-top: 236px;
        text-align: center;
        font-weight: 600;
        font-size: 80px;
        color: #ffffff;
      } 
    }
  }
  .page-content {
    min-height: 100px;
    background-color: #F2F4F7;
    .panel-content {
      position: relative;
      margin: -36px auto -74px;
      padding: 73px 0 20px;
      width: 1300px;
      background-color: #fff;
      text-align: left;
      .top-rectangle {
        position:absolute;
        top: -44px;
        left: 50%;
        margin-left: -8.5px;
        width: 15px;
        height: 89px;
        background: $primary;
        z-index: 2;
      } 
      .panel-title {
        text-align: center;
        font-size: 60px;
        font-weight: 600;

      } 
      .panel-pd {
        padding: 86px 150px;
        .panel-tips {}
        .panel-tabs {
          .el-tabs {
            /deep/ .el-tabs__nav-wrap {
              font-size: 18px;
              font-family: Arial-BoldMT, Arial;
              font-weight: 600;
              border: 1px solid #CCD1E8;
                &::after {
                  content: none;
                }
              .el-tabs__nav-scroll {
              }
              .el-tabs__item {
                width: 333.3px;
                text-align: center;
                &.is-active {
                  // background-color: $primary;
                  color: #fff;
                }
              }
              .el-tabs__active-bar {
                height: 40px;
                z-index: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
