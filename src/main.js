import Vue from 'vue'
import App from './App.vue'
import PluginDemo from './plugins/PluginDemo'

Vue.config.productionTip = false
Vue.use(PluginDemo);

new Vue({
  render: h => h(App),
}).$mount('#app')
