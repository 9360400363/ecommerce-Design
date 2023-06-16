import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../services/auth";

import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../store/reducer/auth.slice";

const Login = () => {
  const { token, userDetails } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({});
  const handleChange = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
    // console.log("e", e);
  };
  const handleClick = () => {
    console.log(loginData);
    login(loginData)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          dispatch(setToken({ token: res.data.accesstoken }));
          const { username, email, isAdmin } = res.data.user;
          dispatch(
            setUserDetails({ userDetails: { username, email, isAdmin } })
          );
          toast.success("Login succesfully");
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
            Login
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                name="email"
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

            <Button className="mt-6" fullWidth onClick={handleClick}>
              Login
            </Button>

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
