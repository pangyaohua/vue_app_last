//引入vue、router
import Vue from 'vue'
import Router from 'vue-router'
//引入各个路由
import message from "@/components/message"
import person from "@/components/person"
import DT from "@/components/DT"
import item from "@/components/item"
//使用路由

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'message',
			component: message,
			children: [

				{ path: "/", component: message,name:"消息" }

			]
		},{
    path: '/message/item',
    name: 'item',
    component: item,
    children: [

      { path: "/", component: item,name:"详情" }

    ]
  },{
			path: '/DT',
			name: 'DT',
			component: DT,
			children: [

				{ path: "/", component: DT,name:"动态" }

			]
		},
		{
			path: "/person",
			name: "person",
			component: person,
			children: [
				{ path: "/", component: person.friend ,name:"联系人"},
				{path:"/person/group",component:person.group},
				{path:"/person/friend",component:person.friend},
				{path:"/person/sheBei",component:person.sheBei},
				{path:"/person/tongXunLu",component:person.tongXunLu},
				{path:"/person/gongZhongHao",component:person.gongZhongHao}
			]
		}
	]
})
