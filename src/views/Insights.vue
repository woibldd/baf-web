<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1 animated flipInX">  
          <h1 class="title mt-19">
            Insight becomes return
          </h1>
          <h6 class="sub-title mt-19">
            BAF Capital is a thesis-driven investment firm. We provides industry research and authoritative trend interpretation regularly.
          </h6>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-title">Insights</div>
        <div class="my-list">
          <div class="item-box" v-for="(item, idx) in list" :key="idx">
            <div class="item-title">{{item.name}}</div>
            <div :class="['item-content', item.name]">
              <a v-for="(obj, index) in item.linkList" 
                :href="obj.link" 
                :style="{backgroundImage: `url(${obj.pic})`}"
                :key="index">
                <div class="a-pd">
                  <div class="p-title" flex="cross:center">{{obj.title}}</div>
                  <div class="p-sub-title">{{obj.subTitle}}</div>
                  <div class="p-content mt-10">{{obj.content}}</div> 
                </div>
                <div class="mask"></div> 
                <div class="arrow" >
                  <img src="@/assets/icon-arrow-right@2x.png" alt="">
                </div> 
              </a>
            </div>
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
      list: [
        {
          name: 'Research',
          linkList: [
            {
              pic: require('@/assets/insights/insights-1.png'),
              link: 'http://www.baidu.com', 
              title: 'What’s Filecoin？',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
            {
              pic: require('@/assets/insights/insights-2.png'),
              link: 'http://www.baidu.com', 
              title: 'What’s Filecoin？',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
            {
              pic: require('@/assets/insights/insights-3.png'),
              link: 'http://www.baidu.com', 
              title: 'What’s Filecoin？',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
            {
              pic: require('@/assets/insights/insights-4.png'),
              link: 'http://www.baidu.com', 
              title: 'What’s Filecoin？',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
          ]
        },
        {
          name: 'Insights',
          linkList: [
            {
              pic: require('@/assets/insights/insights-5.png'),
              link: 'http://www.baidu.com', 
              title: 'Sustainable development',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
            {
              pic: require('@/assets/insights/insights-5.png'),
              link: 'http://www.baidu.com', 
              title: 'Sustainable development',
              subTitle: 'Comprehensive research report',
              content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
            }, 
          ]
        },
         

      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.page-container {
  .page-banner {
    position: relative;
    height: 700px;
    background-image: url('~@/assets/banner-insights.png'); 
    background-position: center 0;
    background-color: #000F27;
    background-repeat: repeat-x;
    text-align: left;
    .banner-content { 
      height: 600px;
      width: 1140px;
      margin: 0 auto;
      .title { 
        padding-top: 219px;
        font-weight: 600;
        font-size: 72px;
        color: #ffffff;
      }
      .sub-title {  
        width: 895px;
        font-size: 16px;
        line-height: 1.6em;
        color: #FFFFFF;
        opacity:abs($number: .4)
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
      .my-list {
        margin-top: 97px;
        padding: 0 60px;
        .item-box {
          text-align: left;
          margin-bottom: 100px;
          .item-title {
            padding: 0 0 16px;
            margin-bottom: 21px;
            color: $text;
            font-size: 36px;
            border-bottom: 1px solid $text;
            font-weight: 600; 
          }
          .item-content {
            display: grid;
            row-gap: 20px;
            color: #FFFFFF;
            a {
              display: block;
              height: 380px;
              color: #FFFFFF;
              overflow: hidden;
              .a-pd { 
                padding: 30px 60px;
                height: 320px;
              }
              .mask { 
                opacity: 0; 
                transform: translate3d(1180px, -380px, 0);
                height: 380px;
                width: 1180px;
                background: linear-gradient(90deg, rgba(0, 27, 139, 0) 0%, #001B8B 100%);
                opacity: 0.9;
                transition: all .38s linear;
              } 
              .arrow {
                padding-right: 50px;
                text-align: right;
                opacity: 0;
                transform: translate(0, -200px);
                transition: all .68s ease-out; 
              } 
              &:hover {
                .mask { 
                  opacity: 1; 
                  transform: translate3d(200px, -380px, 0);
                } 
                .arrow { 
                  opacity: 1;
                  transform: translate(0, -440px);
                }
              }
            }
            &.Insights {
              a {
                color: $text;
              }
            }
            .p-title {
              height: 211px;
              width: 604px;
              font-size: 72px;
              font-weight: 600;
            }
            .p-sub-title {
              font-size: 24px;
              font-weight: 600;
            }
            .p-content {
              width: 539px;
              line-height: 21px;
              font-size: 18px; 
            }
          }
           
        }
      }
    }
  }
}
</style>
