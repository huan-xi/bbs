<template>
  <div>
    <div class="common-header">
      <img class="img-circle"
           src="//upload.jianshu.io/users/upload_avatars/14171525/85ae8aaa-1243-4d3c-93f7-f87cb756ff0b?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180">
      <span>无法</span><span class="action">发布了留言 · 2018.09.24 11:46</span>
      <div></div>
    </div>
    <div class="common-context">你怎么把课件给贴出来了</div>
    <div class="common-blog">
      <div class="blog-title"><a>家有好女亦慎嫁</a></div>
      <p>事件回顾
        汉末建安年间，发生了一件震惊世人的爱情悲剧，庐江府小吏焦仲卿的妻子刘兰芝，不受婆婆喜欢，被休回家，而两个情投意合的年轻人抗争无效，相约共赴黄泉。两条鲜活的生命就这样...
      </p>
      <div class="meta">
        <div class="origin-author">
          <a href="/users/6d1d04ce2498"><span>石溪梅</span></a>
        </div>
        <i class="fa fa-eye"></i> 16
        <i class="fa fa-comment"></i> 10
        <span><i class="fa fa-heart"></i> 4</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonItem"
  }
</script>

<style scoped>
  .common-header img {
    width: 25px;
    height: 25px;
  }
  .common-context{
   font-size: 15px;
   line-height: 1.7;
    margin: 10px 10px;
 }
  .meta .origin-author {
  display: inline;
    margin-right: 10px;
  }
  .meta .origin-author a, .blog-title a{
    color: #969696;
  }
  .blog-title a:hover{
    text-decoration: underline!important;
  }

  .meta span {
    font-size: 15px;
  }

  .common-blog {
    color: #969696;
    border-left: 3px solid #d9d9d9;
    padding-left: 20px;
    font-size: 17px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-end: 40px;
  }

  .common-blog p {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }

  .common-header span {
    padding-left: 10px;
  }

  .common-header .action {
    color: #969696;
  }

</style>
