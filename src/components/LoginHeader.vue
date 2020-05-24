<template>
  <div class="loginheader">
      <div class="header">
        <div class="container">
          <a href="">
            <img src="https://login.bce.baidu.com/img/2x/logo_white_v2.png" alt="">
          </a>
          <div class="right">
            <a href="#/">返回首页</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
   .header .container .right a{
    color: #fff;
  }
   .header .container .right{
    font-size: 14px;

    margin-top: 18px;
    float: right;
  }
   .header .container > a img{
    display: block;
    width: 122px;
    height:26px;
    margin-top: 17px;
  }
  .header .container > a{
    float: left;
  }
   .header .container{
    overflow: hidden;
    width: 980px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
  }
   .header{
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
</style>
