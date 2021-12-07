<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1 animated fadeInUp">  
          <h1 class="title mt-19">
            Invest The Future
          </h1>
          <h6 class="sub-title mt-19">
            BAF Capital has invested in more than 100 projects around the world, bringing high returns to investors and fulfilling social responsibilities at the same time. Today, we manage long duration capital on behalf of storied venture capital funds, family offices, institutions, and high net worth individuals.
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
              <a class="item-pic" :href="obj.link" v-for="(obj, index) in item.linkList" :key="index">
                <img :src="obj.pic" alt="" >
                <div class="mask"></div>
                <div class="name" >{{obj.text}}</div>
                <div class="arrow" >
                  <img src="@/assets/icon-arrow-right.png" alt="">
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
          name: 'Public Chain',
          linkList: [
            {
              pic: require('@/assets/portfolio/public-chain-1.png'),
              link: 'http://www.baidu.com', 
              text: 'Casper',
            },
            {
              pic: require('@/assets/portfolio/public-chain-2.png'),
              link: '', 
              text: 'MINA',
            },
            {
              pic: require('@/assets/portfolio/public-chain-3.png'),
              link: '', 
              text: 'ECOBALL',
            },
            {
              pic: require('@/assets/portfolio/public-chain-4.png'),
              link: '', 
              text: 'COSMOS',
            },
            {
              pic: require('@/assets/portfolio/public-chain-5.png'),
              link: '', 
              text: 'Polkadot',
            }, 
          ]
        },
        {
          name: 'Layer 2',
          linkList: [
            {
              pic: require('@/assets/portfolio/layer-2-1.png'),
              link: 'http://www.baidu.com', 
              text: 'zkSync',
            }, 
          ]
        },
        {
          name: 'Infrastructure and Storage',
          linkList: [
            {
              pic: require('@/assets/portfolio/storage-1.png'),
              link: 'http://www.baidu.com', 
              text: 'IPFS',
            }, 
            {
              pic: require('@/assets/portfolio/storage-2.png'),
              link: 'http://www.baidu.com', 
              text: 'Polkadot',
            }, 
            {
              pic: require('@/assets/portfolio/storage-3.png'),
              link: 'http://www.baidu.com', 
              text: 'Crust Network',
            }, 
            {
              pic: require('@/assets/portfolio/storage-4.png'),
              link: 'http://www.baidu.com', 
              text: 'EPIK PROTOCOL',
            }, 
            {
              pic: require('@/assets/portfolio/storage-5.png'),
              link: 'http://www.baidu.com', 
              text: 'XNFT',
            }, 
            {
              pic: require('@/assets/portfolio/storage-6.png'),
              link: 'http://www.baidu.com', 
              text: 'ADAMoracle',
            }, 
          ]
        },
        {
          name: 'Mining',
          linkList: [
            {
              pic: require('@/assets/portfolio/mining-1.png'),
              link: 'http://www.baidu.com', 
              text: 'Canaan',
            }, 
            {
              pic: require('@/assets/portfolio/mining-2.png'),
              link: 'http://www.baidu.com', 
              text: 'Harmony',
            }, 
            {
              pic: require('@/assets/portfolio/mining-3.png'),
              link: 'http://www.baidu.com', 
              text: 'RENYUNYIYUN',
            }, 
          ]
        },
        {
          name: 'Defi',
          linkList: [
            {
              pic: require('@/assets/portfolio/defi-1.png'),
              link: 'https://ixxweb.com/', 
              text: 'IXX.COM',
            }, 
            {
              pic: require('@/assets/portfolio/defi-2.png'),
              link: 'http://www.baidu.com', 
              text: 'Shield',
            }, 
            {
              pic: require('@/assets/portfolio/defi-3.png'),
              link: 'http://www.baidu.com', 
              text: 'METEORITE',
            }, 
            {
              pic: require('@/assets/portfolio/defi-4.png'),
              link: 'http://www.baidu.com', 
              text: 'DYDX',
            }, 
            {
              pic: require('@/assets/portfolio/defi-5.png'),
              link: 'http://www.baidu.com', 
              text: 'UNISWAP',
            },  
          ]
        },
        {
          name: 'Gamefi',
          linkList: [
            {
              pic: require('@/assets/portfolio/gamefi-1.png'),
              link: 'http://www.baidu.com', 
              text: 'GALAXY BLITZ',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-2.png'),
              link: 'http://www.baidu.com', 
              text: 'MELI',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-3.png'),
              link: 'http://www.baidu.com', 
              text: 'SAMA',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-4.png'),
              link: 'http://www.baidu.com', 
              text: 'KAKI',
            }, 
          ]
        },
        {
          name: 'Others',
          linkList: [
            {
              pic: require('@/assets/portfolio/others-1.png'),
              link: 'http://www.baidu.com', 
              text: 'Hilamg',
            }, 
            {
              pic: require('@/assets/portfolio/others-2.png'),
              link: 'http://www.baidu.com', 
              text: 'PeckShield',
            }, 
            {
              pic: require('@/assets/portfolio/others-3.png'),
              link: 'http://www.baidu.com', 
              text: 'Samecoin',
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
        padding: 103px 60px 0;
        .item-box {
          text-align: left;
          margin-bottom: 100px;
          .item-title {
            padding: 0 0 16px;
            margin-bottom: 21px;
            color: $text;
            font-size: 36px;
            font-weight: 600;
            border-bottom: 1px solid $text;
          }
          .item-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            row-gap: 22px;
            .item-pic {
              position: relative;
              height: 160px;
              width: 280px;
              overflow: hidden;
              .mask { 
                opacity: 0;
                transform: translate3d(0, 0, 0);
                height: 160px;
                width: 280px;
                background-color: rgba($color: $primary, $alpha: .9); 
                transition: all .18s linear;
              }
              .name {
                font-size: 36px;
                color: #fff;
                opacity: 0;
                transform: translate3d(0, 0, 0);
                height: 160px;
                width: 280px; 
                line-height: 160px;
                text-align: center;
                transition: all .38s ease-out; 
              }
              .arrow {
                padding-right: 10px;
                text-align: right;
                opacity: 0;
                transition: all .58s ease-out; 
              }
              &:hover {
                .mask { 
                  opacity: 1;
                  transform: translate3d(0, -162px, 0);
                }
                .name { 
                  opacity: 1;
                  transform: translate3d(0, -323px, 0);
                }
                .arrow { 
                  opacity: 1;
                  transform: translate3d(0, -353px, 0);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
