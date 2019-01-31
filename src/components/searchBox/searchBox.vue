<template>
	<div class="searchBox" v-show="!$store.state.isItem">
		<input type="text" v-bind:placeholder="$store.state.placeholderText" />
		<!--动态页面。放大镜位置变化-->
		<span class="iconfont icon-fangdajing" v-bind:class="{searchSpan:$store.state.isSearchSpan}"></span>
	</div>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		methods: {

		},
		//--进行初始化数据，一般用于渲染页面之后请求数据
		mounted() {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
