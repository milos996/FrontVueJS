<template>
    <div  class="container">
        <div class="row justify-content-lg-center">
            <div class="col-lg-4">
                <h2 class="text-center"> Log in </h2>
                <h4 class="text-center" v-if="errorMessage !== null"> {{ errorMessage }} </h4>
                <form>
                    <div class="form-group">
                        <input v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" class="form-control"  placeholder="Password">
                    </div>
                    <button @click="login" class="btn btn-primary"> Log in </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { userService } from "../service/User"
import { eventBus } from "../main.js"

    export default{
        data () {
            return {
                errorMessage: null,
                password: null,
                email: null
            }
        },
        methods: {
            login () {
                userService.login(this.email, this.password)
                    .then( response => {
                        userService.setToken(response.data.access_token);
                        eventBus.$emit('user-logged', { text: "user logged" });
                        this.$router.push({ name: "tasks" });
                     })
                    .catch( error => {
                        this.errorMessage = "Invalid email or password!";
                    });
            }
        }
    }
</script>
<style>
    .container {
        margin-top: 100px;
    }
</style>
