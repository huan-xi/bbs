<style scoped lang="less">
    .register {
        display: flex;
        justify-content: center;
    }

    .from {
        padding: 50px;
        margin-top: 100px;
        width: 500px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: stretch;
        background-color: rgba(255, 255, 255, 0.6);
    }

    body {
        background-color: blue;
    }

    .input {
        margin-top: 20px;
    }

    .from button {
        margin-top: 50px;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("../assets/bg.jpg");
        z-index: -1;
    }
</style>
<template>
    <div class="register">
        <div class="bg"></div>
        <div class="from">
            <h1>论坛用户登入</h1>
            <div class="input">
                邮箱：<Input type="email" v-model="user.email" prefix="md-mail" placeholder="请输入邮箱" style="width: 360px"/>
            </div>
            <div class="input">
                密码：<Input v-model="user.password" type="password" prefix="md-create" placeholder="请输入密码"
                          style="width: 360px"/>
            </div>
            <div class="input">
                <a href="/register">没有账号？ 去注册</a>
            </div>
            <Button type="success" @click="login" long>立即登入
            </Button>
        </div>
    </div>
</template>
<script>
    import axios from '../axios'

    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            login() {
                if (!this.user.email) {
                    this.$Message.error("请输入邮箱")
                    return
                }
                if (!this.user.password) {
                    this.$Message.error("请输入密码")
                    return
                }
                axios.post("/api/user/login", {
                    email: this.user.email,
                    password: this.user.password
                }).then(res => {
                    if (res.status) {
                        this.$Message.success(res.msg)
                        axios.get("/api/user").then(res => {
                            //全局user
                        });
                        this.$router.push("/home")
                    } else {
                        this.$Message.error(res.msg);
                    }
                });
            }
        }
    }
</script>
