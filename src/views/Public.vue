<template>
    <div class="container-fluid public">
        <h3>发布博客页面</h3>
        <div class="row">
            <div class="col-sm-12">
                <input v-model="title" type="text" class="form-control blog-title"
                       placeholder="文章标题"></div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <select v-model="category" class="col-xs-3  form-control category">
                    <option value="-1">选择分类</option>
                    <option class="level-1" v-for="item in categoryList" :value="item.category_id">{{item.title}}
                    </option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <mavon-editor v-model="content"/>
            </div>
        </div>
        <div class="row bottom">
            <button class="btn btn-blue btn-green">保存草稿</button>
            <button class="btn btn-blue" @click="public">提交发布</button>
        </div>
    </div>
</template>
<style scoped>
    .category {
        width: 50%;
        margin-bottom: 25px;
    }

    .blog-title {
        width: 50%;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .v-note-wrapper{
        min-height: 450px;
    }
    .bottom {
        margin-top: 50px;
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
    import axios from '../axios'

    export default {
        name: "PublicBlog",
        data() {
            return {
                content: "",
                category: '-1',
                title: '',
                categoryList: []
            };
        },
        created() {
            axios.get('/api/article/category').then(res => {
                this.categoryList = res.msg
            });
        },
        methods: {
            public() {
                if (this.title.length < 5) {
                    this.$Message.error("标题不能少于5个字");
                    return;
                }
                if (this.content.length < 5) {
                    this.$Message.error("文章内容不能少于5个字");
                    return;
                }
                if (this.category == '-1') {
                    this.$Message.error("请选择分类！");
                    return;
                }
                axios.post("/api/article",
                    {
                        title: this.title,
                        content: this.content,
                        category_id: this.category
                    }
                ).then(res => {
                    if (res.status == 1) {
                        this.$Message.success(res.msg)
                    } else {
                        this.$Message.error(res.msg)
                    }
                });

            },
            saveDraft() {

            },
        }
    }
</script>

