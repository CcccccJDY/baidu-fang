<template>
    <div id="index">
      <header>
        <HeaderNav></HeaderNav>
      </header>
      <div class="main">
        <BannerCom></BannerCom>
        <ContentOne></ContentOne>
        <ContentTwo></ContentTwo>
        <ContentThree></ContentThree>
        <ContentFore></ContentFore>
        <ContentFive></ContentFive>
        <ContentSix></ContentSix>
        <!--<ContentEvent></ContentEvent>-->
        <ContentEight></ContentEight>
        <FooterNav></FooterNav>
      </div>
    </div>
</template>

<script>
  import HeaderNav from '../components/HeaderNav'
  import BannerCom from '../components/BannerCom'
  import ContentOne from '../components/ContentOne'
  import ContentTwo from '../components/ContentTwo'
  import ContentThree from  '../components/ContentThree'
  import ContentFore from '../components/ContentFore'
  import ContentFive from '../components/ContentFive'
  import ContentSix from '../components/ContentSix'
  import ContentEvent from '../components/ContentSeven'
  import ContentEight from '../components/ContentEight'
  import FooterNav from '../components/FooterNav'
    export default {
      components:{
        HeaderNav,
        BannerCom,
        ContentOne,
        ContentTwo,
        ContentThree,
        ContentFore,
        ContentFive,
        ContentSix,
        ContentEvent,
        ContentEight,
        FooterNav
      }
    }
</script>

<style scoped>
  #index{
  }
header{
  width: 100%;
  position: fixed;
  z-index: 20;
  top: 0;
}
  .main{
    margin-top: 52px;
  }
</style>
