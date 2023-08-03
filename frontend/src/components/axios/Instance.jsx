import axios from "axios";


export const token = sessionStorage.getItem("myToken")
export const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {'Authorization': 'Bearer '+token},
});