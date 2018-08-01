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
                        <div v-if="userIsLogged">
                            <a class="nav-link" @click="logout">Log out</a>
                        </div>
                        <div v-else>
                            <a class="nav-link"><router-link to="/login">Log in</router-link></a>
                        </div>
                    </li>
                    <li>
                        <a v-if="!userIsLogged" class="nav-link"><router-link to="/register">Sign Up</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { userService } from "../service/User"
import { eventBus } from "../main.js"

    export default{
        data () {
            return {
                userIsLogged : false
            }
        },
        beforeMount () {
            this.isUserLogged();
        },
        created () {
            eventBus.$on('user-logged', this.isUserLogged);
        },
        methods: {
            isUserLogged () {
                userService.isUserLogged()
                    .then( response => {
                        this.userIsLogged = true;   
                    })
                    .catch( error => {
                        this.userIsLogged = false;
                    });
            },
            logout () {
                this.userIsLogged = false;
                userService.logout()
                    .then( response => {
                        this.$router.push({ name: "login" }); 
                    });
            }
        }
    }
</script>
<style>
    .navbarMargin {
        margin-top: 50px;
    }
</style>
