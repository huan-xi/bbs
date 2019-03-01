<template>
    <div class="blog">
        <ol class="breadcrumb">
            <li><a href="#">首页</a></li>
            <li><a href="#">博客浏览</a></li>
            <li><a href="#">java相关</a></li>
            <li class="active">VIM 的简单使用</li>
        </ol>
        <div class="title">
            <h1 class="text-center">VIM 的简单使用</h1>
            <ol class="breadcrumb">
                <li><i class="fa fa-clock-o"></i> 2018.09.25 17:47</li>
                <li>分类</li>
                <li>作者</li>
                <li>阅读 100</li>
                <li>喜欢 100</li>
                <li>收藏</li>
            </ol>
        </div>
        <!--内容页-->
        <div class="context center-block">
            <mavon-editor v-model="value" :editable="false" :toolbarsFlag="false"/>
        </div>
        <!--评论区-->
        <div class="common">
            <div class="public-common">
                <img class="header_img img-circle"
                     src="https://ws4.sinaimg.cn/large/006tNc79gy1fvn1o3ehlcj302s02sdfp.jpg">
                <textarea placeholder="写下你的评论..."></textarea>
                <div class="submit">
                    <button class="submit">发送</button>
                    <button class="submit submit-cancel">取消</button>
                </div>
            </div>
            <div class="commons">
                <div class="common-header">
                    <img class="img-circle"
                         src="//upload.jianshu.io/users/upload_avatars/14171525/85ae8aaa-1243-4d3c-93f7-f87cb756ff0b?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180">
                    <span>无法</span><span class="action">1楼 · 发布了留言 · 2018.09.24 11:46</span>
                    <div></div>
                </div>
                <div class="common-context">你怎么把课件给贴出来了</div>
            </div>
            <div class="commons">
                <div class="common-header">
                    <img class="img-circle"
                         src="//upload.jianshu.io/users/upload_avatars/14171525/85ae8aaa-1243-4d3c-93f7-f87cb756ff0b?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180">
                    <span>无法</span><span class="action">2楼 · 发布了留言 · 2018.09.24 11:46</span>
                </div>
                <div class="common-context">你怎么把课件给贴出来了</div>
            </div>
        </div>
        <BackTop></BackTop>
    </div>
</template>
<style>
    .blog{
        background-color: white;
    }
    .breadcrumb{
        background-color: white;
    }
    .common{
        padding-left: 30px;
    }
    /*markdown样式修改*/
    .v-note-edit {
        display: none !important;
    }

    .markdown-body {
        z-index: 10;
    }

    .v-note-show {
        -webkit-flex: 0 0 100% !important;
    }

    .common-header img {
        width: 25px;
        height: 25px;
    }

    .common-header span {
        padding-left: 10px;
    }

    .common-header .action {
        color: #969696;
    }

    .public-common .submit > .submit-cancel {
        margin-right: 0;
        font-size: 16px;
        background-color: #969696;
    }

    .submit .submit {
        float: right;
        width: 78px;
        margin: 10px 20% 0 15px;
        padding: 8px 18px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        color: #fff !important;
        background-color: #42c02e;
        cursor: pointer;
        outline: none;
        display: block;
    }

    .commons {
        margin-top: 50px;
    }

    .public-common textarea {
        margin-left: 20px;
        padding: 10px 15px;
        width: 80%;
        height: 80px;
        font-size: 15px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background-color: hsla(0, 0%, 71%, .1);
        resize: none;
        display: inline;
        vertical-align: top;
        outline-style: none;
    }

    .title H1 {
        color: black;
    }

    .title {
        border-left: solid 4px gray;
        padding-left: 20px;
        color: gray;
    }

    .common {
        margin-top: 20px;
    }

    .header_img {
        width: 50px;
        height: 50px;
    }

    .common-context {
        font-size: 15px;
        line-height: 1.7;
        margin: 10px 10px;
    }
