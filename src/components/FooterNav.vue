<template>
    <div class="footernav">
      <div class="content">
        <div>
          <dl>
            <dt>公告</dt>
            <dd>
              <ul>
                <li>[2019-03-27] 4月1日MCT商业化收费通知</li>
                <li>[2019-01-23] 百度云财务系统升级暂停开具发票通知</li>
                <li>[2019-01-03] 《百度云用户服务协议》 百度云财务系统升级暂停开具发票通知</li>
                <li>[2018-12-14]  百度云产品服务等级协议（SLA）更新通知</li>
                <li>[2018-12-14]  工信部备案系统升级</li>
                <li>[2018-11-21]  关于开展2018年全国网站备案信息抽查评估的通知</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>帮助文档</dt>
            <dd>
              <ul>
                <li>产品定价</li>
                <li>备案帮助</li>
                <li>入门指南</li>
                <li>产品文档</li>
                <li>开发者资源</li>
                <li>财务相关</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>热门产品</dt>
            <dd>
              <ul>
                <li>云服务器BCC</li>
                <li>对象存储BOS</li>
                <li>云磁盘CDS</li>
                <li>云虚拟主机BCH</li>
                <li>内容分发网络CDN</li>
                <li>应用引擎BAE</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>联系我们</dt>
            <dd>
              <ul>
                <li>工单</li>
                <li>客服电话（4008-777-818）</li>
                <li>售前电话（4008-777-818转1）</li>
                <li>备案帮助（4008-777-818转3）</li>
                <li>商务合作</li>
                <li>违规投诉</li>
              </ul>
            </dd>
          </dl>
        </div>
        <div>
          <h3>4008-777-818转1</h3>
          <span>24小时售前咨询</span>
          <div>
            <div class="wechat">
              <img src="../assets/ContentFiveImg/4389cf4ccfc80623577fd4225455381.jpg" alt="">
            </div>
            <div class="app">
              <img src="../assets/ContentFiveImg/4389cf4ccfc80623577fd4225455381.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="footOne">
          <span>友情链接:</span>
          <ul>
            <li>百度AI市场</li>
            <li>站长工具平台</li>
            <li>百度安全</li>
            <li>百度联盟</li>
            <li>开发者中心</li>
            <li>百度众测</li>
            <li>百度ssp媒体服务</li>
            <li>百度云加速</li>
            <li>百度大脑</li>
            <li>百度统计</li>
            <li>百度地图慧眼</li>
          </ul>
        </div>
        <div class="footTwo">
          <span>© 2019 Baidu</span>
          <ul>
            <li>
              使用百度前必读
            </li>
            <li>
              增值电信业务经营许可证：B1.B2-20100266
            </li>
            <li>
              京ICP证030173号
            </li>
            <li>隐私政策</li>
          </ul><br>
          <div class="footThree">
            <img src="../assets/ContentFiveImg/gongan_25e86e61.png" alt="">
            <span>京公网安备11000002000001号</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FooterNav"
    }
</script>

<style scoped>
  .footernav{
    background: #232526;
    height: 446px;
  }
  .content{
    padding-top: 40px;
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }
  .content > div:first-child{
    float: left;
  }
  .content > div dl{
    display: inline-block;
  }
  .content > div dl dt{
    margin-bottom: 20px;
    color: #FFF;
  }
  .content > div dl dd{
    font-size: 12px;
    line-height: 24px;
  }
  .content > div dl dd ul li{
    width: 360px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a6a7aa;
  }
  .content > div:nth-child(2){
    float: left;
  }
  .content > div:nth-child(2) dl dd ul li{
    width: auto;
  }
  .content > div:nth-child(2) dl{
    margin-left: 70px;
  }
  .content > div:last-child{
    float: right;
  }
  .content > div:last-child h3{
    font-size: 20px;
    color: #FFFFFF;
    line-height: 30px;
  }
  .content > div:last-child > span{
    font-size: 12px;
    color: #999999;
    line-height: 24px;
  }
  .content > div:last-child > div{
    margin-top: 55px;
  }
  .content > div:last-child > div > div{
    display: inline-block;
  }
  .content > div:last-child > div .wechat{
    background-image: url("../assets/ContentFiveImg/wechat_61742d40.png");
    cursor: pointer;
    margin-right: 16px;
    background-size: 42px 42px;
    width: 42px;
    height: 42px;
  }
  .content > div:last-child > div .app{
    background-image: url("../assets/ContentFiveImg/appstore_2795a634.png");
    cursor: pointer;
    margin-right: 16px;
    background-size: 42px 42px;
    width: 42px;
    height: 42px;
  }
  .content > div:last-child > div .app:hover img{
    display: block;
  }
  .content > div:last-child > div .wechat:hover img{
    display: block;
  }
  .content > div:last-child > div .wechat,.app{
    position: relative;
  }
  .content > div:last-child > div .wechat img {
    position: absolute;
    width: 100px;
    height: 100px;
    top: -114px;
    left: -30px;
    display: none;
  }
  .content > div:last-child > div .app img{
    position: absolute;
    width: 100px;
    height: 100px;
    top: -114px;
    left: -30px;
    display: none;
  }
  .foot{
    width: 1180px;
    margin: 0 auto;
  }
  .foot .footOne{
    margin-top: 30px;
    font-size: 12px;
    overflow: hidden;
    padding: 25px 0;
    border-top: 1px solid #656973;
    border-bottom: 1px solid #656973;
  }
  .foot .footOne span{
    cursor: pointer;
    float: left;
    color: white;
    margin-right: 20px;
    border-bottom: solid 1px rgba(153, 153, 153, 0);
  }
  .foot .footOne span:hover{
    border-bottom: solid 1px #999;
  }
  .foot .footOne ul{
    float: left;
  }
  .foot .footOne ul li{
    cursor: pointer;
    display: inline-block;
    color: #a6a7aa;
    margin-right: 41px;
    border-bottom: solid 1px rgba(101, 105, 115, 0);
  }
  .foot .footOne ul li:hover{
    border-bottom: solid 1px #656973;
  }
  .foot .footOne ul li:last-child{
    margin: 0;
  }
  .foot .footTwo{
    width: 100%;
    overflow: hidden;
    color: #d6d6d6;
    font-size: 12px;
    padding-left: 300px;
    margin-top: 30px;
  }
  .foot .footTwo > span{
    float: left;
  }
  .foot .footTwo ul{
    float: left;
  }
  .foot .footTwo ul li{
    display: inline-block;
    margin-left: 10px;
  }
  .foot .footThree{
    margin-top: 25px;
    width: 100%;
    padding-left: 211px;
    overflow: hidden;
  }
  .foot .footThree img{
    float: left;
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }

</style>
