<template>
  <div class="article-container"> 
    <article>
      <h3 class="article-title">
        <div v-html="myArticle.title"></div> 
        <div class="article-date mt-18">{{myArticle.createDate}}</div>
      </h3>
      <div class="article-content" v-html="myArticle.content"></div>
    </article>
  </div>   
</template>

<script> 
import list from '@/views/News/articles.js'
export default {
  data() {
    return { 
      myArticle: {}
    }
  }, 
  created() { 
    let id = this.$route.params.id 
    this.myArticle = list.find(item => item.id === +id) 
  }
}
</script>


<style lang="scss" scoped>
.article-container { 
  article {
    margin-top: 63px;
    padding: 0 190px 120px;  
      text-align: left;
      // margin-bottom: 100px;
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
