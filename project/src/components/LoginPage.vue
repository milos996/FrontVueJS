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
                    <button v-on:click="login()" class="btn btn-primary">Log in</button>
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
                errorMessage: null,
                password: null,
                email: null
            }
        },
        methods: {
            login () {
                userService.login(this.email, this.password)
                    .then( response => {
                        console.log("OVdjeeee")
                        this.$router.push({ name: "tasks" });
                        localStorage.setItem("token", response.data.access_token);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
                     })
                    .catch( error => {
                        this.errorMessage = "Invalid email or password!";
                    })
            }
        }
    }
</script>
<style>
    .container {
        margin-top: 100px;
    }
</style>
