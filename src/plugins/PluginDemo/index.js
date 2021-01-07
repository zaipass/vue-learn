import Demo from "./demo.vue";
export default {
  install(Vue, options = {}) {
    // 全局组件
    Vue.component(Demo.name, Demo);
    console.log(options)
  },
}