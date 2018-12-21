<template>
  <div class="container-fluid public">
    <h3>发布博客页面</h3>
    <div class="row">
      <div class="col-sm-12">
        <input type="text" class="form-control blog-title"
               placeholder="文章标题"></div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <mavon-editor v-model="value"/>
      </div>
    </div>
    <div class="row bottom">
      <select class="col-xs-3  form-control category">
        <option value="-1">选择分类</option>
        <option class="level-1" value="1">精选推荐</option>
        <option class="level-1" value="4">模板插件</option>
        <option class="level-1" value="33">VIP专区</option>
      </select>
      <button class="btn btn-blue btn-green">保存草稿</button>
      <button class="btn btn-blue">提交发布</button>
    </div>
  </div>
</template>
<style scoped>
  .category {
    margin-left: 15px;
    width: 25%;
    margin-bottom: 5px;
  }

  .blog-title {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .bottom{
    margin-top: 10px;
  }
  .btn-blue {
    display: inline-block;
    padding: 4px 16px;
    color: #fff;
    font: 14px "Microsoft YaHei", Verdana, Geneva, sans-serif;
    background-color: #2CAFFB;
    line-height: 22px;
    border-radius: 2px;
    text-decoration: none;
    float: right;
    margin-right: 15px;
  }

  .btn-green {
    background-color: #17b431;
  }
</style>
<script>
  export default {
    name: "PublicBlog",
  }
</script>

