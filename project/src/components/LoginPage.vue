<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-lg-offset-4">
              <form>
                  <div class="form-group">
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control" id="password" placeholder="Password">
                  </div>
                  <button v-on:click="login()" class="btn btn-primary">Log in</button>
              </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

    export default{
        methods : {
            login : function () {
                axios.post('http://myapp.test/api/auth/login', {
                    email : document.getElementById("email").value,
                    password : document.getElementById("password").value
                })
                .then( function (response) {
                    console.log(response);
                })
                .catch( function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
<style>

</style>
