import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import PrismComponent from 'vue-prism-component'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-scss.min'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-json'
import 'prismjs/plugins/custom-class/prism-custom-class'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'

Vue.config.productionTip = false
Vue.component('prism', PrismComponent)
Vue.use(PortalVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
