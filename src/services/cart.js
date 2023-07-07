import axios from "axios";

axios.defaults.headers.common["token"] = `Bearer ${localStorage.getItem(
  "userToken"
)}`;

axios.defaults.headers.common["Content-Type"] = `application/json`;
axios.defaults.headers.common["Accept"] = `*/*`;

export const createCartdata = (data) =>
  axios.post("http://localhost:5000/api/carts", data);

export const CartById = (id) =>
  axios.get(`http://localhost:5000/api/carts/find/${id}`);

  export const updateCartById = (id, data) =>
  axios.put(`http://localhost:5000/api/carts/${id}`, data);
