<template>
    <div class="container">
        <h2>Tasks</h2>
        <div class="row">
            <div class="col-lg-8">
                <div class="list-group" v-for="task in tasks" :key="task.id">
                    <a @click="setCurrentTask(task)"  class="list-group-item list-group-item-action">
                       {{ task.title }}
                    </a>
                </div>
            </div>
            <div class="col-lg-4">
                <h3>Add, edit, delete task</h3>
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
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button v-if="currentTaskId === null" @click="addNewTask" class="btn btn-primary">Add new task</button>
                        <button v-if="currentTaskId !== null" @click="updateCurrentTask" class="btn btn-success">Save task</button>
                        <button v-if="currentTaskId !== null" @click="deleteTask" class="btn btn-danger">Delete task</button>
                        <button v-if="currentTaskId !== null" @click="clearFields" class="btn btn-warning">Clear current task</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { taskService } from "../service/Tasks"
import { userService } from "../service/User"

export default {
    data () {
        return {
            user: null,
            tasks: [],
            title: null,
            note: null,
            isPriority: false,
            isDone: false,
            currentTaskId: null,
            errorMessage: null
        }
    },
    created () {
        this.getTasks();
        this.getUserId();
    },
    methods: {
        getTasks () {
            taskService.getAllTasks()
                .then( response => {
                    this.tasks = response.data;
                })
                .catch( error => {
                    this.errorMessage = error;
                });
        },
        getUserId () {
            userService.isUserLogged()
                .then( response => {
                    this.user = response.data.id;
                })
        },
        addNewTask () {
            taskService.addNewTask(this.title, this.note, this.isPriority, this.isDone)
                .then( response => {
                    this.tasks.push({
                        id: response.data,
                        title: this.title,
                        note: this.note,
                        is_priority: this.isPriority,
                        is_done: this.isDone,
                        user_id: this.user
                    });
                    this.clearFields();
                });
        },
        updateCurrentTask () {
            taskService.updateTask(this.title, this.note, this.isPriority, this.isDone, this.currentTaskId)
                .then( response => {
                    this.tasks.map ( currentTask => {
                        if (currentTask.id === this.currentTaskId) {
                            currentTask.title = this.title;
                            currentTask.note = this.note;
                            currentTask.is_priority = this.isPriority;
                            currentTask.is_done = this.isDone;
                        }
                        return currentTask;
                    });
                    this.clearFields();
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
                .then( response => {
                    this.tasks.filter( currentTask => currentTask.id !== this.currentTaskId);
                    this.clearFields();   
                });
        },
        clearFields () {
            this.currentTaskId = null;
            this.title = null;
            this.note = null;
            this.isPriority = false;
            this.isDone = false;
        }
    }
}
</script>
<style>
</style>
