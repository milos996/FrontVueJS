import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import TaskListPage from "./components/TaskListPage"

Vue.use(VueRouter);

const routes = [
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage},
    { path: "/tasks", component: TaskListPage}
]

 export const router = new VueRouter({
    routes
})
