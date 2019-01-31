<template>
	<div class="person">
		<!--跳转页面标签-->
		<ul>
			<li>
				新朋友
				<span class="iconfont icon-arrowright"></span>
			</li>
			<li>
				创建群聊
				<span class="iconfont icon-arrowright"></span>
			</li>
		</ul>
		<!--中间导航部分-->
		<ul class="middle_nav">
			<router-link v-for="(middle_item,index) in middle_nav" :to="middle_item.path" :key="index">
				<li :class="middle_item.className" @click="setMiddleNavActive(index)">
					{{middle_item.title}}
				</li>
			</router-link>
		</ul>
		<!--子路由部分-->
		<router-view>

		</router-view>
	</div>
</template>

<script>
	export default {
		name: "person",
		mixins: [window.mixin],
		data() {
			return {

				pageName: "联系人",
				middle_nav: [
					{ className: "middle_nav_active", title: "好友",path:"/person/friend" },
					{ className: "", title: "群聊" ,path:"/person/group"},
					{ className: "", title: "设备" ,path:"/person/sheBei"},
					{ className: "", title: "通讯录" ,path:"/person/tongXunLu"},
					{ className: "", title: "公众号",path:"/person/gongZhongHao" }

				]
			}
		},
		methods: {
			setMiddleNavActive(index) {
				//--设置中间导航的样式--
				console.log(index);
				for(var i = 0; i < this.middle_nav.length; i++) {
					this.middle_nav[i].className = "";
				}
				this.middle_nav[index].className = "middle_nav_active";
			}
		}
	}
</script>

<style>

</style>