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
      components: {
        "default":message
      }
		},{
    path: '/message',
    name: 'message',
    components: {
      "default":message
    }
  },{
    path: '/msg/item/:personName',
    name: 'item',
    components: {
      "subPage":item
    }
  },{
			path: '/DT',
			name: 'DT',
      components:{
			  "default":DT
      }
		},
		{
			path: "/person",
			name: "person",
			component: person,
			children: [
				{path: "/", component: person.friend ,name:"联系人"},
				{path:"/person/group",component:person.group},
				{path:"/person/friend",component:person.friend},
				{path:"/person/sheBei",component:person.sheBei},
				{path:"/person/tongXunLu",component:person.tongXunLu},
				{path:"/person/gongZhongHao",component:person.gongZhongHao}
			]
		}
	]
})
