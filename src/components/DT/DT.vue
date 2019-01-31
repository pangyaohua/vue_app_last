<template>
	<div class="DT">
		<!--动态以及兴趣部落-->
		<ul>
			<li class="">
				<span class="iconfont icon-iconfontdongtai"></span>
				<em>好友动态</em>
			</li>
			<li>
				<span class="iconfont icon-fujin"></span>
				<em>附近</em>
			</li>
			<li>
				<span class="iconfont icon-xingqubula"></span>
				<em>兴趣部落</em>
			</li>
		</ul>
		<!--列表页-->
		<ul>
			<li v-for="DTitem in DTList">
				
				<img v-bind:src="DTitem.imgUrl" alt="" />
				<p>
					{{DTitem.title}}
					<span class="iconfont icon-arrowright"></span>
				</p>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		mixins:[window.mixin],
		data(){
			return{
				pageName:"动态",
				DTList:[
					{"title":"游戏","imgUrl":require("../../assets/images/DT_03.png")},
					{"title":"日记","imgUrl":require("../../assets/images/DT_06.png")},
					{"title":"看点","imgUrl":require("../../assets/images/DT_09.png")},
					{"title":"京东购物","imgUrl":require("../../assets/images/DT_13.png")},
					{"title":"企鹅电竞","imgUrl":require("../../assets/images/DT_16.png")},
					{"title":"鹅漫U品","imgUrl":require("../../assets/images/DT_18.png")},
					{"title":"动漫","imgUrl":require("../../assets/images/DT_20.png")},
					{"title":"音乐","imgUrl":require("../../assets/images/DT_22.png")}
				
				]
			}
		}
	}
</script>

<style>

</style>