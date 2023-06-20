import axios from "axios";

export const productData = () => {
  return axios.get("http://localhost:5000/api/products/");
};

export const productDataId = (id) => {
  return axios.get(`http://localhost:5000/api/products/find/${id}`);
};
