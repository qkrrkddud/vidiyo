import { createStore } from 'vuex'

const store = createStore({
  state() { //프로젝트 전체에서 공통으로 사용할 변수를 정의하는 곳
    return {
      searchShow : false,

    }
  },
	//변수는 반드시 mutations을 이용해서 변경해야 합니다.(동기처리:Sync)
  mutations: {
   searchView (state){
    state.searchShow = true
   },
   closeSearch (state){
    state.searchShow = false
   }
  }
})

export default store;