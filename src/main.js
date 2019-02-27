// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from "vuex"
import App from './App'
import router from './router'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import $ from "jquery"

//--引入echarts
import echarts from "echarts"

//引入全局变量
import store from "./vuex/store"

//--引入bootstrap样式表
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

//引入flexible
import "./assets/css/base.css"
import "./assets/js/base.js"

//全局样式表
import indexSheet from "./assets/css/index.css"

//引入本地阿里图标
import "./assets/iconfont/iconfont.css"

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Vuex)
//父组件传参给子组件
Vue.component("button-click",{
  data:function(){
    return {
      count:0
    }
  },
  props:["title"],
  template:`<button v-on:click="count++">点击次数为: {{count}}次。父组件传的参数:{{title}}</button>`
})
//父组件通过v-on自定义事件监听子组件实例的任何事件
Vue.component("change-height",{
  data:function(){
    return {

    }
  },
  props:[],

  template:`<button v-on:click="$emit('change-height',10)">子组件向父组件传参：改变父元素的高度</button>`
})

Vue.component("to-item",{
  props:["title"],
  template:`<li><p>{{title}}</p><button v-on:click="$emit('remove')">remove</button></li>`
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
