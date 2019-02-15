<template>
	<div id="main">

      <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
        <!--头部信息-->
        <header-nav></header-nav>

        <section>
          <!--搜索框-->
          <search-box></search-box>
          <transition>
            <router-view name="default">

            </router-view>
          </transition>

        </section>
        <!--底部导航-->
        <footer-nav></footer-nav>
      </div>

    <!--其他店内页集合 有过渡效果-->
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
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
				"pageName": "消息",
        "enterAnimate":"",
        "leaveAnimate":""
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
				const toDepth = to.path.split("/").length;
				const fromPath = from.path.split("/").length;
        //动画效果
        this.enterAnimate = toDepth > fromPath ? "animated fadeInRight" : "animated fadeInLeft"
        this.leaveAnimate = toDepth > fromPath ? "animated fadeOutLeft" : "animated fadeOutRight"


        // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
        if(toDepth === 4) {
          this.leaveAnimate = "animated fadeOutRight"
        }

			}
		}
	}
</script>

<style>
	@import "assets/css/header_nav.css";
  @import "assets/css/animate.css";
  .outter{
    transition: 0.5s;
  }
  .outter.hideLeft {
    opacity: 0.75;
    transform: translate3d(-100%, 0, 0);
    transition: 1.0s;
    overflow: hidden;
  }

</style>
