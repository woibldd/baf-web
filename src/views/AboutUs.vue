<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content">
        <div class="animated bounceInLeft">
          <swiper
            ref="swiperDesigner"
            class="swiper-designer " 
            :options="swiperDesignerOptions">  
            <swiper-slide 
              v-for="index in 3"  
              class="swiper-designer-item"  
              :key="'designer'+index">
                <div class="banner-box pt-1"> 
                  <h5 class="title ani" swiper-animate-effect="fadeInLeft"  swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">ABOUT US</h5>
                  <h1 class="sub-title mt-19 ani" swiper-animate-effect="fadeInLeft"  swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                    Focusing on cutting edge blockchain innovations with global exposure
                  </h1>
                  <h6 class="tips mt-19 ani" swiper-animate-effect="fadeInLeft"  swiper-animate-duration="0.5s" swiper-animate-delay="0.7s">
                    Founded in 2019, BAF Capital has developed a reputation for being forward-leaning and independent. We focuses on investing in cryptocurrencies, tokens, and innovative blockchain companies at the technological level or business model level.  Our team is around the world, with a presence in China, America, and Korea. The founding partners all joined the blockchain industry in early 2013 (the year was marked by the price of 1BTC>1 ounce of gold), and became life members of the Bitcoin Foundation in the same year.
                  </h6>
                </div>
            </swiper-slide> 
          </swiper>  
        </div>
        <div class="banner-box">
          <div class="ml-78 swiper-pagination"></div> 
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="float-content">
        <div class="float-box">
          <article>
            <p class="text1"> In addition to the investment and research team, BAF Capital makes great efforts in building its own technical capability and operational proficiency to deliver strategic, practical, and impactful support to our portfolio companies. </p>
            <p class="text2 mt-20">We connect investors, industry experts, KOL, community, media, and other resources to the project company within an ecosystem.   </p>
            <p class="text1 mt-20">Moreover, BAF Capital invests and incubates Mayflower Lab, Galand Research Institute and Panda Game Guild. </p>
          </article>
          <div class="ziyuan mt-56" flex="main:justify cross:center">
            <div class="ziyuan-box">
              <img class="def"  src="@/assets/ziyuan1.png" alt="">
              <img class="hover"  src="@/assets/ziyuan1-hover.png" alt="">
            </div>
            <div class="ziyuan-box">
              <img class="def"  src="@/assets/ziyuan2.png" alt="">
              <img class="hover"  src="@/assets/ziyuan2-hover.png" alt="">
            </div>
            <div class="ziyuan-box">
              <img class="def"  src="@/assets/ziyuan3.png" alt="">
              <img class="hover"  src="@/assets/ziyuan3-hover.png" alt="">
            </div> 
          </div>
        </div>
      </div>
      <div ref="intent" class="panel-content intent-content ">
        <div class="top-rectangle"></div>
        <div class="  panel-title intent-title">Strategic Intent</div>
        <div class="intent-box" flex="main:justify">
          <div class="  intent-item intent-item1">
            <p class="p1"><img src="~@/assets/intent-mission.png" alt=""></p>
            <p class="mt-24"><label>Mission</label></p>    
            <p class="mt-15">Build and support bitcoin and blockchain companies by leveraging our insights, network, and access to capital.</p>
          </div>
          <div class="  intent-item intent-item2" style="animation-delay:.3s"> 
            <p class="p1"><img src="~@/assets/intent-vision.png" alt=""></p>
            <p class="mt-15"><label>Vision</label></p>
            <p class="mt-15">The best crypto investment institution worldwide.</p>
          </div>
          <div class="  intent-item intent-item3" style="animation-delay:.6s"> 
            <p class="p1"><img src="~@/assets/intent-value.png" alt=""></p>
            <p class="mt-27"><label>Value</label></p>
            <p class="mt-15">Results-oriented, value-added services to all connecting parties.</p>
          </div>
        </div>
      </div>
      <div ref="team" class="panel-content team-content">
        <div ref="teamA" class="teamA">
          <div class="team-item team1 " flex="main:justify">
            <div class="item-box item-box-side" flex="main:center cross:center dir:top">
              <div class="item-box-title">Foundation</div>
              <div class="item-box-tip mt-7">Research Driven</div>
            </div>
            <div class="item-box item-box-middle" flex="main:center cross:center dir:top">
              <div class="item-box-title">Focus</div>
              <div class="item-box-tip mt-7">Strong Communication</div>
            </div>
            <div class="item-box item-box-side" flex="main:center cross:center dir:top">
              <div class="item-box-title">Integration</div>
              <div class="item-box-tip mt-7">Ecosystem</div>
            </div>
          </div>
          <div class="team-item team2 " flex="main:justify">
            <div class="item-box-b" flex="main:center cross:center">
              <div class="vertical-line"></div>
            </div>
            <div class="item-box-b" flex="main:center cross:center">
              <div class="vertical-line line-middle"></div>
              <div class="team-title panel-title">
                Investment Belief
              </div>
            </div>
            <div class="item-box-b" flex="main:center cross:center">
              <div class="vertical-line"></div>
            </div>
          </div>
          <div class="team-item team3 " flex="main:justify">
            <div class="item-box item-box-side" flex="main:center cross:center dir:top">
              <div class="item-box-title">Support</div>
              <div class="item-box-tip mt-7">Empower</div>
            </div>
            <div class="item-box item-box-middle" flex="main:center cross:center dir:top">
              <div class="item-box-title">Promotion</div>
              <div class="item-box-tip mt-7">Operational Excellen</div>
            </div>
            <div class="item-box item-box-side" flex="main:center cross:center dir:top">
              <div class="item-box-title">Impetus</div>
              <div class="item-box-tip mt-7">Technology Innovatio</div>
            </div>
          </div>  
        </div>
        <div ref="teamB" class="team-box mt-50">
          <div class="team-pd" flex="box:first">
            <div class="team-box-left">
              <div class="img-box"><img src="~@/assets/team-rotate.png" alt=""></div> 
            </div>
            <div class="team-box-right"> 
              <div class="team-box-title">Founders Team </div>
              <div class="team-box-content mt-14">
                Founders with solid investment knowledge, blockchain industry experience and unique expertise, come together to build a professional team, aiming to deliver more reliable services to clients.   
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div ref="strategy" class="panel-content strategy-content"> 
        <div class="panel-title">Investment Strategy</div>
        <div class="strategy-box">
          <div class="strategy-item item1">
            <div class="amount mt-68">
              <div class="num">{{animatedNum1}}<i>%</i></div>
              <div class="rect">
              </div>
            </div>
            <div class="text1 mt-53 row1">
              Primary Market: Angel and Seed Round
              <!-- <div class="text2">*Angel and Seed</div> -->
            </div>
            <div class="text1">+</div>
            <div class="text1">Oversea Deals</div>
          </div>
          <div class="strategy-item item1" style="animation-delay:.3s">
            <div class="amount mt-68">
              <div class="num">{{animatedNum2}}%</div>
              <div class="rect">
              </div>
            </div>
            <div class="text1 mt-53  row1">
              Late-stage Investmen
            </div>
            <div class="text1">+</div>
            <div class="text1">Secondary Market</div>
          </div>
          <div class="strategy-item item1" style="animation-delay:.6s">
            <div class="amount mt-68">
              <div class="num">{{animatedNum3}}%</div>
              <div class="rect">
              </div>
            </div>
            <div class="text3 mt-53  row1">Mining, Staking, Keeper Operations and Liquidations</div>
            <div class="text3">+</div>
            <div class="text3">Play to earn, Write to earn</div>
            <div class="text3">+</div>
            <div class="text3">Crypto Assets: Land, NFT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>  
