<template>
    <div class="contentthree">
      <div class="content">
        <div class="top">
          <h2>丰富可靠的智能化云产品</h2>
          <h3>高效稳定的智能云产品服务，为您提供高性价比上云服务</h3>
        </div>
        <ul>
          <li>
            <div>
              <span>促销产品</span>
              <span>PROMOTE PRODUCT</span>
            </div>
            <ul>
              <li>对象存储 BOS</li>
              <li>音视频直播 LSS</li>
              <li>内容分发网络 CDN</li>
              <li>音视频点播 VOD</li>
            </ul>
            <span>查看详情...</span>
          </li>
          <li class="sep">
            <div>
              <span>新产品</span><span style="letter-spacing: 6px;">NEW PRODUCT</span>
            </div>
            <ul>
              <li >
                <div>
                  <span>GPU 服务器</span>
                  <span>配备独享GPU的高性能云计算服务</span>
                  <span>GPU类型云服务正式上线</span>
                </div>
                <span class="btn">查看详情</span>
                <div class="xian"></div>
              </li>
              <li>
                <div>
                  <span>云数据库 DRDS</span>
                  <span>基于百度自研中间件的分布式关系型数据库服务</span>
                  <span>兼容 MySQL 协议，满足 TB 级海量数据存储</span>
                </div>
                <span class="btn">查看详情</span>
                <div class="xian"></div>
              </li>
              <li>
                <div>
                  <span>智能云解析服务</span>
                  <span>稳定、高效、安全灵活的权威DNS解析及流量调度服务</span>
                  <span>自研高性能DNS系统和IP调度技术</span>
                </div>
                <span class="btn">查看详情</span>
                <div class="xian"></div>
              </li>
              <li>
                <div>
                  <span>容器引擎 CCE</span>
                  <span>弹性高可用的容器集群管理平台</span>
                  <span>容器引擎免费，集群消耗的其他资源单独计费</span>
                </div>
                <span class="btn">查看详情</span>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <span>促销产品</span>
              <span>PROMOTE PRODUCT</span>
            </div>
            <ul>
              <li>对象存储 BOS</li>
              <li>音视频直播 LSS</li>
              <li>内容分发网络 CDN</li>
              <li>音视频点播 VOD</li>
            </ul>
            <span>查看详情...</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContentThree"
    }
</script>

<style scoped>
  .contentthree{
    background-color: #F3F3F3;
    padding-top: 100px;
    height: 877px;
  }
.content{
  width: 1180px;
  margin: 0 auto;
  padding-bottom: 30px;

}
  .top h2{
    font-size: 24px;
    line-height: 40px;
    color: #333;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    font-weight: normal;
  }
  .top h3{
    font-size: 14px;
    line-height: 26px;
    color: #999;
    font-weight: normal;
    text-align: center;
  }
  .content > ul{
    overflow: hidden;
    padding-top: 100px;
    margin-top: 50px;
  }
  .content > ul > li{
    width: 300px;
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    float: left;
  }
  .content > ul > li:nth-child(2){
    width: 580px;
    height: 572px;
    position: relative;
    top: -100px;
    padding-top: 0;
    box-shadow: 0 0 20px #999;
  }
  .content > ul > li:nth-child(2) > div{
    color: #FFF;
    font-size: 19px;
    background-color: #1e1e28;
    padding-left: 40px;
    width:100%;
    display: inline-block;
    padding-bottom: 0;

  }
  .content > ul > li:nth-child(2) > div span{
    display: inline !important;
    margin-right: 30px;
    line-height: 100px;
  }
  .content ul li > div{
    border-bottom: solid 1px #30eee9;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .content ul .sep ul{
    width: 100%;
    margin: 0;
    height: 474px;
  }
  .content ul .sep ul li{
    margin-top: 0;
    overflow: hidden;
    padding: 0 20px;
    height: 25% !important;
    position: relative;
    padding-top: 17px;
  }
  .content ul .sep ul li > div span:last-child{
    color: red;
  }
  .content ul .sep ul li > div span:nth-child(2){
    color: #999;
  }
  .content ul .sep ul li:hover{
    background-color: #eeeeee;
  }
  .content ul .sep ul li > div{
    width: 70%;
    border: none;
    float: left;
    margin-left: 20px;

  }
  /**/
  .content ul .sep ul li > .btn{
    text-align: center;
    display: inline;
    margin: 0;
    float: right;
    width: 25%;
    border: solid 1px #999;
    line-height: 35px;
    margin-top: 25px;
    transition:0.2s;
  }
  .content ul .sep ul li > .btn:hover{
    background-color: #3995ff;
    border: solid 1px #3995ff;
    color: white;
  }
  .content ul .sep ul li .xian{
    width: 90%;
    border-bottom: solid 1px #eeeeee;
    margin: 0;
    padding: 0;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 30px;
  }
  .content ul .sep ul li > div span{
    font-size: 15px;
    color: #000;
    font-weight: normal;
    line-height: 26px;
  }
  .content ul .sep ul li > div span:first-child{
    margin: 0;
    }
  .content ul .sep ul li > div span:last-child{
    border: none;

  }
  .content ul li > div span:first-child{
    display: block;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .content ul li > div span:last-child{
    display: block;
    letter-spacing: 1px;
    font-size: 20px;
    color: #999;
    width: 100%;
  }
  .content ul li ul {
    width: 80%;
    margin: 0 auto;
  }
  .content ul li ul li{
    width: 100%;
    font-size: 15px;
    margin-top: 30px;
  }
  .content ul li > span{
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 15px;
    color: #999;
    cursor: pointer;
  }
</style>
