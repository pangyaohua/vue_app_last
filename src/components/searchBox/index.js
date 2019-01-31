import search from "./searchBox.vue"
// 这里是重点
const searchBox = {
  install: function(Vue){
    Vue.component('search-box',search)
  }
}
export default searchBox
