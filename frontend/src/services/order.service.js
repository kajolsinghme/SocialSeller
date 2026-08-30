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


export const deleteOrder = (token, orderId) => {
  return API.delete(`/${orderId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};