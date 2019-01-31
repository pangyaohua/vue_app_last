<template>
	<header v-show="!$store.state.isItem">
		<!--header标题，复用性高-->
		<ul>
			<!--左边部分的头像-->
			<li>
				<img src="../../assets/images/header_03.png" alt="" />
			</li>
			<!--显示文字title-->
			<li style="text-align: center;">
				<span>{{$store.state.pageName}}</span>
			</li>
			<!--右边按钮-->
			<li style="text-align: right;">
				<!--<span class="add_span" v-show="$route.path=='/message'">+</span>
				<span v-show="$route.path=='/people'">添加</span>
				<span v-show="$route.path='/state'">更多</span>-->
				<span class="add_span iconfont icon-tianjiajiahaowubiankuang" v-show="$store.state.pageName=='消息'"></span>
				<span v-show="$store.state.pageName=='联系人'">添加</span>
				<span v-show="$store.state.pageName=='动态'">更多</span>
			</li>
		</ul>
	</header>
</template>

<script>
	export default {
		name: 'Detail',
		data() {
			return {

			}
		},
		methods: {
			changeIcon() {
				$(".navbar-nav").find("li").each(function() {
					var a = $(this).find("a:first")[0];
					if($(a).attr("href").indexOf(window.location.hash) > -1) {
						$(a).parent("li").addClass("active");
					} else {
						$(a).parent("li").removeClass("active");
					}
				})
			}
		},
		//--进行初始化数据，一般用于渲染页面之后请求数据
		mounted() {
			this.changeIcon()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
