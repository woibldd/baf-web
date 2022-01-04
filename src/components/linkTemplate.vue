<template>
  <div class="link-wrap">
    <div class="mylink" 
      @click="goto(obj)"
      :style="{backgroundImage: `url(${obj.pic})`}">
      <div class="a-pd"> 
        <div class="p-title" flex="cross:center">
          <div v-html="obj.title"></div>
        </div>
        <div class="p-sub-title mt-19" flex="cross:center" v-html="obj.subTitle">{{obj.subTitle}}</div>
        <div class="p-content mt-10" v-html="obj.description">{{obj.content}}</div> 
      </div>
      <div class="mask"></div> 
      <div class="arrow" > 
        <icon style="width: 156px; height: 15px;" name="arrow-long" />
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'route'
    },
    obj: {
      pic: require('@/assets/insights/insights-1.png'),
      link: 'http://www.baidu.com', 
      title: 'What’s Filecoin？',
      subTitle: 'Comprehensive research report',
      content: 'This is BAF\'s first comprehensive study of the filecoin project, and we are grateful to Filecoin for its support and assistance in this study'
    }, 
  }, 
  methods: {
    goto(obj) { 
      if (this.type === 'route') { 
        this.gotoPath({name: obj.link, params: {id: obj.id}})
      } else {
        window.open(obj.link)
      }
    }
  }
}
</script>

<style lang="scss" scope>
.link-wrap { 
  .mylink {
    display: block;
    height: 380px;
    // color: $text;
    overflow: hidden;
    cursor: pointer;
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
      transition: all .28s linear;
    } 
    .arrow {
      padding-right: 50px;
      text-align: right;
      opacity: 0;
      transform: translate(0, -220px);
      transition: all .48s ease-out; 
    } 
    &:hover {
      .mask { 
        opacity: 1; 
        transform: translate3d(200px, -380px, 0);
      } 
      .arrow { 
        opacity: 1;
        transform: translate(0, -437px);
      }
    } 
    .p-title {
      height: 159px;
      width: 911px;
      font-size: 68px;
      font-weight: 600;
    }
    .p-sub-title {
      font-size: 22px;
      height: 47px;
      width: 588px;
      font-weight: 600;
      opacity: .69;
    }
    .p-content {
      width: 588px;
      height: 80px;
      line-height: 21px;
      font-size: 18px; 
      opacity: .49;
    }
  }
}
</style>