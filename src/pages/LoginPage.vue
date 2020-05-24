<template>
        <div class="loginpage">
          <div class="main">
            <LoginHeader></LoginHeader>
            <div class="root">
              <table>
                <tr>
                  <td id="brand">
                    <img src="https://login.bce.baidu.com/img/2019-04-28-2x.png" alt="">
                  </td>
                  <td style="width: 373px;">
                    <div id="login">
                      <h4>百度账号</h4>
                      <form ref="lform"  action="">
                        <input ref="username"  type="text" name="username" placeholder="手机/邮箱/用户名称"><br>
                        <input ref="password" type="password" name="password"  placeholder="密码">
                        <button type="submit" @click.prevent="login">登陆</button>
                      </form>
                      <div class="zhuce">
                        <div>
                          <a href="#/zhuce">立即注册</a>
                          <a href="">忘记密码</a>
                        </div>
                      </div>
                      <div class="tishi">
                        <h5>温馨提示:</h5>
                        <p>与百度搜索、百度贴吧、百度云盘、百度知道、百度文库等产品通用。</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
</template>

<script>
  import LoginHeader from '../components/LoginHeader'
    export default {
      components:{
        LoginHeader
      },
      methods:{
        login(){
          let username = this.$refs.username.value;
          let password = this.$refs.password.value;
          let data = {
              username:username,
              password:password
          }
          this.$axios.post('/api/login',data).then((val) => {
           console.log(val)
            if (val.data.error == 0){
              alert(val.data.msg)
              location.href = '#/'
            } else {
              alert(val.data.msg)
              this.$refs.lform.reset();
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped>
  #login .tishi p{
    padding-top: 10px;
    font-size: 12px;
    color: #333;
    line-height: 20px;
    font-family: Arial, "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  #login .tishi{
    margin-top: 20px;
  }
  #login .zhuce div a:hover{
    text-decoration: underline;
  }
  #login .zhuce div a{
    line-height: 45px;
    font-size: 12px;
    color: #2e7ecd;
    cursor: pointer;
    margin-left: 10px;
  }
  #login .zhuce div{
    float: right;
  }
  #login .zhuce{
    overflow: hidden;
    border-bottom: solid 1px rgba(153, 153, 153, 0.25);
  }
  #login button{
    background: #108cee;
    border: none;
    margin-top: 0;
    font-size: 14px;
    color: #fff;
    width: 300px;
    height: 35px;
    cursor: pointer;
  }
  #login input{
    width: 298px;
    height: 38px;
    padding: 4px 9px;
    margin-bottom: 20px;
    border: solid 1px #999;
  }
  #login h4{
    margin-bottom: 20px;
    text-align: center;
    font-weight: normal;
  }
  #login{
    margin: 0 auto;
    box-shadow: none;
    width: 300px;
  }
  #brand img{
    display: inline-block;
    width: 410px;
  }
  #brand{
    vertical-align: middle;
    text-align: center;
    width: 472px;
    height: 420px;
    border-right: 2px solid #ececec;
  }
  .main .root{
    width: 847px;
    height: 420px;
    margin: 0 auto;
    position: relative;
    top: 180px;
    background: #fff;
  }
  .main .header .container .right a{
    color: #fff;
  }
  .main .header .container .right{
    font-size: 14px;

    margin-top: 18px;
    float: right;
  }
  .main .header .container > a img{
    display: block;
    width: 122px;
    height:26px;
    margin-top: 17px;
  }
  .main .header .container > a{
    float: left;
  }
  .main .header .container{
    overflow: hidden;
    width: 980px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .main .header{
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(23, 23, 23, .35);
    background-color: rgb(23, 23, 23) \9;
    z-index: 1000;
  }
  .main{
    height: 800px;
    background-image: url("https://cdn.bdstatic.com/login/bg-1920x1080.png@q_90");
    background-size: 100% 100%;
  }
</style>
