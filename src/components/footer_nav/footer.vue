<template>
	<!--底部导航-->
	<footer v-show="!$store.state.isItem">
		<ul>
			<router-link to="/">
				<li :class="{active:$store.state.pageName=='消息'}" @click="$store.commit('setSearchPlaceholder','搜索')">
					<span class="iconfont icon-icon_msg"></span>
					<em>消息</em>
				</li>
			</router-link>
			<router-link to="/person">
				<li :class="{active:$store.state.pageName=='联系人'}"  @click="$store.commit('setSearchPlaceholder','搜索')">
					<span class="iconfont icon-lianxirenweixuanzhong"></span>
					<em>联系人</em>
				</li>
			</router-link>
			<router-link to="/DT" >
				<li :class="{active:$store.state.pageName=='动态'}" @click="$store.commit('setSearchPlaceholder','网络搜索：何炅瓢嘴')">
					<span class="iconfont icon-iconfontdongtai"></span>
					<em>动态</em>
				</li>
			</router-link>

		</ul>
	</footer>
</template>

<script>
	export default {


		data() {
			return {

			}
		},
		methods: {
			setNavStatu() {
				$("ul li").each(function() {
					console.log("a");
				})
			}
		},
		//--进行初始化数据，一般用于渲染页面之后请求数据
		mounted() {
			this.setNavStatu()
		},
		watch:{
			"$route" (to,from){

			}
		}
	}
</script>

<style>

</style>
