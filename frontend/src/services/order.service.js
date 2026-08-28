import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/orders",
});

export const getOrders = (token) => {
  return API.get("/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};