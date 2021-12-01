<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content"> 
          <h1 class="title">
            BAF Capital News.
          </h1>  
          <div class="label-list mt-27" flex>
            <label class="mr-19">Latest</label>
            <label class="mr-19">True</label>
            <label class="mr-19">Effective</label>
          </div>
          <div class="tips mt-22">
            Stay tuned to BAF Capital News to get more updated investment and activity information.
          </div>
      </div>
    </div>
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-title">News</div>
        <div class="my-list">
          <div class="item-box" >
            <div class="item-title">Investment</div>
            <div class="item-content investment-list">
              <div class="news-item black" :href="obj.link" v-for="(obj, index) in investmentList" :key="index">
                <img :src="obj.pic" alt="" >
                <div class="news-a-box" :class="['box-'+index]">
                  <div class="news-text">
                    <div class="title-a">{{obj.title}}</div>
                    <div class="news-content mt-17" v-html="obj.content">{{obj.content}}</div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div class="item-box" >
            <div class="item-title">Seminar</div>
            <div class="item-content">
              <div class="news-item white" 
                :href="obj.link" v-for="(obj, index) in seminarList"
                :style="{backgroundImage: `url(${obj.pic})`}"
                :key="index">
                <div class="news-pd">
                  <div class="title-b">
                    <h1>{{obj.title}}</h1>
                    <h1>{{obj.date}}</h1>
                  </div> 
                  <div class="news-text-b mt-22">
                    <div class="sub-title-b">
                      {{obj.subTitle}}
                    </div>
                    <div class="news-content news-content-b mt-10" v-html="obj.content">
                      {{obj.content}}
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div class="item-box" >
            <div class="item-title">Fridge Wine Party</div>
            <div class="item-content">
              <div class="news-item black" :href="obj.link" v-for="(obj, index) in partyList"
                :style="{backgroundImage: `url(${obj.pic})`}"
                :key="index">
                <div class="news-pd">
                  <div class="title-b">
                    <h1>{{obj.title}}</h1>
                    <h1>{{obj.date}}</h1>
                  </div>
                  <div class="news-text-b mt-22">
                    <div class="sub-title-b">
                      {{obj.subTitle}}
                    </div>
                    <div class="news-content news-content-b mt-10" v-html="obj.content">
                      {{obj.content}}
                    </div>
                  </div> 
                </div>
              </div>
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
      investmentList: [
        {
          pic: require('@/assets/news/investment-1.png'),
          title: 'People Turn to Technology to Help',
          content: 'People in flood zones acted quickly,<br> using technology to find survivors who needed he',
          date: '',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/investment-2.png'),
          title: 'People Turn to Help',
          content: 'People in flood zones acted quickly, using technology to find survivors who needed help.es acted quickly,y to find survivors who needed help.es acted quickly,y to find survivors who needed help.es acted quickly,y to find  survivors who needed help.es acted quickly,y to find survivors who needed help.es acted quickly,',
          date: '',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/investment-3.png'),
          title: 'People Turn to Techn',
          content: 'People in flood zones acted quickly, using technology to find survivors who needed he',
          date: '',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/investment-4.png'),
          title: 'People Turn to Techn',
          content: 'People in flood zones acted quickly, using technology to find survivors who needed he',
          date: '',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/investment-5.png'),
          title: 'People Turn to Techn',
          content: 'People in flood zones acted quickly, using technology to find survivors who needed he',
          date: '',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/investment-6.png'),
          title: 'People Turn to Technology to Help',
          content: 'People in flood zones acted quickly,<br> People in flood zones acted quickly, using technology to find survivors who needed he',
          date: '',
          link: 'http://www.baidu.com',
        },
      ],
      seminarList: [
        {
          pic: require('@/assets/news/seminar-1.png'),
          title: 'BAF-Seminar ',
          subTitle: 'Blockchain event for academic researchers',
          content: 'It was a blockchain event for creative academic researchers, attended by senior executives from major technology companies',
          date: '1101',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/seminar-1.png'),
          title: 'BAF-Seminar ',
          subTitle: 'Blockchain event for academic researchers',
          content: 'It was a blockchain event for creative academic researchers, attended by senior executives from major technology companies',
          date: '1101',
          link: 'http://www.baidu.com',
        },
      ],
      partyList: [
        {
          pic: require('@/assets/news/party-1.png'),
          title: 'BAF-Party ',
          subTitle: 'Blockchain event for academic researchers',
          content: 'It was a blockchain event for creative academic researchers, attended by senior executives from major technology companies',
          date: '1101',
          link: 'http://www.baidu.com',
        },
        {
          pic: require('@/assets/news/party-1.png'),
          title: 'BAF-Party ',
          subTitle: 'Blockchain event for academic researchers',
          content: 'It was a blockchain event for creative academic researchers, attended by senior executives from major technology companies',
          date: '1101',
          link: 'http://www.baidu.com',
        },
      ],
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
      text-align: left;
      color: #fff;
      .title {  
        padding-top: 236px;
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
        opacity: .4;
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
        padding: 0 60px;
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
            row-gap: 22px;
            column-gap: 20px;
            &.investment-list {
              grid-template-columns: 1fr 1fr 1fr;
              .news-item {
                &:first-child {
                  grid-column-start: 1;
                  grid-column-end: 3;
                }
                &:nth-child(6) {
                  grid-column-start: 1;
                  grid-column-end: 4;
                }
                img {
                  vertical-align: bottom;
                }
                .news-a-box { 
                  border: 1px solid #CCD1E8;
                  border-top: none;
                  line-height: 1.4em;
                }
                .box- {
                  border-top: none;
                  &0, &5 {
                    height: 150px;
                  }
                  &1 {
                    height: 290px;
                  }
                  &2, &3, &4 {
                    height: 190px;
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
