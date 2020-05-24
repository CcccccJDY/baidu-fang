<template>
    <div class="contenteight">
      <div class="content">
        <h3>免费体验馆</h3>
        <p>新人体验战全新升级 30+款产品免费体验 轻松上云实践 每天早上9点限量开抢</p>
        <span>立即领取</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContentEight"
    }
</script>

<style scoped>
.contenteight{
  height: 241px;
  background-image: url("../assets/ContentFiveImg/register_bg_05e86992.png");
  background-size: 100% 100%;
}
  .content{
    text-align: center;
    padding-top: 58px;
  }
  .content h3{
    font-size: 24px;
    line-height: 33px;
    font-weight: normal;
    color: #ffffff;
  }
  .content p{
    margin-top: 10px;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
  }
  .content span{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    width: 157px;
    height: 36px;
    border: 1px solid #fff;
    line-height: 34px;
    margin-top: 25px;
    text-align: center;
    cursor: pointer;
    transition:0.2s;
  }
.content span:hover{
  background-color: white;
  color: #15adff;
}
</style>
