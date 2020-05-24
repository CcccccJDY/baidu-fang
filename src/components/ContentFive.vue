<template>
    <div class="contentfive">
      <div class="content">
        <div class="top">
          <h2>用伙伴的力量让企业上云更简单</h2>
          <h3>云市场联合第三方服务商，满足你业务的全方位需求</h3>
        </div>
        <ul>
          <li style="border-right: solid 1px #ececec;">
            <div class="changimg">
              <img src="../assets/ContentFiveImg/cloudMarket-icons-1x_ad5bd77a.png" alt="">
            </div>
            <div class="right">
              <span>镜像环境</span>
              <ul>
                <li>基础服务</li>
                <li>服务框架</li>
                <li>集成应用</li>
                <li>业务管理</li>
                <li>数据库</li>
              </ul>
            </div>
          </li>
          <li>
            <div style="position: relative" class="changimg">
              <img style="position: absolute; top: -47px;" src="../assets/ContentFiveImg/cloudMarket-icons-1x_ad5bd77a.png" alt="">
            </div>
            <div class="right">
              <span>建站推广</span>
              <ul>
                <li>速成建站</li>
                <li>定制建站</li>
                <li>源码模版</li>
                <li>移动应用</li>
                <li>系统开发</li>
                <li>建站主机</li>
              </ul>
            </div>
          </li>
          <li style="border-right: solid 1px #ececec; padding-top: 50px; border-top: solid 1px #ececec;">
            <div class="changimg" style="position: relative">
              <img style="position:absolute;top: -94px;" src="../assets/ContentFiveImg/cloudMarket-icons-1x_ad5bd77a.png" alt="">
            </div>
            <div class="right">
              <span>上云服务</span>
              <ul>
                <li>环境部署</li>
                <li>数据迁移</li>
                <li>代维服务</li>
                <li>故障排查</li>
                <li>上云咨询</li>
                <li>系统优化</li>
              </ul>
            </div>
          </li>
          <li style="border-top: solid 1px #ececec; padding-top: 50px;">
            <div class="changimg" style="position: relative">
              <img style="position:absolute; top: -142px;" src="../assets/ContentFiveImg/cloudMarket-icons-1x_ad5bd77a.png" alt="">
            </div>
            <div class="right">
              <span>安全服务</span>
              <ul>
                <li>主机安全</li>
                <li>安全测试</li>
                <li>认证准入</li>
                <li>网络安全</li>
                <li>数据安全</li>
                <li>应用安全</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContentFive"
    }
</script>

<style scoped>
.content{
  width: 1180px;
  height: 450px;
  margin: 0 auto;
}
  .content .top{
    text-align: center;
  }
  .content .top h2{
    font-size: 24px;
    line-height: 40px;
    color: #333;
    margin-top: 100px;
    margin-bottom: 4px;
    font-weight: normal;
  }
  .content .top h3{
    font-size: 14px;
    color: #999;
    line-height: 26px;
    font-weight: normal;
  }
.content > ul{
  margin-top: 50px;
  overflow: hidden;

}
  .content > ul > li{
    overflow: hidden;
    width: 50%;
    height: 135px;
    float: left;
  }
.content > ul > li .changimg{
  margin-left: 35px;
  overflow: hidden;
  float: left;
  width: 48px;
  height: 48px;
}
.content > ul > li .right{
  float: left;
  margin-left: 30px;
}
  .content > ul > li .right span{
    font-size: 16px;
    line-height: 26px;
    color: #333;
    text-align: left;
  }
.content > ul > li .right ul{
  overflow: hidden;
  margin-left: -13px;
  width: 403px;
}
.content > ul > li .right ul li{
  width: 70px;
  text-align: center;
  display: inline-block;
  width: 80px;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  border-right: 1px solid #BFBFBF;
  margin-top: 10px;
  color: #666;
  float: left;
  cursor: pointer;
}
.content > ul > li .right ul li:last-child{
  border: none;
}
</style>
