<template>
    <Tabs value="name" class="tabs">
        <TabPane label="最新" name="name1">
            <blog-item/>
            <blog-item/>
            <blog-item/>
            <blog-item/>
            <blog-item/>
            <div class="page">
                <Page :total="100"/>
            </div>

        </TabPane>
        <TabPane label="推荐" name="name2">标签二的内容</TabPane>
        <TabPane label="java" name="name3">标签三的内容</TabPane>
    </Tabs>

</template>

<script>
    import BlogItem from "./BlogItem"

    export default {
        name: "Posts",
        components: {BlogItem}
    }
</script>

<style>

    .tabs > .ivu-tabs-bar {
        background-color: #f8f8f8;
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .page {
        margin: 30px;
        display: flex;
        justify-content: center;
    }
</style>
