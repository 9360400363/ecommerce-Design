import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import {  register } from "../services/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({});
  const handleChange = ({ target: { value, name } }) => {
    setSignupData({ ...signupData, [name]: value });
  };
  const handleClick = () => {
    register(signupData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Login to your account!");
          navigate("/")
          
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("something went wrong!");
      });
  };

  return (
    <div>
      <div className=" flex justify-center my-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                name="username"
                label="Name"
                onChange={handleChange}
              />
              <Input
                size="lg"
                name="email"
                label="Email"
                onChange={handleChange}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Button className="mt-6" onClick={handleClick}>
              Register
            </Button>{" "}
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to={"/"}><a
                
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </a></Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