</style>
<script>
    export default {
        name: "post",
        data() {
            return {
                value: "# vim简单使用\n" +
                    "\n" +
                    "> 文本编辑器 vi visual Interface 全屏编辑器，\n" +
                    "\n" +
                    "## vim打开文件\n" +
                    "\n" +
                    "1. vim + /文件   文本最下行\n" +
                    "2. vim +12  /文件        直接跳到第十二行\n" +
                    "3. vim +PATTERN 打开文件，定位到第一次PATTERN匹配到的行\n" +
                    "\n" +
                    "## 模式转换\n" +
                    "\n" +
                    "1. -i 在光标前面转为输入模式\n" +
                    "\n" +
                    "2. -a 在光标后面转为输入模式\n" +
                    "\n" +
                    "## 关闭文件\n" +
                    "\n" +
                    "编辑模式下保存退出\n" +
                    "\n" +
                    "1. ZZ：保存退出\n" +
                    "2. :wq :保存退出\n" +
                    "3. q 未修改文件退出\n" +
                    "4. q！强制退出\n" +
                    "\n" +
                    "## 移动光标\n" +
                    "\n" +
                    "​\t1. 逐字符移动\n" +
                    "\n" +
                    "​\t\th(左)j（下）k（上）l（右）\n" +
                    "\n" +
                    "​\t2. 单词移动\n" +
                    "\n" +
                    "​\t\tw移动到单词词首\n" +
                    "\n" +
                    "​\t\te跳至当前或下一个单词词尾\n" +
                    "\n" +
                    "​\t\tb跳至当前或下一个单词词首\n" +
                    "\n" +
                    "​\t\t可以跟数字组合\n" +
                    "\n" +
                    "​\t3. 行内跳转\n" +
                    "\n" +
                    "​\t\t0跳到行首\n" +
                    "\n" +
                    "​\t\t^行首的第一个非空白字符\n" +
                    "\n" +
                    "​\t\t$绝对行尾\n" +
                    "\n" +
                    "​\t4. 行间跳转\n" +
                    "\n" +
                    "​\t\t\\#转跳至第#行\n" +
                    "\n" +
                    "​\t\tG最后一行\n" +
                    "\n" +
                    "​\t\t末行模式下 直接按行号\n" +
                    "\n" +
                    "​\t5. 翻屏（编辑模式）\n" +
                    "\n" +
                    "​\t\tCtrl +f ：向下翻一屏\n" +
                    "\n" +
                    "​\t\tCtrl +b ：向上翻一屏\n" +
                    "\n" +
                    "​\t\tCtrl +d：向下翻半屏\n" +
                    "\n" +
                    "​\t\tCtrl +u 向上翻半屏\n" +
                    "\n" +
                    "​\t6. 删除单个字符\n" +
                    "\n" +
                    "​\t\tx：删除光标所在处单个字符\n" +
                    "\n" +
                    "​\t\t\\#：x 往后#个\n" +
                    "\n" +
                    "​\t\td:跟跳转命令配合使用\n" +
                    "\n" +
                    "​\t\tdd ：删除当前光标所在行\n" +
                    "\n" +
                    "​\t\t#dd\n" +
                    "\n" +
                    "## 末行模式下：\n" +
                    "\n" +
                    "sratadd，endaddd\n" +
                    "\n" +
                    "​\t.:当前行\n" +
                    "\n" +
                    "​\t$最后\n" +
                    "\n" +
                    "​\t+#向下的#行·\n" +
                    "\n" +
                    "​\t\n" +
                    "\n" +
                    "7粘贴命令\n" +
                    "\n" +
                    "p 下方\n" +
                    "\n" +
                    "P 上方\n" +
                    "\n" +
                    "8复制命令\n" +
                    "\n" +
                    "​       用法同d\n" +
                    "\n" +
                    "9修改\n" +
                    "\n" +
                    "​\tc\n" +
                    "\n" +
                    "10撤销\n" +
                    "\n" +
                    "​\tu\n" +
                    "\n" +
                    "​\t#u\n" +
                    "\n" +
                    "​\tCtrl +r\n" +
                    "\n" +
                    "## vim设置\n" +
                    "\n" +
                    "显示行号\n" +
                    "\n" +
                    ":set nu(number)\n" +
                    "\n" +
                    "显示忽略大小写:set ic\n" +
                    "\n" +
                    "自动缩进 set autoindent(ai)\n" +
                    "\n" +
                    "查找到的文本高亮 set hlsearch\n" +
                    "\n" +
                    "设置tab set ts=4\n" +
                    "\n" +
                    "语法着色 :syntax on 关闭:systax off"
            }
        }
    }
</script>


