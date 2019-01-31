import header from './header.vue'
// 这里是重点
const headerNav = {
  install: function(Vue){
    Vue.component('header-nav',header)
  }
}
 
//导出组件
export default headerNav
