import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    images: [
      { src: 'Hyunsik_0.jpg', alt: '1', id: '0' },
      { src: 'Hyunsik_1.jpg', alt: '2', id: '1' },
      { src: 'Hyunsik_2.jpg', alt: '3', id: '2' }
    ]
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    }
  },
  actions: {
    toggleDrawer({ dispatch, state }) {
      const newValue = !state.drawer;
      // const newValue = true
      dispatch('setDrawer', newValue);
    },
    setDrawer({ commit }, payload) {
      commit('SET_DRAWER', payload);
    }
  },
  modules: {}
});
