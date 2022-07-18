var Vue;

export default class Router {
  constructor(options) {
    this.options = options;
    // 通过设定一个响应式的属性 来为下方的
    const initial = window.location.hash.split("#")[1] || "/";
    // vue.util中的最有用的一个工具
    Vue.util.defineReactive(this, "current", initial);
    // 监听urlhash变化
    window.addEventListener("hashchange", () => {
      this.current = window.location.hash.slice(1);
    });
  }
}

Router.install = function(_vue) {
  // 插件中必备一个install 方法 插件在被use时会调用这个install 方法
  Vue = _vue;
  Vue.mixin({
    // 全局混入的含义 在于延迟到创建完实例后再执行挂载$router
    beforeCreate() {
      // 每次组件调用
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });

  // 全局注册组件 router-view 和 router-link

  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    // template:"<a>123</a>"
    render(h) {
      // 可以使用jsx语法 但是如果遇到不支持jsx的就会寄
      // return <a href={"#" + this.to}>{this.$slots.default}</a>;
      // 使用虚拟dom的兼容性更高
      return h("a", { attrs: { href: "#" + this.to } }, this.$slots.default);
    }
  });

  Vue.component("router-view", {
    // template: "<div>router-view</div>"

    render(h) {
      // 取得组件 渲染
      const route = this.$router.options.routes.find(
        route => route.path === this.$router.current
      );
      let component = null
      if(route.component){
        component = route.component
      }
      return h(component);
    }
  });
};
