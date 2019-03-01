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
            <h1>论坛用户注册</h1>
            <div class="input">
                昵称：<Input v-model="user.nikname" prefix="md-contact" placeholder="请输入昵称" style="width: 360px"/>
            </div>
            <div class="input">
                邮箱：<Input v-model="user.email" type="email" prefix="md-mail" placeholder="请输入邮箱" style="width: 360px"/>
            </div>
            <div class="input">
                性别：
                <RadioGroup v-model="user.sex">
                    <Radio label="M">
                        <Icon type="md-male" style="color: #5cadff"/>
                        <span>男</span>
                    </Radio>
                    <Radio label="F">
                        <Icon type="md-female" style="color: deeppink"/>
                        <span>女</span>
                    </Radio>
                </RadioGroup>
            </div>
            <div class="input">
                专业：
                <Select v-model="user.major" style="width:90%">
                    <Option v-for="item in majorList" :key="item.key" :value="item.key">{{item.value}}</Option>
                </Select>
            </div>
            <div class="input">
                密码：<Input type="password" v-model="user.password" placeholder="请输入密码" style="width: 360px"/>
            </div>
            <div class="input">
                确定密码：<Input type="password" v-model="user.rePassword" placeholder="请再次输入密码" style="width: 338px"/>
            </div>
            <div class="input">
                <a href="/login">已有账号？ 去登入</a>
            </div>
            <Button type="success" @click="register" long>立即注册
            </Button>
        </div>
    </div>
</template>
<script>
    import axios from '../axios'

    export default {
        data() {
            return {
                majorList: [],
                user: {sex: 'M', major: '1'},
            };
        },
        created() {
            axios.get('/api/user/major').then(res => {
                this.majorList = res.msg
            });
        },
        methods: {
            doRegister(isTrue, mes) {
                if (isTrue)
                    this.$Message.error(mes);
                return isTrue;
            },
            register() {
                let user = this.user
                if (this.doRegister(user.password != user.rePassword, '两次输入的密码不一样'))
                    return
                axios.post("/api/user/register", {
                    nikname: user.nikname,
                    password: user.password,
                    email: user.email,
                    sex: user.sex,
                    major: user.major
                }).then(res => {
                    if (res.status == 1) {
                        //注册成功
                        this.$Message.success(res.msg)
                        this.$router.push("/login")
                    } else
                        this.$Message.error(res.msg);
                })
            }
        }
    }
</script>
