<template>
  <div class="commons">
    <h3>评论管理</h3>
    <Tabs>
      <TabPane label="我评论的">
        <div class="common-list">
          <common-item/>
          <common-item/>
          <common-item/>
        </div>
      </TabPane>
      <TabPane label="评论我的">评论我的</TabPane>
      <TabPane label="我的草稿">我的草稿</TabPane>
    </Tabs>
  </div>
</template>

<script>
  import CommonItem from "../components/CommonItem";
  export default {
    name: "CommonsManage",
    components: {CommonItem}
  }
</script>

<style scoped>
.commons{
  padding-bottom: 20px;
}
</style>
