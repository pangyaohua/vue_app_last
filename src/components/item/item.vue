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
      <br>
      <transition name="fade">
        transtion
        <p v-show="isShow">
          显示or隐藏
        </p>
      </transition>

      <button-click title="这是button-click组件">

      </button-click>

      <br>

      <div class="father-content" :style="{height:domHeight+'px'}">
        <change-height v-on:change-height="domHeight+=$event">

        </change-height>
      </div>

      <p>侦听属性</p>

      <input type="text" v-model="question" style="width:100%;border:none;">

      <p style="width:100%;padding:10px 0;">{{answer}}</p>


      <div>
        <p v-bind:class="classObject">class与style绑定 v-bind:class 控制元素的类名是否显示</p>

        <button>点击使其元素发生变化</button>
        <br>
      </div>

      <p>条件渲染</p>
      <h1 v-if="isChange">
        if 显示
      </h1>
      <template v-if="isChange">
        <h1>被template包裹的元素1</h1>
        <h1>被template包裹的元素2</h1>
        <h1>被template包裹的元素3</h1>
      </template>
      <h1 v-else="">
        else 不显示
      </h1>
      <h1>v-selse 和 v-else-if 必须跟在v-if后面使用</h1>
      <button v-on:click="isChange=!isChange;">切换是否展示</button>

      <p>用key管理可复用的元素</p>
      <template v-if="isChange">
        <label>userName</label>
        <input type="text" placeholder="请输入userName" key="userName">
      </template>
      <template v-else="">
        <label>passworld</label>
        <input type="text" placeholder="请输入passworld" key="passworld">
      </template>
      <p>v-if与v-else的区别
        <br/>v-if是真正的条件渲染，是确切的对子组件进行渲染和删除
        <br/>v-if也是惰性的，若初始值为false的话，则不会进行渲染，只有在第一次值变为真时，才会进行渲染
        <br/>v-show不管初始化值是否为真都进行渲染，控制元素的显示和隐藏
        <br>v-if和v-show的区别为
        <br/>v-if有更高的切换开销v-show有更高的初始化开销-若状态变化次数多可使用v-show不然则使用v-if
      </p>
      <p>v-for与v-if的使用，v-for的优先级高于v-if</p>
      <p>v-for的使用，在vue2.2.0+的版本上v-for使用必须加：key属性。如下</p>
      <ul>
        <li is="to-item" v-for="(todo,index) in todoList" :title="todo.title" :key="todo.id" v-on:remove="todoList.splice(index,1)">

        </li>
      </ul>
    </section>
    <footer>
      页脚
    </footer>
  </div>

</template>

<script>



  export default {
    mixins: [window.mixin],
    name: "item",
    data() {
      return {
        title: this.$store.state.itemTitle,
        transitionName: "",
        isShow: true,
        domHeight:25,
        question:"请输入想要搜索的问题",
        answer:"init_value",
        isRed:false,
        isActive:false,
        isChange:true,
        todoList:[
          {
            title:"number one",
            id:0
          },
          {
            title:"number one",
            id:1
          },
          {
            title:"number one",
            id:2
          },
          {
            title:"number one",
            id:3
          }
        ]
      }
    },
    created:function(){

    },
    //计算属性
    computed:{
      classObject:function(){
          return {
            'red':2||3,
            'active':0&&4
          }
      }
    },
    //监听
    watch:{
        question:function(newQuestion,oldQuetion){
          this.answer="waitting";
          this.debounceGetAnswer();
        }
    },
    created:function(){
      //this.debounceGetAnswer=_.getAnswer();
    },
    //方法
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      changeIsShow() {
        this.isShow = !this.isShow;
        console.log(this.isShow);
      },
      getAnswer(){
        if(this.question.indexOf("?")===-1){
          this.answer='请输入正确的问题进行查询';
          return false;
        }
        /*var vm=this
        axios.get("https://yesno.wtf/api")
          .tnen(function(response){
            vm.answer=response.data.answer;
          })
          .catch(function(eroor){
            vm.answer="error:"+error;
          })*/
      }
    }
  }
</script>

<style>
  section{
    overflow-y: scroll;
  }
  p,h1{
    line-height: 25px;
  }
  .father-content{
    background:red;
    padding:30px;
  }
  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: -webkit-flex;
    flex-direction: column;
    background: red;
  }

  .item header {
    width: 100%;
    height: .88rem;
    line-height: .88rem;
  }

  .item header span {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
  }

  .item header em {
    left: 0;
    display: inline-block;
    position: absolute;
    width: 100%;
    text-align: center;
  }

  .item section {
    width: 100%;
    -webkit-flex: 1;
    text-align: center;
    padding-top: .88rem;
  }

  .item footer {
    height: .88rem;
    width: 100%;
    text-align: center;
    line-height: .88rem;
  }

  .icon-arrowright:before {
    transform: rotate(180deg);
    display: inline-block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  /*类名*/
  .red{
    color:red;
  }
  .active{
    background: yellow;
  }
</style>
