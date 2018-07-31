<template>
    <div class="container">
        <h2>Tasks</h2>
        <div class="row">
            <div class="col-lg-8">
                <div class="list-group" v-for="task in tasks" :key="task.id">
                    <a v-on:click="setCurrentTask(task)"  class="list-group-item list-group-item-action">
                       {{ task.title }}
                       <font-awesome-icon v-if="task.is_done" icon="check"/>
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <h3>Add, edit, delete tasks</h3>
                <form>
                    <input v-model="title" type="text" class="form-control"  placeholder="Enter title">
                    <textarea v-model="note" class="form-control"  rows="5" placeholder="Enter notes"></textarea>
                    <div class="form-group form-check">
                        <input v-model="isPriority" type="checkbox" class="form-check-input">
                        <label class="form-check-label">Is priority</label>
                    </div>
                    <div class="form-group form-check">
                        <input v-model="isDone" type="checkbox" class="form-check-input">
                        <label class="form-check-label">Is done</label>
                    </div>
                    <button v-if="currentTaskId === null" v-on:click="addNewTask()" class="btn btn-primary">Add new task</button>
                    <button v-if="currentTaskId !== null" v-on:click="updateCurrentTask()" class="btn btn-primary">Save task</button>
                    <button v-if="currentTaskId !== null" v-on:click="deleteTask()" class="btn btn-primary">Delete task</button>
                    <button v-if="currentTaskId !== null" v-on:click="clearFields()" class="btn btn-warning">Clear current task</button>
                </form>
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
                    console.log(response);
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
        setCurrentTask (task) {
            this.currentTaskId = task.id;
            this.title = task.title;
            this.isDone = task.is_done;
            this.isPriority = task.is_priority;
            this.note = task.note;
        },
        deleteTask () {
            taskService.deleteTask(this.currentTaskId)
                .then ( response => {

                })
                .catch ( error => {

                });
        },
        clearFields () {
            this.currentTaskId = null;
        }
    }
}
</script>
<style>
</style>
