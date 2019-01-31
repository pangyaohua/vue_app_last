const mutation={
	//--动态设置页面名字--
	setPageName(state,name){
		state.pageName=name;
	},
	setSearchPlaceholder(state,str){
		state.placeholderText=str;
		if(str!='搜索'){
			state.isSearchSpan=true;
		}else{
			state.isSearchSpan=false;
		}

	},
  //进入二级页面时，把header部分和footer部分隐藏//设置二级页面的title
  setSecondItem(state,str){

	  state.isItem=str;
  }
}

export default mutation
