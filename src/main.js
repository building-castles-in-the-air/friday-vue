import Vue from 'vue'

import ElementUI from 'element-ui';
import '@/styles/index.scss'
// import './styles/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
