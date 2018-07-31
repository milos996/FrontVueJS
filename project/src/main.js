import Vue from "vue"
import App from "./App.vue"
import { router } from "./router.js"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(BootstrapVue);
Vue.config.productionTip = false
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    render: createElement => createElement(App),
    router
}).$mount("#app")
