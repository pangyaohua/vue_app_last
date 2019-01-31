<template>
	<div class="container" id="loginContainer">
		<div class="container-fluid">

			<div class="row" style="text-align: center;">
				<div class="col-md-4"></div>
				<div class="col-md-4" style="background:rgba(98, 132, 177,0.4)">
					<h2>huahua@</h2>
					<form class="form-signin">

						<p class="userNameBox">
							<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
							<label for="userName" class="sr-only">用户名:</label>
							<input style="background:#fff;" type="text" id="userName" class="form-control" placeholder="请输入用户名" v-model="userName" required autofocus>
						</p>

						<p class="pwdBox">
							<span class="glyphicon glyphicon-erase" aria-hidden="true"></span>
							<label for="inputPassword" class="sr-only">Password</label>
							<input style="background:#fff;" type="password" id="inputPassword" class="form-control" v-model="pwd" placeholder="请输入密码" required>
						</p>

						<div class="checkbox text-left" style="padding:10px 0">
							<label>
					            <input type="checkbox" value="remember-me"> Remember me
					        </label>
						</div>
						<button style="padding:5px 10px;background:#d22f4c;" class="btn btn-lg btn-primary btn-block" @click="login">登录</button>
						<p class="behaver">
							<span class="text-left" @click="dialogVisible=true">立即注册</span>
							<span class="text-right" @click="dialogVisible=true">忘记密码</span>
						</p>

						<p class="line">
							<em></em>
							<span>合作伙伴账号</span>
							<em></em>
						</p>
						<p class="partner" style="width:80%;margin-left:10%;">
							<a href="#">
								<span class="iconfont icon-qq active"></span>
							</a>
							<a href="#">
								<span class="iconfont icon-weixin"></span>
							</a>
							<a href="#">
								<span class="iconfont icon-weibo"></span>
							</a>
							<a href="#">
								<span class="iconfont icon-zhifubao"></span>
							</a>

						</p>

						<el-dialog class="dialog" title="" :visible.sync="dialogVisible" style="text-align: center;">
							<span>{{title}}</span>
							<span slot="footer" class="dialog-footer">
							    <el-button @click="dialogVisible = false">取 消</el-button>
							    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	  						</span>
						</el-dialog>

					</form>
				</div>
				<div class="col-md-4"></div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		"name": "login",
		data() {
			return {
				userName: "admin",
				pwd: "123456",
				msg: "showTime",
				dialogVisible: false,
				title: "暂不支持此功能"
			}
		},
		methods: {
			login() {
				if(this.userName == "" || this.pwd == "") {

				} else {
					//--路由跳转，
					this.$router.push('/detail')
					return;
				}
			}
		}
	}
</script>

<style>
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	form input {
		margin-bottom: 15px;
	}
	
	#loginContainer {
		width: 100%;
		height: 100%;
		background-image: url(../assets/images/bg.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	
	#loginContainer .container-fluid {
		vertical-align: middle;
		height: 100%;
		position: relative;
	}
	
	#loginContainer .row {
		margin-top: 3%;
		padding-bottom: 20px;
	}
	
	#loginContainer .row form {
		width: 80%;
		margin-left: 10%;
		text-align: center;
		color: #fff;
	}
	
	#loginContainer .col-md-4 {
		padding: 20px 15px;
		padding-top: 20px;
	}
	
	#loginContainer h2 {
		padding-bottom: 15px;
		color: #fff;
		font-size: 18px;
	}
	
	.userNameBox,
	.pwdBox {
		width: 100%;
		position: relative;
		height: 35px;
		line-height: 35px;
		padding: 0;
	}
	
	.userNameBox input,
	.pwdBox input {
		width: 100%;
		position: absolute;
		left: 0;
		padding-left: 35px;
		background-color: #fff!important;
		border: none;
		color: #000;
		height: 35px;
		line-height: 35px;
	}
	
	.userNameBox span,
	.pwdBox span {
		position: absolute;
		left: 10px;
		top: 0;
		z-index: 100;
		color: #d22f4c;
		height: 100%;
		line-height: 35px;
	}
	
	.userNameBox span:before,
	.pwdBox span:before {
		display: inline-block;
		size: 15px;
	}
	
	input:-webkit-autofill {
		background-color: rgb(255, 255, 255)!important;
		border: none;
	}
	
	.behaver,
	.partner {
		width: 100%;
		padding: 15px 0;
		display: -webkit-flex;
	}
	
	.active {
		/*color: rgb(210, 47, 76);*/
	}
	
	.behaver span,
	.partner a {
		-webkit-flex: 1;
		display: inline-block;
		cursor: pointer;
	}
	
	.partner {
		padding: 15px 0;
	}
	
	.partner a span {
		font-size: 30px;
		color: #fff;
	}
	
	.partner a:hover span {
		color: rgb(210, 47, 76);
	}
	
	.line {
		height: auto;
		display: -webkit-flex;
		line-height: 20px;
	}
	
	.line em {
		-webkit-flex: 1;
		height: 1px;
		background: #fff;
		margin-top: 10px;
	}
	
	.line span {
		display: inline-block;
		width: 45%;
		height: 20px;
		background: rgba(98, 132, 177, 0.4);
	}
	
	.el-dialog__footer {
		text-align: center;
	}
	/*利用媒体查询控制dialog宽度*/
	@media screen and (max-width: 675px) {
		.el-dialog {
			width: 55%;
		}
	}
	@media screen and (min-width: 675px) {
		.el-dialog {
			width: 30%;
		}
	}
</style>