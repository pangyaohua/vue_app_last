<template>
	<div class="productList">
		
		<!--<p class="left" @click="loadMore"><button>加载更多</button></p>-->
		<p class="left">
			<el-button type="primary" icon="el-icon-edit" @click="add">新加</el-button>
		</p>
		<el-row :gutter="20">
			<el-col :span="6" v-for="(item,index) in dataList" :key="item.id">
				<div class="grid-content bg-purple">
					<p>{{index}}-{{item.name}}</p>
					<el-button @click="edit(index)">编辑</el-button>
				</div>
			</el-col>
		</el-row>
		
		<el-dialog title="请输入你要添加的内容" :visible.sync="dialogFormVisible">
			<el-form>
				<el-form-item label="内容" :label-width="formLabelWidth">
					<el-input v-model="title" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer" style="text-align: center;">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="editSure">确定</el-button>
			</div>
		</el-dialog>

	</div>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				"msg": "产品列表简介",
				"title": "",
				"isAdd":false,
				"editIndex": "",
				"dataList": [
					{ name: "vue实例",id:"a" },
					{ name: "模板语法",id:"b"  },
					{ name: "计算属性与和侦听器",id:"c"  },
					{ name: "class与style绑定",id:"d"  },
					{ name: "施蒂利克积分可适当",id:"e"  }
				],
				dialogFormVisible: false,
				formLabelWidth: '120px'
			}
		},
		methods: {
			add() {
				this.title="";
				this.isAdd = true;
				this.dialogFormVisible = true;
			},
			edit(val) {
				this.title="";
				this.isAdd=false;
				this.dialogFormVisible = true;
				console.log(val);
				this.editIndex=val;
			},
			editSure(){
				if(this.isAdd){
					this.dataList.push({ "name": this.title });
					this.dialogFormVisible = false;
					return false;
				}
				this.dataList[this.editIndex].name = this.title;
				this.dialogFormVisible = false;
			}
			//----axios-加载更多数据----测试
			/*loadMore() {
				axios.get('http://10.63.106.134:8082/sdzyV2/drafts/findPersonByFourChannel.do',{
					params:{
						"fourChannel":"Q86040004"
					}
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
			}*/
		}
	}
</script>

<style>
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	
	
	p.left {
		text-align: left;
		padding-left: 30px;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		padding: 25px 0;
		margin-bottom: 10px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	/*ul li {
		list-style: none;
		width: 23%;
		margin-right: 1%;
		height: 250px;
		display: inline-block;
		background: #2C3E50;
		color: #fff;
		margin-bottom: 10px;
		text-align: center;
	}
	
	ul li p {
		padding: 10px 0;
		text-align: center;
		width: 100%;
	}
	
	ul li span {
		width: 30%;
		text-align: center;
		display: inline-block;
		background: darkslateblue;
		background: #fff;
		padding: 8px 0;
		color: skyblue;
		cursor: pointer;
	}*/
	
	.shadeBox {
		width: 50%;
		height: 30%;
		border: 1px solid skyblue;
		border-radius: 10px;
		background: #fff;
		opacity: 1;
		position: fixed;
		top: 28%;
		left: 25%;
	}
	
	.shadeBox p {
		width: 50%;
		padding: 10px 0;
		margin: 0 auto;
	}
	
	.shadeBox p button {
		padding: 5px 0;
		width: 30%;
		bordeR: none;
		margin-top: 10px;
		background: skyblue;
		color: #fff;
	}
	
	.hidden {
		display: none;
	}
</style>