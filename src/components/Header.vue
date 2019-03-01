<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid sidebar-nav">
            <div class="navbar-header">
                <button type="button" id="navbar-toggle" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">LOGO</a>
            </div>
            <div class="navbar-form navbar-left">
                <Input search placeholder="搜索帖子"/>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="/"><i class="fa fa-home"></i> 首页<span
                            class="sr-only">(current)</span></a>
                    </li>
                    <li class="line"></li>
                    <li><a href="#/blogPage"><i class="fa fa-pencil-square-o"></i> 资料下载</a></li>
                    <li class="line"></li>
                    <li><a href="#"><i class="fa fa-pie-chart"></i> 新闻公告</a></li>
                    <li class="line"></li>
                    <li>
                        <a href="#/about"><i class="fa fa-exclamation-circle"></i> 关于我们</a>
                    </li>
                    <li class="line"></li>
                    <li>
                        <Button class="post" type="success">我要发帖</Button>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .line {
        margin: 18px 5px 5px;
        height: 15px;
        border-left: solid 1px #bad5ba;
    }

    .navbar {
        margin-bottom: 3px;
    }

    .post {
        margin: 10px;
    }

    @media screen and (max-width: 766px) {
        .line {
            display: none;
        }
    }

    @media screen and (max-width: 990px) {
        .right-ioc {
            display: none;
        }
    }

</style>
<script>
    export default {
        name: 'my-header',
        data() {
            return {
                msg: 'this is my header'
            }
        }
    }

</script>



