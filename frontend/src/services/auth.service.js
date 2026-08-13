import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:4000/api/auth"
})

export const signup = (data) => {
    return API.post("/signup", data)
}


export const login = (data) => {
    return API.post("/login", data)
}

export const getMe = (token) => {
    return API.get("/me", {headers: {Authorization: `Bearer ${token}`}})
}