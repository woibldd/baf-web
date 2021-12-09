<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content" flex="cross:center"> 
        <div class="banner-box " >
          <h1 class="title animated fadeInLeft" style="animation-delay: .3s;">
            BAF Capital News
          </h1>  
          <div class="label-list mt-27 animated fadeInLeft" style="animation-delay: .5s;" flex>
            <label class="mr-19">Latest</label>
            <label class="mr-19">True</label>
            <label class="mr-19">Effective</label>
          </div>
          <div class="tips mt-22 animated fadeInLeft" style="animation-delay: .7s;">
            Stay tuned to BAF Capital News to get more updated investment and activity information.
          </div> 
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-title">News</div>
        <div class="my-list">
          <div class="item-box" >
            <div class="item-title">
              <label>Investment</label>
              <router-link to="/news/Investment" class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </router-link>
            </div>
            <div class="item-content investment-list">
              <div class="news-item black" :href="obj.link" v-for="(obj, index) in investmentList"  
                @click="gotoPath({name: obj.link, params: {id: obj.id}})"
                :key="index">
                <div class="img-box"  :class="['img-box-'+index]">
                  <img :src="obj.pic" alt="" > 
                </div>
                <div class="news-a-box" :class="['box-'+index]">
                  <div class="news-text">
                    <div class="title-a">{{obj.title}}</div>
                    <div class="news-content mt-17" v-html="obj.description">{{obj.content}}</div>
                  </div> 
                  <div class="news-mask" flex="cross:center main:center">
                    <div class="title-c">{{obj.title}}</div>
                    <div class="arrow">
                      <icon v-if="index === 5" name="arrow-long"  size="100"/>
                      <icon v-else name="arrow-short"  size="70"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-box" >
            <div class="item-title"> 
              <label>Seminar</label>
              <router-link to="/news/Seminar" class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </router-link>
            </div>
            <div class="item-content"> 
              <my-link v-for="(obj, index) in seminarList"   
                :key="index"
                :obj="obj"
                ></my-link>
            </div>
          </div>
          <div class="item-box" >
            <div class="item-title"> 
              <label>Fridge Wine Party</label>
              <router-link to="/news/FridgeWineParty" class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </router-link>
            </div>
            <div class="item-content"> 
              <my-link v-for="(obj, index) in partyList"   
                :key="index"
                :obj="obj"
                ></my-link>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import myLink from '@/components/linkTemplate'
export default {
  components: {myLink},
  data() {
    return {  
      investmentList: [
        {
          id: 1,
          pic: require('@/assets/news/investment/1a.png'),
          link: 'InvestmentArticle', 
          title: 'Investment Blast: MeliGame, reaches a peak half a month after listed.',
          subTitle: '',
          description: 'MeliGame, co-invested by BAF Capital, OK Blockchain Venture, has achieved 10+ times of profits after listed on Exchange.',
          content: '',
          createDate: 'Dec 5,2021'
        }, 
        {
          id: 2,
          pic: require('@/assets/news/investment/2a.png'),
          link: 'InvestmentArticle', 
          title: 'Galaxy Blitz Play-To-Earn Combat Strategy NFT Game Launches Official Website',
          subTitle: '',
          description: 'Galaxy Blitz, a Play-To-Earn combat strategy NFT game, launched its official website on December 1, 2021. The website will be a repository for artwork from the game, lore, updates in the game\'s development, and more.',
          content: '',
          createDate: 'Dec 2,2021'
        }, 
        {
          id: 3,
          pic: require('@/assets/news/investment/3a.png'),
          link: 'InvestmentArticle', 
          title: 'Meteorite vs Crypto Quantitative Platform — Comprehensive Comparison and Review',
          subTitle: '',
          description: 'Meteorite is a decentralized quantitative strategy platform that supports several fundamental quantitative strategies for digital assets.',
          content: '',
          createDate: 'Nov 30,2021'
        }, 
        {
          id: 4,
          pic: require('@/assets/news/investment/4a.png'),
          link: 'InvestmentArticle', 
          title: 'Epik protocol and nft: Much more than the hype',
          subTitle: '',
          description: 'There are underlying risks and concerns that must be critically looked at before one jumps into the wagon. ',
          content: '',
          createDate: 'Nov 24,2021'
        }, 
        {
          id: 5,
          pic: require('@/assets/news/investment/5a.png'),
          link: 'InvestmentArticle', 
          title: 'Introducing CasperPunks NFTs!',
          subTitle: '',
          description: 'Casper, one of BAF Capital’s portfolio project, has launched their NFT. What they call is CasperPunks. Go grab them.',
          content: '',
          createDate: 'Dec 2,2021'
        }, 
        {
          id: 6,
          pic: require('@/assets/news/investment/6a.png'),
          link: 'InvestmentArticle', 
          title: 'Mina’s New Community Programs: Grants, Community Spark Leaderboard, Mina Academy, and Mina Achievements Program',
          subTitle: '',
          description: 'We herein update another BAF Capital’s invested project-Mina’s status. Mina Foundation will launch several programs to support community members in their participation within Mina\'s ecosystem.',
          content: '',
          createDate: 'Sep 30,2021'
        }, 
      ],
      seminarList:  [
        {
          id: 7,
          pic: require('@/assets/news/seminar/1.png'),
          link: 'SeminarArticle', 
          title: 'BAF - Seminar<br>Serial 02',
          subTitle: 'Crypto Assets’ Allocation',
          description: 'Seminar topics are how to better manage the allocation of crypto assets, shared by Leon, partner of BAF Capital; Blockchain Overview, shared by Dr. Yu Gang, Co-chairman of Hong Kong Blockchain Association; Meteorite Project Overview, shared by Aaron. '
        }, 
        {
          id: 8,
          pic: require('@/assets/news/seminar/2.png'),
          link: 'SeminarArticle', 
          title: 'BAF - Seminar<br>Serial 01',
          subTitle: 'The Next Generation of Public Chain',
          description: 'BAF Capital hosted a private seminar in Shenzhen Bay One. This private meeting brought together a number of industry elites, KOL and project founders.'
        }, 
      ],
      partyList: [
        {
          id: 9,
          pic: require('@/assets/news/fridge-wine-party/1.png'),
          link: 'FridgeWinePartyArticle', 
          title: 'Fridge Wine Party<br>Serial 03',
          subTitle: 'Road to DAO',
          description: 'DAO is a paradigm shift in the concept of economic organization and a fitting tool for metaverse. The advent of DAO era requires us to embrace it together.'
        }, 
        {
          id: 10,
          pic: require('@/assets/news/fridge-wine-party/2.png'),
          link: 'FridgeWinePartyArticle', 
          title: 'Fridge Wine Party<br>Serial 02',
          subTitle: 'How to Gamefi: Land, NFT, P2E',
          description: 'What are the Metaverse Panorama and Opportunities? Are there any potential investment opportunities in secondary market?'
        }, 
        // {
        //  id: 11,
        //   pic: require('@/assets/news/fridge-wine-party/3.png'),
        //   link: 'FridgeWinePartyArticle', 
        //   title: 'Fridge Wine Party<br>Serial 01',
        //   subTitle: 'Metaverse',
        //   description: 'What are the Metaverse Panorama and Opportunities? Are there any potential investment opportunities in secondary market? '
        // }, 
      ],
    }
  },
  methods: {
    handleClick(tab, event) { 
    }
  }
}
</script>