import {swiperAnimateCache,swiperAnimate} from '@/modules/swiper/swiper.animate1.0.2.min.js'
import '@/modules/swiper/animate.min.css'
import TWEEN from 'tween.js'

export default {
  data() {
    return { 
      TWEEN,
      swiperDesignerOptions: { 
        effect: 'fade',
        allowTouchMove: false,
        // autoplay: {
        //   delay: 15000,
        //   disableOnInteraction: false,
        // },
        loop: true, 
        loopAdditionalSlides: 5,  
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },  
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
          }, 
          slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          } 
        }

      },
      num1: 0,
      animatedNum1: 0,
      num2:0,
      animatedNum2: 0,
      num3:0,
      animatedNum3: 0,
    }
  },
  components: { 
  }, 
  watch: {
    num1: function(newValue, oldValue) {
      var vm = this
      function animate(time) {
        if (+vm.animatedNum1 !== +newValue) {
          requestAnimationFrame(animate) 
        } 
        TWEEN.update(time)

      }
      new TWEEN.Tween({tweeningNumber: oldValue})
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({tweeningNumber: newValue}, 3000)
        .onUpdate(function() {
          vm.animatedNum1 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()  
    },
    num2: function(newValue, oldValue) {
      var vm = this
      function animate(time) {
        if (+vm.animatedNum2 !== +newValue) {
          requestAnimationFrame(animate) 
        } 
        TWEEN.update(time)

      }
      new TWEEN.Tween({tweeningNumber: oldValue})
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({tweeningNumber: newValue}, 3000)
        .onUpdate(function() {
          vm.animatedNum2 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()  
    },
    num3: function(newValue, oldValue) {
      var vm = this
      function animate(time) {
        if (+vm.animatedNum3 !== +newValue) {
          requestAnimationFrame(animate) 
        } 
        TWEEN.update(time)

      }
      new TWEEN.Tween({tweeningNumber: oldValue})
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({tweeningNumber: newValue}, 3000)
        .onUpdate(function() {
          vm.animatedNum3 = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()  
    }
  },
  methods: {
    getElementToPageTop(el) {
      if(el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
      }
      return el.offsetTop
    },
    handleScroll() {
      let docSrollTop = document.scrollingElement.scrollTop
      let clientH = window.innerHeight  //视窗大小
      let sectionTop = this.$refs['intent'].offsetTop //动态文字模块距离文档头部的距离
      let sectionH = this.$refs['intent'].clientHeight
      if((docSrollTop + clientH - sectionTop - 100) >= 0 && (docSrollTop - sectionTop - sectionH) <= 0){ 
        this.setAnimatedIntent()
      }
      // console.log('teamA') 
      let sectionTopX = this.$refs['team'].offsetTop 
      sectionTop = this.$refs['teamA'].offsetTop + sectionTopX
      sectionH = this.$refs['teamA'].clientHeight
      if((docSrollTop + clientH - sectionTop) >= 0 && (docSrollTop - sectionTop - sectionH) <= 0){ 
        this.setAnimatedTeam1()
      }
      sectionTop = this.$refs['teamB'].offsetTop  + sectionTopX
      sectionH = this.$refs['teamB'].clientHeight
      if((docSrollTop + clientH - sectionTop) >= 0 && (docSrollTop - sectionTop - sectionH) <= 0){ 
        this.setAnimatedTeam2()
      }
      sectionTop = this.$refs['strategy'].offsetTop //动态文字模块距离文档头部的距离
      sectionH = this.$refs['strategy'].clientHeight
      if((docSrollTop + clientH - sectionTop - 100) >= 0 && (docSrollTop - sectionTop - sectionH) <= 0){
        this.setAnimatedNum()
      }
    },
    setAnimatedIntent() {
      let intentTitle = document.getElementsByClassName('intent-title')
      let list = document.getElementsByClassName('intent-item') 
      if (!intentTitle[0].classList.contains('animated')) {
        intentTitle[0].classList.add('fadeInUp')
        intentTitle[0].classList.add('animated')
      } 
      for (const item of list) {
         if (!item.classList.contains('animated')) {
          item.classList.add('fadeInUp')
          item.classList.add('animated')
        }
      }
    },
    setAnimatedTeam1() { 
      let list2 = document.getElementsByClassName('team-item')
      for (const item of list2) {
         if (!item.classList.contains('animated')) {
          item.classList.add('fadeInUp')
          item.classList.add('animated')
        }
      }  
    },
    setAnimatedTeam2() { 
      let list = document.getElementsByClassName('team-box')
       if (!list[0].classList.contains('animated')) {
        list[0].classList.add('fadeInUp')
        list[0].classList.add('animated')
      }  
    },
    setAnimatedNum() {
      this.num1 = 50
      this.num2 = 30
      this.num3 = 20
      let list = document.getElementsByClassName('strategy-item')
      for (const item of list) {
        if (!item.classList.contains('animated')) {
          item.classList.add('fadeInUp')
          item.classList.add('animated')
        }
      }
    } 
  },
  mounted() { 
    this.handleScroll()
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  text-align: left;
  .page-banner {
    position: relative;
    height: 700px;
    background-color: #000F27;
    .banner-content { 
      height: 598px;
      background-image: url('~@/assets/banner-aboutus.png'); 
      background-position: center;
      .banner-box {
        width: 1300px;
        margin: 0 auto;
        text-align: left;
      }
      .title {
        margin-left: 78px;
        margin-top: 123px;
        font-size: 16px;
        color: #ffffff;
      }
      .sub-title {
        margin-left: 78px;
        width: 838px;
        height: 172px;
        font-weight: 600;
        font-size: 48px;
        line-height: 1.2em;
        color: #ffffff;
      }
      .tips {
        margin-left: 78px;
        height: 180px;
        line-height: 1.5em;
        width: 838px;
        font-size: 16px; 
        color: rgba($color: #ffffff, $alpha: .4); 
      }
      .swiper-pagination {
        /deep/.swiper-pagination-bullet{
          margin-right: 9px;
          width: 28px;
          height: 10px;
          background: #FFFFFF;
          opacity: 0.1;
          border-radius: 0;
          transition: all 1s ;
          &.swiper-pagination-bullet-active {
            background-color: $primary;
            width: 100px;
            opacity: 1;
          }
        }
      }
    }
  }
  .page-content {
    .float-content {
      background-color: #F2F4F7;
      .float-box { 
        position: relative;
        margin: -36px auto;
        padding: 105px 0 120px;
        width: 1300px; 
        background-color: #ffffff;
        z-index: 1;
        article {
          margin: 0 auto;
          width: 864px;
          font-size: 18px;
          line-height: 22px;
          .text1 {
            color: #000F27;
          }
          .text2 { 
            font-weight: 600;
            color: #001B8B;
          }
        }
        .ziyuan {
          margin: 0 auto;
          width: 864px;
          .ziyuan-box {
            &:hover {
              img.def {
                display: none;
              }
              img.hover {
                display:inline;
              }
            }
            img.hover {
              display:none;
            }
          }
        }
      }
    } 
    .panel-content {
      position: relative;
      background-color: #F2F4F7;
      .top-rectangle {
        position:absolute;
        top: -8px;
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
      &.intent-content {
        height: 700px; 
        background: url(~@/assets/about-panel-bg1.png) center;
        .panel-title {
          padding-top: 119px;
          color: #fff;
        }
        .intent-box {
          position: relative;
          margin: 0 auto;
          width: 1200px; 
          height: 579px;
          .intent-item {
            position: absolute;
            bottom: 0;
            width: 380px;
            background-color: #fff;
            text-align:center;
            z-index: 1;
            p {
              width: 283px;
              margin: 0 auto;
              color: $text;
              font-size: 18px;
              label {
                color: $primary;
                font-size: 36px;
                font-weight: 600;
              }
            }
            &1 {
              left: 0;
              height: 420px;
              .p1 {
                padding-top: 94px
              }
            }
            &2 {
              left: 410px;
              height: 480px;
              .p1 {
                padding-top: 119px
              }
            }
            &3 {
              right: 0;
              height: 540px;
              .p1 {
                padding-top: 133px
              }
            }
          }
        }
      }
      &.team-content {
        padding: 108px 0 50px;
        .team-item {
          position: relative;
          margin: 0 auto;
          width: 1200px;
          &.team1 {
            .item-box {
              &:nth-child(1) {
                z-index: 1;
              }
              &:nth-child(2) {
                z-index: 2;
              }
              &:nth-child(3) {
                z-index: 3;
              }
            }
          }
          &.team3 {
            .item-box {
              &:nth-child(1) {
                z-index: 3;
              }
              &:nth-child(2) {
                z-index: 2;
              }
              &:nth-child(3) {
                z-index: 1;
              }
            }
          }
          &.team2 {
            height: 209px;
          }
          .item-box {
            width: 380px;
            height: 254px;
            background-color: #fff;
            text-align:center; 
            .item-box-title {
              color: $primary;
              font-size: 36px;
              font-weight: 600;
            }
            .item-box-tip {
              color: $text;
              font-size: 18px;
            }
            &.item-box-middle {
              position: absolute;
              top: 12px;
              left: 50%;
              margin-left: -268px;
              width: 536px;height: 228px;
              background-color: transparent;
              border: 2px dashed $primary;
              box-sizing:border-box;
            }
            &.item-box-side:hover {
              background-color: $primary;
              .item-box-title, .item-box-tip {
                color: #fff; 
              }
            }
          }
          .item-box-b {
            position: relative;
            width: 380px;
            height: 209px;
            .vertical-line {
              position: relative;
              border-left: 2px  dashed $primary;
              height: 123px;
              &.line-middle {
                height: 228px;
              }
              &::before {
                position: absolute;
                top: -9px;
                left: -6px;
                content: '';
                height: 10px;
                width: 10px;
                box-sizing: border-box;
                border-radius: 50%;
                border: 2px solid $primary;
              }
              &::after {
                position: absolute;
                bottom: -9px;
                left: -6px;
                content: '';
                height: 10px;
                width: 10px;
                box-sizing: border-box;
                border-radius: 50%;
                border: 2px solid $primary;
              }
            }
            .team-title {
              position: absolute;
              width: 600px;
              color: $text;
              background-color: #F2F4F7;
            }
          }
        }
        .team-box {
          background-image: url(~@/assets/about-box-bg.png);
          width: 1200px;
          height: 400px;
          margin: 0 auto;
          .team-pd {
            padding: 60px 100px;
            .team-box-left {
              padding: 0 158px 0 81px;
              .img-box {
                position: relative;
                // background-color: pink;
                img {
                  position: relative;
                  z-index: 1;
                }
                &::after {
                  position:absolute;
                  content: ''; 
                  top: 9px;
                  left: 9px;
                  height: 260px;
                  width: 259px;
                  border-radius: 50%;
                  border: 1px dashed rgba(255,255,255,.4);
                  z-index: 0;
                  // transform: rotate(360deg)
                  animation: cycle 16s linear infinite;
                }
                &::before {
                  position:absolute;
                  content: '';
                  top: 47px;
                  left: 47px;
                  height: 186px;
                  width: 186px;
                  border-radius: 50%;
                  border: 1px dashed rgba(255,255,255,.4);
                  z-index: 0;
                  animation: cycle2 16s linear infinite;
                }
                @keyframes cycle {
                  from { transform: rotate(0deg);} 
                  to { transform: rotate(360deg);}
                }
                @keyframes cycle2 {
                  from { transform: rotate(360deg);} 
                  to { transform: rotate(0deg);}
                }
              }
            }
            .team-box-right {
              position: relative;
              margin-top: 75px;
              padding-top: 3px;
              &::before {
                position:absolute;
                top: 0;
                left: -33px;
                margin-right: 27px;
                content: '';
                height: 135px;
                width: 6px;
                background-color: $primary;
              }
              .team-box-title {
                color: #fff;
                font-size: 36px;
                font-weight: 600;
              }
              .team-box-content {
                color: rgba(255,255,255,.4);
                line-height: 1.25em;
              }
            }
          }
        }
      }
      &.strategy-content { 
        height: 700px; 
        background: url(~@/assets/about-panel-bg2.png) center;
        .panel-title {
          padding-top: 67px;
          color: #fff;
        }
        .strategy-box {
          width: 1200px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 30px;
          .strategy-item {
            position: relative;
            height: 420px;
            text-align: center;
            color: #fff;
            border: 1px solid $primary;
            .amount {
              font-weight: 600;
              .num {
                font-size: 100px;
                i {
                  font-size: 70px;
                }
              }
              .rect {
                margin: -28px auto 0;
                width: 213px;
                height: 25px;
                background-color: $primary;
              }
            }
            .text1 {
              // &.row1 { 
              //   height: 44px;
              // }
              height: 60px;
              font-size: 18px;
              .text2 {
                font-size: 12px;
                color: rgba(255,255,255,.29)
              } 
            }
            .text3 {
              width: 228px;
              margin: 10px auto;
            }
            &:after {
              position: absolute;
              content: '';
              top: -10px;
              left: 50%;
              margin-left: -10px;
              height: 20px;
              width: 20px;
              background-color: $primary;
              border-radius: 10px;
            } 
          }
        }
      }
    }

  }
}
</style>

