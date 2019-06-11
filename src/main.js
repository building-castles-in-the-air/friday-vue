import Vue from 'vue'

import ElementUI from 'element-ui';
import '@/styles/index.scss'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import App from './App.vue'
import store from './store'
import router from './router'
// 权限
import './permission'
// 图标
import './icon'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
