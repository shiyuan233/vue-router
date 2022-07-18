var Vue;
class store {
  constructor(options) {
    console.log(options);
    this.mutations = options.mutations;
    this.actions = options.actions;
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    });
  }

  commit(type, payload) {
    this.mutations[type](this.state, payload);
  }
  dispatch(type, payload) {
    this.actions[type](this, payload);
  }
  get state() {
    return this._vm._data.$$state;
  }
}

function install(_vue) {
  Vue = _vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

export default {
  store,
  install
};
