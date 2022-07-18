import Vue from "vue";

import Vuex from "../gvux/index";

Vue.use(Vuex);

const state = {
  counter: 0
};
const mutations = {
  SetCounter(state, payload) {
    state.counter += 1;
  }
};
const actions = {
  addCounter({state},payload){
    setTimeout(() => {
      state.counter+=1
    }, 1000);
  }
};

export default new Vuex.store({
  state,
  mutations,
  actions
});
