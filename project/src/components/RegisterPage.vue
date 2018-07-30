<template>
    <div class="registerDivMargins container">
        <h2>Register</h2>
        <h4 v-if="errorMessage !== null"> {{ errorMessage }} </h4>
        <div class="row">
            <div class="col-lg-6">
                <form class="registerDivMargins">
                    <div class="form-group">
                        <label>Email address:</label>
                        <input v-model="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Password:</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label>Confirm password:</label>
                        <input v-model="confirmPassword" type="password" class="form-control" placeholder="Confirm password">
                    </div>
                    <div class="form-group">
                        <label>Name:</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Enter your name">
                    </div>
                    <button v-on:click="register()" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"

export default{
    data () {
        return {
            email: null,
            password: null,
            confirmPassword: null,
            name: null,
            errorMessage: null
        }
    },
    methods: {
        register () {

            if (this.password !== this.confirmPassword) {
                alert("Passwords don't match");
                return;
            }
            axios.post("http://myapp.test/api/auth/register", {
                email : this.email,
                password: this.password,
                name : this.name
            })
            .then( function (response) {
                this.router.push("/tasks");
            })
            .catch( function (error) {
                this.messageError = "User with that email already exists";
            });
        }
    }
}
</script>
<style>
    .registerDivMargins {
        margin: 20px 0px 10px 20px;
    }
</style>
