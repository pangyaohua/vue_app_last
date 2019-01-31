<template>
	<div class="group">
		<div>
			<ul v-for="(friend,index) in $store.state.groupList">
				<li @click="$store.state.groupList[index].className=!$store.state.groupList[index].className">
					<span class="iconfont icon-arrowright" v-bind:class="{spanActive:friend.className}"></span> {{friend.title}}
					<em>
						{{friend.number}}
					</em>
				</li>
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
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>