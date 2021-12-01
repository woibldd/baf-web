<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1">  
          <h1 class="title mt-19">
            invest the future.
          </h1>
          <h6 class="sub-title mt-19">
            BAF Capital has invested in more than 100 projects around the world, bringing high returns to more investors and fulfilling significant social responsibilities at the same time…
          </h6>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-title">Portfolio</div>
        <div class="my-list">
          <div class="item-box" v-for="(item, idx) in list" :key="idx">
            <div class="item-title">{{item.name}}</div>
            <div class="item-content">
              <a :href="obj.link" v-for="(obj, index) in item.linkList" :key="index">
                <img :src="obj.pic" alt="" >
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
          name: 'Public Chain',
          linkList: [
            {
              pic: require('@/assets/portfolio/public-chain-1.png'),
              link: 'http://www.baidu.com', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-2.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-3.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-4.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-5.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-6.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-7.png'),
              link: '', 
            },
            {
              pic: require('@/assets/portfolio/public-chain-8.png'),
              link: '', 
            },
          ]
        },
        {
          name: 'Layer 2',
          linkList: [
            {
              pic: require('@/assets/portfolio/layer-2-1.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        },
        {
          name: 'Protocol',
          linkList: [
            {
              pic: require('@/assets/portfolio/protocol-1.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/protocol-2.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/protocol-3.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        },
        {
          name: 'Mining',
          linkList: [
            {
              pic: require('@/assets/portfolio/mining-1.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/mining-2.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/mining-3.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        },
        {
          name: 'Defi',
          linkList: [
            {
              pic: require('@/assets/portfolio/defi-1.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/defi-2.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/defi-3.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/defi-4.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/defi-5.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/defi-6.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        },
        {
          name: 'Gamefi',
          linkList: [
            {
              pic: require('@/assets/portfolio/gamefi-1.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-2.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-3.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        },
        {
          name: 'Othres',
          linkList: [
            {
              pic: require('@/assets/portfolio/others-1.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/others-2.png'),
              link: 'http://www.baidu.com', 
            }, 
            {
              pic: require('@/assets/portfolio/others-3.png'),
              link: 'http://www.baidu.com', 
            }, 
          ]
        }

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
    background-color: #000F27;
    text-align: center;
    .banner-content { 
      height: 600px;
      background-image: url('~@/assets/banner-portfolio.png'); 
      background-position: center;
      .title { 
        padding-top: 219px;
        font-weight: 600;
        font-size: 72px;
        color: #ffffff;
      }
      .sub-title { 
        margin: 13px auto;
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
          }
          .item-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            row-gap: 22px;
          }
        }
      }
    }
  }
}
</style>
