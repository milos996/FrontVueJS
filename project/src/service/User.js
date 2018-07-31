import axios from "axios"

export default class User {
    
    constructor () {
        axios.defaults.baseURL = "http://localhost:8000/";
       // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    }

    login (email, password) {
        
        return axios.post("api/auth/login", {
                    email,
                    password
                });  
    }
    logout () {
        return axios.post("api/auth/logout");
    }
    register (email, password, name) {
        return axios.post("api/auth/register", {
            email,
            password,
            name
        });
    }
    isUserLogged () {
         axios.post("api/auth/me")
            .then( response => {
                console.log(response);
            })
            .catch( error => {

            });
    }
}

export const userService = new User();
