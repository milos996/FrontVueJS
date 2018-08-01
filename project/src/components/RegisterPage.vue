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
                    <button @click="register" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { userService } from "../service/User"

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
                this.errorMessage = "Passwords don't match";
                return;
            }   
            userService.register(this.email, this.password, this.name)
                .then( response => {
                    this.$router.push({name: 'login'});
                })
                .catch( error => {
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
