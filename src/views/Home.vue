<style>
    .ivu-menu {
        background: rgb(248, 248, 248);
    }

    .context {
        border: solid 1px rgba(168, 157, 162, 0.6);
        padding-top: 50px;
        border-radius: 10px;
        /*background: rgb(248, 248, 248);*/
        background: rgba(255, 255, 255, 0.5);
        min-height: 426px;
    }
</style>
<template>
    <div>
        <my-header/>
        <div class="container-fluid">
            <div class="row">
                <!--左侧导航-->
                <div class="col-md-3">
                    <Menu :theme="light" active-name="1">
                        <MenuGroup title="个人首页">
                            <MenuItem to="/home" name="1">
                                <i class="fa fa-tachometer icon"></i>
                                首页
                            </MenuItem>
                            <MenuItem to="/info" name="2">
                                <i class="fa fa-id-card-o icon"></i>资料修改
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="博客管理">
                            <MenuItem to="/public" name="3">
                                <i class="fa fa-pencil-square-o icon"></i>
                                发布文章
                            </MenuItem>
                            <MenuItem to="/blogs" name="4">
                                <i class="fa fa-gavel icon"></i>
                                文章管理
                            </MenuItem>
                            <MenuItem to="/commons" name="5">
                                <i class="fa fa-comments icon"></i>
                                评论管理
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="安全退出">
                            <MenuItem name="6">
                                <i class="fa fa-sign-in icon"></i>
                                安全退出
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                </div>
                <!--右侧内容-->
                <div class="col-md-9 context">
                    <router-view/>
                </div>
            </div>
        </div>
        <my-footer/>
    </div>
</template>

<script>
    import MyHeader from '../components/Header'
    import MyFooter from "../components/Footer"

    export default {
        name: 'home',
        components: {
            MyFooter,
            MyHeader
        },
        data() {
            return {}
        }
    }
</script>
