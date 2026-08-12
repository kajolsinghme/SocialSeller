import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/dashboard",
});

export const getDashboardStats = (token) => {
    return API.get("/", {headers: {Authorization: `Bearer ${token}`}})
}