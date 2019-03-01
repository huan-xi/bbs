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
                    <li class="active"><a href="/"><i class="fa fa-home"></i> 首页<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="line"></li>
                    <li><a href="#/blogPage"><i class="fa fa-pencil-square-o"></i> 博客浏览</a></li>
                    <li class="line"></li>
                    <li><a href="#"><i class="fa fa-pie-chart"></i> 团队成员</a></li>
                    <li class="line"></li>
                    <li>
                        <a href="#/about"><i class="fa fa-exclamation-circle"></i> 关于我们</a></li>
                    <li class="line"></li>
                    <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"><i
                                class="fa fa-flask"></i> 更多功能 <span class="fa fa-angle-down"></span> </a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="fa fa-comment"></i> 留言互动</a></li>
                            <li><a href="#"><i class="fa fa-exclamation-circle"></i> 联系我们</a></li>
                        </ul>
                    </li>
                    <li class="right-ioc"><a href="/login"><i class="fa fa-user-circle"></i></a></li>
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

    .navbar-nav li:hover .fa-angle-down {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .navbar-nav > .dropdown:hover > .dropdown-menu {
        opacity: 1;
    }

    .navbar-nav .fa-angle-down {
        -webkit-transition: all .25s;
        -moz-transition: all .25s;
        -ms-transition: all .25s;
        -o-transition: all .25s;
        transition: all .25s
    }

    .dropdown .dropdown-menu {
        display: inline-block;
        min-width: 0;
        opacity: 0;
        z-index: 1000;
        border-radius: 5px;
        -webkit-transition: all .8s;
        -moz-transition: all .8s;
        -o-transition: all .8s;
        transition: all .8s;
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



