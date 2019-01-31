import footer from "./footer.vue"
// 这里是重点
const footerNav = {
  install: function(Vue){
    Vue.component('footer-nav',footer)
  }
}
 
//导出组件
export default footerNav

