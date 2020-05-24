<template>
        <div class="viveopage">
          <transition name="showheader">
            <div class="fixed" v-show="showheader">
              <ul>
                <li>场景架构</li>
                <li>方案优势</li>
                <li>典型应用</li>
                <li>优质渠道开发</li>
                <li>对接流程</li>
                <li>文档/支持</li>
              </ul>
            </div>
          </transition>
          <HeaderNav></HeaderNav>
          <div class="banner">
            <div>
              <h1>短视频解决方案</h1>
              <p >短视频解决方案是针对泛娱乐、媒体、UGC等领域的一站式短视频服务方案。让您快速拥有美颜、滤镜、AR等丰富采编能力。<br>依托领先的人工智能技术，大幅提升运营效率。借助百度强大的内容渠道，帮您快速获取更多流量。</p>
              <span>我要使用</span>
            </div>
          </div>
          <div class="sidebar">
            <ul>
              <li>场景架构</li>
              <li>方案优势</li>
              <li>典型应用</li>
              <li>相关产品</li>
              <li>优质渠道开发</li>
              <li>对接流程</li>
              <li>文档/支持</li>
            </ul>
          </div>
          <div class="one save">
            <div class="txt">
              <h2>场景架构</h2>
              <p>完善的视频解决方案，轻松解决各种使用场景</p>
            </div>
            <div class="content">
              <div class="left">
                <ul>
                  <li v-for="(item,index) in list" :key="'ins' + index" @click="change(item.title)">
                    {{ item.title }}
                  </li>
                </ul>
                <img :src=info.img alt="">
              </div>
              <div class="right">
                <div><h4>场景描述</h4>
                  <p>{{ info.p1 }}</p>
                  <p>{{ info.p2 }}</p>
                  <p>{{ info.p3 }}</p>
                  <h4>解决方案</h4>
                  <ul>
                    <li v-for="(item,index) in info.list" :key="'ins' + index">
                      {{ item }}
                    </li>
                  </ul>
                  <h4>关联产品</h4>
                  <div class="spans">
                  <span v-for="(item,index) in info.list2" :key="'ins' + index">
                  {{ item }}
                </span>
                  </div>
                  <span class="btn">立即申请</span></div>
              </div>
            </div>
          </div>
          <div class="two save">
            <div class="txt">
              <h2>方案优势</h2>
              <p>集短视频拍摄SDK、上传、视频点播等功能的一站式短视频解决方案</p>
            </div>
            <ul>
              <li>
                <img style="color: #fff;" src="../assets/6a600c338744ebf88eaffadbd5f9d72a6159a77c.jpg.png" alt="">
                <div>
                  <h4>内容采编</h4>
                  采编能力丰富<br>
                  覆盖流行采编玩法，应用广泛<br>
                  <br>
                  对接简单快捷<br>
                  超小SDK，1天快速对接
                </div>
              </li>
              <li>
                <img style="color: #fff;" src="../assets/908fa0ec08fa513d5cd7f23a316d55fbb3fbd9d1.jpg.png" alt="">
                <div>
                  <h4>内容处理</h4>
                  高性能云产品<br>
                  高IO云服务器、万量级IOPS<br>
                  畅想流畅短视频体验
                </div>
              </li>
              <li>
                <img style="color: #fff;" src="../assets/a50f4bfbfbedab643e9dd324fb36afc378311e62.jpg.png" alt="">
                <div>
                  <h4>内容分析</h4>
                  内容智能分析<br>
                  多维解读视频内容，智能打标<br>
                  <br>
                  内容智能推荐<br>
                  自动匹配兴趣值，千人千面
                </div>
              </li>
              <li>
                <img style="color: #fff;" src="../assets/b8014a90f603738de6ba92c6bf1bb051f919ec66.jpg.png" alt="">
                <div>
                  <h4>内容分发</h4>
                  百度生态支持<br>
                  百度贴吧、手百feed，打造亿<br>
                  万级内容生态
                </div>
              </li>

            </ul>
          </div>
          <div class="three save">
            <div class="txt">
              <h2>典型应用</h2>
              <p>一站式短视频服务，让你专注核心业务创新</p>
            </div>
            <div class="com">
              <div class="left">
                <div>
                  <transition name="show">
                    <img :src=bigimg alt="" v-if="isShow">
                  </transition>
                </div>
              </div>
              <div class="right">
                <ul>
                  <li v-for="(item, index) in imginfo" :key="'ins' + index" @mouseenter="changeImg(item.title)">
                    <div class="imgs">
                    <img :src=item.img alt="">
                    </div>
                    <div class="miaoshu">
                      <p class="titel">{{item.title}}</p>
                      <p class="fade">{{ item.p }} </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="fore save">
            <div class="foreTxt">
              <h2>优质渠道分发</h2>
              <p>优质渠道曝光引流，链接亿万用户，让你快速获取更多流量</p>
            </div>
            <ul>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/short_video/way1_10b7d45c.png" alt="">
                <p>手机百度</p>
                <p>6亿用户在用的手机搜索客户端</p>
              </li>
              <li>
                <img style="margin-top: 15px; margin-bottom: 15px;" src="https://bce.bdstatic.com/portal/img/solution/short_video/way2_d93a1b5e.png" alt="">
                <p>百度搜索</p>
                <p>全球最大的中文搜索引擎</p>
              </li>
              <li>
                <img style="margin-top: 15px; margin-bottom: 15px;" src="https://bce.bdstatic.com/portal/img/solution/short_video/way3_d0b19b33.png" alt="">
                <p>百度贴吧</p>
                <p>全球最大的中文社区</p>
              </li>
              <li>
                <img src="https://bce.bdstatic.com/portal/img/solution/short_video/way4_f13c5b9f.png" alt="">
                <p>百度好看</p>
                <p>百度旗下的短视频聚合平台</p>
              </li>
            </ul>
          </div>
          <div class="five save">
            <div class="fiveTxt">
              <h2>对接流程</h2>
              <p>丰富的多媒体企业服务经验，有竞争力的行业解决方案</p>
            </div>
            <ul>
              <li>
                <div>
                  <i class="fa fa-heart-o"></i>
                </div>
                <h4>量身定制解决方案</h4>
                <p>1V1专业咨询，提供定制化解决方案</p>
              </li>
              <img src="https://bce.bdstatic.com/portal/img/solution/short_video/arraw_65738149.png" alt="">
              <li>
                <div>
                  <i class="fa fa-skyatlas"></i>
                </div>
                <h4>量身定制解决方案</h4>
                <p>1V1专业咨询，提供定制化解决方案</p>
              </li>
              <img src="https://bce.bdstatic.com/portal/img/solution/short_video/arraw_65738149.png" alt="">
              <li>
                <div>
                  <i class="fa fa-github-alt"></i>
                </div>
                <h4>量身定制解决方案</h4>
                <p>1V1专业咨询，提供定制化解决方案</p>
              </li>
            </ul>
            <span class="btn">立即申请</span>
          </div>
          <div class="six save">
            <h2>文档/支持</h2>
            <ul>
              <li>体检工单</li>
              <li>Android SDK开发者文档</li>
              <li>iOS SDK开发者文档</li>
            </ul>
          </div>
          <FooterNav></FooterNav>
        </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  import info from '../jsons/ViveoPage'
  import $ from 'jquery'
  import imginfo from '../jsons/ViveoPages'
  import FooterNav from '../components/FooterNav'
    export default {
    data(){
      return{
        info:info[0],
        list:info,
        imginfo,
        bigimg:imginfo[0].bigImg,
        isShow : true,
        showheader:false
      }
    },
      methods:{
        change(val){
          $('.right > div').fadeOut();
          $('.left img').fadeOut();
          this.list.forEach((item,index) => {
            if (val == item.title){
                setTimeout(() => {
                  this.info = item
                },500)
            }
          })
          $('.right > div').fadeIn();
          $('.left img').fadeIn();
        },
        changeImg(val){
          this.imginfo.forEach((item,index) => {

            if (val == item.title){
              this.bigimg = item.bigImg
            }
            this.isShow = false
            setTimeout(() => {
              this.isShow = true
            },150)
          })
        }

      },
       components:{
         HeaderNav,
         FooterNav
       },
       mounted() {
         var that = this
         function showLi(num){
             $('.fixed ul li').eq(num).addClass('changeLi').siblings().removeClass('changeLi')
         }
          $('.left ul li').eq(0).addClass('changeLi');
          $('.left ul li').click(function () {
            $(this).addClass('changeLi').siblings().removeClass('changeLi')
          })
         $(window).scroll(function () {
           var  wintop = $(this).scrollTop()
           if(wintop >= 400){
            that.showheader = true
           }
           else {
             that.showheader = false
           }
           var divs = $('.save')

           for (var i = divs.length - 1; i >= 0; i--){
              if (wintop > divs[i].offsetTop -600 ){
                showLi(i);
                break;
              }
           }
         })


         console.log( $('.fixed ul li'))
       //  点击滑动到对应位置
         $('.fixed ul li').each(function (index,item) {
           console.log('点击了')
           $(this).click(function () {
             $(window).scrollTop($('.save').eq(index).offset().top - 500)
           })
         })

       //  点击滑动到对应位置
         $('.sidebar ul li').each(function (index,item) {
             if (index != 3){
               if (index > 3){
                 index = index - 1
               }
               $(this).click(function () {
                 $(window).scrollTop($('.save').eq(index).offset().top - 500)
               })
             }
           })


       }

    }
