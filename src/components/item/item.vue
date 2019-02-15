<template>

    <div class="item">
      <header>
        <span class="iconfont icon-arrowright" v-on:click="goBack"></span>
        <em>{{$route.params.personName}}</em>
      </header>
      <section>
        内容
        <br>
        <p>展示transition过渡效果</p>
        <button @click="changeIsShow">点击</button>
        <transition name="fade">
          transtion
          <p v-show="isShow">
            显示or隐藏
          </p>
        </transition>
      </section>
      <footer>
        页脚
      </footer>
    </div>

</template>

<script>
    export default {
        mixins:[window.mixin],
        name: "item",
        data(){
            return{
              title:this.$store.state.itemTitle,
              transitionName:"",
              isShow:true
            }
        },
      methods:{
          goBack(){
            this.$router.go(-1);
          },
        changeIsShow(){
            console.log("点击");
            this.isShow=!this.isShow;
            console.log(this.isShow);
        }
      }
    }
</script>

<style>
  .item{
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    display:-webkit-flex;
    flex-direction: column;
    background:red;
  }
  .item header{
    width:100%;
    height:.88rem;
    line-height:.88rem;
  }
  .item header span{
    position:absolute;
    z-index:20;
    top:0;
    left:0;
  }
  .item header em{
    left:0;
    display:inline-block;
    position: absolute;
    width:100%;
    text-align: center;
  }
  .item section{
    width:100%;
    -webkit-flex:1;
    text-align: center;
    padding-top:.88rem;
  }
  .item footer{
    height:.88rem;
    width: 100%;
    text-align: center;
    line-height:.88rem;
  }
  .icon-arrowright:before{
    transform: rotate(180deg);
    display: inline-block;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
