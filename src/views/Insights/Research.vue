<template>
  <div class="page-container">
    <div class="page-banner"> 
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="left-rectangle"></div> 
        <div class="breadcrumb ml-43">
          <!-- <router-link class="mr-14" to="/insights">Insights</router-link>
          <icon class="separator mr-14" name="arrow" />
          <router-link class="mr-14" to="/insights/Research">Research</router-link> -->
          <label v-for="(link, idx) in $route.matched" :key="idx"> 
            <icon v-if="idx!==0" class="separator mr-14" name="arrow" />
            <router-link class="mr-14" :to="link.path">{{link.name}}</router-link>
          </label>
        </div>
        <div class="my-list">
          <div class="item-box" v-for="(item, idx) in list" :key="idx">
            <div class="item-title">
              <label>{{item.name}}</label>
              <!-- <a class="view-all">
                <em>View All</em>
                <img src="@/assets/icon-view-all.png" alt="">
              </a> -->
            </div>
            <div :class="['item-content', item.name]"> 
              <my-link v-for="(obj, index) in item.linkList" 
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
export default {
  components: {myLink},
  data() {
    return {
      list: [ 
        {
          name: 'Research',
          linkList: [
            {
              pic: require('@/assets/insights/research/1.png'),
              link: '/Research/Explain It Like I’m 5- GameFi.pdf', 
              title: 'Explain It Like I’m 5:<br>GameFi',
              subTitle: 'The concept of play-to-earn games isn’t novel, but other aspects of GameFi are',
              description: 'Listen to what’s being said at conferences, on earning calls, or in boardrooms in the gaming industry, and a recurring theme stands out: GameFi.'
            }, 
            {
              pic: require('@/assets/insights/research/2.png'),
              link: '/Research/Genie- The Metaverse’s Aggregator.pdf', 
              title: 'Genie: The Metaverse’s <br>Aggregator',
              subTitle: 'Showing assets or buying NFTs on different exchanges is time-consuming and tedious',
              description: 'Genie is an NFT aggregator, or as the team so catchily describes it, “The Metaverse’s Aggregator”. Genie offers two features, Genie Swap and Genie List.'
            }, 
            {
              pic: require('@/assets/insights/research/3.png'),
              link: '/Research/dYdX - Perpetual Maxima.pdf', 
              title: 'dYdX - <br>Perpetual Maxima',
              subTitle: 'Six months is all it took for dYdX’s layer 2 offering to eclipse Coinbase in daily trading volumes.',
              description: 'dYdX is one of if not the most liquid exchanges in crypto. dYdX has now shut down its Layer 1 offering and is doubling down on perpetuals by expanding beyond the currently available 28 markets.'
            }, 
            {
              pic: require('@/assets/insights/research/4.png'),
              link: '/Research/Why Smart Money Matters More.pdf', 
              title: 'Why Smart Money <br>Matters More',
              subTitle: '“In a world deluged by irrelevant information, clarity is power.”',
              description: 'To make crypto accessible, tools like Nansen must continue to push the frontiers transforming data into meaningful signals. In crypto, following the smart money matters more than ever.'
            }, 
          ]
        }, 
      ]
    }
  },
  created() {
    console.log(this.$route)
  }
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
      padding: 46px 0 20px;
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
      .my-list {
        margin-top: 63px;
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
              width: 911px;
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
