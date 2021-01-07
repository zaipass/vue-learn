import Demo from "./demo.vue";
import { dmixin } from "./demoMixin.js";
export default {
  install(Vue, options = {}) {
    // 全局组件
    Vue.component(Demo.name, Demo);
    console.log(options)
    // TODO: 自定义指令
    
    // Vue 全局属性
    Vue.woParams = 'this is a test params';
    // Vue 全局方法
    Vue.woFn = function() {
      console.log(Vue.woParams);
    };

    // Vue 对象挂载属性和方法
    Vue.prototype.$woParams = 'this is a object params';
    Vue.prototype.$getWO = function() {
      let obj = new Object(null);
      obj.params = this.$woParams;
      return obj;
    };

    // Vue 混入 mixin
    // 每调用一个组件就调用一次
    Vue.mixin(dmixin);
  },
}