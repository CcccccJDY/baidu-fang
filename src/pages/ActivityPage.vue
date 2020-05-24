<template>
  <div class="activity">
      <HeaderNav></HeaderNav>
      <div class="banner">
        <img src="../assets/studenttext_06a5bf73.png" alt="">
      </div>
      <div class="one">
        <ul>
          <li>[ 热门活动 ] 华北新区开放 全场云服务器2折促销</li>
          <li>[ 新人专享 ] 百度智能云服务器新人专享0元，免费领！</li>
          <li>[ 爆款特惠 ] 高稳定云虚机，新人6元/3个月</li>
        </ul>
      </div>
      <div class="two">
        <ul>
          <li v-for="(item ,index) in info" :key="'ins' + index" @click="change(item.title)">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="three">
        <ul>
          <li v-for="(mes,ins) in info2" :key="'index' + ins">
            <img src="../assets/hot-hover_cea1ad8e.png" alt="">
            <h3>{{ mes.h }}</h3>
            <span class="hot" v-if="mes.hot">{{ mes.hot }}</span>
            <p>{{ mes.span }}</p>
            <span class="btn1">{{ mes.btn1 }}</span>
            <span class="btn2">{{ mes.btn }}</span>
            <i></i>
          </li>
        </ul>
      </div>
    <FooterNav></FooterNav>
  </div>

</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  import info from '../jsons/Activity'
  import $ from 'jquery'
  import FooterNav from '../components/FooterNav'

  export default {
    data() {
      return {
        info,
        info2: info[0].data
      }
    },
    methods: {
      change(item) {
        console.log(item)
        info.forEach((it,ins) => {
          if (item == it.title) {
            this.info2 = it.data;
          }
        })
      }
    },
    components: {
      HeaderNav,
      FooterNav,
    },
    mounted() {
      $('.two ul li').eq(0).addClass('changeLi')
      $('.two ul li').click(function () {
        $(this).addClass('changeLi').siblings().removeClass('changeLi')
      })
    }
  }
</script>

<style scoped>

  .activity {
    background: #f9f9f9;
  }

  .banner {
    background-image: url("../assets/studentbg_c3018531.png");
    background-size: 100% 100%;
    position: relative;
    z-index: 5;
  }
  .banner img{
    display: block;
    width: 100%;
    height: 100%;
  }

  .one {
    background-color: #000000;
    height: 40px;
    margin-top: -4px;
    color: white;
    font-size: 14px;
    position: relative;
    z-index: 9;
  }

  .one ul {
    width: 1180px;
    margin: 0 auto;
    padding-top: 9px;
  }

  .one ul li {
    cursor: pointer;
    display: inline-block;
    margin-right: 131px;
  }

  .one ul li:hover {
    color: blue;
  }

  .one ul li:last-child {
    margin: 0;
  }

  .two {
    background-color: #2D2E30;

  }

  .two ul {
    width: 1180px;
    margin: 0 auto;
  }

  .two ul li {
    color: #CFD8DF;
    text-align: center;
    display: inline-block;
    width: 295px;
    line-height: 60px;
    cursor: pointer;
  }

  .changeLi {
    background-color: #2d9bff;
    color: white !important;
  }

  .three {
    width: 1180px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .three:after{
    content: '';
  }

  .three ul {
    display: flex;
    flex-wrap: wrap;;
  }

  .three ul:after {
    content: "";
    position: absolute;
    clear: both;
  }

  .three ul li {
    width: 380px;
    height: 250px;
    margin-right: 20px;
    padding: 50px 39px 0 20px;
    position: relative;
    background-color: white;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.4s;
  }

  .three ul li:last-child:after {
    content: '';
    display: block;
    clear: both;
  }

  .three ul li:hover {
    box-shadow: 0 0 20px #999;
    transform: translateY(-15px);
  }

  .three ul li img {
    display: block;
    width: 94px;
    height: 99px;
    position: absolute;
    right: 0;
    opacity: 0.3;
  }

  .three ul li:hover img {
    opacity: 1;
  }

  .three ul li:nth-child(3n) {
    margin-right: 0;
  }

  .three ul li h3 {
    font-size: 20px;
    color: #535353;
    line-height: 36px;
    font-weight: normal;
    display: inline-block;
  }

  .three ul li .hot {
    width: 33px;
    height: 16px;
    background-color: #FF6638;
    color: #fff;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin: 0 0 6px 10px;
  }

  .three ul li p {
    font-size: 16px;
    color: #999;
    line-height: 24px;
    height: 35px;
    margin: 7px 0 30px 0;
  }

  .three ul li .btn1 {
    padding: 3px 7px;
    border: 1px solid #108cee;
    font-size: 12px;
    color: #108CEE;
    margin-right: 10px;
  }

  .three ul li .btn2 {
    font-size: 12px;
    color: #FE8E6C;
    padding: 3px 7px;
    border: 1px solid #FE8E6C;
  }

  .three ul li i {
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.7s;
    border: solid 0 blue;
  }

  .three ul li:hover i {
    border: solid 1px blue;
    width: 100%;
  }

  .activity >>> .footernav{
    margin-top: 50px;
  }


</style>
