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
                    <Menu active-name="1" @on-select="menu_click">
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
                <Modal
                        v-model="modal_logout"
                        title="提示"
                        :loading="loading"
                        @on-ok="asyncOK">
                    <p>是否确定退出？</p>
                </Modal>
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
    import axios from "../axios"

    export default {
        name: 'home',
        components: {
            MyFooter,
            MyHeader
        },
        data() {
            return {
                modal_logout: false,
                loading: true
            }
        },
        methods: {
            menu_click(name) {
                if (name == 6)
                    this.modal_logout = true;
            },
            asyncOK() {
                this.$router.push('/')
                axios.get('/api/user/logout').then(res => {
                    if (res.status == 1) {
                        this.$Message.success("退出成功！")
                        setTimeout(() => {
                            this.modal6 = false;
                        }, 2000);
                    }else
                        this.$Message.error("退出失败");
                })

            }
        }
    }
</script>
