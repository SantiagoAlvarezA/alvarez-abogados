import { createStore } from 'vuex'

export default createStore({
  state: {
    home:[],
    isMenu: false
  },
  mutations: {
    setHome(state, data){
      state.home = data
    },
    changeMenu(state){
      state.isMenu =  !state.isMenu
    },
    restartMenu(state){
      state.isMenu =  false
    }

  },
  actions: {
    async getData({commit}){
      try {
        let response = await fetch("home.json")
        let data = await response.json()
        commit("setHome", data)
      } catch (error) {
        console.log(error);
      }
    },
    changeMenu({commit}){
      commit("changeMenu")
    },
    restartMenu({commit}){
      commit("restartMenu")
    }
  },
  modules: {
  }
})
