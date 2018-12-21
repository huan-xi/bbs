<template>
    <div>
      <h3>文章管理</h3>
      <Tabs>
        <TabPane label="我发布的">
          <div class="">
            <article-item/>
            <!--<article-item/>-->
            <!--<article-item/>-->
          </div>
        </TabPane>
        <TabPane label="评喜欢的">我喜欢的</TabPane>
      </Tabs>
    </div>
</template>

<script>
    import ArticleItem from "../components/BlogItem";
    export default {
        name: "ManageBlog",
      components: {ArticleItem}
    }
</script>

<style scoped>

</style>
