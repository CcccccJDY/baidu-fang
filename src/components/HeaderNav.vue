<template>
    <div class="headernav"  @click="widthNum = 0 , opacity = 0 ,iLeft = 20">

      <transition name="dong">
          <HeaderChildren @chuan="shou" class="aaa" v-if="isShow" ></HeaderChildren>
        <HeaderChildren1 @chuan2="shou2" v-if="isShow2"></HeaderChildren1>
        </transition>

      <div class="bg">
        <a href="#/"><img src="../assets/HeaderImgs/logo_white.2x_8acc8a0d.png" alt="" ></a>
        <ul>
          <li v-for="(item,index) in list.list" :key="'ins' + index" >
            <a  href="" @mouseover="show($event)" @click.prevent="jump(item)">
              {{ item }}
            </a>
          </li>
        </ul>
        <div class="search">
          <transition name="serShow">
            <input :style="{width:widthNum + 'px',opacity}" type="text"@click.stop="widthNum = 200 , opacity = 1 ,iLeft = 180">
          </transition>
          <i @click.stop="widthNum = 200 , opacity = 1 ,iLeft = 180" class="fa fa-search" :style="{left:iLeft + 'px'}"></i>
        </div>
       <div class="right">
         <ul>
           <li><a href="#/login">登陆</a></li>
           <li><a href="#/zhuce">注册</a></li>
           <li><a href="">备案</a></li>
           <li><a href="">论坛</a></li>
         </ul>
         <div>管理控制台</div>
       </div>
      </div>

    </div>
</template>

<script>
    import list from '../jsons/HeaderList'
    import HeaderChildren from '../components/HeaderChildren'
    import HeaderChildren1 from '../components/HeaderChildrentwo'
    export default {
    data(){
      return{
        //头部导航数据
        list,
        //搜索input显示布尔值
        widthNum:0,
        opacity: 0,
        iLeft:20,
        //

        isShow:false,
        isShow2:false
      }
    },
      components:{
        HeaderChildren,
        HeaderChildren1
      },
      mounted(){
      },
      methods:{
      show(ev){
        if (ev.target.innerText == '云市场') {
          this.isShow = true
        }else{
          this.isShow = false
        }
        if (ev.target.innerText == '合作与生态') {
          this.isShow2 = true
        }else {
          this.isShow2 = false
        }
      },
        shou(val) {
          console.log(val)
          this.isShow = val
        },
        shou2(val){
          this.isShow2 = val;
        },
        jump(val){
          if (val == '最新活动'){
            location.href = '#/activity'
          }
          if (val == '帮助与支持'){
            location.href = '#/help'
          }
        }
      }
    }
</script>

<style scoped>
.headernav{
  background-color:#1E1D22;
  position: relative;
}
.headernav:hover{
  background-color: #000;
}
  .bg{
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .bg img{
    display:block;
    float: left;
    margin-top: 17px;
    width: 122px;
    height: 26px;
  }
.bg  ul{
  float: left;
}
.bg  ul li {
  display:inline-block;
  height: 100%;
  padding: 0;
  height: 63px;
  margin-left: 22px;
  text-align: center;
}
.bg  ul li a{
  display: block;
  color: #ffffff;
  font-size: 14px;
  position: relative;
line-height: 60px;
}
.bg  ul li a:hover{
  color: blue;
  border-bottom: solid 3px blue;
}
.bg  ul li a:hover span{
  display: block;
}
.bg  ul li a span{
  content: '';
  display: none;
  height: 4px;
  width: 150%;
  background-color: blue;
  position: absolute;
  bottom: 0;
  left: -23%;
}
  .bg .search{
    color: #ffffff;
    float: left;
    margin-top: 14px;
    position: relative;
    margin-left: 15px;
  }
  .bg .search input{
    background-color: transparent;
    font-size: 12px;
    padding: 0 0 0 20px;
    line-height: 30px;
    margin-left: 10px;
    border: solid 1px #ffffff;
    border-radius:20px;
    color: white;
    transition:0.2s
  }
.bg .search i{
  position: absolute;
  font-size: 22px;
  transition:0.2s;
  top: 5px;
  cursor: pointer;
}
  .right{
    float: right;
    overflow: hidden;
  }
.right ul {
  float: left;
}
.right > div{
  float: left;
  color: #999;
  margin-left: 30px;
  margin-top: 14px;
  border: solid 1px #999;
  padding: 5px 18px;
}
.right > div:hover{
  color: white;
  border: solid 1px #23b3ff;
  background-color: #23b3ff;
  cursor: pointer;
}
  .headernav >>> .aaa{
    top: 60px;
    position: absolute;
    left: 567px;
  }
  .dong-enter{
    opacity: 0;
  }
.dong-enter-to{
  opacity: 1;
}
.dong-enter-active,.dong-leave-active{
  transition: 0.2s;
}
  .dong-leave-to{
    opacity: 0;
  }



</style>
