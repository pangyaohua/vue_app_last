<template>
	<div>
		<div class="row text-left">
			<div class="col-md-12 col-xs-12">

				{{message}}

			</div>
		</div>
		<div class="row text-left">
			<div class="col-md-12 col-xs-12">

				{{detail}}

			</div>
		</div>
		<div class="row text-left">
			<div class="col-md-12 col-xs-12">

				详情见于
				<a href="https://cn.vuejs.org/">https://cn.vuejs.org/</a>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				"message": "官方解读：vue.js",
				"detail": "	Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。"
			}
		}
	}
</script>

<style>
	
</style>