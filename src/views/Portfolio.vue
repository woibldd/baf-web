<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1 animated fadeInUp">  
          <h1 class="title mt-19 animated fadeInUp">
            Invest The Future
          </h1>
          <h6 class="sub-title mt-19 animated fadeInUp" style="animation-delay: .5s;">
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
              <a class="item-pic" target="_blank" :href="obj.link" v-for="(obj, index) in item.linkList" :key="index">
                <img :src="obj.pic" alt="" >
                <div class="mask"></div>
                <div class="name" >{{obj.text}}</div>
                <div class="arrow" >
                  <!-- <img src="@/assets/icon-arrow-right.png" alt=""> -->
                  <icon name="arrow-short" style="width: 72px; height: 15px;" />
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
              link: 'https://casper.network/network', 
              text: 'Casper',
            },
            {
              pic: require('@/assets/portfolio/public-chain-2.png'),
              link: 'https://minaprotocol.com/', 
              text: 'Mina',
            },
            {
              pic: require('@/assets/portfolio/public-chain-3.png'),
              link: 'https://ecoball.org/', 
              text: 'Ecoball',
            },
            {
              pic: require('@/assets/portfolio/public-chain-4.png'),
              link: 'https://cosmos.network/', 
              text: 'Cosmos',
            },
            {
              pic: require('@/assets/portfolio/public-chain-5.png'),
              link: 'https://polkadot.network/', 
              text: 'Polkadot',
            }, 
          ]
        },
        {
          name: 'Layer 2',
          linkList: [
            {
              pic: require('@/assets/portfolio/layer-2-1.png'),
              link: 'https://zksync.io/', 
              text: 'Zksync',
            }, 
          ]
        },
        {
          name: 'Infrastructure and Storage',
          linkList: [
            {
              pic: require('@/assets/portfolio/storage-1.png'),
              link: 'https://ipfs.io/', 
              text: 'IPFS',
            }, 
            {
              pic: require('@/assets/portfolio/storage-2.png'),
              link: 'https://www.ethswarm.org/', 
              text: 'Swarm',
            }, 
            {
              pic: require('@/assets/portfolio/storage-3.png'),
              link: 'https://crust.network/', 
              text: 'Crust Network',
            }, 
            {
              pic: require('@/assets/portfolio/storage-4.png'),
              link: 'https://www.epik-protocol.io/', 
              text: 'EpiK Protocol',
            }, 
            {
              pic: require('@/assets/portfolio/storage-5.png'),
              link: 'https://www.xnft.net/', 
              text: 'XNFT',
            }, 
            {
              pic: require('@/assets/portfolio/storage-6.png'),
              link: 'https://www.adamoracle.io/', 
              text: 'AdamOracle',
            }, 
          ]
        },
        {
          name: 'Mining',
          linkList: [
            {
              pic: require('@/assets/portfolio/mining-1.png'),
              link: 'https://canaan.io/', 
              text: 'Canaan',
            }, 
            {
              pic: require('@/assets/portfolio/mining-2.png'),
              link: '#', 
              text: 'Harmony Ten Technologies',
            }, 
            // {
            //   pic: require('@/assets/portfolio/mining-3.png'),
            //   link: '#', 
            //   text: 'Renyunyiyun Technologies ',
            // }, 
          ]
        },
        {
          name: 'Defi',
          linkList: [
            {
              pic: require('@/assets/portfolio/defi-2.png'),
              link: 'https://shieldex.io/', 
              text: 'Shield',
            }, 
            {
              pic: require('@/assets/portfolio/defi-3.png'),
              link: 'https://www.mte.cool/', 
              text: 'Meteorite',
            }, 
            {
              pic: require('@/assets/portfolio/defi-4.png'),
              link: 'https://dydx.exchange/', 
              text: 'DYDX',
            }, 
            {
              pic: require('@/assets/portfolio/defi-5.png'),
              link: 'https://uniswap.org/', 
              text: 'Uniswap',
            },  
            {
              pic: require('@/assets/portfolio/defi-6.png'),
              link: '', 
              text: 'Continuum Finance',
            },  
            {
              pic: require('@/assets/portfolio/defi-7.png'),
              link: '', 
              text: 'HILLSTONE',
            },  
          ]
        },
        {
          name: 'Gamefi',
          linkList: [
            {
              pic: require('@/assets/portfolio/gamefi-1.png'),
              link: 'https://galaxyblitz.world/', 
              text: 'Galaxy Blitz',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-2.png'),
              link: 'https://meli.games/', 
              text: 'Meli',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-3.png'),
              link: 'https://nftsama.io/', 
              text: 'NFTSAMA',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-4.png'),
              link: 'https://kakifi.com/', 
              text: 'KAKI',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-5.png'),
              link: '', 
              text: 'MetaTube',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-6.png'),
              link: '', 
              text: 'EB',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-7.png'),
              link: '', 
              text: 'Me Race',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-8.png'),
              link: '', 
              text: 'BT MIRACLES',
            }, 
            {
              pic: require('@/assets/portfolio/gamefi-9.png'),
              link: '', 
              text: 'DOH',
            }, 
          ]
        },
        {
          name: 'Others',
          linkList: [
            {
              pic: require('@/assets/portfolio/others-1.png'),
              link: 'https://hilamg.com/', 
              text: 'Hilamg',
            }, 
            {
              pic: require('@/assets/portfolio/others-2.png'),
              link: 'https://peckshield.com/en', 
              text: 'PeckShield',
            }, 
            {
              pic: require('@/assets/portfolio/others-3.png'),
              link: 'https://samecoin.com/', 
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
        color: rgba($color: #ffffff, $alpha: .4); 
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
              img {
                height: 160px;
                width: 280px;
              }
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
                font-weight: 600;
                line-height: 160px;
                text-align: center;
                transition: all .38s ease-out; 
              }
              .arrow {
                position:absolute;
                bottom: -30px;
                right: 0;
                padding-right: 22px;
                text-align: right;
                opacity: 0;
                transition: all .33s ease-out; 
              }
              &:hover {
                .mask { 
                  opacity: 1;
                  transform: translate3d(0, -163px, 0);
                }
                .name { 
                  opacity: 1;
                  transform: translate3d(0, -323px, 0);
                }
                .arrow { 
                  opacity: 1;
                  transform: translate3d(0, -52px, 0);
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
