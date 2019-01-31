<template>
	<div class="gongZhongHao">
		<div>
			<ul>
				<li v-for="(zghItem,index) in gzhList">
					<span>
						{{zghItem.group}}
					</span>
					<p v-for="groupItem in zghItem.groupItem">
						<img :src="groupItem.imgUrl" alt="" />
						<em>{{groupItem.title}}</em>
					</p>

				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gzhList: [{
						group: "B",
						groupItem: [{
							imgUrl: require("../../../assets/images/gongZhongHao_03.png"),
							title: "部落精选"
						}]
					},
					{
						group: "C",
						groupItem: [{
							imgUrl: require("../../../assets/images/gongZhongHao_07.png"),
							title: "彩票.竞猜"
						}]
					},
					{
						group: "H",
						groupItem: [{
							imgUrl: require("../../../assets/images/gongZhongHao_10.png"),
							title: "韩熙贞官方旗舰店"
						}, {
							imgUrl: require("../../../assets/images/gongZhongHao_12.png"),
							title: "好友动态"
						}]
					},{
						group: "K",
						groupItem: [{
							imgUrl: require("../../../assets/images/DT_09.png"),
							title: "看点.关注"
						}]
					}
					

				]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>