<template>
    <div class="contentsix">
      <div class="content">
        <div class="top">
          <h3>更可靠的数据支持</h3>
          <p>高安全，高可靠的数据支持。全范围保障您的业务实践</p>
        </div>
        <ul>
          <li>
            <div class="changimg">
              <img src="../assets/ContentFiveImg/data-icons-1x_b00473d9.png" alt="">
            </div>
            <div class="right">
              <span>3,567,892,881</span>
              <p>抵御攻击</p>
            </div>
          </li>
          <li style="margin-left: 113px;">
            <div class="changimg" style="position: relative">
              <img style="position: absolute; top: -25px;" src="../assets/ContentFiveImg/data-icons-1x_b00473d9.png" alt="">
            </div>
            <div class="right">
              <span>99.999999999%</span>
              <p>数据可靠性</p>
            </div>
          </li>
          <li style="margin-left: 136px;">
            <div class="changimg" style="position: relative">
              <img style="position: absolute; top: -48px;" src="../assets/ContentFiveImg/data-icons-1x_b00473d9.png" alt="">
            </div>
            <div class="right">
              <span>7x24</span>
              <p>客户服务支持</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContentSix"
    }
</script>

<style scoped>
.contentsix{
  width: 100%;
  height: 523px;
  background-image: url("../assets/ContentFiveImg/data_bg_32468a36.png");
  background-size: 100% 523px;
}
  .content{
    width: 1180px;
    margin: 0 auto;
    padding-top: 60px;
  }
  .content .top{
    text-align: center;

  }
.content .top h3{
  color: #FFF;
  font-size: 24px;
  line-height: 33px;
  font-weight: normal;

}
  .content .top p{
    color: #FFF;
    font-size: 14px;
    line-height: 26px;
    margin-top: 10px;
    opacity: .6;

  }
  ul{
    overflow: hidden;
    margin-top: 68px;
  }
  ul li{
    padding-top: 5px;
    overflow: hidden;
    float: left;
  }
ul li .changimg{
  margin-top: 5px;
  float: left;
  width: 24px;
  height:24px;
  overflow: hidden;
}
  ul li .right{
    float: left;
    margin-left: 20px;
  }
  ul li .right span{

    color: #FFF;
    font-size: 40px;
    line-height: 26px;
  }
  ul li .right p{
    font-size: 14px;
    color: #FFF;
    line-height: 26px;
    margin-top: 10px;
  }
</style>
