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
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
