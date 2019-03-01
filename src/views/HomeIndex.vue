<template>
    <div class="right-context">
        <h3>个人主页</h3>
        <div class="panel-body">
            <div class="alert alert-info alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                        aria-hidden="true">×</span></button>
                <h3>huanxi</h3><span>忙碌了一天，累了吧？发篇文章醒醒脑吧！</span>
            </div>
            <div class="dashboard-wrapper select-index">
                <div class="briefly">
                    <ul>
                        <li class="index">
                            <div class="visual"><i class="fa fa-tachometer"></i></div>
                            <div class="number">首页</div>
                            <div class="more"><a href="https://pjax.cn/">网站首页<i
                                    class="fa fa-arrow-circle-right"></i></a></div>
                        </li>
                        <li class="comment">
                            <div class="visual"><i class="fa fa-comments"></i></div>
                            <div class="number">评论</div>
                            <div class="more"><a href="?user&amp;comments">查看更多<i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </li>
                        <li class="credit">
                            <div class="visual"><i class="fa fa-cog"></i></div>
                            <div class="number">资料</div>
                            <div class="more"><a href="?user&amp;datas">个人资料<i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </li>
                        <li class="exit">
                            <div class="visual"><i class="fa fa-sign-in"></i></div>
                            <div class="number">退出</div>
                            <div class="more login_logout"><a href="#"  @click="modal_logout = true">退出帐号<i
                                    class="fa fa-arrow-circle-right"></i></a></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="dashboard-header"><p class="tip">我的作品：(提示：文章发布后不可修改，请谨慎操作。)</p></div>
            <div class="dashboard-wrapper select-works">
                <table class="widefat">
                    <thead>
                    <tr>
                        <th class="lenght" scope="col">标题</th>
                        <th scope="col">日期</th>
                        <th scope="col">操作</th>
                        <th scope="col">状态</th>
                    </tr>
                    </thead>
                </table>
                <div class="pagination">
                    <ul></ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeIndex",
        data() {
            return {
                modal_logout: false,
                loading: true
            }
        },
        methods: {
            asyncOK() {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>

<style scoped>
    .briefly ul li .number {
        float: right;
        margin: 15px;
        font-size: 30px;
        text-align: right;
    }

    .briefly ul {
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        display: block;
        font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 0;
        line-height: 24px;
        list-style-type: disc;
        margin: 0;
        padding: 0;
    }

    .briefly ul li .visual {
        float: left;
        font-size: 40px;
        margin: 5px 15px;
    }

    .briefly ul li .more {
        clear: both;
        font-size: 15px;
    }

    .briefly ul li .more a {
        display: block;
        color: rgba(255, 255, 255, .85);
        background-color: rgba(0, 0, 0, .15);
        padding: 5px 15px;
    }

    .briefly ul li {
        width: 23.8%;
        float: left;
        margin-left: 1.35%;
        background-color: #0bacd3;
        color: #FFF;
        box-sizing: border-box;
        list-style: none;
    }

    .briefly ul li .more i {
        float: right;
        margin-top: 4px;
    }

    .briefly ul li .more a:hover {
        background-color: rgba(0, 0, 0, .25);
    }

    .briefly .comment {
        background-color: #ea4c89;
    }

    .briefly .credit {
        background-color: #ffb848;
    }

    .briefly .exit {
        background-color: gray;
    }

    .briefly .index {
        margin-left: 0;
    }
</style>
