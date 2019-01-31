<template>
	<el-container id="app">
		<el-aside style="padding-top:15px;padding-left:15px;text-align: left;width:250px;">
			<el-row class="tac">
				<el-col :span="12" style="width:100%;">
					<h5>默认颜色</h5>
					<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen(index)" @close="handleClose">
						<el-menu-item index="1" @click="selectCode(1)">
							<i class="el-icon-menu"></i>
							<span slot="title">展示组件基础实例：</span>
						</el-menu-item>
						<el-menu-item index="2" @click="selectCode(2)">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3" disabled>
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4" @click="selectCode(4)">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>

		</el-aside>
		<el-main style="text-align: left;">
			<components-a></components-a>
			<componnets-b></componnets-b>
		</el-main>
	</el-container>
</template>

<script>
	import Vue from "vue"
	console.log(Vue);
	var componnetsA = {
		"template": "<p>局部组件展示--data之后，componnets:{'组件名称'：组件变量名}。var 组件变量名={'template':'想要添加的组件详情'}</p>"
	}
	Vue.component("componnets-b", {
		"template": "<p>全局组件注册：Vue.componnet('组件名称'，{'template':'需要的组件详情'})</p>"
	})
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			selectCode(index) {
				console.log(index)
			}

		},
		components: {
			"components-a": componnetsA
		}
	}
</script>

<style>
	.hidden {
		display: none;
	}
	
	p {
		padding: 10px 0;
		line-height: 25px;
	}
</style>