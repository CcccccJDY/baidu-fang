<template>
        <div class="solvepage">
          <div class="banner">
            <HeaderNav></HeaderNav>
            <div class="container">
              <h1>智能小程序解决方案</h1>
              <p>从小程序应用构建、应用托管到运营服务，百度智能云推出多维度的云服务解决方案，助力企业与开发者快速拥抱百度智能小程序千亿流量与AI能力加持红利</p>
            </div>
            <span class="btn">服务质询</span>
            <small>立即服务咨询，获取小程序用户专属大礼包</small>
          </div>
          <div class="introduce">
            <h1>方案介绍</h1>
            <p class="desc">百度智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托百度App和合作伙伴的千亿级全域开放流量，通过百度AI开放式赋能，精准连接用户，无需下载安装便可享受智慧超前的使用体验。百度云作为智能小程序的指定云服务平台，基于领先的云基础设施和技术能力，为广大企业和开发者提供多维度的小程序云服务方案。</p>
            <div class="items">
              <div class="item">
              <div class="icon">
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/icon5@2x_83f069c7.png" alt="">
              </div>
              <p>依托百度流量资源</p>
            </div>
              <div class="line"></div>
              <div class="item">
                <div class="icon">
                  <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/icon4@2x_775fcc8d.png" alt="">
                </div>
                <p>依托百度流量资源</p>
              </div>
              <div class="line"></div>
              <div class="item">
                <div class="icon">
                  <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/icon2@2x_137528d0.png" alt="">
                </div>
                <p>依托百度流量资源</p>
              </div>
            </div>
          </div>
          <div class="detail">
            <h1>快速、可视化构建企业小程序门户</h1>
            <p>无需技术门槛，助力传统企业快速占领后互联网时代宣传获客新入口</p>
            <div class="leftPanl"  :style="{marginTop:marTop}">
              <div class="innerPic">
                <transition name="showImg">
                  <img v-if="showImg" :src=imgInfo[ins] alt="">
                  <!--<img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/b-part2-1_9c3bac00.jpg" alt="">-->
                </transition>
              </div>
            </div>
            <div class="rightPanl">
              <div class="part1">
                <h2>多维度流量入口，助力企业实现海量用户触达</h2>
                <p>通过百度智能云企业智能门户家族的智能小程序产品，您可像设计 PPT 一样使用，功能强大的组件库和丰富模板库，即使无专业知识，也可轻松构建出精美、专业、自带流量的小程序版企业宣传门户！</p>
                <ul>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail1@2x_7a3fe91c.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail1@2x_4714a72e.png" alt="">
                    <h4>可视化拖拽式设计</h4>
                    <p>无需任何代码基础即可上手制作，拖拽增删版块及组件，5分钟搭建满意作品</p>
                  </li>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail2@2x_ca385b4b.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail2@2x_5ec40ec6.png" alt="">
                    <h4>预置丰富模版及组件</h4>
                    <p>分行业类别和应用场景预置有多款模版及组件样式，轻松匹配企业自身业务</p>
                  </li>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail3@2x_aa72f8d6.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail3@2x_ac2a666f.png" alt="">
                    <h4>智能获客，即刻沟通</h4>
                    <p>智能识别访客身份，为您捕获每位访客并建立实时沟通，把握每一刻商机</p>
                  </li>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail4@2x_6c4f5ad9.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail4@2x_5d708612.png" alt="">
                    <h4>百度官方产品支持</h4>
                    <p>百度智能云与小程序团队深度协作出品，从功能技术到搜索展现优化，给您最权威与专业的服务</p>
                  </li>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail5@2x_0a666324.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail5@2x_1efcb8f6.png" alt="">
                    <h4>先进资源与技术架构</h4>
                    <p>百度搜索同机房，依托百度智能云高性能计算、存储和CDN能力，给您极致丝滑稳定体验</p>
                  </li>
                  <li>
                    <img class="initImg" src="https://bce.bdstatic.com/portal/img/solution/smartApplet/detail6@2x_ac8f930a.png" alt="">
                    <img class="showImg" style="display: none"  src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-detail6@2x_49943d33.png" alt="">
                    <h4>兼容其他类型小程序</h4>
                    <p>提供百度智能小程序和其他类型小程序（如微信）多端同步设计发布能力，揽获全域流量</p>
                  </li>

                </ul>
              </div>
              <div class="part2">
                <h2>多维度流量入口，助力企业实现海量用户触达</h2>
                <ul>
                  <li>
                    <h4>01</h4>
                    <p>百度App信息流</p>
                  </li>
                  <li>
                    <h4>02</h4>
                    <p>百度App文章挂载</p>
                  </li>
                  <li>
                    <h4>03</h4>
                    <p>百度搜索直达</p>
                  </li>
                  <li>
                    <h4>04</h4>
                    <p>百度搜索结果</p>
                  </li>
                  <li>
                    <h4>05</h4>
                    <p>智能小程序固定入口</p>
                  </li>
                  <li>
                    <h4>06</h4>
                    <p>智能小程序下拉二楼</p>
                  </li>
                  <li>
                    <h4>07</h4>
                    <p>二维码线下推广</p>
                  </li>

                </ul>
              </div>
              <div class="part3">
                <h2>智能小程序案例</h2>
                <ul>
                  <li>
                    <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-part3-1_b01ec03c.png" alt="">
                    <h4>砖石小鸟</h4>
                    <p>全球曾璇，智慧之选</p>
                  </li>
                  <li>
                    <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-part3-2_0c674447.png" alt="">
                    <h4>宝宝知道</h4>
                    <p>中国专业的母婴知识社区</p>
                  </li>
                  <li>
                    <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-part3-3_7159bf58.png" alt="">
                    <h4>Booking定酒店</h4>
                    <p>全球住宿预定平台</p>
                  </li>
                  <li>
                    <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/a-part3-4_1d95aceb.png" alt="">
                    <h4>寺库奢侈品</h4>
                    <p>给你全世界的美好</p>
                  </li>

                </ul>
                <div class="erweima">
                  <img src="../assets/Solev/booking_qrcode_20126b2c.jpg" alt="">
                </div>
                <span class="btn">立即拥有企业智能小程序</span>
              </div>
            </div>
          </div>
          <div class="sence">
            <h1>全系云产品套餐，提供高效稳定的发布环境</h1>
            <p>部署小程序后端服务？计算、存储、数据库、CDN、证书和域名一个也不能少！与智能小程序同机房，享受极速快感！</p>
            <div class="container">
              <ul>
                <li style="background-color: #108CEE">
                  <i style="color: white" class="fa fa-hospital-o"></i>
                  <span>基于BBC的小程序标准架构部署方案</span>
                </li>
                <li>
                  <i style="color: white" class="fa fa-smile-o"></i>
                  <span>基于BAE的小程序简化架构部署方案</span>
                </li>
              </ul>
              <div >
                <div class="content">
                  <h3>
                    小程序标准架构部署方案
                    <span>— 基于百度智能云服务器BCC构建</span>
                  </h3>
                  <p>高性能、高可靠、灵活稳定的小程序后端服务部署方案，可灵活配置运行环境，弹性扩展规格配置，适用于架构复杂的大中型小程序服务场景</p>
                  <ul style="margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;">
                    <li>高性能</li>
                    <li>高安全性</li>
                    <li>配置多样</li>
                    <li>扩展灵活</li>
                  </ul>
                  <div class="config">
                    <h3>推荐配置</h3>
                    <div class="config-content">
                      <div class="configItem">
                        <h4>1核1G</h4>
                        <p>CPU内存</p>
                      </div>
                      <div class="configItem">
                        <h4>1Mbps</h4>
                        <p>BGP带宽</p>
                      </div>
                      <div class="configItem">
                        <h4>40GB</h4>
                        <p>系统盘</p>
                      </div>
                      <div class="configItem">
                        <h4>40GB</h4>
                        <p>数据盘</p>
                      </div>
                    </div>
                    <div class="form-dropdown">
                      <span>推荐系统环境</span>
                      <div class="select">NodeJS集成环境</div>
                      <div class="btn">立即购买</div>
                    </div>
                  </div>
                  <div class="about">
                    <h3>关联产品组件</h3>
                    <ul>
                      <li>弹性公网IP EIP</li>
                      <li>云磁盘 CDS</li>
                      <li>免费均衡 BLB</li>
                      <li>域名服务 BCD</li>
                      <li>对象储存 BOS</li>
                      <li>云数据库 RDS</li>
                      <li>简单缓存 SCS</li>
                      <li>内容分发网络 CDN</li>
                      <li>证书服务 CAS</li>
                    </ul>
                  </div>
                </div>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/bcc@2x_8f7610c8.png" alt="">
              </div>
              <div style="display: none;">
                <div class="content">
                  <h3>
                    小程序简化架构部署方案
                    <span> — 基于百度智能云引擎BAE构建</span>
                  </h3>
                  <p>弹性、便捷、高可用的多语言环境小程序服务部署方案，Devops特性更适用于开发者构建业务逻辑简单、无实时会话要求的小程序后端服务</p>
                  <ul style="margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;">
                    <li>面向开发</li>
                    <li>免运维</li>
                    <li>灵活扩展</li>
                    <li>多环境集成</li>
                  </ul>
                  <div class="config">
                    <h3>推荐配置</h3>
                    <div class="config-content">
                      <div class="configItem">
                        <h4>1核1G</h4>
                        <p>CPU内存</p>
                      </div>
                      <div class="configItem">
                        <h4>1Mbps</h4>
                        <p>BGP带宽</p>
                      </div>
                      <div class="configItem">
                        <h4>40GB</h4>
                        <p>系统盘</p>
                      </div>
                    </div>

                  </div>
                  <div class="about">
                    <h3>关联产品组件</h3>
                    <ul>
                      <li>文档数据库DocDB for</li>
                      <li>云数据库 RDS</li>
                      <li>简单缓存SCS</li>
                      <li>内容分发网络CDN</li>
                      <li>域名服务 BCD</li>
                      <li>证书服务 CAS</li>
                    </ul>
                  </div>
                </div>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/bae@2x_4f3a1e16.png" alt="">
              </div>
            </div>
          </div>
          <div class="other">
            <h1>其他相关产品</h1>
            <ul>
              <li>
                <h2>
                  <i class="fa fa-shopping-basket"></i>
                  <span>文档数据库DocDB for MongoDB</span>
                </h2>
                <p class="desc">高可靠、高弹性、免运维的NoSQL数据库产品</p>
                <p class="other-detail">采用三节点副本集架构及集群分片架构，支持自动容灾、弹性扩展和按需付费等多项灵活特性，同时提供了丰富的控制台、监控报警系统和API等开发工具，为开发者提供高效、省心的使用体验</p>
                <span>立即申请</span>
              </li>
              <li>
                <h2>
                  <i class="fa fa-shopping-basket"></i>
                  <span>关系型数据库RDS</span>
                </h2>
                <p class="desc">支持MySQL、SQL Server、PGSQL的高可靠云数据库</p>
                <p class="other-detail">支持MySQL、SQL Server、PostgreSQL多种数据库引擎。主从热备机制，故障秒级切换，支持实现同城/异地多维度容灾；全面的安全和运维保障机制，满足企业级业务需要</p>
                <span>立即申请</span>
              </li>
              <li>
                <h2>
                  <i class="fa fa-shopping-basket"></i>
                  <span>内容分发网络 CDN</span>
                </h2>
                <p class="desc">百度500+节点同源，让您的资源访问像百度搜索一样</p>
                <p class="other-detail">遍布国内和全球500+节点，DNS智能调度就近节点；先进的裸盘模式缓存分片存储与多核CPU优化技术使请求处理与读取响应超高效；多维度安全防护策略，有效抗护异常攻击</p>
                <span>立即申请</span>
              </li>
              <li style="width: 580px;">
                <h2>
                  <i class="fa fa-shopping-basket"></i>
                  <span>文档数据库DocDB for MongoDB</span>
                </h2>
                <p class="other-detail">近百种域名后缀全网低价随心选，更有.com新用户25元首年；免费赠送智能DNS解析服务</p>
                <span>立即申请</span>
              </li>
              <li style="width: 580px;">
                <h2>
                  <i class="fa fa-shopping-basket"></i>
                  <span>文档数据库DocDB for MongoDB</span>
                </h2>
                <p class="other-detail">近百种域名后缀全网低价随心选，更有.com新用户25元首年；免费赠送智能DNS解析服务</p>
                <span>立即申请</span>
              </li>
            </ul>
          </div>
          <div class="market">
            <h1>基于百度智能云生态，为您提供丰富的小程序相关服务</h1>
            <p>百度云市场第三方优质产品与服务，协同企业与开发者快速构建与实施小程序业务方案</p>
            <ul>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/m1_8c89f93a.png" alt="">
                <span>微小度百度小程序官网</span>
                <p>微小度百度智能小程序官网小程序，快速生成</p>
                <div>
                  <span class="num">￥1</span>
                  <span class="unit">/起</span>
                </div>
              </li>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/m2_1427142f.jpg" alt="">
                <span>百度智营销建站主机装修设计</span>
                <p>网站装修设计，页面设计，网页设计</p>
                <div>
                  <span class="num">¥3888</span>
                  <span class="unit">/起</span>
                </div>
              </li>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/m3_38c5be00.png" alt="">
                <span>云服务器系统迁移i2Move</span>
                <p>将复杂的系统迁移工作简单化，且在生产系统不停机情况下迁移现有整个系统</p>
                <div>
                  <span class="num">¥950</span>
                  <span class="unit">/起</span>
                </div>
              </li>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/m4_ba0fcbd3.png" alt="">
                <span>网站标志Logo设计</span>
                <p>包括域名注册、虚拟主机、网站建设、logo设计、网站设计等</p>
                <div>
                  <span class="num">¥300</span>
                  <span class="unit">/起</span>
                </div>
              </li>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/m5_b8e52a8a.jpg" alt="">
                <span>百度信誉实名实网认证</span>
                <p>获得认证的企业网站，在百度搜索结果里展现时将会显示“V”标识</p>
                <div>
                  <span class="num">¥600</span>
                  <span class="unit">/起</span>
                </div>
              </li>
            </ul>
            <span>
              <a href="">更多服务请进入百度云市场></a>
            </span>
          </div>
          <div class="feat">
            <div class="top">
              <ul>
                <li>
                  <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/icon3@2x_db816c58.png" alt="">
                  <div class="artic">
                    <h3>更稳定</h3>
                    <p>度智能云99.999%的高数据持久性和秒级故障迁移能力，应对各类高标准需求</p>
                  </div>
                </li>
                <li>
                  <img src="https://bce.bdstatic.com/portal/img/solution/smartApplet/icon1@2x_bcbcf6ef.png" alt="">
                  <div class="artic">
                    <h3>更易用</h3>
                    <p>百度智能云提供适用于开发者、IT运维部署人员和普通企业用户的多类型产品，总有一款适合您</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bottom">
              <h2>根据您企业的需求为您提供专业的方案咨询服务</h2>
              <a href="">服务质询</a>
            </div>
          </div>
          <FooterNav></FooterNav>
        </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  import imgInfo from '../jsons/SolvePage'
  import FooterNav from '../components/FooterNav'
    export default {
    data(){
      return {
        imgInfo,
        ins:0,
        showImg:true,
        marTop:'0px'
      }
    },
        components:{
          HeaderNav,
          FooterNav
        },
      mounted() {
        var that = this
      //滑动
        $(window).scroll(function () {
          var winHeight = $(this).scrollTop()
          var contHeight = $('.detail').offset().top
         var height =  $('.detail').height()
          if (winHeight >= (contHeight + height) - 600) {
            return
          }else {
            if (winHeight - contHeight > 0){
              that.marTop = (winHeight - contHeight) + 'px'
            }
          }

        })


        $('.detail .rightPanl .part2 ul li').each(function (index,item) {
          $(this).hover(function () {
            that.showImg = false
           setTimeout(() => {
             that.showImg = true
           },200)
            that.ins = index

          })
        })


      //  sence中的点击事件
        $('.sence .container > ul > li').each(function (index,item) {
          $(this).click(function () {
            $(this).css('backgroundColor','#108CEE').siblings().css('backgroundColor','#2d2d38')
            console.log($('.sence .container > div'))
            $('.sence .container > div').eq(index).css('display','block').siblings('div').css('display','none')
          })
        })

      }
    }
