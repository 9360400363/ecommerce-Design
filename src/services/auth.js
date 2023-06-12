import axios from "axios";

export const Register = (data) => {
  axios.post("localhost:5000/api/auth/register", data);
};

export const Login = (data) => {
  axios.post("localhost:5000/api/auth/login", data);
};
