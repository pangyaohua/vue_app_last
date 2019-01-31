<template>
	<div class="container">
		<header-nav></header-nav>
		<div class="container-fluid">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				"msg": "XX产品官网介绍",
				"activeIndex": '1',
				"activeIndex2": '1',
				"componnet1": false,
				"componnet2": false,
				"element-ui": false
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>