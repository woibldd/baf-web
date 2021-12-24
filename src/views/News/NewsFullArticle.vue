<template>
  <div class="article-container"> 
    <article>
      <h3 class="article-title">
        <div v-html="myArticle.title"></div> 
        <div class="article-date mt-18">{{ $date(myArticle.createDate)}}</div>
      </h3>
      <div class="article-content" v-html="myArticle.content"></div>
    </article>
  </div>   
</template>

<script> 
import list from '@/views/News/articles.js'
import {getNewsDetail, getNews2Detail, getNews3Detail} from '@/api/service'
export default {
  data() {
    return {  
      article: {},
    }
  }, 
  computed: {
    lang() {
      return this.$store.state.lang
    },
    myArticle() {
      if (this.lang === 'en') {
        return {
          title: this.article.english_info_title,
          createDate: this.article.send_time,
          content: this.article.english_txts
        }
      } else {
        return {
          title: this.article.info_title,
          createDate: this.article.send_time,
          content: this.article.txts
        }
      }
    }
  },
  methods: {
    fetch() {
      console.log(this.$route)
      let name = this.$route.name
      let id = this.$route.params.id 
      let fun = getNewsDetail
      if (name === 'SeminarArticle') { 
        fun = getNews2Detail
      }
      else if (name === 'FridgeWinePartyArticle') {
        fun = getNews3Detail
      }

      fun({id}).then(res => {
        if (res.code === 200) {
          this.article = res.data
        }
      })
    }
  }, 
  created() {
    this.fetch()
  }
}
</script>


<style lang="scss" scoped>
.article-container { 
  article {
    margin-top: 63px;
    padding: 0 190px 120px;  
      text-align: left; 
      .article-title {
        position:relative;
        padding: 0 0 9px;
        margin-bottom: 28px;
        color: $text;
        font-size: 60px;
        border-bottom: 1px solid rgba($color: $text, $alpha: .5);
        font-weight: 600;  
        .article-date {
          font-size: 18px;
          opacity: .5;
        }
      }
      .article-content { 
        color: $text;
        overflow:auto; 
        text-overflow: ellipsis;
        overflow-wrap: break-word;
        // font-size: 18px;
        /deep/img {
          margin: 28px 0;
          max-width: 920px;
        }
      } 
  }  
}
</style>
