import Vue from 'vue'
import Router from '../g-vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from "@/components/About";
Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/About",
      name: "About",
      component: About
    }
  ]
})
