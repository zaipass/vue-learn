import Vue from 'vue'
import App from './App.vue'
// 使用自定义插件; 必须new Vue 前 use
import PluginDemo from './plugins/PluginDemo'

Vue.config.productionTip = false
Vue.use(PluginDemo);
Vue.woFn();

new Vue({
  render: h => h(App),
}).$mount('#app')
