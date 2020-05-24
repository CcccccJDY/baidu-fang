<template>
    <div class="headerchildren" @mouseleave="hhh">
      <ul v-for="(item, index) in list" :key="'ins' + index">
        <li v-for="(info,ins) in item" :key="'index' + ins"  >
          {{ info }}
        </li>
      </ul>
    </div>
</template>

<script>
    import list from '../jsons/HeaderList'
    export default {
        data(){
          return {
            list:list.allbig
          }
        },
      methods:{
          hhh(){
            this.$emit('chuan',false);
          }
      },
      mounted() {

      }
    }
</script>

<style scoped>
  .headerchildren{
    background-color:#1E1D22;
    padding: 50px 0;
    width: 1000px;
    overflow: hidden;
    padding-left: 50px;
  }
  ul {
    float: left;
    padding: 0 51px;
    border-right: solid 1px #999;
  }
  ul li{
    color: #999;
    font-size: 14px;
    margin-bottom: 12px;
  }
  ul li:first-child{
    color: white;
  }
  ul:last-child{
    border:none;
    margin: 0;
  }
  ul:first-child{
    padding-left: 0;
  }
  .headerchildren{
    position: absolute;
    left: 500px;
  }
</style>
