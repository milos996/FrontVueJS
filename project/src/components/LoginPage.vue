<template>
    <div id="login" class="container">
        <div class="row justify-content-lg-center">
            <div class="col-lg-4">
                <h2 id="textLogin" class="text-center"> Log in </h2>
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button v-on:click="login()" class="btn btn-primary">Log in</button>
                </form>
                <h4 v-if="errorMsg !== null"> {{ errorMsg }} </h4>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

    export default{
        data () {
            return {
                errorMsg: null
            }
        },
        methods : {
            login : function () {
                axios.post('http://myapp.test/api/auth/login', {
                    email : document.getElementById("email").value,
                    password : document.getElementById("password").value
                })
                .then( function (response) {
                    this.errorMsg = null;
                    this.user = true;
                    this.router.push('/home');
                })
                .catch( function (error) {
                    this.errorMsg = "Invalid email or password!";
                });
            }
        }
    }
</script>
<style>
    #login {
        margin-top: 100px;
    }
</style>