<style lang="scss" scoped>
.page-container {
  .page-banner {
    position: relative;
    height: 700px;
    background-image: url('~@/assets/banner-news.png'); 
    background-position: center 0;
    background-color: #000F27;
    background-repeat: repeat-x;
    text-align: left;
    .banner-content { 
      height: 600px;
      width: 1140px;
      margin: 0 auto;
      text-align: left;
      color: #fff;
      .title {   
        // text-align: center;
        font-weight: 600;
        font-size: 80px;
        color: #ffffff;
      } 
      .label-list {
        label {
          display: block;
          width: 94px;
          height: 27px;
          border-radius: 17px;
          border: 1px solid #FFFFFF;
          line-height: 27px;
          text-align: center;
        }
      }
      .tips {
        color: rgba($color: #ffffff, $alpha: .4); 
        width: 600px;
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
        padding: 100px 60px 0;
        .item-box {
          text-align: left;
          margin-bottom: 100px;
          .item-title {
            position: relative;
            padding: 0 0 16px;
            margin-bottom: 21px;
            color: $text;
            font-size: 36px;
            font-weight: 600;
            border-bottom: 1px solid $text;
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
            row-gap: 22px;
            column-gap: 20px;
            &.investment-list {
              grid-template-columns: 1fr 1fr 1fr;
              .news-item {
                overflow: hidden;
                transition: ease all 0.3s;
                &:first-child {
                  grid-column-start: 1;
                  grid-column-end: 3;
                }
                &:nth-child(6) {
                  grid-column-start: 1;
                  grid-column-end: 4;
                }
                &:hover { 
                  transform: translateY(-4px);
                  // box-shadow: 0px 4px 4px rgba(0, 0, 0, .1); 
                  .news-a-box .news-mask {
                    transform: translate3d(0, 0, 0);
                  }
                }
                img {
                  vertical-align: bottom;
                  transition: ease all 0.3s;
                  &:hover { 
                    transform: scale(1.05);
                  } 
                }
                .news-a-box {
                  position: relative;  
                  border: 1px solid #CCD1E8;
                  border-top: none;
                  line-height: 1.4em;
                  overflow: hidden;
                  .news-mask { 
                    position: absolute;  
                    top:0;
                    left:0;  
                    background-color: $primary;
                    color: #ffffff;
                    height: 100%;
                    width: 100%;
                    transform: translate3d(0, 100%, 0);
                    transition-duration: .3s;
                    .arrow {
                      position: absolute;
                      bottom: 0;
                      right: 29px;
                      font-size: 70px;
                    } 
                  } 
                } 
                .box- {
                  border-top: none;
                  &0, &5 {
                    height: 151px;
                  } 
                  &1, &2, &3, &4 {
                    height: 290px;
                  }
                }
                .img-box {
                  height: 231px;
                  overflow: hidden;
                  &-0, &-5 {
                    height: 370px;
                  }
                }
                .news-text { 
                  padding: 36px 32px;
                }
                .news-content { 
                  opacity: .4;
                }
              }
            }
            .news-item {
              min-height: 381px;
              color: $text;
              &.black {
                color: $text;
              }
              &.white {
                color: white;
              }
              .news-pd {
                padding: 52px 59px;
              }
              .title-a {
                font-size: 24px;
                font-weight: 600;
              }
              .title-c {
                font-size: 24px;
                font-weight: 600;
                padding: 52px 59px;
              }
              .title-b {
                font-size: 72px;
                font-weight: 600;
              }
              .sub-title-b {
                font-size: 24px;
                font-weight: 600;
              }
              .news-content { 
                font-size: 18px;
              }
              .news-content-b {
                width: 425px; 
              } 
            }
          }
        }
      }
    }
  }
}
</style>
