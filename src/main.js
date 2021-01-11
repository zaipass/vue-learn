import Vue from 'vue'
import App from './App.vue'
// 使用自定义插件; 必须new Vue 前 use
import PluginDemo from './plugins/PluginDemo'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(PluginDemo);
Vue.use(VueResource);
Vue.woFn();

new Vue({
  render: h => h(App),
}).$mount('#app')
