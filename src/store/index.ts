import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER(state, payload) {
      console.log(2)
      console.log(payload)
      state.drawer = payload
    }
  },
  actions: {
    toggleDrawer({ dispatch, state }) {
      const newValue = !state.drawer
      // const newValue = true
      dispatch('setDrawer', newValue)
    },
    setDrawer({ commit }, payload) {
      commit('SET_DRAWER', payload)
    }
  },
  modules: {}
})
