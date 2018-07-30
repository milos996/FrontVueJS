<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mr-3 ml-3">
            <h3 class="display-5">ToDo list managment</h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div v-if="user !== null">
                    <button class="btn btn-primary ml-2"><router-link to="/logout"><span class="logText">Log out</span></router-link></button>
                </div>
                <div v-else>
                    <button class="btn btn-primary ml-2"><router-link to="/login"><span class="logText">Log in</span></router-link></button>
                </div>
                <button class="btn btn-primary ml-2"><router-link to="/register"><span class="logText">Sign Up</span></router-link></button>
            </div>
        </nav>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                user : null
            }
        }
    }
</script>
<style>
.logText {
   color : white;
}
</style>
