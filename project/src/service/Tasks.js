import axios from "axios"

export default class Tasks {
    
    constructor () {
        axios.defaults.baseURL = "http://localhost:8000/" ;
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    }
    addNewTask (title, note, is_priority, is_done) {
        return axios.post("api/todos", {
            title,
            note,
            is_priority,
            is_done
        });
    }
    getAllTasks () {
        return axios.get("api/todos");
    }
    updateTask (title, note, is_priority, is_done, currentTaskId) {
        return axios.put("api/todos/" + currentTaskId, {
            title,
            note,
            is_priority,
            is_done
            });
    }
    deleteTask (taskToDeleteId) {
        return axios.delete("api/todos/" + taskToDeleteId);
    }


}

export const taskService = new Tasks();