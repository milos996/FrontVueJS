import Vue from "vue"
import App from "./App.vue"
import { router } from "./router.js"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.config.productionTip = false

export const eventBus =  new Vue();

new Vue({
    render: createElement => createElement(App),
    router
}).$mount("#app")
