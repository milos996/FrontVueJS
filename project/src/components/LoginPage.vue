<template>
    <div  class="container">
        <div class="row justify-content-lg-center">
            <div class="col-lg-4">
                <h2 class="text-center"> Log in </h2>
                <form>
                    <div class="form-group">
                        <input v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" class="form-control"  placeholder="Password">
                    </div>
                    <button v-on:click="login()" class="btn btn-primary">Log in</button>
                </form>
                <h4 v-if="errorMessage !== null"> {{ errorMessage }} </h4>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

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
                axios.post("http://myapp.test/api/auth/login", {
                    email: this.email,
                    password: this.password
                })
                .then( function (response) {
                    this.errorMsg = null;
                    this.user = true;
                    this.router.push("/tasks");
                })
                .catch( function (error) {
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
