<template>
  <div class="page-container">
    <div class="page-banner"> 
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="left-rectangle"></div> 
        <div class="breadcrumb ml-43">
          <router-link class="mr-14" to="/news">News</router-link>
          <icon class="separator mr-14" name="arrow" />
          <router-link class="mr-14" to="/news/Investment">Investment</router-link>
        </div>
        <div class="my-list-b">
          <div class="item-box" v-for="(item, idx) in list" :key="idx">
            <div class="item-title">
              <label>{{item.name}}</label> 
            </div>
            <div :class="['item-content', item.name]"> 
              <div class="link-item" v-for="(obj, index) in item.linkList" 
                :key="index"
                flex="box:first">
                <div class="link-left" flex="main:center"><img :src="obj.pic" alt=""></div> 
                <div class="link-right ml-41">
                  <div class="title mt-17" flex="cross:center">{{obj.title}}</div>
                  <div class="description mt-16">{{obj.description}}</div>
                  <div class="date">{{obj.createDate}}</div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="panel-bottom pt-50 pb-50">
          <div class="load-more">
            LOAD MORE
            <icon name="arrow" class="arrow-down ml-8" size="26"/>
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
          name: 'Investment',
          linkList: [
            {
              pic: require('@/assets/news/investment/1.png'),
              link: 'http://www.baidu.com', 
              title: 'Investment Blast: MeliGame, reaches a peak half a month after listed.',
              subTitle: '',
              description: 'MeliGame, co-invested by BAF Capital, OK Blockchain Venture, has achieved 10+ times of profits after listed on Exchange.',
              content: '',
              createDate: 'Dec 5,2021'
            }, 
            {
              pic: require('@/assets/news/investment/2.png'),
              link: 'http://www.baidu.com', 
              title: 'Galaxy Blitz Play-To-Earn Combat Strategy NFT Game Launches Official Website',
              subTitle: '',
              description: 'Galaxy Blitz, a Play-To-Earn combat strategy NFT game, launched its official website on December 1, 2021. The website will be a repository for artwork from the game, lore, updates in the game\'s development, and more.',
              content: '',
              createDate: 'Dec 2,2021'
            }, 
            {
              pic: require('@/assets/news/investment/3.png'),
              link: 'http://www.baidu.com', 
              title: 'Meteorite vs Crypto Quantitative Platform — Comprehensive Comparison and Review',
              subTitle: '',
              description: 'Meteorite is a decentralized quantitative strategy platform that supports several fundamental quantitative strategies for digital assets.',
              content: '',
              createDate: 'Nov 30,2021'
            }, 
            {
              pic: require('@/assets/news/investment/4.png'),
              link: 'http://www.baidu.com', 
              title: 'Epik protocol and nft: Much more than the hype',
              subTitle: '',
              description: 'There are underlying risks and concerns that must be critically looked at before one jumps into the wagon. ',
              content: '',
              createDate: 'Nov 24,2021'
            }, 
            {
              pic: require('@/assets/news/investment/5.png'),
              link: 'http://www.baidu.com', 
              title: 'Introducing CasperPunks NFTs!',
              subTitle: '',
              description: 'Casper, one of BAF Capital’s portfolio project, has launched their NFT. What they call is CasperPunks. Go grab them.',
              content: '',
              createDate: 'Dec 2,2021'
            }, 
            {
              pic: require('@/assets/news/investment/6.png'),
              link: 'http://www.baidu.com', 
              title: 'Mina’s New Community Programs: Grants, Community Spark Leaderboard, Mina Academy, and Mina Achievements Program',
              subTitle: '',
              description: 'We herein update another BAF Capital’s invested project-Mina’s status. Mina Foundation will launch several programs to support community members in their participation within Mina\'s ecosystem.',
              content: '',
              createDate: 'Sep 30,2021'
            }, 
          ]
        }, 
      ]
    }
  }, 
}
</script>


<style lang="scss" scoped>
.page-container {
  .page-banner {
    position: relative;
    height: 112px; 
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
        width: 671px;
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
      margin: -56px auto -74px;
      padding: 46px 0 0px;
      width: 1300px;
      background-color: #fff;
      text-align: left;
      .breadcrumb { 
        .separator {
          color: $nav;
          font-size: 10px;
        }
        a {
          color: $nav;
          font-size: 18px;
        }
      }
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
      .left-rectangle {
        position:absolute;
        top: 48px;
        left: -20px; 
        width: 40px;
        height: 16px;
        background: $primary;
        z-index: 2;
      }
      .panel-title {
        text-align: center;
        font-size: 60px;
        font-weight: 600; 
      }
      .my-list-b {
        margin-top: 63px;
        padding: 0 60px;
        .item-box {
          text-align: left;
          // margin-bottom: 100px;
          .item-title {
            position:relative;
            padding: 0 0 16px;
            margin-bottom: 21px;
            color: $text;
            font-size: 36px;
            border-bottom: 1px solid $text;
            font-weight: 600; 
            .view-all {
              position: absolute;
              right: 0;
              top: 33px;
              background-color: #fff;
              color: #000F27;
              font-size: 24px;
              em{
                padding: 0 30px;
                cursor: pointer;
              }
              img {
                width: 36px;
                height: 13px;
              }
            }
          }
          .item-content {
            display: grid;
            row-gap: 20px;
            color: $text;
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
            .link-item {
              &:not(:first-child) {
                margin-bottom: 20px;
              }
              .link-left {
                width: 380px;
                height: 231px;
                overflow: hidden;
                img {
                  height: 100%;
                }
              }
              .link-right { 
                .title {
                  font-size: 24px;
                  font-weight: 600;
                  height: 54px;
                }
                .description {
                  opacity: 0.5;
                  height: 113px;
                  font-size: 18px;
                }
                .date {
                  text-align: right;
                  opacity: 0.5; 
                  font-size: 18px;
                }
              }
            }
             
          }
           
        }
      }
      .panel-bottom {
        cursor:pointer;
        font-size: 18px;
        font-weight: 800;
        color: rgba($color: $text, $alpha: 0.5);
        text-align: center;
        .arrow-down {
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
