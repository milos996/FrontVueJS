<template>
    <div class="navbarMargin">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mr-3 ml-3">
            <a class="navbar-brand" href="#">Todo List Management</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <div v-if="user">
                            <a class="nav-link" v-on:click="logout()"><span class="logText">Log out</span></a>
                        </div>
                        <div v-else>
                            <a class="nav-link"><router-link to="/login"><span class="logText">Log in</span></router-link></a>
                        </div>
                    </li>
                    <li>
                        <a v-if="!user" class="nav-link"><router-link to="/register"><span class="logText">Sign Up</span></router-link></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { userService } from "../service/User"
    export default{
        data () {
            return {
                user : false
            }
        },
        created () {
            this.isUserLogged();
        },
        methods: {
            isUserLogged () {
                this.user = userService.isUserLogged();
            },
            logout () {
                this.user = false;
                userService.logout()
                    .then( response => {
                        this.$router.push({ name: "login" });
                    })
                    .catch( error => {

                    })
            }
        }
    }
</script>
<style>
    .navbarMargin {
        margin-top: 50px;
    }
</style>
