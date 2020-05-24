<template>
    <div class="contentfore">
     <div class="content">
       <div class="top">
         <h2>技术领先的绿色低能耗数据中心</h2>
         <p>聚集多项创新技术，为各项业务提供强大的数据支持</p>
       </div>
       <div class="txt">
         <div>
           <p>
             为各项业务提供强大数据支持 百度亦庄新一代搜索数据中心位于北京亦庄经济技术开发区，是百度华北最重要的网络超级核心节点之一。</p>
           <p>
             2017年5月，百度亦庄数据中心以90.5的高分通过UPTIME M&O认证，标志亦庄运维水平达到国际一流水平。各项创新技术研发及应用，大幅降低数据中心能耗，节约运营成本，提升公司核心竞争力，为百度重要业务提供强大支持，为国家建设绿色低碳、节能环保数据中心做出贡献。
           </p>
         </div>
         <img src="../assets/data-center-img_1f33c660.png" alt="">
       </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: "ContentFore"
    }
</script>

<style scoped>
.contentfore{
  width: 100%;
  background-image: url("../assets/data-center_fabcc7e9.png");
  height: 550px;
}
.content{
  width: 1180px;
  margin: 0 auto;
}
.top{
  text-align: center;
  padding-top: 50px;
}
  .top h2{
    color: #FFF;
    font-size: 24px;
    line-height: 40px;
    font-weight: normal;
  }
  .top > p{
    color: #FFF;
    opacity: .6;
    margin-top: 4px;
    font-size: 14px;
  }
  .txt{
    margin-top:92px;
    position: relative;
  }
  .txt img{
    display: block;
    position: absolute;
    top: 15px;
    right: 0;
    width: 578px;
    height: 352px;
  }
.txt > div{
  color: #CCC;
  width: 490px;
  font-size: 14px;
  font-weight: normal;
  line-height: 26px;
  margin: 0;
  padding: 0;

}
.txt > div p:last-child{
  margin-top: 25px;
}
</style>
