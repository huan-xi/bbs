<template>
    <div class="articleItem">
        <div class="item-box row">
            <div class="box-left col-xs-3">
                <a href="#">
                    <img class="center-block img-responsive"
                         src="https://ws1.sinaimg.cn/large/006tNbRwgy1fvimjvbffqj31hc0u07wh.jpg"/>
                </a>
            </div>
            <div class="box-right col-xs-9">
                <h2><a href="#">很久没更新了，来一发</a></h2>
                <p class="context-box">
                    seo优化最让人苦恼的问题，就是网站关键词优化了很久，但是迟迟没有效果，网站优化不到首页，网站的流量就会大大的减少，或者几乎没有，这个时候，你就要自测一下，自己是否掉进了SEO优化的误区大坑中。就让颓废SEO大家剖析一下。
                    ...
                </p>
                <div class="meta">
                    <div class="origin-author">
                        <a href="/users/"><span>石溪梅</span></a>
                    </div>
                    <i class="fa fa-eye"></i> 16
                    <i class="fa fa-comment"></i> 10
                    <span><i class="fa fa-heart"></i> 4</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .box-left {
        text-align: center;
        padding-top: 20px;
    }

    .item-box {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
    }

    .box-left img {
        height: 120px;
    }

    .articleItem {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        padding: 5px;
        border: 1px solid #eaeaea
    }

    .box-right {
        margin-top: 20px;
    }

    .box-right a {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        color: #969696;
        line-height: 1.5;
    }

    .box-right a:visited {
        color: #969696;
    }

    .box-right a:hover {
        text-decoration: underline !important;
    }

    .context-box {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 20px;
        color: #999;
    }

    .meta .origin-author {
        display: inline;
        margin-right: 10px;
    }

    .meta .origin-author a {
        font-size: 15px;
    }

    .meta {
        font-size: 15px;
        color: #969696;
    }
</style>
<script>
    export default {
        name: "BlogItem"
    }
</script>
