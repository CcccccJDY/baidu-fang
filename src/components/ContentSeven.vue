<template>
    <div class="contentseven">
      <div class="content">
        <div class="left">
          <h2>安全合规的云计算服务</h2>
            <p>权威认证的云计算服务，充分保障您的业务实践与业务安全</p>
        </div>
        <div class="right">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">

            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContentSeven"
    }
</script>

<style scoped>
  .content{
    width: 1180px;
    margin: 0 auto;
    height: 505px;
  }
  .left{
    width: 266px;
    margin-top: 130px;
  }
  .left h2{
    font-size: 24px;
    line-height: 33px;
    color: #333;
    font-weight: normal;
  }
  .left p{
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 26px;
  }
</style>
