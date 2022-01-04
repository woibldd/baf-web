<template>
  <div class="page-container">
    <div class="page-banner"> 
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="left-rectangle"></div> 
        <div class="breadcrumb ml-43">
          <!-- <router-link class="mr-14" to="/news">News</router-link>
          <icon class="separator mr-14" name="arrow" />
          <router-link class="mr-14" to="/news/FridgeWineParty">Fridge Wine Party</router-link> --> 
          <label v-for="(link, idx) in $route.matched" :key="idx"> 
            <icon v-if="idx!==0" class="separator mr-14" name="arrow" />
            <router-link class="mr-14" :to="link.path">{{link.meta.text || link.name}}</router-link> 
          </label>
        </div> 
        <div v-if="$route.name.includes('Article')">
          <router-view></router-view>
        </div>
        <div v-else>
          <div class="my-list">
            <div class="item-box">
              <div class="item-title">
                <label>Fridge Wine Party</label> 
              </div>
              <div :class="['item-content', 'FridgeWineParty']"> 
                <my-link v-for="(obj, index) in calcList" 
                  :key="index"
                  :obj="obj"
                  ></my-link>
              </div>
            </div>
          </div> 
          <div class="panel-bottom pt-50 pb-50">
             <div v-if="showBtn" class="load-more">
              <label @click="handleClickLoading">LOAD MORE <icon class="arrow ml-10" size="26"  name="arrow"></icon> </label>
            </div>
          </div> 
        </div> 
      </div> 
    </div>
  </div>
</template>

<script>
import myLink from '@/components/linkTemplate'
import { getNews3List } from '@/api/service'
export default {
  components: {myLink},
  data() {
    return {
      showBtn: true,
      page: 1,
      limit: 4,
      total: 0,
      list: [ 
        {
          name: 'Fridge Wine Party',
          linkList: [
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
            {
              id: 11,
              pic: require('@/assets/news/fridge-wine-party/3.png'),
              link: 'FridgeWinePartyArticle', 
              title: 'Fridge Wine Party<br>Serial 01',
              subTitle: 'Metaverse',
              description: 'What are the Metaverse Panorama and Opportunities? Are there any potential investment opportunities in secondary market? '
            }, 
          ]
        }, 
      ]
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang
    },
    calcList() {
      let list = []
      // this.list.map(item => {
      //   if (this.lang === 'en') {
      //     list.push({
      //       id: item.id,
      //       pic: item.english_pic,
      //       link: 'FridgeWinePartyArticle', 
      //       title: item.english_title,
      //       subTitle: item.english_content_one,
      //       description: item.english_content_two, 
      //       createDate: item.send_time
      //     })
      //   } else {
      //     list.push({
      //       id: item.id,
      //       pic: item.pic,
      //       link: 'FridgeWinePartyArticle', 
      //       title: item.title,
      //       subTitle: item.content_one,
      //       description: item.content_two, 
      //       createDate: item.send_time
      //     })
      //   }
      // })
      list = this.list[0].linkList
      return list
    },
  }, 
  methods: { 
    async fetchData() {
      let res = await getNews3List({page: 1, limit: 6}) 
      if (res.code === 200) {
        // this.list = res.data.list
      }
    },
    handleClickLoading() {
      this.page++
      this.fetchData()
      if (this.page * this.limit >= this.total) {
        this.showBtn = false
      }
    }
  },
  mounted() {
    this.fetchData()
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
      .my-list {
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
