import Vue from 'vue'
import Elementui from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Elementui)
new Vue({
  render: h => h(App),
}).$mount('#app')
