<template>
    <div id="ContentOne">
      <div class="content">
        <img src="../assets/ContentOne/bg-line_dbf55ac6.png" alt="">
        <div class="left">
          <span class="tiansuan" @click="change($event)">
            天智
            <img src="../assets/ContentOne/ai_f6a4b780.png" alt="">
          </span>
          <span class="tianxiang" @click="change($event)">
            天象
             <img src="../assets/ContentOne/bigdata_07b2eb0b.png" alt="">
          </span>
          <span class="jichu" @click="change($event)">基础云
             <img src="../assets/ContentOne/iot_8bec7580.png" alt="">
          </span>
          <span class="tiangong" @click="change($event)">天工
             <img src="../assets/ContentOne/media_728618ba.png" alt="">
          </span>

           <transition name="show">
             <div class="ceng1" v-if="bool">
               <div class="ceng2">
                 <span>{{ ctenter }}</span>
               </div>
             </div>
           </transition>
        </div>
       <transition name="show2">
         <div class="right" v-if="bool2">
           <span class="hh">{{ info.h1 }}</span>
           <p>{{ info.p }}</p>
           <span class="but">{{ info.span }}</span>
           <ul>
             <li v-for="(ele,ins) in info.play" :key="'index' + ins">
               <span>{{ ele.title }}</span>
               <small>{{ ele.small }}</small>
             </li>
           </ul>
         </div >
       </transition>
      </div>
    </div>
</template>

<script>
    import info from '../jsons/ContentOne'
    export default {
        data(){
          return {
            info:info[0],
            ctenter:'天算',
            bool:true,
            bool2:true
          }
        },
      methods:{
          change(ev){
            var cat = ev.target.parentNode.innerText
            this.ctenter = cat
            this.bool = false
            setTimeout(() => {
              this.bool = true
            },500)
            info.forEach((item,index) => {
              if (item.id == cat){
                  this.info = item
              }
            })

            this.bool2 = false
            setTimeout(() => {
              this.bool2 = true
            },500)


          }

      }
    }
</script>

<style scoped>
  .show2-enter{
    opacity: 0;
    transform: translateY(50px);
  }
  .show2-leave-to{
    opacity: 0;
    transform: translateY(50px);
  }
  .show2-enter-active,.show2-leave-active{
    transition:0.5s;
  }

  .show-enter{
    transform: scale(0);
  }
  .show-leave-to{
    transform: scale(0);
  }
  .show-enter-active,.show-leave-active{
    transition: 0.5s;
  }
  #ContentOne{
    margin-top: 50px;

  }
  .content{
    height: 552px;
    width: 1180px;
    margin: 0 auto;
    position: relative;
  }
  .content > img{
    display: block;
    height: 552px;
    position: absolute;
    left: -500px;
  }
  .left{
    float: left;
    width: 65%;
    position: relative;
  }
  .left > span{
    cursor: pointer;
    text-align: center;
    display: block;
    width: 55px;
    line-height: 55px;
    border: solid 1px #999;
    border-radius: 50%;
    font-size: 13px;
    background-color: white;
  }
  .left span img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: none;
  }
  .tiansuan{
    position: absolute;
    left: 0px;
    top: 146px;
  }.tiansuan:hover img{
    display: block;
     }
  .tianxiang{
    position: absolute;
    left: 176px;
    top: 30px;
  }.tianxiang:hover img{
     display: block;
   }
  .jichu{
    position: absolute;
    left: 435px;
    top: 108px;
  }.jichu:hover img{
     display: block;
   }
  .tiangong{
    position: absolute;
    left: 524px;
    top: 390px;
  }.tiangong:hover img{
     display: block;
   }
   .left .ceng1{
     text-align: center;
     position: relative;
     width: 280px;
     height: 280px;
     border-radius:50%;
     box-shadow:  0 0 60px #28c9ff;
     top: 160px;
     left: 139px;
     padding-top: 38px;
   }
  .left .ceng1 .ceng2{
    width: 202px;
    height: 202px;
    border-radius:50%;
    box-shadow:  0 0 60px #28c9ff;
    margin: 0 auto;
    padding-top: 65px;

  }
  .left .ceng1 .ceng2 span{
    display: block;
    width: 76px;
    height: 76px;
    background-color: #567eff;
    border-radius:50%;
    padding-top: 25px;
    margin: 0 auto;
    color: white;
    box-shadow:  0 0 40px #28c9ff;
  }
  .right{
    float: right;
    width:35%;
  }
  .right span{
    display: block;

  }
  .right .hh{
    font-size: 24px;
    line-height: 40px;
    color: #333;
    margin-bottom: 20px;
    font-weight: normal;
  }
  .right p{
    font-size: 14px;
    line-height: 26px;
    color: #666;
  }
  .right .but{
    transition:0.5s;
    cursor: pointer;
    color: #666;
    font-size: 14px;
    display: block;
    width: 157px;
    height: 36px;
    border: 1px solid #7D7D7D;
    text-decoration: none;
    text-align: center;
    line-height: 34px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .right .but:hover{
    color: white;
    background-color: blue;
    border: 1px solid blue;
  }
  .right ul li span{
    margin: 0;
    font-size: 16px;
    line-height: 30px;
    color: #333;
  }
  .right ul li small{
    font-size: 14px;
    line-height: 26px;
    color: #666;
    margin: 0;
  }
  .right ul li {
    margin-bottom: 10px;
  }



</style>
