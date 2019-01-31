<template>
	<div class="sheBei">
		<div>
			<div>
				<ul v-for="(friend,index) in friendList">
					
					<dl v-for="friendList in friend.friendArr" v-show="friend.className">
						<dt>
						<img v-bind:src="friendList.imgSrc" alt="" />
					</dt>
						<dd>
							<p>
								{{friendList.name}}

							</p>
							<p>
								{{friendList.content}}
							</p>
						</dd>
					</dl>
				</ul>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				friendList: [{
					title: "我的电脑",
					className: "true",
					number: "2",
					friendArr: [
						{ name: "我的电脑", content: "[离线],无需数据线手机轻松传数据到QQ", imgSrc: require("../../../assets/images/group_10_03.png") },
						{ name: "发现新设备", content: "搜索附近设备,用QQ随时随地传输文件", imgSrc: require("../../../assets/images/group_06.png") },
					]
				}]
			}
		}
	}
</script>

<style>

</style>