import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutation"
Vue.use(Vuex)

const state = {
	//--页面名称--
	pageName: "消息",
	//--搜索框的placeholder文字--
	placeholderText: "搜索",
	//--动态页面，设置放大镜位置--
	isSearchSpan: false,
  //是否隐藏heder和footer部分，若是到二级页面则需要隐藏
  isItem:false,
  //二级页面的title
  itemTitle:"",
	//消息列表的信息，重要重要--引入图片时需用require,?否则图片路径不对
	messageList: [{
			title: "小黄h",
			time: "下午03:34",
			content: "就抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/person_03.png"),
			className: "default"
		},
		{
			title: "大黄",
			time: "下午16:34",
			content: "就撒混口胜多负少抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/person_14.png"),
			className: "default"
		},
		{
			title: "佩琪",
			time: "下午14:34",
			content: "就撒混分巨兽封建时代富家大汉副书记东方红",
			imgSrc: require("../assets/images/person_12.png"),
			className: "default"
		},
		{
			title: "小黄人灯",
			time: "下午13:34",
			content: "就撒混分巨兽封建时室离开第三方接口胜多负少抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/person_14.png"),
			className: "default"
		},
		{
			title: "小兔子",
			time: "下午13:34",
			content: "就撒混分巨兽封建时代富家大室",
			imgSrc: require("../assets/images/friend_08.png"),
			className: ""
		},
		{
			title: "年轻不是资本",
			time: "下午17:34",
			content: "建时代富家大室离开第三方就",
			imgSrc: require("../assets/images/friend_10.png"),
			className: ""
		},
		{
			title: "地方",
			time: "上午03:34",
			content: "就撒混分巨兽封建时代富家大室离开第三方接口胜多负少抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/friend_12.png"),
			className: ""
		},
		{
			title: "only",
			time: "下午13:34",
			content: "就撒混分巨兽封建时室离开第三方接口胜多负少抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/friend_06.png"),
			className: ""
		},
		{
			title: "时刻记得",
			time: "下午13:34",
			content: "就撒混分巨兽封建时代富家大室",
			imgSrc: require("../assets/images/friend_03.png"),
			className: ""
		},
		{
			title: "年轻不是资本",
			time: "下午17:34",
			content: "建时代富家大室离开第三方就",
			imgSrc: require("../assets/images/person_15.png"),
			className: ""
		},
		{
			title: "地方",
			time: "上午03:34",
			content: "就撒混分巨兽封建时代富家大室离开第三方接口胜多负少抠脚大汉副书记东方红",
			imgSrc: require("../assets/images/gongZhongHao_12.png"),
			className: ""
		}
	],
	//--联系人页面-群聊信息--
	friendList: [{
			title: "所肩负的",
			className: "true",
			number: "98/135",
			friendArr: [
				{ name: "鹿晗仔", content: "[4G在线]，[表情]，[表情]", imgSrc: require("../assets/images/friend_03.png") },
				{ name: "文慧仔", content: "[4G在线]，听你想说的，做你想做的", imgSrc: require("../assets/images/friend_06.png") },
				{ name: "花花", content: "[4G在线]，对你说", imgSrc: require("../assets/images/friend_08.png") },
				{ name: "小佳仔", content: "[4G在线]，去东京和巴黎", imgSrc: require("../assets/images/friend_10.png") },
				{ name: "小鸡仔", content: "[4G在线]，听说，你在想我，好巧，我也在想他", imgSrc: require("../assets/images/friend_08.png") }
			]
		},
		{
			title: "所肩负的",
			className: "",
			number: "98/135",
			name: "文慧仔",
			content: "[4G在线]，听你想说的，做你想做的",
			imgSrc: require("../assets/images/friend_06.png"),
			friendArr: [
				{ name: "小佳仔", content: "[4G在线]，去东京和巴黎", imgSrc: require("../assets/images/friend_10.png") },
				{ name: "小鸡仔", content: "[4G在线]，听说，你在想我，好巧，我也在想他", imgSrc: require("../assets/images/friend_08.png") }

			]
		},
		{
			title: "所肩负的",
			className: "",
			number: "98/135",
			name: "花花",
			content: "[4G在线]，对你说",
			imgSrc: require("../assets/images/friend_08.png"),
			friendArr: [
				{ name: "小佳仔", content: "[4G在线]，去东京和巴黎", imgSrc: require("../assets/images/friend_10.png") },
				{ name: "小鸡仔", content: "[4G在线]，听说，你在想我，好巧，我也在想他", imgSrc: require("../assets/images/friend_08.png") }

			]
		},
		{
			title: "所肩负的",
			className: "",
			number: "98/135",
			name: "小佳仔",
			content: "[4G在线]，去东京和巴黎",
			imgSrc: require("../assets/images/friend_10.png"),
			friendArr: [
				{ name: "小鸡仔", content: "[4G在线]，听说，你在想我，好巧，我也在想他", imgSrc: require("../assets/images/friend_08.png") }

			]
		},
		{
			title: "所肩负的",
			className: "",
			number: "98/135",
			name: "小鸡仔",
			content: "[4G在线]，听说，你在想我，好巧，我也在想他",
			imgSrc: require("../assets/images/friend_12.png"),
			friendArr: [
				{ name: "花花", content: "[4G在线]，对你说", imgSrc: require("../assets/images/friend_08.png") }
			]
		}
	],
	//--联系人页面的群聊信息--
	groupList: [{
			title: "置顶群聊",
			className: "",
			number: "2",
			friendArr: [
				{ name: "鹿晗仔", content: "[4G在线]，[表情]，[表情]", imgSrc: require("../assets/images/friend_03.png") },
				{ name: "文慧仔", content: "[4G在线]，听你想说的，做你想做的", imgSrc: require("../assets/images/group_07.png") },
			]
		},
		{
			title: "我管理的群聊",
			className: "",
			number: "1",
			name: "文慧仔",
			content: "[4G在线]，听你想说的，做你想做的",
			imgSrc: require("../assets/images/friend_06.png"),
			friendArr: [
				{ name: "小佳仔", content: "[4G在线]，去东京和巴黎", imgSrc: require("../assets/images/friend_08.png") },
			]
		},
		{
			title: "我加入的群聊",
			className: "",
			number: "2",
			name: "花花",
			content: "[4G在线]，对你说",
			imgSrc: require("../assets/images/friend_08.png"),
			friendArr: [
				{ name: "小佳仔", content: "[4G在线]，去东京和巴黎", imgSrc: require("../assets/images/friend_12.png") },
				{ name: "小鸡仔", content: "[4G在线]，听说，你在想我，好巧，我也在想他", imgSrc: require("../assets/images/friend_08.png") }

			]
		}
	]

}

export default new Vuex.Store({
	state,
	mutations
})
