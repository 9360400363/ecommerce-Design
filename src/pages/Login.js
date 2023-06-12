import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className=" flex justify-center my-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>

            <Link to={"/home"}>
              <Button className="mt-6" fullWidth>
                Login
              </Button>
            </Link>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't You have an account ?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Signup
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
