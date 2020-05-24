<template>
  <div class="helppage">
    <div class="bg">
      <HeaderNav></HeaderNav>
      <div class="cent">
        <h1>帮助与支持</h1>
        <p>易读、易懂、易用的产品文档，为您提供更友好、更专业的服务。</p>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in list" :key="'ins' + index">
            <img :src=item.img alt="">
            <div>
              <h2>{{ item.h }}</h2>
              <p>{{ item.p }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="one">
      <div class="txt">
        <h2>轻松上云</h2>
        <p>
          百度智能云平台为计算、存储、网络、大数据、智能多媒体、人工智能、物联网等云产品提供全面的技术服务
        </p>
      </div>
      <ul>
        <li>
          <div>
            <img src="../assets/267f9e2f070828387e3845f0b499a9014c08f119.jpg.png" alt="">
            <h3>连接百度智能云</h3>
          </div>
          <ul>
            <li>
              <span>百度智能云简介</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>百度智能云技术白皮书</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>百度智能云信息安全白皮书</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>联系我们</span>
              <i class="fa fa-angle-right"></i>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <img src="../assets/060828381f30e924db7105d540086e061c95f779.jpg.png" alt="">
            <h3>快速入门</h3>
          </div>
          <ul>
            <li>
              <span>轻松使用百度智能云</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>域名服务</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>备案帮助</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>实名认证</span>
              <i class="fa fa-angle-right"></i>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <img src="../assets/0df3d7ca7bcb0a4679e112dd6763f6246a60af17.jpg.png" alt="">
            <h3>热门解决方案</h3>
          </div>
          <ul>
            <li>
              <span>百度智能云建站解决方案</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>百度智能云金融行业混合解决方案</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>天工智能物联网解决方案</span>
              <i class="fa fa-angle-right"></i>
            </li>
            <li>
              <span>以太坊解决方案</span>
              <i class="fa fa-angle-right"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="two">
      <div class="txt">
        <h2>热门产品文档</h2>
        <p>
          我们提供了最全面的文档、示例和视频帮助您便捷操作
        </p>
      </div>
      <ul>
        <li v-for="(item ,index) in hotList" :key="'ins' + index" v-if="index <= num">
          <img :src=item.img alt="">
          <div>
            <h3>{{ item.h }}</h3>
            <p>{{ item.p }}</p>
            <ul>
              <li v-for="(it,ins) in item.list" :key="'index' + ins">
                {{ it }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <span class="btn" @click="loding">
          查看更多>
        </span>
    </div>
    <div class="three">
      <div class="txt">
        <h2>帮助与服务</h2>
        <p>常用服务和更多资源支持 </p>
      </div>
      <ul>
        <li>
          <img
            src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/2e2eb9389b504fc219a628e1e9dde71191ef6d5d.jpg"
            alt="">
          <div class="toping">
            <div>
              <img
                src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/7aec54e736d12f2e71b1358443c2d5628435689a.jpg"
                alt="">
            </div>
            <h3>自主服务</h3>
            <p>快速查找百度智能云管理服务</p>
            <span class="btn">查看详情</span>
          </div>
        </li>
        <li>
          <img
            src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/d439b6003af33a874a4d9bfeca5c10385343b536.jpg"
            alt="">
          <div class="toping">
            <div>
              <img
                src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/b58f8c5494eef01fe1108321ecfe9925bd317dca.jpg"
                alt="">
            </div>
            <h3>视频教程</h3>
            <p>5分钟视频快速接入产品</p>
            <span class="btn">查看详情</span>
          </div>
        </li>
        <li>
          <img
            src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/b21bb051f81986186461746046ed2e738bd4e634.jpg"
            alt="">
          <div class="toping">
            <div>
              <img
                src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/3bf33a87e950352a6364beec5f43fbf2b3118bc9.jpg"
                alt="">
            </div>
            <h3>问答社区</h3>
            <p>在百度智能云社区中发布问题并寻找答案</p>
            <span class="btn">查看详情</span>
          </div>
        </li>
        <li>
          <img
            src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/8644ebf81a4c510f4af279fe6c59252dd42aa524.jpg"
            alt="">
          <div class="toping">
            <div>
              <img
                src="https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/e1fe9925bc315c60d5e1f00b81b1cb13485477da.jpg"
                alt="">
            </div>
            <h3>建议反馈</h3>
            <p>留下您的建议 我们会做的更好</p>
            <span class="btn">查看详情</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="fore">
      <h2>注册百度智能云，体验专业的云计算服务</h2>
      <span>现在注册</span>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  import list from '../jsons/HelpPage'
  import hotList from '../jsons/HelpPage2'
  import $ from 'jquery'
  import FooterNav from '../components/FooterNav'

  export default {
    data() {
      return {
        list,
        hotList,
        num: 5
      }
    },
    components: {
      HeaderNav,
      FooterNav
    },
    methods: {
      loding() {
        if (this.num + 1 < this.hotList.length) {
          $('.two .btn').text('正在加载......')
          setTimeout(() => {
            this.num += 6
          }, 2000)
        }
      }
    },
    watch: {
      num: (val, oldval) => {
        if (val + 1 == hotList.length) {
          $('.two .btn').text('已全部加载')
        }
      }
    }
  }
</script>

<style scoped>
  .helppage >>> .headernav{
    z-index: 20;
    opacity: 1 !important;
  }
  .fore span{
    width: 160px;
    height: 38px;
    background: #108CEE;
    font-size: 14px;
    color: #FFF;
    text-align: center;
    line-height: 38px;
    display: block;
    margin: 30px auto 0 auto;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  .fore h2{
    font-size: 30px;
    color: rgba(0,0,0,0.85);
    text-align: center;
    line-height: 52px;
    font-weight: normal;
  }
  .fore{
    padding-top: 60px;
    height: 240px;
    background-image: url("https://portal-cms-bos.cdn.bcebos.com/fex/%70%69%63/item/d52a2834349b033b04b2233c19ce36d3d539bd1a.jpg");
    background-size: 100% 100%;
  }
  .three > ul > li > div{
    width: 100%;
    background-color: white;
   position: absolute;
    height: 240px;
    bottom: -70px;
    transition: 0.5s;
  }
  .three > ul > li > div span:hover{
    background-color: black;
    color: white;
  }
  .three > ul > li > div span{
    text-align: center;
    display:block;
    width: 130px;
    height: 38px;
    color: rgba(0,0,0,0.85);
    font-size: 14px;
    line-height: 36px;;
    border-radius: 100px;
    border: 1px solid rgba(0,0,0,0.2);
    cursor: pointer;
    transition: 0.5s;
    margin: 0 auto;
    margin-top: 100px;
    opacity: 0;
  }
  .three > ul > li > div p{
    opacity: .6;
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 26px;
    margin: 10px 0 0 0;
  }
  .three > ul > li > div  h3{
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 36px;
    margin: 20px 0 0 0;
    font-weight: normal;
  }
  .three > ul li > div > div img{
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-size: 32px 32px;
  }
  .three > ul li > div > div{
    background: #FFF;
    border: 0 solid #EBEBEB;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: -40px auto 0 auto;
    position: relative;
  }
  .three > ul li img {
    position: relative;
    display: block;
    width: 100%;
    top: 0;
  }
  .three > ul li:hover .btn{
    margin-top:30px;
    opacity: 1;
  }
  .three > ul li:hover .toping {
    bottom: 0;
  }
  .three > ul li {
    width: 280px;
    height: 352px;
    border: solid 1px rgba(153, 153, 153, 0.25);
    position: relative;
    overflow: hidden;
    margin-right: 20px;
    float: left;
  }
  .three > ul li:last-child{
    margin-right: 0;
  }

  .three > ul {
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }

  .three .txt p {
    opacity: .4;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 26px;
    margin: 10px 0 40px 0;
  }

  .three .txt h2 {
    opacity: .85;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 52px;
    margin: 80px 0 0 0;
    font-weight: normal;
  }

  .three .txt {
    text-align: center;
  }
  .three{
    padding-bottom: 80px;
  }

  .two .btn:hover {
    border: 1px solid rgb(0, 0, 0);
    color: #000;
  }

  .two .btn {
    transition: 0.3s;
    display: block;
    width: 140px;
    height: 38px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    line-height: 36px;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
  }

  .two > ul > li > div ul {
    margin-top: 20px;
  }

  .two > ul > li > div ul li:hover {
    color: blue;
  }

  .two > ul > li > div ul li {
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 15px;
    border-right: solid 1px rgba(153, 153, 153, 0.31);
  }
  .two > ul > li > div ul li:last-child{
    border-right: none;
  }
  .two > ul > li > div ul li:first-child {
    padding-left: 0;
  }

  .two > ul > li > div p {
    opacity: .4;
    font-size: 14px;
    color: #000;
    line-height: 26px;
    margin: 0;
  }

  .two > ul > li > div h3 {
    opacity: .85;
    font-size: 18px;
    color: #000;
    line-height: 36px;
    margin: 0;
    font-weight: normal;
  }

  .two > ul > li > div {
    float: left;
  }

  .two > ul > li img {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 30px;
  }

  .two > ul {
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
  }

  .two > ul > li {
    width: 580px;
    height: 170px;
    float: left;
    background-color: white;
    margin-right: 20px;
    padding: 30px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .two > ul > li:nth-child(2n) {
    margin: 0;
  }

  .two .txt {
    text-align: center;

  }

  .two .txt p {
    opacity: .4;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 26px;
    margin: 10px 0 40px 0;
  }

  .two .txt h2 {
    opacity: .85;
    filter: alpha(opacity=85);
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 52px;
    font-weight: normal;
  }

  .two {
    padding-bottom: 40px;
    background-color: #f5f5f5;
    padding-top: 50px;
  }

  .helppage {
    position: relative;
  }

  .bg {
    background-image: url("../assets/Banner/b151f8198618367ac23ca33b22738bd4b21ce59b.jpg.png");
    background-size: 100% 100%;
    height: 480px;
  }

  .helppage >>> .headernav {
    opacity: 0.8;
  }

  .bg .cent h1 {
    margin: 93px 0 0 0;
    font-size: 42px;
    color: #FFF;
    text-align: center;
    line-height: 64px;
    font-weight: normal;
  }

  .bg .cent p {
    margin: 20px 0 0 0;
    opacity: .8;
    filter: alpha(opacity=80);
    font-size: 18px;
    color: #FFF;
    text-align: center;
    line-height: 36px;
  }

  .list {
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    bottom: -104px;
    height: 100px;
  }

  .list > ul {
    overflow: hidden;
    width: 1180px;
    margin: 0 auto;
    height: 100%;
  }

  .list > ul > li {
    cursor: pointer;
    height: 100%;
    float: left;
    overflow: hidden;
    width: 20%;
    padding-top: 20px;
    padding-left: 30px;
    border-right: solid 1px rgba(214, 214, 214, 0.18);
    transition: 0.5s;
  }

  .list > ul > li:hover {
    background-color: rgba(32, 185, 255, 0.29);
  }

  .list > ul > li img {
    float: left;
    display: block;
    width: 32px;
    height: 32px;
    background-size: 32px 32px;
    margin: 10px 14px 0 0;
  }

  .list > ul > li:last-child {
    border: none;
  }

  .list > ul > li > div {
    float: left;
    width: 155px;
  }

  .list > ul > li > div h2 {
    font-size: 16px;
    color: #FFF;
    line-height: 30px;
    margin: 0;
    font-weight: normal;
  }

  .list > ul > li > div p {
    opacity: .6;
    font-size: 12px;
    color: #FFF;
    line-height: 24px;
    margin: 0;
  }

  .one {
    height: 573px;
  }

  .one .txt {
    text-align: center;
  }

  .one .txt h2 {
    opacity: .85;
    font-size: 30px;
    color: #000;
    text-align: center;
    line-height: 52px;
    margin: 80px 0 0 0;
    font-weight: normal;
  }

  .one .txt p {
    opacity: .4;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 26px;
    margin: 10px 0 40px 0;
  }

  .one > ul > li {
    width: 380px;
    height: 365px;
    float: left;
    margin-right: 20px;
  }

  .one > ul > li:last-child {
    margin: 0;
  }

  .one > ul > li > div {
    width: 380px;
    height: 100px;
    position: relative;
    text-align: center;
  }

  .one > ul > li > div img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
  }

  .one > ul > li > div h3 {
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    line-height: 100px;
    font-weight: normal;
  }

  .one > ul {
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
    height: 366px;

  }

  .one > ul > li > ul {
    border: solid 1px rgba(153, 153, 153, 0.51);
  }

  .one > ul > li > ul > li {
    width: 355px;
    line-height: 65px;
    overflow: hidden;
    margin: 0 auto;
    border-bottom: solid 1px rgba(153, 153, 153, 0.24);
    padding: 0 5px;
    cursor: pointer;
  }

  .one > ul > li > ul > li:last-child {
    border: none;
  }

  .one > ul > li > ul > li:hover span {
    color: #2788ff !important;
  }

  .one > ul > li > ul > li:hover i {
    margin-right: 15px;
  }

  .one > ul > li > ul > li span {
    float: left;
    line-height: 65px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    display: block;
    padding: 0 20px;
    position: relative;
    text-decoration: none;
  }

  .one > ul > li > ul > li i {
    font-size: 20px;
    margin-top: 23px;
    float: right;
    color: rgba(0, 0, 0, 0.6);
    transition: 0.5s;
  }

</style>
