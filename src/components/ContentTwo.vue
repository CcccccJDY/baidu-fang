<template>
    <div id="contenttwo">
      <div class="content">
        <ul>
          <li v-for="(item,index) in info" :key="'ins' + index" @mouseenter="change(item.id)">
              <span>{{ item.id }}</span>
              <span>{{ item.idChildren }}</span>
          </li>
        </ul>
        <transition name="show">
          <div v-if="show" class="right">
            <span class="ht">{{ infoRight.title }}</span>
            <p>{{ infoRight.p }}</p>
            <span class="btn" @click="jumpViveo(infoRight.title)">{{ infoRight.btn }}</span>
            <span class="same">{{ infoRight.same }}</span>
            <ul>
              <li v-for="(mes,ins) in infoRight.list" :key="'index' + ins" >
                {{ mes }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
    import info from '../jsons/ContentTwo'
    import $ from 'jquery';
    export default {
        data(){
          return{
            info:info,
            infoRight:info[0].info,
            show:true
          }
        },
      methods:{
        jumpViveo(val){
          if (val == '短视频解决方案'){
            location.href = "#/viveo"
          }
        },
        change(str){
          info.forEach((item,index) => {
            if (str == item.id){
              this.infoRight = item.info
            }
          })
          this.show = false
          setTimeout(() => {
            this.show = true
          },200)
        }
      },
      mounted() {
        //  显示第一个li标签
        $('.content > ul li').eq(0).addClass('showBlue');

        //改变标签背景颜色
        $('.content > ul li').hover(function () {
          $(this).addClass('showBlue').siblings().removeClass('showBlue')
        })
      }
    }
</script>

<style scoped>
  #contenttwo{
    width: 100%;
    height: 596px;
    background-image: url("../assets/solution-website_a15a5327.png");
  }
.content{
  height: 100%;
  width: 1180px;
  margin: 0 auto;
}
  .content > ul{
    float: left;
    width: 230px;
    height: 100%;
    padding: 30px 0;
    background-color: #000;
  }
  .content > ul li{
    padding-top: 18px;
    height: 92px;
    border-bottom: solid 1px rgba(153, 153, 153, 0.45);
    padding-left: 36px;
    cursor: pointer;
    transition:0.3s;
  }
  .content > ul li:hover{

    padding-left: 50px;
  }
  .showBlue{
    background-color: #0e93ff;
  }
  .content > ul li:last-child{
    border:none;
  }
.content > ul li span{
  color: white;
  display: block;
}
  .content > ul li span:first-child{
    font-size: 16px;
    line-height: 30px;
  }
  .content > ul li span:last-child{
    font-size: 14px;
    line-height: 26px;
    color: #fff;
    opacity: .4;
  }
  .content .right{
    color: white;
    float: right;
    width: 785px;
  }
  .right{
    margin-top: 100px;
  }
  .right span{
    display: block;
  }
  .right .ht{
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
  }
  .right p{
    line-height: 26px;
    font-size: 14px;
    color: #c6c6c6;
    margin-top: 20px;
  }
  .right .same{
    font-size: 14px;
    line-height: 26px;
    margin-top: 60px;
  }
  .right .btn{
    font-size: 14px;
    width: 157px;
    height: 36px;
    border: 1px solid #D8D8D8;
    display: block;
    margin-top: 30px;
    text-align: center;
    line-height: 34px;
    color: #FFF;
    text-decoration: none;
    opacity: .8;
    transition:0.3s;
    cursor: pointer;
  }
  .right .btn:hover{
    background-color: #0e93ff;
    opacity: 1;
    border: 1px solid  #0e93ff;
  }
  .right ul{
    margin-top: 15px;
  }
  .right ul li{
    display: inline-block;
    width: 150px;
    height: 36px;
    padding: 10px 10px 10px 15px;
    border: 1px solid #7D7D7D;
    font-size: 12px;
    line-height: 14px;
    color: #FFF;
    background-color: #404040;
    background: rgba(64,64,64,0.6);
    opacity: .8;
    font-weight: normal;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition:0.3s;
  }
  .right ul li:hover{
    background-color: #0e93ff;
    opacity: 1;
    border: 1px solid  #0e93ff;
  }
  .show-enter{
    transform: translateY(50px);
    opacity: 0;
  }
  .show-leave-to{
    transform: translateY(50px);
    opacity: 0;
  }
  .show-enter-active, .show-leave-active{
    transition:0.2s;
  }
</style>
