<template>
	<div id="main">
		<!--头部信息-->
		<header-nav></header-nav>

		<section>
			<!--搜索框-->
			<search-box></search-box>
			<router-view name="default">

			</router-view>
		</section>
		<!--底部导航-->
		<footer-nav></footer-nav>
	</div>
</template>

<script>
  //引入组件
	import headerNav from './components/header_nav/header'
	import footerNav from "./components/footer_nav/footer"
	import searchBox from "./components/searchBox/searchBox"

	import mixin from "./vuex/mixin.js"
	window.mixin = mixin
  //测试是否引入jquery成功
	$(function() {
		console.log("引入jquery成功");
	})
	export default {
		data() {
			return {
				"pageName": "消息"
			}
		},
		components: {
			headerNav,
			footerNav,
			searchBox
		},
		watch: {
			// 监听 $route 为店内页设置不同的过渡效果
			"$route" (to, from) {
				const toDepth = to.path.split("/")
				const fromPath = from.path.split("/")
				console.log(toDepth);
				//一级页面（消息，联系人、动态）
				if(toDepth.length == 2) {
					console.log(to.name);
					//一级页面发生变化之后改变调用方法title
					this.$store.commit("setPageName",to.name);
				}
				//二级页面（消息详情-点击消息进去的详情页面）
        if(toDepth.length==3){
				  this.$store.commit("setSecondItem",true);
        }else{
          this.$store.commit("setSecondItem",false);
        }
			}
		}
	}
</script>

<style>
	@import "assets/css/header_nav.css"
</style>
