import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: createElement => createElement(App),
  router
}).$mount('#app')