</script>

<style scoped>
  .feat .bottom a:hover{
    text-decoration: underline;
  }
  .feat .bottom a{
    display: block;
    background: #108CEE;
    height: 38px;
    line-height: 38px;
    width: 160px;
    margin: 30px auto;
    font-size: 14px;
    color: #FFF;
    text-align: center;
  }
  .feat .bottom h2{
    font-weight: normal;
    font-size: 30px;
    color: #333;
    text-align: center;
    line-height: 52px;
  }
  .feat .bottom{
    width:100%;
    height: 260px;
    padding-top: 70px;
    background-image: url("https://bce.bdstatic.com/portal/img/solution/smartApplet/bg-bottom_cf15b01b.png");
    background-size: 130% 100%;
  }
  .feat .top ul li .artic p{
    font-size: 14px;
    line-height: 26px;
    margin-top: 10px;
    overflow: hidden;
  }
  .feat .top ul li .artic h3{
    font-size: 24px;
    line-height: 42px;
    font-weight: normal;
  }
  .feat .top ul li .artic{
    width: 312px;
    float: left;
  }
  .feat .top ul li img{
    display: block;
    float: left;
    width: 48px;
    margin-right: 30px;
  }
  .feat .top ul li{
    padding: 0 100px;
    color: #FFF;
    width: 50%;
    overflow: hidden;
  }
  .feat .top ul{
    display: flex;
    flex-wrap: wrap;
    width: 1180px;
    margin: 0 auto;
  }
  .feat .top{
    height: 227px;
    box-sizing: border-box;
    background: #108CEE;
    width: 100%;
    padding-top: 60px;
  }
  .market span a:hover{
   text-decoration: underline;
  }
  .market span a{
    color: #999;
    font-size: 14px;
  }
  .market span{
    display: block;
    margin: 40px auto;
    text-align: center;

  }
  .market ul li > div .unit{
    font-size: 14px;
    color: #999;
  }
  .market ul li > div .num{
    font-size: 24px;
    color: #D93549;
  }
  .market ul li > div{
    margin-top: 20px;
    height: 32px;
  }
  .market ul li > p{
    font-size: 14px;
    color: #999;
    line-height: 26px;
    margin-top: 20px;
    min-height: 78px;
  }
  .market ul li > span{
    display: block;
    font-size:18px;
    margin-top: 20px;
    min-height: 63px;
  }
  .market ul li img{
    width: 67.5px;
    height: 45px;
    display: inline-block;
  }
  .market ul li{
    text-align: center;
    float: left;
    padding: 0 30px;
    width: 236px;
  }
  .market ul{
overflow: hidden;
    margin: 40px auto;
    width: 1180px;
  }
  .market > p{
    opacity: .6;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 26px;
    margin-top: 10px;
  }
  .market h1{
    text-align: center;
    font-weight: normal;
    font-size: 30px;
    color: #000;
    line-height: 52px;
  }
  .market{
    padding: 50px 0;
  }
  .other ul li > span{
    display: block;
    margin-top: 20px;
    width: 140px;
    height: 38px;
    background: #108CEE;
    line-height: 38px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
  }
  .other ul li .other-detail{
    opacity: .8;
    font-size: 14px;
    color: #FFF;
    width: 100%;
    text-align: left;
    margin-top: 10px;
    line-height: 26px;
    box-sizing: border-box;
  }
  .other ul li .desc{
    line-height: 26px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 20px;
    font-size: 14px;
  }
  .other ul li h2 i{
    font-size: 16px;
  }
  .other ul li h2{
    font-weight: normal;
    font-size: 18px;
    color: #FFF;
    line-height: 36px;
    height: 36px;
  }
  .other ul li:nth-child(4){
    margin-left: 0;
  }
  .other ul li:first-child{
    margin-left: 0;
  }
  .other ul li{
    background: #363642;
    box-sizing: border-box;
    padding: 26px 20px;
    float: left;
    width: 380px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .other ul{
    margin: 50px auto;
    overflow: hidden;
    width: 1180px;

  }
  .other h1{
    font-weight: normal;
    font-size: 32px;
    color: #FFF;
    text-align: center;
  }
  .other{
    background: #1F1F24;
    color: #fff;
    padding: 0;
  }
  .sence .container > div img{
    display: block;
    width: 482px;
    height: 668px;
    float: right;
  }
  .sence .container > div .content .about ul li{
    width: 146px;
    height: 30px;
    background: #464652;
    font-size: 14px;
    text-align: center;
    line-height: 30px;
    float: left;
    margin-left: 10px;
    margin-bottom: 10px;
    color: #fff;
  }
  .sence .container > div .content .about ul{
    overflow: hidden;
    margin-left: -10px;
  }
  .sence .container > div .content .about h3{
    font-size: 14px;
    color: #FFF;
    line-height: 26px;
    margin-top: 20px;
  }
  .sence .container > div .content .config .form-dropdown .btn{
    cursor: pointer;
    width: 140px;
    height: 38px;
    line-height: 38px;
    float: left;
    background: #108CEE;
    text-align: center;
    margin-left: 20px;
  }
  .sence .container > div .content .config .form-dropdown .select{
    float: left;
    width: 254px;
    cursor: pointer;
    color: #FFF;
    background: #676779;
    line-height: 38px;
    padding-left: 15px;
  }
  .sence .container > div .content .config .form-dropdown span{
    width: 121px;
    height: 38px;
    font-size: 14px;
    background: #4A4A55;
    text-align: center;
    line-height: 38px;
    float: left;
  }
  .sence .container > div .content .config .form-dropdown{
    color: #fff;
    font-size: 14px;
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .sence .container > div .content .config .configItem p{
    opacity: .4;
    font-size: 14px;
    color: #FFF;
    margin-top: 10px;;
  }
  .sence .container > div .content .config .configItem h4{
    font-size: 28px;
    color: #FFF;
    margin: 0;
    font-weight: normal;
  }
  .sence .container > div .content .config .configItem{
    float: left;
    width: 120px;
    text-align: left;
  }
  .sence .container > div .content .config .config-content{
    overflow: hidden;
  }
  .sence .container > div .content .config > h3{
    font-size: 14px;
    color: #FFF;
    line-height: 26px;
  }
  .sence .container > div .content .config{
    margin-top: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .sence .container > div .content > ul li{
    display: inline-block;
    width: 72px;
    border: 1px solid rgba(255,255,255,0.8);
    color: #fff;
    line-height: 28px;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
  }
  .sence .container > div .content p{
    margin-top: 10px;
    margin-bottom: 0;
    line-height: 26px;
    color: #FFF;
    opacity: .6;
    font-size: 14px;
    text-align: left;
  }
  .sence .container > div .content h3 span{
    opacity: .8;
    font-size: 16px;
    margin-left: 18px;
  }
  .sence .container > div .content h3{
    font-weight: normal;
    font-size: 24px;
    color: #FFF;
    line-height: 42px;
    height: 42px;

  }
  .sence .container > div .content{
    float: left;
    width: 696px;
    height: 668px;
    overflow: hidden;
    margin-right: 2px;
    background: #363642;
    padding: 102px 40px 18px 40px;
    text-align: left;
  }
  .sence .container > div {
    overflow: hidden;
  }
  .sence .container > ul li{
    text-align: center;
    background: #2D2D38;
    height: 72px;
    line-height: 72px;
    font-size: 14px;
    color: #FFF;
    float: left;
    width: 348px;
  }
  .sence .container > ul{
    height: 72px;
    overflow: hidden;
    position: absolute;
  }
  .sence .container{
    width: 1180px;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
  }
  .sence > p{
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  .sence > h1{
    font-size: 30px;
    color: #FFF;
    text-align: center;
    line-height: 52px;
    font-weight: normal;
  }
  .sence{
    background: #1F1F24;
    padding-top: 80px;
    padding-bottom: 50px;
  }
  .detail .rightPanl .part3 > .btn{
    display: block;
    float: left;
    background: #108CEE;
    width: 205px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    margin-top: 52px;
    cursor: pointer;
    color: #fff;
  }
  .detail .rightPanl .part3 .erweima img{
    width: 100%;
    height: 100%;
  }
  .detail .rightPanl .part3 .erweima{
    border: solid 1px ;
    float: left;
    height: 200px;
    width: 200px;
    border: 1px solid #7f7f7f;
    box-sizing: border-box;
    margin-top: 40px;
  }
  .detail .rightPanl .part3 ul li p{
    float: left;
    opacity: .6;
    font-size: 14px;
    color: #000;
    line-height: 26px;
  }
  .detail .rightPanl .part3 ul li h4{
    float: left;
    font-size: 16px;
    color: #333;
    margin: 0;
  }
  .detail .rightPanl .part3 ul li img{
    opacity: 0.7;
    display: inline-block;
    height: 64px;
    width: 64px;
    float: left;
    margin-right: 30px;
    margin-top: -9px;
  }
  .detail .rightPanl .part3 ul li:hover img{
    opacity: 1;
  }
  .detail .rightPanl .part3 ul li:hover{
    background-color: #31b1ff;
  }
  .detail .rightPanl .part3 ul li{
    border-top: 1px solid #7f7f7f;
    border-left: 1px solid #7f7f7f;
    width: 340px;
    height: 100px;
    padding: 24px 35px;
    float: left;
    background-color: #1af5ff;
  }
  .detail .rightPanl .part3 ul {
    margin-top: 40px;
    width: 680px;
    overflow: hidden;
    border-bottom: 1px solid #7f7f7f;
    box-sizing: border-box;
    float: left;
  }
  .detail .rightPanl .part3 h2{
    font-size: 20px;
    line-height: 34px;
    margin: 0;
    font-weight: normal;
  }
  .detail .rightPanl .part3{
    margin-top: 70px;
  }
  .showImg-leave-to{
    transform: translateY(-100%);
  }
  .showImg-enter{
    transform: translateY(100%);
  }
  .showImg-leave-active,.showImg-enter-active{
    transition:0.3s;
  }
  .detail .rightPanl .part2 ul li p{
    opacity: .8;
    font-size: 16px;
    color: #333;
    line-height: 26px;
    margin-top: 14px;
  }
  .detail .rightPanl .part2 ul li h4{
    opacity: 0.3;
    font-family: Bebas;
    font-size: 40px;
    color: #000;
    height: 40px;
    line-height: 40px;
    margin: 0;
    font-weight: 500;
  }
  .detail .rightPanl .part2 ul li:nth-child(5){
    margin-left: 0;
  }
  .detail .rightPanl .part2 ul li:first-child{
    margin-left: 0;
  }
  .detail .rightPanl .part2 ul li:hover h4{
    opacity: 1;
  }
  .detail .rightPanl .part2 ul li:hover{
    border-left: 4px solid #108CEE;
    padding-left: 20px;
  }
  .detail .rightPanl .part2 ul li{
    transition: 0.1s;
    cursor: pointer;
    margin-left: 65px;
    width: 171px;
    height: 80px;
    border-left: 2px solid #EBEBEB;
    float: left;
    margin-top: 60px;
    padding-left: 25px;
    box-sizing: border-box;
  }
  .detail .rightPanl .part2 ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
  .detail .rightPanl .part2 h2{
    font-size: 20px;
    line-height: 34px;
    margin: 0;
    font-weight: normal;
  }
  .detail .rightPanl .part2{
    margin-top: 70px;
    width: 880px;
  }
  .detail .rightPanl .part1 ul li > p{
    display: none;
    opacity: .8;
    font-size: 12px;
    color: #FFF;
    text-align: center;
    line-height: 24px;
    width: 240px;
    margin: 0 auto;
  }
  .detail .rightPanl .part1 ul li h4{
    font-size: 16px;
    color: #333;
    line-height: 26px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .detail .rightPanl .part1 ul li img{
    transition: 0.5s;
    display: inline-block;
    width: 32px;
  }
  .detail .rightPanl .part1 ul li:hover h4{
    color: #fff;
  }
  .detail .rightPanl .part1 ul li:hover p{
    display: block;
  }
  .detail .rightPanl .part1 ul li:hover .showImg{
    display: inline-block !important;
    width: 25px;
  }
  .detail .rightPanl .part1 ul li:hover .initImg{
    display: none;
  }
  .detail .rightPanl .part1 ul li:hover{
    background-color: #177dff;
    padding-top: 20px;
  }
  .detail .rightPanl .part1 ul li{
    transition:0.7s;
    width: 280px;
    height: 177px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #EBEBEB;
    padding-top: 42px;
    text-align: center;
    float: left;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .detail .rightPanl .part1 ul {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }
  .detail .rightPanl .part1 > p{
    opacity: .6;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
  }
  .detail .rightPanl .part1 > h2{
    font-size: 20px;
    line-height: 34px;
    margin: 0;
    font-weight: normal;
  }
  .detail .rightPanl{
    margin-left: 30px;
    float: left;
    width: 880px;
  }
  .detail .leftPanl .innerPic img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .detail .leftPanl .innerPic{
    border-radius: 20px;
    overflow: hidden;
    width: 194px;
    height: 423px;
    margin-left: 41px;
    margin-top: 46px;
    
  }
  .detail .leftPanl{
    float: left;
    background-image: url("https://bce.bdstatic.com/portal/img/solution/smartApplet/phoneBg_ae6d4e6e.png");
    width: 264px;
    height: 503px;
    background-size: 100% 100%;
  }
  .detail > p{
    opacity: .6;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 26px;
    margin: 10px auto 60px auto;
  }
  .detail > h1{
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 52px;
    font-weight: normal;
  }
  .detail{
    width: 1180px;
    margin: 0 auto;
    padding: 90px 0;
    overflow: hidden;
    height: 1597px;
    margin-bottom: 90px;
  }
  .items .line{
    margin: 44px 20px;
    height: 1px;
    width: 232px;
    border-top: 1px dotted #B3B3B3;
  }
  .items .item p{
    margin-top: 20px;
    margin-left: -11px;
    width: 112px;
    font-size: 13px;
  }
  .items .item .icon img{
    height: 48px;
    width: 48px;
    margin-top: 20px;
    display: inline-block;
  }
  .items .item .icon{
    width: 88px;
    height: 88px;
    -webkit-border-radius: 44px;
    -moz-border-radius: 44px;
    border-radius: 44px;
    background: #181820;
  }
  .items > div{
    text-align: center;
  }
  .items{
    display: flex;
    margin: 0 auto;
    width: 808px;
  }
  .introduce .desc{
    max-width: 960px;
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 26px;
    margin: 40px auto;
  }
  .introduce h1{
    opacity: .85;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 52px;
    font-weight: normal;
  }
  .introduce{
    padding-top: 80px;
    background: #F5F5F5;
    padding-bottom: 50px;
  }
  .banner > small{
    display: block;
    opacity: .8;
    font-size: 12px;
    color: #FFF;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
  }
  .banner > .btn:hover{
    background: #2135ee;
  }
  .banner > .btn{
    width: 160px;
    height: 38px;
    margin: 0 auto;
    display: block;
    line-height: 38px;
    background: #108CEE;
    font-size: 14px;
    color: #FFF;
    text-align: center;
    margin-top: 50px;
    cursor: pointer;
  }
  .banner .container p{
    opacity: .8;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
  }
  .banner .container h1{
    font-size: 42px;
    line-height: 64px;
    color: #fff;
    font-weight: normal;
  }
  .banner .container{
    text-align: center;
    width: 800px;
    padding-top:97px;
    margin: 0 auto;
  }
  .solvepage >>> .headernav {
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.23);
    border-bottom: solid 1px rgba(153, 153, 153, 0.29);
  }
    .banner{
      background-image: url("https://bce.bdstatic.com/portal/img/solution/smartApplet/banner_pc_0a760ec2.png");
      height: 480px;
    }
  .solvepage{
  }
</style>
