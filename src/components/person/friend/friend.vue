<template>
	<div class="friend">
		<div>
			<ul v-for="(friend,index) in $store.state.friendList">
				<li @click="$store.state.friendList[index].className=!$store.state.friendList[index].className">
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
				"headerNavTitle": "联系人"

			}
		}
	}
</script>

<style>

</style>