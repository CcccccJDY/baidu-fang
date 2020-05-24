<template>
        <div class="zhucepage">
          <div class="brand">
            <LoginHeader></LoginHeader>
            <h2>欢迎注册百度智能云账号</h2>
            <h3>准备开启您的云计划之旅</h3>
          </div>
          <div class="reg">
            <p>
              已有百度推广账号、百度帐号？
              <a href="#/login">立即登陆</a>
            </p>
            <div class="reg-form">
              <form ref="tform" class="form">
                <input ref="username" type="text" placeholder="用户名"><br>
                <input ref="userpass" type="password"  placeholder="密码"><br>
                <input ref="passwordagain" type="password" placeholder="确认密码"><br>
                <button type="submit" @click.prevent="zuche">注册</button>
              </form>
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
        zuche(){
          // console.log()
          let username = this.$refs.username.value;
          let password = this.$refs.userpass.value;
          let passwordagain = this.$refs.passwordagain.value;
          if (password !== passwordagain) {
            alert('两次密码不一致，请重新输入')
          }else {
            let data = {
              username,
              password
            }
            //发送注册请求
            this.$axios.post('/api/zhuce',data).then((value) => {
              if (value.data.error === 1){
                alert(value.data.msg)
                this.$refs.tform.reset();
              }else {
                alert(value.data.msg)
                location.href = '#/login'
              }
            }).catch((err) => {
              console.log(err)
            })
          }


        }
      }
    }
</script>

<style scoped>
  .reg .form button{
    color: #fff;
    width: 416px;
    height: 42px;
    background-color: #288aed;
    border: none;
    font-size: 16px;
  }
  .reg .form input{
    margin: 20px 0;
    height: 38px;
    width: 402px;
    padding-left: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
  }
  .reg .reg-form{
    width: 417px;
    margin: 0 auto;
  }
  .reg > p a{
    color: #108CEE;
  }
  .reg > p{
    text-align: right;
    color: #666;
    width: 417px;
    margin: 0 auto;
    font-size: 14px;
  }
  .reg{
    position: relative;
    z-index: 2000;
    width: 835px;
    font-size: 14px;
    margin: 0 auto;
    top: -48px;
    padding: 45px 20px 20px;
    background: #fff;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.09);
    border: 2px solid #ebeff7;
  }
  .brand h3{
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    opacity: 0.6;
    margin: 10px 0;
  }
  .brand h2{
    text-align: center;
    color: #fff;
    font-size: 32px;
    font-weight: normal;
  }
.brand{
  height: 337px;
  width: 100%;
  background-image: url("https://cdn.bdstatic.com/login/bg-1920x1080.png@q_90");
  padding-top: 124px;
}
</style>
