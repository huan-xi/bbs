<template>
  <div class="right-context">
    <h3>资料修改</h3>
    <div class="panel-body">
      <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
        </button>
        <span>请如实填写资料信息，我们承诺不会泄露任何关于您的资料!</span>
      </div>
      <form class="form-horizontal">
        <div class="form-group header-img-box">
          <label class="col-xs-7 control-label">
            <div class="header-img">
              <img src="../assets/avatar.png">
              <div class="uoverlay">
                <div class="uexpand">更换头像</div>
              </div>
            </div>
          </label>
        </div>
        <div class="form-group account">
          <label class="col-xs-3 control-label">登录账号</label>
          <div class="col-xs-8">
            <input type="text" name="username" id="username" value="huanxi" class="form-control" disabled="disabled">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">个人主页</label>
          <div class="col-xs-8">
            <input type="text" value="https://pjax.cn/author/42" class="form-control"
                   disabled="disabled">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">我的昵称</label>
          <div class="col-xs-8">
            <input type="text" name="name" id="name" value="" class="form-control form-xg">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">邮箱号码</label>
          <div class="col-xs-8">
            <input type="email" name="email" id="email" value="1355473748@qq.com" class="form-control form-xg"
                   disabled="disabled">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">QQ 号码</label>
          <div class="col-xs-8">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="hide-ps">
          <div class="form-group">
            <label class="col-xs-3 control-label">新的密码</label>
            <div class="col-xs-8">
              <input type="password" name="newpass" id="newpass" value="" class="bg-focus form-control">
              <div class="line line-dashed m-t-large"></div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-xs-3 control-label">确认密码</label>
            <div class="col-xs-8">
              <input type="password" name="repeatpass" id="repeatpass" value="" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">我的性别</label>
          <div class="col-xs-4">
            <div class="radio i-checks sex">
              <label><input type="radio" value="1" name="sex" class="mgr mgr-info" checked="checked"><i
                class="fa fa-mars"></i> 小哥哥</label>
              <label><input type="radio" value="2" name="sex" class="mgr mgr-info"><i class="fa fa-venus"></i>
                小姐姐</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-3 control-label">我的简介</label>
          <div class="col-xs-8">
            <textarea placeholder="" rows="2" cols="30" class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-7 control-label">
            <button class="btn btn-success">立即提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-img {
    box-shadow: none;
    width: 160px;
    height: 160px;
    padding: 5px;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 100%;
    margin-left: 70%;
    position: relative;
    z-index: 2;
  }
.account{
  height: 37px;
}
  .fa-mars {
    color: deepskyblue;
  }

  .fa-venus {
    color: deeppink;
  }
  .header-img-box {
    height: 180px;
  }

  .form-horizontal .form-group {
    margin-left: -55px;
    margin-bottom: 10px;
  }

  .form-horizontal {
    margin: 0;
    padding: 0;

  }

  .header-img img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }

  .header-img .uoverlay {
    display: block;
    position: absolute;
    z-index: 20;
    background: rgba(0, 0, 0, .4);
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 5px 1px #ddd;
  }

  .uexpand {
    position: absolute;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    text-align: center;
    color: rgba(255, 255, 255, .9);
    line-height: 60px;
    font-size: 19px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .header-img:hover .uoverlay {
    opacity: 1
  }

  .header-img:hover .uoverlay div.uexpand{
    width: 80px;
    height: 50px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px
  }
</style>
<script>
  export default {
    name: 'updateInfo',
    data() {
      return {
        msg: 'this is my index page'
      }
    }
  }
</script>


