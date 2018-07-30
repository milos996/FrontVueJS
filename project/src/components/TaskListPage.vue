<template>
    <div class="container">
        <h2>Tasks from : {{ user.name }}</h2>
        <div class="row">

        </div>
    </div>
</template>
<script>
import axios from "axios"

    export default {
        data () {
            return {
                user: null,
                tasks: null
            }
        },
        created () {
            this.fetchTasks();
        },
        methods: {
            fetchTasks () {
                axios.get("http://myapp.test/tasks")
                .then( function (response) {

                })
                .catch( function (error) {

                });
            }
        }
    }
</script>
<style>
</style>