</script>

<style scoped>
  .showheader-enter{
    transform: translateY(-90px);
  }
  .showheader-leave-to{
    transform: translateY(-90px);
  }
  .showheader-enter-active,.showheader-leave-active{
    transition: 0.5s;
  }
  .fixed ul li:last-child{
    margin-right: 0;
  }
  .fixed ul li:hover{
    border-bottom: solid 2px #1971ff;
  }
  .changeLi{
    border-bottom: solid 2px #1971ff;
    color: #1971ff;
  }
  .fixed ul li{
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    padding: 20px 10px ;
    margin-right: 125px;
    border:none;
    margin-top: 2px;
  }
  .fixed ul{
    width: 60%;
    margin: 0 auto;
    height: 61px;

  }
  .fixed{
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    z-index: 100;
    border-bottom: solid 1px #999;
  }
  .six ul li:first-child{
    padding-left: 0;
  }
  .six ul li{
    display: inline-block;
    color: #949494;
    font-size: 14px;
    padding:  0 35px;
    border-right: solid 1px #999;
  }
  .six ul{
    margin-top: 15px;

  }
  .six h2{
    display: inline-block;
    font-size: 24px;
    color: #333;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
  }
  .six{
    width: 1180px;
    margin: 0 auto;
    height: 137px;
    padding: 40px 0;
  }
  .five .btn:hover{
    background-color: #2677ee;
  }
  .five .btn{

    display: block;
    width: 150px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    color: #fff;
    line-height: 35px;
    background-color: #108cee;
    cursor: pointer;
  }
  .five ul li h4{
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: normal;
  }
  .five ul li > div i{
    font-size: 70px;
    margin-top: 20px;
  }
  .five ul li > div{
    width: 102px;
    height: 102px;
    border: solid 2px #d1d1d1;
    border-radius: 50%;
    background-color: #333;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .five ul li{
    display: inline-block;
    width: 270px;
    text-align: center;
    margin: 0 20px;
    vertical-align: top;
    font-size: 12px;
    color: #949494;
  }
  .five ul > img{
    margin-top: 140px;
  }
  .five ul{
    overflow: hidden;
    width: 1180px;
    margin: 0 auto;
    margin-top: 40px;
  }
  .five .fiveTxt p{
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 15px;
    color: #999;
  }
  .five .fiveTxt h2{
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
    color: white;
  }
  .five .fiveTxt{
    width: 1180px;
    margin: 0 auto;
  }
  .five{
    background-color: #222;
    padding: 40px 0;
    height: 421px;
    margin-top: 40px;
  }
  .fore ul li p:last-of-type{
    color: #999;
    font-size: 14px;
    margin-top: -3px;
  }
  .fore ul li p:first-of-type{
    margin: 1em 0;
    color: #333;
    font-size: 16px;
  }
  .fore ul li:last-child{
    margin-right: 0;
  }
  .fore ul li{
    float: left;
    width: 278px;
    border: 1px solid #ccc;
    padding: 24px;
    text-align: center;
    margin-right: 22px;
    height: 210px;
  }
  .fore ul{
    overflow: hidden;
    width: 1180px;
    margin: 0 auto;
  }
  .fore .foreTxt p{
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 15px;
    color: #999;
  }
  .fore .foreTxt h2{
    display: inline-block;
    font-size: 24px;
    color: #333;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
  }
  .fore .foreTxt{
    width: 1180px;
    margin: 0 auto;
  }
  .fore{
    padding-top:60px;
    background-color: white;
    margin-top: -10px;
    position: relative;
    z-index: 20;
  }
  .show-enter{
    transform: translateY(509px);
  }
  .show-leave-to{
    transform: translateY(-509px);
  }
  .show-enter-active, .show-leave-active{
    transition: 0.3s;
  }
  .com .right ul li .miaoshu .fade{
    width: 470px;
    font-size: 13px;
    border: solid 1px #999;
    padding: 18px;
    margin-top: 30px;
    opacity: 0;
    transition: 0.5s;
  }
  .com .right ul li .miaoshu{
    margin-left: 60px;
    margin-top: 35px;
    float: right;

  }
  .com .right ul li .imgs img{
    left: -35px;
    position: absolute;
    transition: 0.5s;
   opacity: 0;
    top: -32px;
  }
  .com .right ul li:hover img{
    opacity: 1;
  }
  .com .right ul li .imgs {
    position: relative;
    margin-top: 30px;
    width: 30px;
    height: 30px;
    background-color: #27a9ff;
    border-radius: 50%;
    float: left;
    box-shadow: 0 0 20px #27a9ff;
  }
  .com .right ul li{
    overflow: hidden;
    height: 90px;
    transition: 0.3s;
    padding-left: 27px;
    margin-bottom: 15px;
  }
  .com .right ul li:hover{
    height: 186px;
  }
  .com .right ul li:hover .fade{
    opacity: 1;
  }
  .com .right ul{
    margin-left:5px;
    padding-top: 20px;
  }
  .com .right{
    float: left;
  }
  .com .left > div img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .com .left > div{
    width: 383px;
    height: 511px;
    position: absolute;
    top: 115px;
    left: 73px;
    overflow: hidden;
  }
  .com .left{
    position: relative;
    float: left;
    width: 532px;
    height: 644px;
    background-image: url("https://bce.bdstatic.com/portal/img/solution/short_video/use-iphone_8324a8af.png");
  }
  .com{
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }
  .txt p{
    font-size: 14px;
    margin-bottom: 20px;
    color: #999;
  }
  .txt h2{
    margin-bottom: 20px;
    display: inline-block;
    font-size: 24px;
    color: #333;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
  }
  .txt{
    width: 1180px;
    margin: 0 auto;
  }
  .three{
    padding-top: 40px;
    height: 764px;
    background-image: url("../assets/use-bg_09a657d3.png");
    background-size: 100% 100%;
  }
  .two ul li > div {
    padding-right: 20px;
    display: inline-block;
    height: 245px;
    box-sizing: border-box;
    vertical-align: text-top;
    border-right: 1px solid rgba(255,255,255,0.1);
    color: rgba(195,195,195,0.8);
    line-height: 24px;
    margin-left: 20px;
    float: left;
    font-size: 14px;
  }
  .two ul li >div h4{
    font-size: 16px;
    color: #fff;
    margin-bottom: 16px;
    font-weight: normal;
  }
  .two ul li img{
    display: block;
    width: 50px;
    height: 50px;
    float: left;
  }
  .two ul li:last-child div{
    border-right: none;
  }
  .two ul li{
    overflow: hidden;
    width: 295px;
    float: left;
  }
  .two ul{
    width: 1180px;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
  }
  .two .txt p{
    font-size: 14px;
    margin-bottom: 20px;
    color: #dadada;
    margin-top: 10px;
  }
  .two .txt h2{
    display: inline-block;
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
  }
  .two .txt{
    width: 1180px;
    margin: 0 auto;
  }
  .two{
    padding: 40px 0;
    height:406.5px;
    background-image: url("https://bce.bdstatic.com/portal/img/solution/short_video/adv-back_c68113fd.png");
    margin-top: 40px;
  }
  .content .right .btn:hover{
    background-color:#1d6aee;
  }
  .content .right .btn{
    margin-top: 30px;
    text-align: center;
    background-color: #108cee;
    color: #fff;
    line-height: 35px;
    display:block;
    width: 150px;
    font-size: 14px;
    cursor: pointer;
  }

  .content .right .spans span:hover{
    color: #2798ff;
  }
  .content .right .spans span{
    cursor: pointer;
    display: inline-block;
    border: 1px solid #ccc;
    padding: 7px 15px;
    box-sizing: border-box;
    font-size: 12px;
    background-color: #fff;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .content .right ul:first-of-type li{
    list-style-type: disc;
    line-height: 30px;
    color: #666;
    font-size: 14px;
  }
  .content .right ul:first-of-type{
    padding-left: 12px;
    margin-bottom: 20px;
  }
  .content .right p{
    font-size: 14px;
    color: #666;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .content .right h4{
    margin-bottom: 20px;
    color: #333;
    font-weight: 400;
    font-size: 16px;
  }
  .content .right{
    padding: 30px 25px;
    height: 720px;
    float: left;
    width: 490px;
    border: solid 1px #999;
    border-left: none;
    background-color: #fbfbfb;
  }
  .content .left img{
    display: block;
    width: 571px;
    height: 524px;
    margin: 0 auto;
    margin-top: 60px;
  }
  .content .left ul li:first-child{
    margin-left: 0;
  }
  .content .left ul li:hover{
    color: rgb(41, 165, 255);
  }
  .content .left ul li{
    color: #333;
    display: inline-block;
    padding: 0 10px;
    font-size: 18px;
    margin-left: 50px;
    cursor: pointer;
    line-height:60px;
    border-bottom: solid 3px rgba(41, 165, 255, 0);
  }
  .changeLi{
    border-bottom: solid 3px rgb(41, 165, 255) !important;
  }
  .content .left ul{

    padding: 0 20px;
    padding-bottom: 1px;
    width: 95%;
    margin: 0 auto;
    border-bottom: solid 1px #999;
  }
  .content .left{
    float: left;
    border: solid 1px #999;
    width: 690px;
    height: 720px;
  }
  .content{
    overflow: hidden;
  }
  .one > .txt p{
    margin-top: 14px;
    font-size: 14px;
    margin-bottom: 20px;
    color: #999;
  }
  .one > .txt h2{
    display: inline-block;
    font-size: 24px;
    color: #333;
    line-height: 24px;
    font-weight: normal;
    height: 24px;
  }
  .one{
    padding-top: 40px;
    width: 1180px;
    margin: 0 auto;
  }

  .sidebar ul li:hover{
    border-bottom: solid 2px rgb(34, 169, 255);
    color: rgb(34, 169, 255);
  }
  .sidebar ul li:first-child{
    margin-left: 0;
  }
  .sidebar ul li{
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    line-height: 60px;
    font-size: 14px;
    color: #fff;
    border-bottom: solid 2px rgba(0, 0, 255, 0);
    margin-left: 97px;
    margin-top: 2px;
  }
  .sidebar ul{
    width: 1180px;
    margin: 0 auto;
  }
  .sidebar{
    height: 63px;
    border-bottom: 1px solid #ebebeb;
    background-color: #010101;
  }
  .banner > div span:hover{
    background-color: white;
    color: #000;
  }
  .banner > div span{
    color: #FFF;
    border: 1px solid #FFF;
    line-height: 36px;
    padding: 0 50px;
    display: inline-block;
    cursor: pointer;
  }
  .banner > div p{
    font-size: 14px;
    line-height: 32px;
    margin-bottom: 60px;
  }
  .banner > div h1{
    font-size: 48px;
    line-height: 60px;
    font-weight: normal;
    margin: 52px 0 30px;
  }
  .banner > div{
    width: 1180px;
    margin: 0 auto;
    color: white;
  }
  .banner{
    height: 345px;
    background-image: url("https://bce.bdstatic.com/portal/img/solution/short_video/banner_28da5f14.png") ;
    border-top: solid 1px rgba(153, 153, 153, 0.42);
  }
  .viveopage{
  }
</style>
