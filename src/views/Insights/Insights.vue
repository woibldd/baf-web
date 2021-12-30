<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="banner-box pt-1">  
          <h1 class="title mt-19 animated fadeInLeft" style="animation-delay: .3s;">
            Insight becomes return
          </h1>
          <h6 class="sub-title mt-19 animated fadeInLeft" style="animation-delay: .6s;">
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
          <div class="item-box" >
            <div class="item-title">
              <label>Research</label>
              <router-link to="/insights/Research" class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </router-link>
            </div>
            <div :class="['item-content', 'research']"> 
              <my-link v-for="(obj, index) in calcListResearch" 
                type="url"
                :key="index"
                :obj="obj"
                ></my-link>
            </div> 
          </div>
          
          <div class="item-box" >
            <div class="item-title">
              <label>Our Insights</label>
              <router-link to="/insights/OurInsights" class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </router-link>
            </div>
            <div :class="['item-content', 'research']"> 
              <my-link v-for="(obj, index) in calcListOurInsights" 
                type="url"
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
import { getInsightsList, getInsights2List } from '@/api/service'
export default {
  components: {myLink},
  data() {
    return {
      dataList: [],
      listResearch: [],
      listOurInsights: [],
      // list: [
      //   {
      //     name: 'Research',
      //     allUrl: '/insights/Research', 
      //     linkList: {
      //       en: [
      //         {
      //           pic: require('@/assets/insights/research/1.png'),
      //           link: '/Research/Explain It Like I’m 5- GameFi.pdf', 
      //           title: 'Explain It Like I’m 5:<br>GameFi',
      //           subTitle: 'The concept of play-to-earn games isn’t novel, but other aspects of GameFi are',
      //           description: 'Listen to what’s being said at conferences, on earning calls, or in boardrooms in the gaming industry, and a recurring theme stands out: GameFi.'
      //         }, 
      //         {
      //           pic: require('@/assets/insights/research/2.png'),
      //           link: '/Research/Genie- The Metaverse’s Aggregator.pdf', 
      //           title: 'Genie: The Metaverse’s <br>Aggregator',
      //           subTitle: 'Showing assets or buying NFTs on different exchanges is time-consuming and tedious',
      //           description: 'Genie is an NFT aggregator, or as the team so catchily describes it, “The Metaverse’s Aggregator”. Genie offers two features, Genie Swap and Genie List.'
      //         }, 
      //         {
      //           pic: require('@/assets/insights/research/3.png'),
      //           link: '/Research/dYdX - Perpetual Maxima.pdf', 
      //           title: 'dYdX - <br>Perpetual Maxima',
      //           subTitle: 'Six months is all it took for dYdX’s layer 2 offering to eclipse Coinbase in daily trading volumes.',
      //           description: 'dYdX is one of if not the most liquid exchanges in crypto. dYdX has now shut down its Layer 1 offering and is doubling down on perpetuals by expanding beyond the currently available 28 markets.'
      //         }, 
      //         {
      //           pic: require('@/assets/insights/research/4.png'),
      //           link: '/Research/Why Smart Money Matters More.pdf', 
      //           title: 'Why Smart Money <br>Matters More',
      //           subTitle: '“In a world deluged by irrelevant information, clarity is power.”',
      //           description: 'To make crypto accessible, tools like Nansen must continue to push the frontiers transforming data into meaningful signals. In crypto, following the smart money matters more than ever.'
      //         }, 
      //       ]
      //     }
      //   },
      //   {
      //     name: 'Our Insights',
      //     allUrl: '/insights/OurInsights',
      //     linkList: {
      //       en: [
      //         {
      //           pic: require('@/assets/insights/our-insights/1.png'),
      //           link: '/Our Insights/Crypto Trend.pdf', 
      //           title: 'Crypto Trend',
      //           subTitle: 'First DeFi, Then NFTs, Now DAOs, the Next Big Chapter of Crypto Is Already Here',
      //           description: 'DAOs are setting a precedent for a revolutionary governance model that will potentially replace all forms of businesses, governments and human organizations.'
      //         }, 
      //         {
      //           pic: require('@/assets/insights/our-insights/2.png'),
      //           link: '/Our Insights/CryptoPunks.pdf', 
      //           title: 'CryptoPunks',
      //           subTitle: 'What’s Behind Their Unstoppable Rise?',
      //           description: 'CryptoPunks is a collection of 10,000 unique collectible characters that is widely regarded as the beginning of today’s CryptoArt movement.'
      //         }, 
      //       ]
      //     }
      //   }, 
      // ]
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    calcListResearch() {
      let list = []
      this.listResearch.map(item => {
        if (this.lang === 'en') {
          list.push({
            pic: item.english_pic,
            link: item.english_enclosure, 
            title: item.english_title,
            subTitle: item.english_title_vice,
            description: item.english_txts, 
          })
        } else {
          list.push({
            pic: item.pic,
            link: item.enclosure, 
            title: item.title,
            subTitle: item.title_vice,
            description: item.txts, 
          }) 
        }
      })
      return list
    },
    calcListOurInsights() {
      let list = []
      this.listOurInsights.map(item => {
        if (this.lang === 'en') {
          list.push({
            pic: item.english_pic,
            link: item.english_enclosure, 
            title: item.english_title,
            subTitle: item.english_title_vice,
            description: item.english_txts, 
          })
        } else {
          list.push({
            pic: item.pic,
            link: item.enclosure, 
            title: item.title,
            subTitle: item.title_vice,
            description: item.txts, 
          }) 
        }
      })
      return list
    }
  },
  methods: {
    async initData() {
      let res = await getInsightsList({page: 1, limit: 4})
      if (res.code === 200) {
        this.listResearch = res.data.list
        // let list1 = this.list[0].linkList = { cn: [], en: []}
        // res.data.list.map(item => {
        //   list1['cn'].push({
        //     pic: item.pic,
        //     link: item.enclosure, 
        //     title: item.title,
        //     subTitle: item.title_vice,
        //     description: item.txts, 
        //   }) 
        //   list1['en'].push({
        //     pic: item.english_pic,
        //     link: item.english_enclosure, 
        //     title: item.english_title,
        //     subTitle: item.english_title_vice,
        //     description: item.english_txts, 
        //   })
        // })
      }
 
      res = await getInsights2List({page: 1, limit: 4})
      if (res.code === 200) {
        this.listOurInsights = res.data.list
        // let list2 = this.list[1].linkList = { cn: [], en: []}
        // res.data.list.map(item => {
        //   list2['cn'].push({
        //     pic: item.pic,
        //     link: item.enclosure, 
        //     title: item.title,
        //     subTitle: item.title_vice,
        //     description: item.txts, 
        //   }) 
        //   list2['en'].push({
        //     pic: item.english_pic,
        //     link: item.english_enclosure, 
        //     title: item.english_title,
        //     subTitle: item.english_title_vice,
        //     description: item.english_txts, 
        //   })
        // })
      }
      // console.log(list1, list2)
    }
  },
  mounted() {
    this.initData()
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
        width: 671px;
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
        margin-top: 97px;
        padding: 0 60px;
        .item-box {
          text-align: left;
          margin-bottom: 100px;
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
                font: inherit;
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
