import Vue from "vue"
import VueRouter from "vue-router"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import TaskListPage from "./components/TaskListPage"

Vue.use(VueRouter);

const routes = [
    { path: "/login", name: "login", component: LoginPage },
    { path: "/register", name:"register", component: RegisterPage},
    { path: "/tasks", name:"tasks", component: TaskListPage}
];

export const router = new VueRouter({
    routes
});
