<template>
    <div class="headerchildrentwo" @mouseleave="yinchang">
      <ul>
        <li v-for="(item,index) in list" :key="'ins' + index">
          {{ item }}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          list:['百度智能云生态计划','百度云智学院','点石众智合作计划','产品认证','百度创新中心',' ABC SUMMIT',]
        }
      },
      methods:{
        yinchang(){
          this.$emit('chuan2',false)
        }
      }
    }
</script>

<style scoped>
  .headerchildrentwo{
    position: absolute;
    top: 60px;
    background-color:#1E1D22;
    font-size: 14px;
    padding: 40px 100px;
    left:658px;
  }
  .headerchildrentwo ul li{
    margin-bottom: 15px;
    color: #999;
  }
</style>
