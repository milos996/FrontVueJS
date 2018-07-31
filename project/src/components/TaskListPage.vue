<template>
    <div class="container">
        <h2>Tasks</h2>
        <div class="row">
            <div class="col-lg-8">
                <div class="list-group" v-for="task in tasks" :key="task.id">
                    <a href="#" class="list-group-item list-group-item-action">
                       {{ task.title }}
                       <font-awesome-icon v-if="task.is_done" icon="check"/>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import { taskService } from "../service/Tasks"

export default {
    data () {
        return {
            user: null,
            tasks: null,
            title: null,
            note: null,
            isPriority: null,
            isDone: null,
            currentTaskId: null,
            errorMessage: null
        }
    },
    created () {
        this.getTasks();
    },
    methods: {
        getTasks () {
            taskService.getAllTasks()
                .then ( response => {
                    this.tasks = response.data;
                })
                .catch ( error => {
                    this.errorMessage = error;
                    console.log(error);
                });
        },
        addNewTask () {
            taskService.addNewTask(this.title, this.note, this.isPriority, this.isDone)
                .then ( response => {
                    alert("Successfuly created task!")
                    console.log("Uspjesno unjet novi task");
                })
                .catch ( error => {
                    this.errorMessage = error;
                    console.log("Error: " + error);
                });
        },
        updateCurrentTask () {
            taskService.updateTask(this.title, this.note, this.isPriority, this.isDone, this.currentTaskId)
                .then ( response => {

                })
                .catch ( error => {

                });
        },
        setCurrentTask (id) {
            this.currentTaskId = id;
        },
        deleteTask () {
            taskService.deleteTask(this.currentTaskId)
                .then ( response => {

                })
                .catch ( error => {

                });
        }
    }
}
</script>
<style>
</style>
