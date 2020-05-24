<template>
  <div class="banner">
   <div class="topImg">
     <el-carousel trigger="click" height="600px">
       <el-carousel-item>
         <div class="bg">
           <img @click="jupAbc" src="../assets/Banner/11385343fbf2b21133a90614c48065380dd78ee1.jpg.png" alt="">
         </div>
       </el-carousel-item>
       <el-carousel-item>
         <div class="bg2">
           <img src="../assets/Banner/0bd162d9f2d3572cb3c9d16d8713632762d0c35c.jpg.png" alt="">
         </div>
       </el-carousel-item>
       <el-carousel-item>
         <div class="bg3">
           <img src="../assets/Banner/0bd162d9f2d3572cb3c9d16d8713632762d0c35c.jpg.png" alt="">
         </div>
       </el-carousel-item>
       <el-carousel-item>
         <div class="bg4">
           <div class="top">
             <div class="left">
               <span>智能云小程序解决方案重磅上线</span>
               <span>低门槛工具/高性能环境/多样化生态，助力企业快速拥抱千亿流浪</span>
               <span @click="jupSolve">立即查看</span>
             </div>
             <img  src="../assets/Banner/10dfa9ec8a13632710805c8a9f8fa0ec08fac71e.jpg.png" alt="">
           </div>
         </div>
       </el-carousel-item>
       <el-carousel-item>
         <div class="bg4">
           <div class="top">
             <div class="left">
               <span>智感超清重磅发售，领券抢先体验</span>
               <span>智能编码、主观增强、超分辨率——以更低码率获取更高清画质’</span>
               <span>立即查看</span>
             </div>
             <img src="../assets/Banner/728da9773912b31b4f0f048c8818367adab4e131.jpg.png" alt="">
           </div>
         </div>
       </el-carousel-item>
       <el-carousel-item>
         <div class="bg4">
           <div class="top">
             <div class="left">
               <span>百度智能云流式计算BSC火热公测中</span>
               <span>提供云端的流式数据实时处理的完全托管式服务</span>
               <span>立即查看</span>
             </div>
             <img src="../assets/Banner/9825bc315c6034a8cc0f7124c5134954082376a2.jpg.png" alt="" style="width: 500px;">
           </div>
         </div>
       </el-carousel-item>
     </el-carousel>
   </div>
    <div class="bom">
      <ul>
        <li>
          <img style="margin-top: 30px;" src="../assets/Banner/bcd_ebb0512b.png" alt="">
          <div>
            <span>免费体验馆</span>
            <span>免费上云&nbsp轻松实践</span>
          </div>
        </li>
        <li>
          <img src="../assets/Banner/conference_4706e4f3.png" alt="">
          <div>
            <span>.com域名特价抢</span>
            <span>新用户25元起</span>
          </div>
        </li>
        <li>
          <img src="../assets/Banner/newFeatures_c8355b38.png" alt="">
          <div>
            <span>体验版高稳定虚机</span>
            <span>新客专享6元体验3月</span>
          </div>
        </li>
        <li>
          <img style="margin-top: 29px" src="../assets/Banner/newUser_544968a2.png" alt="">
          <div>
            <span>新功能上线</span>
            <span>您的关注，我们的动力</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        methods:{
          jupAbc(){
            location.href = '#/abcpage'
          },
          jupSolve(){
            location.href = '#/solvepage'
          }
        }
    }
</script>

<style scoped>
.banner{
  position: relative;
}
.banner .topImg img{
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
}
  .bg{
    width: 100%;
    height: 100%;
    background-image: url("../assets/Banner/54fbb2fb43166d223bbb96ce482309f79152d298.jpg.png");
  }
  .bg2{
    width: 100%;
    height: 100%;
    background-image: url("../assets/Banner/5243fbf2b21193135016b20168380cd791238d2e.jpg");
  }
.bg3{
  width: 100%;
  height: 100%;
  background-image: url("../assets/Banner/54fbb2fb43166d223bbb96ce482309f79152d298.jpg.png");
}
.bg4 {
  width: 100%;
  height: 100%;
  background-color: #000;
}

.top img{
  display: block;
  width: 100%;
  height: 100%;
}
.bg4 > .top{
  width:1180px;
  margin: 0 auto;
  overflow: hidden;
}
.bg4 > .top .left{
  float: left;
  margin-top: 100px;
}
.bg4 > .top .left span:first-child{
  display: block;
  line-height: 64px;
  font-size: 42px;
  color: #FFF;
  left: 0;
  top: -40px;
  font-weight: 400;
}
  .bg4 > .top .left span:nth-child(2){
    display: block;
    line-height: 40px;
    font-size: 18px;
    color: #FFF;
    margin-top: 20px;
  }
  .bg4 > .top .left span:last-child{
    margin-top:50px;
    font-size: 16px;
    height: 38px;
    width: 152px;
    color: #fff;
    display: inline-block;
    text-align: center;
    border: solid 1px #ffffff;
    padding-top: 7px;
    cursor: pointer;
    transition:0.3s;
  }
.bg4 > .top .left span:last-child:hover{
  background-color: white;
  color: #000;
}
.bg4 > .top img{
  display: block;
  width: 550px;
  height: 360px;
  float: right;
  margin-top: 70px;
}
  .bom{
    padding-left: 65px;
    width:1180px;
    left: calc(50% - 590px);
    position: absolute;
    bottom: 0;
    z-index: 10;
  }
.bom ul{
  overflow: hidden;
}
.bom ul li{
  padding-left: 29px;
  float: left;
  width: 25%;
  overflow: hidden;
  height: 110px;
  cursor: pointer;
}
.bom ul li:hover{
  background-color: rgba(0, 0, 0, 0.28);
}
.bom ul li img{
  float: left;
  margin-top: 36px;
}
.bom ul li > div{
  float: left;
  margin-top: 36px;
  margin-left: 20px;
}
.bom ul li span{
  display: block;
  margin-bottom: 8px;
}
  .bom ul li span:first-child{
    margin-top: 0;
    color: #FFF;
    font-size: 14px;
  }
  .bom ul li span:last-child{
    color: #999;
    font-size: 14px;
  }
  .banner >>> .el-carousel__indicators{
    margin-bottom: 130px ;
  }
.banner >>> .el-carousel__indicators li button{
  height: 3px;
}

</style>
