import Vue from "vue"
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage}
]

 export const router = new VueRouter({
    routes
})
